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

// Author: kenton@google.com (Kenton Varda)
//
// protoc (aka the Protocol Compiler) can be extended via plugins.  A plugin is
// just a program that reads a CodeGeneratorRequest from stdin and writes a
// CodeGeneratorResponse to stdout.
//
// Plugins written using C++ can use google/protobuf/compiler/plugin.h instead
// of dealing with the raw protocol defined here.
//
// A plugin executable needs only to be placed somewhere in the path.  The
// plugin should be named "protoc-gen-$NAME", and will then be used when the
// flag "--${NAME}_out" is passed to protoc.

// @generated by protoc-gen-es v1.8.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/compiler/plugin.proto (package google.protobuf.compiler, syntax proto2)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { fileDesc_google_protobuf_descriptor } from "../descriptor_pbv2.js";

export const fileDesc_google_protobuf_compiler_plugin = /*@__PURE__*/
  fileDesc("CiVnb29nbGUvcHJvdG9idWYvY29tcGlsZXIvcGx1Z2luLnByb3RvEhhnb29nbGUucHJvdG9idWYuY29tcGlsZXIiRgoHVmVyc2lvbhINCgVtYWpvchgBIAEoBRINCgVtaW5vchgCIAEoBRINCgVwYXRjaBgDIAEoBRIOCgZzdWZmaXgYBCABKAkigQIKFENvZGVHZW5lcmF0b3JSZXF1ZXN0EhgKEGZpbGVfdG9fZ2VuZXJhdGUYASADKAkSEQoJcGFyYW1ldGVyGAIgASgJEjgKCnByb3RvX2ZpbGUYDyADKAsyJC5nb29nbGUucHJvdG9idWYuRmlsZURlc2NyaXB0b3JQcm90bxJFChdzb3VyY2VfZmlsZV9kZXNjcmlwdG9ycxgRIAMoCzIkLmdvb2dsZS5wcm90b2J1Zi5GaWxlRGVzY3JpcHRvclByb3RvEjsKEGNvbXBpbGVyX3ZlcnNpb24YAyABKAsyIS5nb29nbGUucHJvdG9idWYuY29tcGlsZXIuVmVyc2lvbiKSAwoVQ29kZUdlbmVyYXRvclJlc3BvbnNlEg0KBWVycm9yGAEgASgJEhoKEnN1cHBvcnRlZF9mZWF0dXJlcxgCIAEoBBIXCg9taW5pbXVtX2VkaXRpb24YAyABKAUSFwoPbWF4aW11bV9lZGl0aW9uGAQgASgFEkIKBGZpbGUYDyADKAsyNC5nb29nbGUucHJvdG9idWYuY29tcGlsZXIuQ29kZUdlbmVyYXRvclJlc3BvbnNlLkZpbGUafwoERmlsZRIMCgRuYW1lGAEgASgJEhcKD2luc2VydGlvbl9wb2ludBgCIAEoCRIPCgdjb250ZW50GA8gASgJEj8KE2dlbmVyYXRlZF9jb2RlX2luZm8YECABKAsyIi5nb29nbGUucHJvdG9idWYuR2VuZXJhdGVkQ29kZUluZm8iVwoHRmVhdHVyZRIQCgxGRUFUVVJFX05PTkUQABIbChdGRUFUVVJFX1BST1RPM19PUFRJT05BTBABEh0KGUZFQVRVUkVfU1VQUE9SVFNfRURJVElPTlMQAkJyChxjb20uZ29vZ2xlLnByb3RvYnVmLmNvbXBpbGVyQgxQbHVnaW5Qcm90b3NaKWdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL3BsdWdpbnBiqgIYR29vZ2xlLlByb3RvYnVmLkNvbXBpbGVy", [fileDesc_google_protobuf_descriptor]);

// Describes the message google.protobuf.compiler.Version. Use `create(VersionDesc)` to create a new Version.
export const VersionDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_compiler_plugin, 0);

// Describes the message google.protobuf.compiler.CodeGeneratorRequest. Use `create(CodeGeneratorRequestDesc)` to create a new CodeGeneratorRequest.
export const CodeGeneratorRequestDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_compiler_plugin, 1);

// Describes the message google.protobuf.compiler.CodeGeneratorResponse. Use `create(CodeGeneratorResponseDesc)` to create a new CodeGeneratorResponse.
export const CodeGeneratorResponseDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_compiler_plugin, 2);

// Describes the message google.protobuf.compiler.CodeGeneratorResponse.File. Use `create(CodeGeneratorResponse_FileDesc)` to create a new CodeGeneratorResponse_File.
export const CodeGeneratorResponse_FileDesc = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_compiler_plugin, 2, 0);

// Describes the enum google.protobuf.compiler.CodeGeneratorResponse.Feature.
export const CodeGeneratorResponse_FeatureDesc = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_compiler_plugin, 2, 0);

/**
 * Sync with code_generator.h.
 *
 * @generated from enum google.protobuf.compiler.CodeGeneratorResponse.Feature
 */
export const CodeGeneratorResponse_Feature = /*@__PURE__*/
  tsEnum(CodeGeneratorResponse_FeatureDesc);

