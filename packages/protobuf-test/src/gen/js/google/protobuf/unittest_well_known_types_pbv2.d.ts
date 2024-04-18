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

// @generated by protoc-gen-es v1.8.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_well_known_types.proto (package protobuf_unittest, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Any, Api, BoolValue, BytesValue, DoubleValue, Duration, Empty, FieldMask, FloatValue, Int32Value, Int64Value, SourceContext, StringValue, Struct, Timestamp, UInt32Value, UInt64Value, Value } from "@bufbuild/protobuf/wkt";
import type { Type } from "./type_pbv2.js";

export declare const fileDesc_google_protobuf_unittest_well_known_types: GenDescFile;

/**
 * Test that we can include all well-known types.
 * Each wrapper type is included separately, as languages
 * map handle different wrappers in different ways.
 *
 * @generated from message protobuf_unittest.TestWellKnownTypes
 */
export declare type TestWellKnownTypes = Message<"protobuf_unittest.TestWellKnownTypes"> & {
  /**
   * @generated from field: google.protobuf.Any any_field = 1;
   */
  anyField?: Any;

  /**
   * @generated from field: google.protobuf.Api api_field = 2;
   */
  apiField?: Api;

  /**
   * @generated from field: google.protobuf.Duration duration_field = 3;
   */
  durationField?: Duration;

  /**
   * @generated from field: google.protobuf.Empty empty_field = 4;
   */
  emptyField?: Empty;

  /**
   * @generated from field: google.protobuf.FieldMask field_mask_field = 5;
   */
  fieldMaskField?: FieldMask;

  /**
   * @generated from field: google.protobuf.SourceContext source_context_field = 6;
   */
  sourceContextField?: SourceContext;

  /**
   * @generated from field: google.protobuf.Struct struct_field = 7;
   */
  structField?: Struct;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp_field = 8;
   */
  timestampField?: Timestamp;

  /**
   * @generated from field: google.protobuf.Type type_field = 9;
   */
  typeField?: Type;

  /**
   * @generated from field: google.protobuf.DoubleValue double_field = 10;
   */
  doubleField?: number;

  /**
   * @generated from field: google.protobuf.FloatValue float_field = 11;
   */
  floatField?: number;

  /**
   * @generated from field: google.protobuf.Int64Value int64_field = 12;
   */
  int64Field?: bigint;

  /**
   * @generated from field: google.protobuf.UInt64Value uint64_field = 13;
   */
  uint64Field?: bigint;

  /**
   * @generated from field: google.protobuf.Int32Value int32_field = 14;
   */
  int32Field?: number;

  /**
   * @generated from field: google.protobuf.UInt32Value uint32_field = 15;
   */
  uint32Field?: number;

  /**
   * @generated from field: google.protobuf.BoolValue bool_field = 16;
   */
  boolField?: boolean;

  /**
   * @generated from field: google.protobuf.StringValue string_field = 17;
   */
  stringField?: string;

  /**
   * @generated from field: google.protobuf.BytesValue bytes_field = 18;
   */
  bytesField?: Uint8Array;

  /**
   * Part of struct, but useful to be able to test separately
   *
   * @generated from field: google.protobuf.Value value_field = 19;
   */
  valueField?: Value;
};

// Describes the message protobuf_unittest.TestWellKnownTypes. Use `create(TestWellKnownTypesDesc)` to create a new TestWellKnownTypes.
export declare const TestWellKnownTypesDesc: GenDescMessage<TestWellKnownTypes>;

/**
 * A repeated field for each well-known type.
 *
 * @generated from message protobuf_unittest.RepeatedWellKnownTypes
 */
