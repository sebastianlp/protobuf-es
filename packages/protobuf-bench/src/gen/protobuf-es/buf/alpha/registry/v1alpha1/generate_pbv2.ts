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

// @generated by protoc-gen-es v1.8.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/registry/v1alpha1/generate.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage, GenDescService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { CodeGeneratorResponse } from "@bufbuild/protobuf/wkt";
import { fileDesc_google_protobuf_compiler_plugin } from "@bufbuild/protobuf/wkt";
import type { Image } from "../../image/v1/image_pbv2.js";
import { fileDesc_buf_alpha_image_v1_image } from "../../image/v1/image_pbv2.js";
import type { Message } from "@bufbuild/protobuf";

export const fileDesc_buf_alpha_registry_v1alpha1_generate: GenDescFile = /*@__PURE__*/
  fileDesc("CipidWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvZ2VuZXJhdGUucHJvdG8SG2J1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMSIlCgRGaWxlEgwKBHBhdGgYASABKAkSDwoHY29udGVudBgCIAEoDCIvCg5SdW50aW1lTGlicmFyeRIMCgRuYW1lGAEgASgJEg8KB3ZlcnNpb24YAiABKAkiUwoPUGx1Z2luUmVmZXJlbmNlEg0KBW93bmVyGAEgASgJEgwKBG5hbWUYAiABKAkSDwoHdmVyc2lvbhgDIAEoCRISCgpwYXJhbWV0ZXJzGAQgAygJIrwBChZHZW5lcmF0ZVBsdWdpbnNSZXF1ZXN0EigKBWltYWdlGAEgASgLMhkuYnVmLmFscGhhLmltYWdlLnYxLkltYWdlEj0KB3BsdWdpbnMYAiADKAsyLC5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuUGx1Z2luUmVmZXJlbmNlEhcKD2luY2x1ZGVfaW1wb3J0cxgDIAEoCBIgChhpbmNsdWRlX3dlbGxfa25vd25fdHlwZXMYBCABKAgipQEKF0dlbmVyYXRlUGx1Z2luc1Jlc3BvbnNlEkIKCXJlc3BvbnNlcxgBIAMoCzIvLmdvb2dsZS5wcm90b2J1Zi5jb21waWxlci5Db2RlR2VuZXJhdG9yUmVzcG9uc2USRgoRcnVudGltZV9saWJyYXJpZXMYAiADKAsyKy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuUnVudGltZUxpYnJhcnkixwEKF0dlbmVyYXRlVGVtcGxhdGVSZXF1ZXN0EigKBWltYWdlGAEgASgLMhkuYnVmLmFscGhhLmltYWdlLnYxLkltYWdlEhYKDnRlbXBsYXRlX293bmVyGAIgASgJEhUKDXRlbXBsYXRlX25hbWUYAyABKAkSGAoQdGVtcGxhdGVfdmVyc2lvbhgEIAEoCRIXCg9pbmNsdWRlX2ltcG9ydHMYBSABKAgSIAoYaW5jbHVkZV93ZWxsX2tub3duX3R5cGVzGAYgASgIIpQBChhHZW5lcmF0ZVRlbXBsYXRlUmVzcG9uc2USMAoFZmlsZXMYASADKAsyIS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuRmlsZRJGChFydW50aW1lX2xpYnJhcmllcxgCIAMoCzIrLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5SdW50aW1lTGlicmFyeTKQAgoPR2VuZXJhdGVTZXJ2aWNlEnwKD0dlbmVyYXRlUGx1Z2lucxIzLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5HZW5lcmF0ZVBsdWdpbnNSZXF1ZXN0GjQuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkdlbmVyYXRlUGx1Z2luc1Jlc3BvbnNlEn8KEEdlbmVyYXRlVGVtcGxhdGUSNC5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuR2VuZXJhdGVUZW1wbGF0ZVJlcXVlc3QaNS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuR2VuZXJhdGVUZW1wbGF0ZVJlc3BvbnNlYgZwcm90bzM", [fileDesc_google_protobuf_compiler_plugin, fileDesc_buf_alpha_image_v1_image]);

/**
 * File defines a file with a path and some content.
 *
 * @generated from message buf.alpha.registry.v1alpha1.File
 */
