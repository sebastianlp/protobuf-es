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

// @generated by protoc-gen-es v2.0.0-alpha.1 with parameter "ts_nocheck=false,target=ts,import_extension=.js"
// @generated from file extra/wkt-wrappers.proto (package spec, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { BoolValue, BytesValue, DoubleValue, FloatValue, Int32Value, Int64Value, StringValue, UInt32Value, UInt64Value } from "@bufbuild/protobuf/wkt";
import { fileDesc_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/wkt-wrappers.proto.
 * @deprecated
 */
export const fileDesc_extra_wkt_wrappers: GenDescFile = /*@__PURE__*/
  fileDesc("ChhleHRyYS93a3Qtd3JhcHBlcnMucHJvdG8SBHNwZWMilhkKD1dyYXBwZXJzTWVzc2FnZRI4ChJkb3VibGVfdmFsdWVfZmllbGQYASABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUSNAoQYm9vbF92YWx1ZV9maWVsZBgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWUSNgoRZmxvYXRfdmFsdWVfZmllbGQYAyABKAsyGy5nb29nbGUucHJvdG9idWYuRmxvYXRWYWx1ZRI2ChFpbnQ2NF92YWx1ZV9maWVsZBgEIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlEjgKEnVpbnQ2NF92YWx1ZV9maWVsZBgFIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50NjRWYWx1ZRI2ChFpbnQzMl92YWx1ZV9maWVsZBgGIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlEjgKEnVpbnQzMl92YWx1ZV9maWVsZBgHIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50MzJWYWx1ZRI4ChJzdHJpbmdfdmFsdWVfZmllbGQYCCABKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWUSNgoRYnl0ZXNfdmFsdWVfZmllbGQYCSABKAsyGy5nb29nbGUucHJvdG9idWYuQnl0ZXNWYWx1ZRJAChhvbmVvZl9kb3VibGVfdmFsdWVfZmllbGQYCyABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWVIABI8ChZvbmVvZl9ib29sX3ZhbHVlX2ZpZWxkGAwgASgLMhouZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZUgAEj4KF29uZW9mX2Zsb2F0X3ZhbHVlX2ZpZWxkGA0gASgLMhsuZ29vZ2xlLnByb3RvYnVmLkZsb2F0VmFsdWVIABI+ChdvbmVvZl9pbnQ2NF92YWx1ZV9maWVsZBgOIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlSAASQAoYb25lb2ZfdWludDY0X3ZhbHVlX2ZpZWxkGA8gASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQ2NFZhbHVlSAASPgoXb25lb2ZfaW50MzJfdmFsdWVfZmllbGQYECABKAsyGy5nb29nbGUucHJvdG9idWYuSW50MzJWYWx1ZUgAEkAKGG9uZW9mX3VpbnQzMl92YWx1ZV9maWVsZBgRIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50MzJWYWx1ZUgAEkAKGG9uZW9mX3N0cmluZ192YWx1ZV9maWVsZBgSIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZUgAEj4KF29uZW9mX2J5dGVzX3ZhbHVlX2ZpZWxkGBMgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkJ5dGVzVmFsdWVIABJBChtyZXBlYXRlZF9kb3VibGVfdmFsdWVfZmllbGQYFSADKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUSPQoZcmVwZWF0ZWRfYm9vbF92YWx1ZV9maWVsZBgWIAMoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWUSPwoacmVwZWF0ZWRfZmxvYXRfdmFsdWVfZmllbGQYFyADKAsyGy5nb29nbGUucHJvdG9idWYuRmxvYXRWYWx1ZRI/ChpyZXBlYXRlZF9pbnQ2NF92YWx1ZV9maWVsZBgYIAMoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlEkEKG3JlcGVhdGVkX3VpbnQ2NF92YWx1ZV9maWVsZBgZIAMoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50NjRWYWx1ZRI/ChpyZXBlYXRlZF9pbnQzMl92YWx1ZV9maWVsZBgaIAMoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlEkEKG3JlcGVhdGVkX3VpbnQzMl92YWx1ZV9maWVsZBgbIAMoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50MzJWYWx1ZRJBChtyZXBlYXRlZF9zdHJpbmdfdmFsdWVfZmllbGQYHCADKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWUSPwoacmVwZWF0ZWRfYnl0ZXNfdmFsdWVfZmllbGQYHSADKAsyGy5nb29nbGUucHJvdG9idWYuQnl0ZXNWYWx1ZRJOChZtYXBfZG91YmxlX3ZhbHVlX2ZpZWxkGB8gAygLMi4uc3BlYy5XcmFwcGVyc01lc3NhZ2UuTWFwRG91YmxlVmFsdWVGaWVsZEVudHJ5EkoKFG1hcF9ib29sX3ZhbHVlX2ZpZWxkGCAgAygLMiwuc3BlYy5XcmFwcGVyc01lc3NhZ2UuTWFwQm9vbFZhbHVlRmllbGRFbnRyeRJMChVtYXBfZmxvYXRfdmFsdWVfZmllbGQYISADKAsyLS5zcGVjLldyYXBwZXJzTWVzc2FnZS5NYXBGbG9hdFZhbHVlRmllbGRFbnRyeRJMChVtYXBfaW50NjRfdmFsdWVfZmllbGQYIiADKAsyLS5zcGVjLldyYXBwZXJzTWVzc2FnZS5NYXBJbnQ2NFZhbHVlRmllbGRFbnRyeRJOChZtYXBfdWludDY0X3ZhbHVlX2ZpZWxkGCMgAygLMi4uc3BlYy5XcmFwcGVyc01lc3NhZ2UuTWFwVWludDY0VmFsdWVGaWVsZEVudHJ5EkwKFW1hcF9pbnQzMl92YWx1ZV9maWVsZBgkIAMoCzItLnNwZWMuV3JhcHBlcnNNZXNzYWdlLk1hcEludDMyVmFsdWVGaWVsZEVudHJ5Ek4KFm1hcF91aW50MzJfdmFsdWVfZmllbGQYJSADKAsyLi5zcGVjLldyYXBwZXJzTWVzc2FnZS5NYXBVaW50MzJWYWx1ZUZpZWxkRW50cnkSTgoWbWFwX3N0cmluZ192YWx1ZV9maWVsZBgmIAMoCzIuLnNwZWMuV3JhcHBlcnNNZXNzYWdlLk1hcFN0cmluZ1ZhbHVlRmllbGRFbnRyeRJMChVtYXBfYnl0ZXNfdmFsdWVfZmllbGQYJyADKAsyLS5zcGVjLldyYXBwZXJzTWVzc2FnZS5NYXBCeXRlc1ZhbHVlRmllbGRFbnRyeRpYChhNYXBEb3VibGVWYWx1ZUZpZWxkRW50cnkSCwoDa2V5GAEgASgJEisKBXZhbHVlGAIgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlOgI4ARpUChZNYXBCb29sVmFsdWVGaWVsZEVudHJ5EgsKA2tleRgBIAEoCRIpCgV2YWx1ZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWU6AjgBGlYKF01hcEZsb2F0VmFsdWVGaWVsZEVudHJ5EgsKA2tleRgBIAEoCRIqCgV2YWx1ZRgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GbG9hdFZhbHVlOgI4ARpWChdNYXBJbnQ2NFZhbHVlRmllbGRFbnRyeRILCgNrZXkYASABKAkSKgoFdmFsdWUYAiABKAsyGy5nb29nbGUucHJvdG9idWYuSW50NjRWYWx1ZToCOAEaWAoYTWFwVWludDY0VmFsdWVGaWVsZEVudHJ5EgsKA2tleRgBIAEoCRIrCgV2YWx1ZRgCIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50NjRWYWx1ZToCOAEaVgoXTWFwSW50MzJWYWx1ZUZpZWxkRW50cnkSCwoDa2V5GAEgASgJEioKBXZhbHVlGAIgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDMyVmFsdWU6AjgBGlgKGE1hcFVpbnQzMlZhbHVlRmllbGRFbnRyeRILCgNrZXkYASABKAkSKwoFdmFsdWUYAiABKAsyHC5nb29nbGUucHJvdG9idWYuVUludDMyVmFsdWU6AjgBGlgKGE1hcFN0cmluZ1ZhbHVlRmllbGRFbnRyeRILCgNrZXkYASABKAkSKwoFdmFsdWUYAiABKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWU6AjgBGlYKF01hcEJ5dGVzVmFsdWVGaWVsZEVudHJ5EgsKA2tleRgBIAEoCRIqCgV2YWx1ZRgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5CeXRlc1ZhbHVlOgI4AUIOCgxvbmVvZl9maWVsZHNCA7gBAWIGcHJvdG8z", [fileDesc_google_protobuf_wrappers]);

/**
 * @generated from message spec.WrappersMessage
 * @deprecated
 */
export type WrappersMessage = Message<"spec.WrappersMessage"> & {
  /**
   * @generated from field: google.protobuf.DoubleValue double_value_field = 1;
   */
  doubleValueField?: number;

  /**
   * @generated from field: google.protobuf.BoolValue bool_value_field = 2;
   */
  boolValueField?: boolean;

  /**
   * @generated from field: google.protobuf.FloatValue float_value_field = 3;
   */
  floatValueField?: number;

  /**
   * @generated from field: google.protobuf.Int64Value int64_value_field = 4;
   */
  int64ValueField?: bigint;

  /**
   * @generated from field: google.protobuf.UInt64Value uint64_value_field = 5;
   */
  uint64ValueField?: bigint;

  /**
   * @generated from field: google.protobuf.Int32Value int32_value_field = 6;
   */
  int32ValueField?: number;

  /**
   * @generated from field: google.protobuf.UInt32Value uint32_value_field = 7;
   */
  uint32ValueField?: number;

  /**
   * @generated from field: google.protobuf.StringValue string_value_field = 8;
   */
  stringValueField?: string;

  /**
   * @generated from field: google.protobuf.BytesValue bytes_value_field = 9;
   */
  bytesValueField?: Uint8Array;

  /**
   * @generated from oneof spec.WrappersMessage.oneof_fields
   * @deprecated
   */
  oneofFields: {
    /**
     * @generated from field: google.protobuf.DoubleValue oneof_double_value_field = 11;
     */
    value: DoubleValue;
    case: "oneofDoubleValueField";
  } | {
    /**
     * @generated from field: google.protobuf.BoolValue oneof_bool_value_field = 12;
     */
    value: BoolValue;
    case: "oneofBoolValueField";
  } | {
    /**
     * @generated from field: google.protobuf.FloatValue oneof_float_value_field = 13;
     */
    value: FloatValue;
    case: "oneofFloatValueField";
  } | {
    /**
     * @generated from field: google.protobuf.Int64Value oneof_int64_value_field = 14;
     */
    value: Int64Value;
    case: "oneofInt64ValueField";
  } | {
    /**
     * @generated from field: google.protobuf.UInt64Value oneof_uint64_value_field = 15;
     */
    value: UInt64Value;
    case: "oneofUint64ValueField";
  } | {
    /**
     * @generated from field: google.protobuf.Int32Value oneof_int32_value_field = 16;
     */
    value: Int32Value;
    case: "oneofInt32ValueField";
  } | {
    /**
     * @generated from field: google.protobuf.UInt32Value oneof_uint32_value_field = 17;
     */
    value: UInt32Value;
    case: "oneofUint32ValueField";
  } | {
    /**
     * @generated from field: google.protobuf.StringValue oneof_string_value_field = 18;
     */
    value: StringValue;
    case: "oneofStringValueField";
  } | {
    /**
     * @generated from field: google.protobuf.BytesValue oneof_bytes_value_field = 19;
     */
    value: BytesValue;
    case: "oneofBytesValueField";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: repeated google.protobuf.DoubleValue repeated_double_value_field = 21;
   */
  repeatedDoubleValueField: DoubleValue[];

  /**
   * @generated from field: repeated google.protobuf.BoolValue repeated_bool_value_field = 22;
   */
  repeatedBoolValueField: BoolValue[];

  /**
   * @generated from field: repeated google.protobuf.FloatValue repeated_float_value_field = 23;
   */
  repeatedFloatValueField: FloatValue[];

  /**
   * @generated from field: repeated google.protobuf.Int64Value repeated_int64_value_field = 24;
   */
  repeatedInt64ValueField: Int64Value[];

  /**
   * @generated from field: repeated google.protobuf.UInt64Value repeated_uint64_value_field = 25;
   */
  repeatedUint64ValueField: UInt64Value[];

  /**
   * @generated from field: repeated google.protobuf.Int32Value repeated_int32_value_field = 26;
   */
  repeatedInt32ValueField: Int32Value[];

  /**
   * @generated from field: repeated google.protobuf.UInt32Value repeated_uint32_value_field = 27;
   */
  repeatedUint32ValueField: UInt32Value[];

  /**
   * @generated from field: repeated google.protobuf.StringValue repeated_string_value_field = 28;
   */
  repeatedStringValueField: StringValue[];

  /**
   * @generated from field: repeated google.protobuf.BytesValue repeated_bytes_value_field = 29;
   */
  repeatedBytesValueField: BytesValue[];

  /**
   * @generated from field: map<string, google.protobuf.DoubleValue> map_double_value_field = 31;
   */
  mapDoubleValueField: { [key: string]: DoubleValue };

  /**
   * @generated from field: map<string, google.protobuf.BoolValue> map_bool_value_field = 32;
   */
  mapBoolValueField: { [key: string]: BoolValue };

  /**
   * @generated from field: map<string, google.protobuf.FloatValue> map_float_value_field = 33;
   */
  mapFloatValueField: { [key: string]: FloatValue };

  /**
   * @generated from field: map<string, google.protobuf.Int64Value> map_int64_value_field = 34;
   */
  mapInt64ValueField: { [key: string]: Int64Value };

  /**
   * @generated from field: map<string, google.protobuf.UInt64Value> map_uint64_value_field = 35;
   */
  mapUint64ValueField: { [key: string]: UInt64Value };

  /**
   * @generated from field: map<string, google.protobuf.Int32Value> map_int32_value_field = 36;
   */
  mapInt32ValueField: { [key: string]: Int32Value };

  /**
   * @generated from field: map<string, google.protobuf.UInt32Value> map_uint32_value_field = 37;
   */
  mapUint32ValueField: { [key: string]: UInt32Value };

  /**
   * @generated from field: map<string, google.protobuf.StringValue> map_string_value_field = 38;
   */
  mapStringValueField: { [key: string]: StringValue };

  /**
   * @generated from field: map<string, google.protobuf.BytesValue> map_bytes_value_field = 39;
   */
  mapBytesValueField: { [key: string]: BytesValue };
};

/**
 * Describes the message spec.WrappersMessage.
 * Use `create(WrappersMessageDesc)` to create a new message.
 * @deprecated
 */
export const WrappersMessageDesc: GenDescMessage<WrappersMessage> = /*@__PURE__*/
  messageDesc(fileDesc_extra_wkt_wrappers, 0);