export declare type RepeatedWellKnownTypes = Message<"protobuf_unittest.RepeatedWellKnownTypes"> & {
  /**
   * @generated from field: repeated google.protobuf.Any any_field = 1;
   */
  anyField: Any[];

  /**
   * @generated from field: repeated google.protobuf.Api api_field = 2;
   */
  apiField: Api[];

  /**
   * @generated from field: repeated google.protobuf.Duration duration_field = 3;
   */
  durationField: Duration[];

  /**
   * @generated from field: repeated google.protobuf.Empty empty_field = 4;
   */
  emptyField: Empty[];

  /**
   * @generated from field: repeated google.protobuf.FieldMask field_mask_field = 5;
   */
  fieldMaskField: FieldMask[];

  /**
   * @generated from field: repeated google.protobuf.SourceContext source_context_field = 6;
   */
  sourceContextField: SourceContext[];

  /**
   * @generated from field: repeated google.protobuf.Struct struct_field = 7;
   */
  structField: Struct[];

  /**
   * @generated from field: repeated google.protobuf.Timestamp timestamp_field = 8;
   */
  timestampField: Timestamp[];

  /**
   * @generated from field: repeated google.protobuf.Type type_field = 9;
   */
  typeField: Type[];

  /**
   * These don't actually make a lot of sense, but they're not prohibited...
   *
   * @generated from field: repeated google.protobuf.DoubleValue double_field = 10;
   */
  doubleField: DoubleValue[];

  /**
   * @generated from field: repeated google.protobuf.FloatValue float_field = 11;
   */
  floatField: FloatValue[];

  /**
   * @generated from field: repeated google.protobuf.Int64Value int64_field = 12;
   */
  int64Field: Int64Value[];

  /**
   * @generated from field: repeated google.protobuf.UInt64Value uint64_field = 13;
   */
  uint64Field: UInt64Value[];

  /**
   * @generated from field: repeated google.protobuf.Int32Value int32_field = 14;
   */
  int32Field: Int32Value[];

  /**
   * @generated from field: repeated google.protobuf.UInt32Value uint32_field = 15;
   */
  uint32Field: UInt32Value[];

  /**
   * @generated from field: repeated google.protobuf.BoolValue bool_field = 16;
   */
  boolField: BoolValue[];

  /**
   * @generated from field: repeated google.protobuf.StringValue string_field = 17;
   */
  stringField: StringValue[];

  /**
   * @generated from field: repeated google.protobuf.BytesValue bytes_field = 18;
   */
  bytesField: BytesValue[];
};

// Describes the message protobuf_unittest.RepeatedWellKnownTypes. Use `create(RepeatedWellKnownTypesDesc)` to create a new RepeatedWellKnownTypes.
export declare const RepeatedWellKnownTypesDesc: GenDescMessage<RepeatedWellKnownTypes>;

/**
 * @generated from message protobuf_unittest.OneofWellKnownTypes
 */
export declare type OneofWellKnownTypes = Message<"protobuf_unittest.OneofWellKnownTypes"> & {
  /**
   * @generated from oneof protobuf_unittest.OneofWellKnownTypes.oneof_field
   */
  oneofField: {
    /**
     * @generated from field: google.protobuf.Any any_field = 1;
     */
    value: Any;
    case: "anyField";
  } | {
    /**
     * @generated from field: google.protobuf.Api api_field = 2;
     */
    value: Api;
    case: "apiField";
  } | {
    /**
     * @generated from field: google.protobuf.Duration duration_field = 3;
     */
    value: Duration;
    case: "durationField";
  } | {
    /**
     * @generated from field: google.protobuf.Empty empty_field = 4;
     */
    value: Empty;
    case: "emptyField";
  } | {
    /**
     * @generated from field: google.protobuf.FieldMask field_mask_field = 5;
     */
    value: FieldMask;
    case: "fieldMaskField";
  } | {
    /**
     * @generated from field: google.protobuf.SourceContext source_context_field = 6;
     */
    value: SourceContext;
    case: "sourceContextField";
  } | {
    /**
     * @generated from field: google.protobuf.Struct struct_field = 7;
     */
    value: Struct;
    case: "structField";
  } | {
    /**
     * @generated from field: google.protobuf.Timestamp timestamp_field = 8;
     */
    value: Timestamp;
    case: "timestampField";
  } | {
    /**
     * @generated from field: google.protobuf.Type type_field = 9;
     */
    value: Type;
    case: "typeField";
  } | {
    /**
     * @generated from field: google.protobuf.DoubleValue double_field = 10;
     */
    value: DoubleValue;
    case: "doubleField";
  } | {
    /**
     * @generated from field: google.protobuf.FloatValue float_field = 11;
     */
    value: FloatValue;
    case: "floatField";
  } | {
    /**
     * @generated from field: google.protobuf.Int64Value int64_field = 12;
     */
    value: Int64Value;
    case: "int64Field";
  } | {
    /**
     * @generated from field: google.protobuf.UInt64Value uint64_field = 13;
     */
    value: UInt64Value;
    case: "uint64Field";
  } | {
    /**
     * @generated from field: google.protobuf.Int32Value int32_field = 14;
     */
    value: Int32Value;
    case: "int32Field";
  } | {
    /**
     * @generated from field: google.protobuf.UInt32Value uint32_field = 15;
     */
    value: UInt32Value;
    case: "uint32Field";
  } | {
    /**
     * @generated from field: google.protobuf.BoolValue bool_field = 16;
     */
    value: BoolValue;
    case: "boolField";
  } | {
    /**
     * @generated from field: google.protobuf.StringValue string_field = 17;
     */
    value: StringValue;
    case: "stringField";
  } | {
    /**
     * @generated from field: google.protobuf.BytesValue bytes_field = 18;
     */
    value: BytesValue;
    case: "bytesField";
  } | { case: undefined; value?: undefined };
};