export type File = Message<"buf.alpha.registry.v1alpha1.File"> & {
  /**
   * path is the relative path of the file.
   * Path can only use '/' as the separator character, and includes no ".." components.
   *
   * @generated from field: string path = 1;
   */
  path: string;

  /**
   * content is the content of the file.
   *
   * @generated from field: bytes content = 2;
   */
  content: Uint8Array;
};

// Describes the message buf.alpha.registry.v1alpha1.File.
// Use `create(FileDesc)` to create a new File.
export const FileDesc: GenDescMessage<File> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_generate, 0);

/**
 * RuntimeLibrary describes a pinned runtime library dependency of the generated code.
 *
 * @generated from message buf.alpha.registry.v1alpha1.RuntimeLibrary
 */
export type RuntimeLibrary = Message<"buf.alpha.registry.v1alpha1.RuntimeLibrary"> & {
  /**
   * The name of the runtime library dependency. The format should match the
   * format used for dependencies in the dependency management tooling of the
   * associated language ecosystem. This is set by the user using Dockerfile Labels.
   * For example, for the plugin "protoc-gen-go", this might be "google.golang.org/protobuf".
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The version of the runtime library dependency associated with the generated
   * code. The format should match the format used for dependency versions in the
   * dependency management tooling of the associated language ecosystem.
   * This is set by the user using Dockerfile Labels.
   * For example, for the plugin "protoc-gen-go", this might be "v1.26.0".
   *
   * @generated from field: string version = 2;
   */
  version: string;
};

// Describes the message buf.alpha.registry.v1alpha1.RuntimeLibrary.
// Use `create(RuntimeLibraryDesc)` to create a new RuntimeLibrary.
export const RuntimeLibraryDesc: GenDescMessage<RuntimeLibrary> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_generate, 1);

/**
 * @generated from message buf.alpha.registry.v1alpha1.PluginReference
 */
export type PluginReference = Message<"buf.alpha.registry.v1alpha1.PluginReference"> & {
  /**
   * The owner of the plugin which identifies the
   * plugins to use with this generation.
   *
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * The name of the plugin which identifies the
   * plugins to use with this generation.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * The plugin version to use with this generation.
   *
   * @generated from field: string version = 3;
   */
  version: string;

  /**
   * The parameters to pass to the plugin. These will
   * be merged into a single, comma-separated string.
   *
   * @generated from field: repeated string parameters = 4;
   */
  parameters: string[];
};

// Describes the message buf.alpha.registry.v1alpha1.PluginReference.
// Use `create(PluginReferenceDesc)` to create a new PluginReference.
export const PluginReferenceDesc: GenDescMessage<PluginReference> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_generate, 2);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GeneratePluginsRequest
 */
export type GeneratePluginsRequest = Message<"buf.alpha.registry.v1alpha1.GeneratePluginsRequest"> & {
  /**
   * The image to run plugins against to generate the desired file outputs.
   *
   * All image files that are not imports and not well-known types will be generated.
   * If you want to filter what files are generated, modify the image.
   * If you want to include imports, set include_imports.
   *
   * @generated from field: buf.alpha.image.v1.Image image = 1;
   */
  image?: Image;

  /**
   * The array of plugins to use.
   *
   * @generated from field: repeated buf.alpha.registry.v1alpha1.PluginReference plugins = 2;
   */
  plugins: PluginReference[];

  /**
   * Include imports from the Image in generation.
   *
   * @generated from field: bool include_imports = 3;
   */
  includeImports: boolean;

  /**
   * Include Well-Known Types from the Image in generation.
   *
   * include_imports must be set if include_well_known_types is set.
   *
   * @generated from field: bool include_well_known_types = 4;
   */
  includeWellKnownTypes: boolean;
};

// Describes the message buf.alpha.registry.v1alpha1.GeneratePluginsRequest.
// Use `create(GeneratePluginsRequestDesc)` to create a new GeneratePluginsRequest.
export const GeneratePluginsRequestDesc: GenDescMessage<GeneratePluginsRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_generate, 3);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GeneratePluginsResponse
 */
