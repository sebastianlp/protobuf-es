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

// @generated by protoc-gen-es v2.0.0-alpha.4 with parameter "ts_nocheck=false,target=ts,import_extension=.js"
// @generated from file google/protobuf/unittest_no_generic_services.proto (package protobuf_unittest.no_generic_services_test, syntax proto2)
/* eslint-disable */

import type { GenDescEnum, GenDescExtension, GenDescFile, GenDescMessage, GenDescService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, extDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/protobuf/unittest_no_generic_services.proto.
 */
export const fileDesc_google_protobuf_unittest_no_generic_services: GenDescFile = /*@__PURE__*/
  fileDesc("CjJnb29nbGUvcHJvdG9idWYvdW5pdHRlc3Rfbm9fZ2VuZXJpY19zZXJ2aWNlcy5wcm90bxIqcHJvdG9idWZfdW5pdHRlc3Qubm9fZ2VuZXJpY19zZXJ2aWNlc190ZXN0IiMKC1Rlc3RNZXNzYWdlEgkKAWEYASABKAUqCQjoBxCAgICAAioTCghUZXN0RW51bRIHCgNGT08QATKGAQoLVGVzdFNlcnZpY2USdwoDRm9vEjcucHJvdG9idWZfdW5pdHRlc3Qubm9fZ2VuZXJpY19zZXJ2aWNlc190ZXN0LlRlc3RNZXNzYWdlGjcucHJvdG9idWZfdW5pdHRlc3Qubm9fZ2VuZXJpY19zZXJ2aWNlc190ZXN0LlRlc3RNZXNzYWdlOl8KDnRlc3RfZXh0ZW5zaW9uEjcucHJvdG9idWZfdW5pdHRlc3Qubm9fZ2VuZXJpY19zZXJ2aWNlc190ZXN0LlRlc3RNZXNzYWdlGOgHIAEoBVINdGVzdEV4dGVuc2lvbg");

/**
 * @generated from message protobuf_unittest.no_generic_services_test.TestMessage
 */
export type TestMessage = Message<"protobuf_unittest.no_generic_services_test.TestMessage"> & {
  /**
   * @generated from field: optional int32 a = 1;
   */
  a: number;
};

/**
 * Describes the message protobuf_unittest.no_generic_services_test.TestMessage.
 * Use `create(TestMessageDesc)` to create a new message.
 */
export const TestMessageDesc: GenDescMessage<TestMessage> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_no_generic_services, 0);

/**
 * @generated from enum protobuf_unittest.no_generic_services_test.TestEnum
 */
export enum TestEnum {
  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,
}

/**
 * Describes the enum protobuf_unittest.no_generic_services_test.TestEnum.
 */
export const TestEnumDesc: GenDescEnum<TestEnum> = /*@__PURE__*/
  enumDesc(fileDesc_google_protobuf_unittest_no_generic_services, 0);

/**
 * @generated from service protobuf_unittest.no_generic_services_test.TestService
 */
export const TestService: GenDescService<{
  /**
   * @generated from rpc protobuf_unittest.no_generic_services_test.TestService.Foo
   */
  foo: {
    methodKind: "unary";
    input: typeof TestMessageDesc;
    output: typeof TestMessageDesc;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_google_protobuf_unittest_no_generic_services, 0);

/**
 * @generated from extension: optional int32 test_extension = 1000;
 */
export const test_extension: GenDescExtension<TestMessage, number> = /*@__PURE__*/
  extDesc(fileDesc_google_protobuf_unittest_no_generic_services, 0);

