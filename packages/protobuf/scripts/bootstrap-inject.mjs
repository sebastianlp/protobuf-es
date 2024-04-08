// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { readFileSync, writeFileSync } from "node:fs";
import assert from "node:assert";
import { stdout, stderr, argv } from "node:process";
import { UpstreamProtobuf } from "upstream-protobuf";
import { localName, reflect } from "@bufbuild/protobuf/next/reflect";
import { fromBinary } from "@bufbuild/protobuf/next";
import {
  Edition,
  FeatureSetDefaultsDesc,
  FeatureSetDesc,
} from "@bufbuild/protobuf/next/wkt";

void main(argv.slice(2)).catch((e) => {
  process.exitCode = 1;
  if (e instanceof Error) {
    stderr.write(`${e.message}\n\n${e.stack}\n`);
  } else {
    stderr.write(`${String(e)}\n`);
  }
});

/**
 * @param {Array<string>} args
 * @return {Promise<void>}
 */
async function main(args) {
  if (args.length !== 1) {
    throw new Error(`USAGE: bootstrap-inject <file-to-inject-into>`);
  }
  const filePath = args[0];
  stdout.write(`Injecting into ${filePath}... `);

  const lines = [];
  const print = (str) => lines.push(str ?? "");

  const minEdition = undefined;
  const maxEdition = undefined;
  await featureDefaults(minEdition, maxEdition, print);

  const updated = inject(
    filePath,
    "/*bootstrap-inject-start*/\n",
    "/*bootstrap-inject-end*/",
    lines.join("\n"),
  );
  if (updated) {
    stdout.write(`updated\n`);
  } else {
    stdout.write(`no changes\n`);
  }
}

/**
 * @typedef {
 *   (str?: string) => void
 * } PrintFn
 */

/**
 * @param {string} [minimumEdition]
 * @param {string} [maximumEdition]
 * @param {PrintFn} print
 * @param {string} [upstreamVersion]
 */
async function featureDefaults(
  minimumEdition,
  maximumEdition,
  print,
  upstreamVersion,
) {
  const upstream = new UpstreamProtobuf(undefined, upstreamVersion);
  const featureSetDefaults = await compileDefaults(
    upstream,
    minimumEdition,
    maximumEdition,
  );
  print(
    `// generated from protoc experimental_edition_defaults_out v${upstream.version()}`,
  );
  print(`const featureDefaults = {`);
  for (const def of featureSetDefaults.defaults) {
    print(`  // ${Edition[def.edition]}`);
    print(`  ${def.edition}: {`);

    const r = reflect(FeatureSetDesc, def.features);
    for (const f of r.fields) {
      if (f.fieldKind !== "enum") {
        throw new Error();
      }
      assert(r.isSet(f));
      const val = r.get(f);
      assert(val !== undefined);
      const valDesc = f.enum.values.find((e) => e.number === val);
      assert(valDesc !== undefined);

      print(`    ${localName(f)}: ${val}, // ${valDesc.name},`);
    }

    print(`  },`);
    def.features;
  }
  print(`} as const;`);
  print();
}

/**
 * @param {UpstreamProtobuf} upstream
 * @param {string} [minimumEdition]
 * @param {string} [maximumEdition]
 * @return {Promise<import("@bufbuild/protobuf/next/wkt").FeatureSetDefaults>}
 */
async function compileDefaults(upstream, minimumEdition, maximumEdition) {
  const featureSetDefaultsBytes = await upstream.getFeatureSetDefaults(
    minimumEdition,
    maximumEdition,
  );
  const featureSetDefaults = fromBinary(
    FeatureSetDefaultsDesc,
    featureSetDefaultsBytes,
  );
  if (
    featureSetDefaults.minimumEdition === 0 ||
    featureSetDefaults.maximumEdition === 0 ||
    featureSetDefaults.maximumEdition < featureSetDefaults.minimumEdition ||
    featureSetDefaults.defaults.some((d) => d.edition === 0) ||
    featureSetDefaults.defaults.some(
      (d) =>
        !d.features ||
        d.features.fieldPresence === 0 ||
        d.features.enumType === 0 ||
        d.features.repeatedFieldEncoding === 0 ||
        d.features.utf8Validation === 0 ||
        d.features.messageEncoding === 0 ||
        d.features.jsonFormat === 0,
    )
  ) {
    throw new Error(`invalid ${FeatureSetDefaultsDesc.typeName}`);
  }
  return featureSetDefaults;
}

/**
 * @param {string} filePath
 * @param {string} tokenStart
 * @param {string} tokenEnd
 * @param {string} contentToInject
 * @return {boolean}
 */
function inject(filePath, tokenStart, tokenEnd, contentToInject) {
  const content = readFileSync(filePath, "utf-8");
  const indexStart = content.indexOf(tokenStart);
  const indexEnd = content.indexOf(tokenEnd);
  if (indexStart < 0) {
    throw new Error(`missing start token ${tokenStart}`);
  }
  if (indexEnd < 0) {
    throw new Error(`missing end token ${tokenEnd}`);
  }
  if (indexEnd < indexStart) {
    throw new Error(`invalid tokens`);
  }
  const head = content.substring(0, indexStart + tokenStart.length);
  const foot = content.substring(indexEnd);
  const newContent = head + contentToInject + foot;
  if (newContent === content) {
    return false;
  }
  writeFileSync(filePath, newContent);
  return true;
}