export type GeneratePluginsResponse = Message<"buf.alpha.registry.v1alpha1.GeneratePluginsResponse"> & {
  /**
   * Contains all the responses from the generated plugins. The order
   * is defined by the order of the plugins in the request.
   *
   * @generated from field: repeated google.protobuf.compiler.CodeGeneratorResponse responses = 1;
   */
  responses: CodeGeneratorResponse[];

  /**
   * An optional array defining runtime libraries that the generated code
   * requires to run, as specified by the plugin author. This may contain
   * duplicate entries as the generation can be the result of multiple plugins,
   * each of which declares its own runtime library dependencies. The libraries
   * returned are lexicographically ordered by their name, but not deduplicated.
   * How to handle duplicate libraries is left to the user.
   *
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RuntimeLibrary runtime_libraries = 2;
   */
  runtimeLibraries: RuntimeLibrary[];
};

// Describes the message buf.alpha.registry.v1alpha1.GeneratePluginsResponse.
// Use `create(GeneratePluginsResponseDesc)` to create a new GeneratePluginsResponse.
export const GeneratePluginsResponseDesc: GenDescMessage<GeneratePluginsResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_generate, 4);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GenerateTemplateRequest
 */
export type GenerateTemplateRequest = Message<"buf.alpha.registry.v1alpha1.GenerateTemplateRequest"> & {
  /**
   * The image to run plugins against to generate the desired file outputs.
   *
   * All image files that are not imports and not well-known types will be generated.
   * If you want to filter what files are generated, modify the image.
   * If you want to include imports, set include_imports.
   *
   * @generated from field: buf.alpha.image.v1.Image image = 1;
   */
  image?: Image;

  /**
   * The owner of the template which identifies the
   * plugins to use with this generation.
   *
   * @generated from field: string template_owner = 2;
   */
  templateOwner: string;

  /**
   * The name of the template which identifies the
   * plugins to use with this generation.
   *
   * @generated from field: string template_name = 3;
   */
  templateName: string;

  /**
   * The template version to use to determine the
   * plugin versions in the template.
   *
   * @generated from field: string template_version = 4;
   */
  templateVersion: string;

  /**
   * Include imports from the Image in generation.
   *
   * @generated from field: bool include_imports = 5;
   */
  includeImports: boolean;

  /**
   * Include Well-Known Types from the Image in generation.
   *
   * include_imports must be set if include_well_known_types is set.
   *
   * @generated from field: bool include_well_known_types = 6;
   */
  includeWellKnownTypes: boolean;
};

// Describes the message buf.alpha.registry.v1alpha1.GenerateTemplateRequest.
// Use `create(GenerateTemplateRequestDesc)` to create a new GenerateTemplateRequest.
export const GenerateTemplateRequestDesc: GenDescMessage<GenerateTemplateRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_generate, 5);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GenerateTemplateResponse
 */
export type GenerateTemplateResponse = Message<"buf.alpha.registry.v1alpha1.GenerateTemplateResponse"> & {
  /**
   * files contains all the files output by the generation,
   * in lexicographical order.
   *
   * @generated from field: repeated buf.alpha.registry.v1alpha1.File files = 1;
   */
  files: File[];

  /**
   * An optional array defining runtime libraries that the generated code
   * requires to run. This may contain duplicate entries as the generation
   * can be the result of multiple plugins, each of which declares its own
   * runtime library dependencies.
   *
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RuntimeLibrary runtime_libraries = 2;
   */
  runtimeLibraries: RuntimeLibrary[];
};

// Describes the message buf.alpha.registry.v1alpha1.GenerateTemplateResponse.
// Use `create(GenerateTemplateResponseDesc)` to create a new GenerateTemplateResponse.
export const GenerateTemplateResponseDesc: GenDescMessage<GenerateTemplateResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_generate, 6);

/**
 * GenerateService manages remote generation requests.
 *
 * @generated from service buf.alpha.registry.v1alpha1.GenerateService
 */
export const GenerateService: GenDescService<{
  /**
   * GeneratePlugins generates an array of files given the provided
   * module reference and plugin version and option tuples. No attempt
   * is made at merging insertion points.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.GenerateService.GeneratePlugins
   */
  generatePlugins: {
    kind: "unary";
    I: GeneratePluginsRequest;
    O: GeneratePluginsResponse;
  },
  /**
   * GenerateTemplate generates an array of files given the provided
   * module reference and template version.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.GenerateService.GenerateTemplate
   */
  generateTemplate: {
    kind: "unary";
    I: GenerateTemplateRequest;
    O: GenerateTemplateResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_buf_alpha_registry_v1alpha1_generate, 0);