// Describes the message protobuf_unittest.OneofWellKnownTypes. Use `create(OneofWellKnownTypesDesc)` to create a new OneofWellKnownTypes.
export declare const OneofWellKnownTypesDesc: GenDescMessage<OneofWellKnownTypes>;

/**
 * A map field for each well-known type. We only
 * need to worry about the value part of the map being the
 * well-known types, as messages can't be map keys.
 *
 * @generated from message protobuf_unittest.MapWellKnownTypes
 */
export declare type MapWellKnownTypes = Message<"protobuf_unittest.MapWellKnownTypes"> & {
  /**
   * @generated from field: map<int32, google.protobuf.Any> any_field = 1;
   */
  anyField: { [key: number]: Any };

  /**
   * @generated from field: map<int32, google.protobuf.Api> api_field = 2;
   */
  apiField: { [key: number]: Api };

  /**
   * @generated from field: map<int32, google.protobuf.Duration> duration_field = 3;
   */
  durationField: { [key: number]: Duration };

  /**
   * @generated from field: map<int32, google.protobuf.Empty> empty_field = 4;
   */
  emptyField: { [key: number]: Empty };

  /**
   * @generated from field: map<int32, google.protobuf.FieldMask> field_mask_field = 5;
   */
  fieldMaskField: { [key: number]: FieldMask };

  /**
   * @generated from field: map<int32, google.protobuf.SourceContext> source_context_field = 6;
   */
  sourceContextField: { [key: number]: SourceContext };

  /**
   * @generated from field: map<int32, google.protobuf.Struct> struct_field = 7;
   */
  structField: { [key: number]: Struct };

  /**
   * @generated from field: map<int32, google.protobuf.Timestamp> timestamp_field = 8;
   */
  timestampField: { [key: number]: Timestamp };

  /**
   * @generated from field: map<int32, google.protobuf.Type> type_field = 9;
   */
  typeField: { [key: number]: Type };

  /**
   * @generated from field: map<int32, google.protobuf.DoubleValue> double_field = 10;
   */
  doubleField: { [key: number]: DoubleValue };

  /**
   * @generated from field: map<int32, google.protobuf.FloatValue> float_field = 11;
   */
  floatField: { [key: number]: FloatValue };

  /**
   * @generated from field: map<int32, google.protobuf.Int64Value> int64_field = 12;
   */
  int64Field: { [key: number]: Int64Value };

  /**
   * @generated from field: map<int32, google.protobuf.UInt64Value> uint64_field = 13;
   */
  uint64Field: { [key: number]: UInt64Value };

  /**
   * @generated from field: map<int32, google.protobuf.Int32Value> int32_field = 14;
   */
  int32Field: { [key: number]: Int32Value };

  /**
   * @generated from field: map<int32, google.protobuf.UInt32Value> uint32_field = 15;
   */
  uint32Field: { [key: number]: UInt32Value };

  /**
   * @generated from field: map<int32, google.protobuf.BoolValue> bool_field = 16;
   */
  boolField: { [key: number]: BoolValue };

  /**
   * @generated from field: map<int32, google.protobuf.StringValue> string_field = 17;
   */
  stringField: { [key: number]: StringValue };

  /**
   * @generated from field: map<int32, google.protobuf.BytesValue> bytes_field = 18;
   */
  bytesField: { [key: number]: BytesValue };
};

// Describes the message protobuf_unittest.MapWellKnownTypes. Use `create(MapWellKnownTypesDesc)` to create a new MapWellKnownTypes.
export declare const MapWellKnownTypesDesc: GenDescMessage<MapWellKnownTypes>;

