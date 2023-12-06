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

// @generated by protoc-gen-es v1.5.1 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_features.proto (package pb, syntax proto2)
/* eslint-disable */

import { proto2 } from "@bufbuild/protobuf";

/**
 * @generated from message pb.TestMessage
 */
export const TestMessage = proto2.makeMessageType(
  "pb.TestMessage",
  [],
);

/**
 * @generated from message pb.TestMessage.Nested
 */
export const TestMessage_Nested = proto2.makeMessageType(
  "pb.TestMessage.Nested",
  [],
  {localName: "TestMessage_Nested"},
);

/**
 * @generated from message pb.TestFeatures
 */
export const TestFeatures = proto2.makeMessageType(
  "pb.TestFeatures",
  () => [
    { no: 1, name: "int_file_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "int_extension_range_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "int_message_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "int_field_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 5, name: "int_oneof_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 6, name: "int_enum_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 7, name: "int_enum_entry_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 8, name: "int_service_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 9, name: "int_method_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 10, name: "int_multiple_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 11, name: "bool_field_feature", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 12, name: "float_field_feature", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 13, name: "message_field_feature", kind: "message", T: TestFeatures_MessageFeature, opt: true },
    { no: 14, name: "enum_field_feature", kind: "enum", T: proto2.getEnumType(TestFeatures_EnumFeature), opt: true },
    { no: 15, name: "int_source_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 16, name: "string_source_feature", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from enum pb.TestFeatures.EnumFeature
 */
export const TestFeatures_EnumFeature = proto2.makeEnum(
  "pb.TestFeatures.EnumFeature",
  [
    {no: 0, name: "TEST_ENUM_FEATURE_UNKNOWN"},
    {no: 1, name: "ENUM_VALUE1"},
    {no: 2, name: "ENUM_VALUE2"},
    {no: 3, name: "ENUM_VALUE3"},
    {no: 4, name: "ENUM_VALUE4"},
    {no: 5, name: "ENUM_VALUE5"},
  ],
);

/**
 * @generated from message pb.TestFeatures.MessageFeature
 */
export const TestFeatures_MessageFeature = proto2.makeMessageType(
  "pb.TestFeatures.MessageFeature",
  () => [
    { no: 1, name: "bool_field", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 2, name: "int_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "float_field", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 4, name: "string_field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
  {localName: "TestFeatures_MessageFeature"},
);

