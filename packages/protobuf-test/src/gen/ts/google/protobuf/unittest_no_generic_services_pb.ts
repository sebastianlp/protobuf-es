// Copyright 2021-2023 Buf Technologies, Inc.
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

// @generated by protoc-gen-es v1.5.1 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/protobuf/unittest_no_generic_services.proto (package protobuf_unittest.no_generic_services_test, syntax proto2)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from enum protobuf_unittest.no_generic_services_test.TestEnum
 */
export enum TestEnum {
  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,
}
// Retrieve enum metadata with: proto2.getEnumType(TestEnum)
proto2.util.setEnumType(TestEnum, "protobuf_unittest.no_generic_services_test.TestEnum", [
  { no: 1, name: "FOO" },
]);

/**
 * @generated from message protobuf_unittest.no_generic_services_test.TestMessage
 */
export class TestMessage extends Message<TestMessage> {
  /**
   * @generated from field: optional int32 a = 1;
   */
  a?: number;

  constructor(data?: PartialMessage<TestMessage>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "protobuf_unittest.no_generic_services_test.TestMessage";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMessage {
    return new TestMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMessage {
    return new TestMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMessage {
    return new TestMessage().fromJsonString(jsonString, options);
  }

  static equals(a: TestMessage | PlainMessage<TestMessage> | undefined, b: TestMessage | PlainMessage<TestMessage> | undefined): boolean {
    return proto2.util.equals(TestMessage, a, b);
  }
}

