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

// @generated by protoc-gen-es v2.0.0-alpha.4 with parameter "ts_nocheck=false,target=ts,import_extension=.js"
// @generated from file extra/json_types.proto (package spec, syntax proto3)
/* eslint-disable */

import type { GenDescEnum, GenDescFile, GenDescMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any, Duration, Empty, FieldMask, ListValue, NullValue, Timestamp, Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any, file_google_protobuf_duration, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_struct, file_google_protobuf_timestamp, file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/json_types.proto.
 */
export const file_extra_json_types: GenDescFile = /*@__PURE__*/
  fileDesc("ChZleHRyYS9qc29uX3R5cGVzLnByb3RvEgRzcGVjItIKChBKc29uVHlwZXNNZXNzYWdlEhIKCmJvb2xfZmllbGQYASABKAgSFAoMZG91YmxlX2ZpZWxkGAIgASgBEhMKC2J5dGVzX2ZpZWxkGAMgASgMEhMKC2ludDY0X2ZpZWxkGAQgASgDEiYKCmVudW1fZmllbGQYBSABKA4yEi5zcGVjLkpzb25UeXBlRW51bRItCg1tZXNzYWdlX2ZpZWxkGAYgASgLMhYuc3BlYy5Kc29uVHlwZXNNZXNzYWdlEicKCWFueV9maWVsZBgHIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoOZHVyYXRpb25fZmllbGQYCCABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb24SKwoLZW1wdHlfZmllbGQYCSABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHkSNAoQZmllbGRfbWFza19maWVsZBgKIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2sSLQoMc3RydWN0X2ZpZWxkGAsgASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdBIrCgt2YWx1ZV9maWVsZBgMIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZRI0ChBsaXN0X3ZhbHVlX2ZpZWxkGA0gASgLMhouZ29vZ2xlLnByb3RvYnVmLkxpc3RWYWx1ZRI0ChBudWxsX3ZhbHVlX2ZpZWxkGA4gASgOMhouZ29vZ2xlLnByb3RvYnVmLk51bGxWYWx1ZRIzCg90aW1lc3RhbXBfZmllbGQYDyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEjoKFHdyYXBwZWRfZG91YmxlX2ZpZWxkGBAgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlEjgKE3dyYXBwZWRfZmxvYXRfZmllbGQYESABKAsyGy5nb29nbGUucHJvdG9idWYuRmxvYXRWYWx1ZRI4ChN3cmFwcGVkX2ludDY0X2ZpZWxkGBIgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDY0VmFsdWUSOgoUd3JhcHBlZF91aW50NjRfZmllbGQYEyABKAsyHC5nb29nbGUucHJvdG9idWYuVUludDY0VmFsdWUSOAoTd3JhcHBlZF9pbnQzMl9maWVsZBgUIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlEjoKFHdyYXBwZWRfdWludDMyX2ZpZWxkGBUgASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQzMlZhbHVlEjYKEndyYXBwZWRfYm9vbF9maWVsZBgWIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWUSOgoUd3JhcHBlZF9zdHJpbmdfZmllbGQYFyABKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWUSOAoTd3JhcHBlZF9ieXRlc19maWVsZBgYIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5CeXRlc1ZhbHVlEi8KE3JlcGVhdGVkX2VudW1fZmllbGQYGSADKA4yEi5zcGVjLkpzb25UeXBlRW51bRJJChNtYXBfYm9vbF9lbnVtX2ZpZWxkGBogAygLMiwuc3BlYy5Kc29uVHlwZXNNZXNzYWdlLk1hcEJvb2xFbnVtRmllbGRFbnRyeRpLChVNYXBCb29sRW51bUZpZWxkRW50cnkSCwoDa2V5GAEgASgIEiEKBXZhbHVlGAIgASgOMhIuc3BlYy5Kc29uVHlwZUVudW06AjgBKl0KDEpzb25UeXBlRW51bRIeChpKU09OX1RZUEVfRU5VTV9VTlNQRUNJRklFRBAAEhYKEkpTT05fVFlQRV9FTlVNX1lFUxABEhUKEUpTT05fVFlQRV9FTlVNX05PEAJiBnByb3RvMw", [file_google_protobuf_any, file_google_protobuf_duration, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_struct, file_google_protobuf_timestamp, file_google_protobuf_wrappers]);

/**
 * @generated from message spec.JsonTypesMessage
 */
export type JsonTypesMessage = Message<"spec.JsonTypesMessage"> & {
  /**
   * @generated from field: bool bool_field = 1;
   */
  boolField: boolean;

  /**
   * @generated from field: double double_field = 2;
   */
  doubleField: number;

  /**
   * @generated from field: bytes bytes_field = 3;
   */
  bytesField: Uint8Array;

  /**
   * @generated from field: int64 int64_field = 4;
   */
  int64Field: bigint;

  /**
   * @generated from field: spec.JsonTypeEnum enum_field = 5;
   */
  enumField: JsonTypeEnum;

  /**
   * @generated from field: spec.JsonTypesMessage message_field = 6;
   */
  messageField?: JsonTypesMessage;

  /**
   * @generated from field: google.protobuf.Any any_field = 7;
   */
  anyField?: Any;

  /**
   * @generated from field: google.protobuf.Duration duration_field = 8;
   */
  durationField?: Duration;

  /**
   * @generated from field: google.protobuf.Empty empty_field = 9;
   */
  emptyField?: Empty;

  /**
   * @generated from field: google.protobuf.FieldMask field_mask_field = 10;
   */
  fieldMaskField?: FieldMask;

  /**
   * @generated from field: google.protobuf.Struct struct_field = 11;
   */
  structField?: JsonObject;

  /**
   * @generated from field: google.protobuf.Value value_field = 12;
   */
  valueField?: Value;

  /**
   * @generated from field: google.protobuf.ListValue list_value_field = 13;
   */
  listValueField?: ListValue;

  /**
   * @generated from field: google.protobuf.NullValue null_value_field = 14;
   */
  nullValueField: NullValue;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp_field = 15;
   */
  timestampField?: Timestamp;

  /**
   * @generated from field: google.protobuf.DoubleValue wrapped_double_field = 16;
   */
  wrappedDoubleField?: number;

  /**
   * @generated from field: google.protobuf.FloatValue wrapped_float_field = 17;
   */
  wrappedFloatField?: number;

  /**
   * @generated from field: google.protobuf.Int64Value wrapped_int64_field = 18;
   */
  wrappedInt64Field?: bigint;

  /**
   * @generated from field: google.protobuf.UInt64Value wrapped_uint64_field = 19;
   */
  wrappedUint64Field?: bigint;

  /**
   * @generated from field: google.protobuf.Int32Value wrapped_int32_field = 20;
   */
  wrappedInt32Field?: number;

  /**
   * @generated from field: google.protobuf.UInt32Value wrapped_uint32_field = 21;
   */
  wrappedUint32Field?: number;

  /**
   * @generated from field: google.protobuf.BoolValue wrapped_bool_field = 22;
   */
  wrappedBoolField?: boolean;

  /**
   * @generated from field: google.protobuf.StringValue wrapped_string_field = 23;
   */
  wrappedStringField?: string;

  /**
   * @generated from field: google.protobuf.BytesValue wrapped_bytes_field = 24;
   */
  wrappedBytesField?: Uint8Array;

  /**
   * @generated from field: repeated spec.JsonTypeEnum repeated_enum_field = 25;
   */
  repeatedEnumField: JsonTypeEnum[];

  /**
   * @generated from field: map<bool, spec.JsonTypeEnum> map_bool_enum_field = 26;
   */
  mapBoolEnumField: { [key: string]: JsonTypeEnum };
};

/**
 * Describes the message spec.JsonTypesMessage.
 * Use `create(JsonTypesMessageSchema)` to create a new message.
 */
export const JsonTypesMessageSchema: GenDescMessage<JsonTypesMessage> = /*@__PURE__*/
  messageDesc(file_extra_json_types, 0);

/**
 * @generated from enum spec.JsonTypeEnum
 */
export enum JsonTypeEnum {
  /**
   * @generated from enum value: JSON_TYPE_ENUM_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: JSON_TYPE_ENUM_YES = 1;
   */
  YES = 1,

  /**
   * @generated from enum value: JSON_TYPE_ENUM_NO = 2;
   */
  NO = 2,
}

/**
 * Describes the enum spec.JsonTypeEnum.
 */
export const JsonTypeEnumSchema: GenDescEnum<JsonTypeEnum> = /*@__PURE__*/
  enumDesc(file_extra_json_types, 0);

