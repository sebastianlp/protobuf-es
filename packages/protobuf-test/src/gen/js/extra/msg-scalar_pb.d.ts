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

// @generated by protoc-gen-es v2.0.0-alpha.4 with parameter "ts_nocheck=false,target=js+dts,import_extension=.js"
// @generated from file extra/msg-scalar.proto (package spec, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/msg-scalar.proto.
 */
export declare const fileDesc_extra_msg_scalar: GenDescFile;

/**
 * @generated from message spec.ScalarValuesMessage
 */
export declare type ScalarValuesMessage = Message<"spec.ScalarValuesMessage"> & {
  /**
   * @generated from field: double double_field = 1;
   */
  doubleField: number;

  /**
   * @generated from field: float float_field = 2;
   */
  floatField: number;

  /**
   * @generated from field: int64 int64_field = 3;
   */
  int64Field: bigint;

  /**
   * @generated from field: uint64 uint64_field = 4;
   */
  uint64Field: bigint;

  /**
   * @generated from field: int32 int32_field = 5;
   */
  int32Field: number;

  /**
   * @generated from field: fixed64 fixed64_field = 6;
   */
  fixed64Field: bigint;

  /**
   * @generated from field: fixed32 fixed32_field = 7;
   */
  fixed32Field: number;

  /**
   * @generated from field: bool bool_field = 8;
   */
  boolField: boolean;

  /**
   * @generated from field: string string_field = 9;
   */
  stringField: string;

  /**
   * @generated from field: bytes bytes_field = 11;
   */
  bytesField: Uint8Array;

  /**
   * @generated from field: uint32 uint32_field = 12;
   */
  uint32Field: number;

  /**
   * @generated from field: sfixed32 sfixed32_field = 14;
   */
  sfixed32Field: number;

  /**
   * @generated from field: sfixed64 sfixed64_field = 15;
   */
  sfixed64Field: bigint;

  /**
   * @generated from field: sint32 sint32_field = 16;
   */
  sint32Field: number;

  /**
   * @generated from field: sint64 sint64_field = 17;
   */
  sint64Field: bigint;
};

/**
 * Describes the message spec.ScalarValuesMessage.
 * Use `create(ScalarValuesMessageDesc)` to create a new message.
 */
export declare const ScalarValuesMessageDesc: GenDescMessage<ScalarValuesMessage>;

/**
 * @generated from message spec.RepeatedScalarValuesMessage
 */
export declare type RepeatedScalarValuesMessage = Message<"spec.RepeatedScalarValuesMessage"> & {
  /**
   * @generated from field: repeated double double_field = 1;
   */
  doubleField: number[];

  /**
   * @generated from field: repeated float float_field = 2;
   */
  floatField: number[];

  /**
   * @generated from field: repeated int64 int64_field = 3;
   */
  int64Field: bigint[];

  /**
   * @generated from field: repeated uint64 uint64_field = 4;
   */
  uint64Field: bigint[];

  /**
   * @generated from field: repeated int32 int32_field = 5;
   */
  int32Field: number[];

  /**
   * @generated from field: repeated fixed64 fixed64_field = 6;
   */
  fixed64Field: bigint[];

  /**
   * @generated from field: repeated fixed32 fixed32_field = 7;
   */
  fixed32Field: number[];

  /**
   * @generated from field: repeated bool bool_field = 8;
   */
  boolField: boolean[];

  /**
   * @generated from field: repeated string string_field = 9;
   */
  stringField: string[];

  /**
   * @generated from field: repeated bytes bytes_field = 11;
   */
  bytesField: Uint8Array[];

  /**
   * @generated from field: repeated uint32 uint32_field = 12;
   */
  uint32Field: number[];

  /**
   * @generated from field: repeated sfixed32 sfixed32_field = 14;
   */
  sfixed32Field: number[];

  /**
   * @generated from field: repeated sfixed64 sfixed64_field = 15;
   */
  sfixed64Field: bigint[];

  /**
   * @generated from field: repeated sint32 sint32_field = 16;
   */
  sint32Field: number[];

  /**
   * @generated from field: repeated sint64 sint64_field = 17;
   */
  sint64Field: bigint[];
};

/**
 * Describes the message spec.RepeatedScalarValuesMessage.
 * Use `create(RepeatedScalarValuesMessageDesc)` to create a new message.
 */
export declare const RepeatedScalarValuesMessageDesc: GenDescMessage<RepeatedScalarValuesMessage>;

