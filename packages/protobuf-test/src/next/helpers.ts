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

import type { DescMessage } from "@bufbuild/protobuf";
import { UpstreamProtobuf } from "upstream-protobuf";
import { createDescFileSet, localName } from "@bufbuild/protobuf/next/reflect";
import * as proto3_ts from "../gen/ts/extra/proto3_pbv2.js";
import type { DescField } from "@bufbuild/protobuf";
import { fromBinary } from "@bufbuild/protobuf/next";
import type { FileDescriptorSet } from "@bufbuild/protobuf/next/wkt";
import { FileDescriptorSetDesc } from "@bufbuild/protobuf/next/wkt";
import assert from "node:assert";

let upstreamProtobuf: UpstreamProtobuf | undefined;

export async function compileFileDescriptorSet(
  files: Record<string, string>,
): Promise<FileDescriptorSet> {
  upstreamProtobuf = upstreamProtobuf ?? new UpstreamProtobuf();
  const bytes = await upstreamProtobuf.compileToDescriptorSet(files, {
    includeImports: true,
    retainOptions: true,
  });
  return fromBinary(FileDescriptorSetDesc, bytes);
}

export async function compileFile(proto: string) {
  upstreamProtobuf = upstreamProtobuf ?? new UpstreamProtobuf();
  const bytes = await upstreamProtobuf.compileToDescriptorSet(
    {
      "input.proto": proto,
    },
    {
      includeImports: true,
      retainOptions: true,
      includeSourceInfo: true,
    },
  );
  const fds = fromBinary(FileDescriptorSetDesc, bytes);
  const set = createDescFileSet(fds);
  const file = set.getFile("input.proto");
  assert(file);
  return file;
}

export async function compileEnum(proto: string) {
  const file = await compileFile(proto);
  const firstEnum = file.enums[0];
  assert(firstEnum);
  return firstEnum;
}

export async function compileMessage(proto: string) {
  const file = await compileFile(proto);
  const firstMessage = file.messages[0];
  assert(firstMessage);
  return firstMessage;
}

export async function compileField(proto: string) {
  const message = await compileMessage(proto);
  const firstField = message.fields[0];
  assert(firstField);
  return firstField;
}

export async function compileService(proto: string) {
  const message = await compileFile(proto);
  const firstService = message.services[0];
  assert(firstService);
  return firstService;
}

export function getFieldByLocalName(desc: DescMessage, name: string): DescField;
export function getFieldByLocalName(
  desc: DescMessage,
  name: string,
  fieldKind: "message",
): DescField & { fieldKind: "message" };
export function getFieldByLocalName(
  desc: DescMessage,
  name: string,
  fieldKind: "list",
): DescField & { fieldKind: "list" };
export function getFieldByLocalName(
  desc: DescMessage,
  name: string,
  fieldKind: "map",
): DescField & { fieldKind: "map" };
export function getFieldByLocalName(
  desc: DescMessage,
  name: string,
  fieldKind?: string,
): DescField {
  const field = proto3_ts.Proto3MessageDesc.fields.find(
    (f) => localName(f) === name,
  );
  if (!field) {
    throw new Error(`getFieldByLocalName: ${name} not found`);
  }
  if (fieldKind !== undefined) {
    if (field.fieldKind != fieldKind) {
      throw new Error(
        `getFieldByLocalName: ${name} is not a ${fieldKind} field`,
      );
    }
  }
  return field;
}
