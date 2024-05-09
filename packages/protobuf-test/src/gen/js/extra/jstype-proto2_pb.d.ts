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

// @generated by protoc-gen-es v2.0.0-alpha.1 with parameter "ts_nocheck=false,target=js+dts,import_extension=.js"
// @generated from file extra/jstype-proto2.proto (package spec, syntax proto2)
/* eslint-disable */

import type { GenDescFile, GenDescMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/jstype-proto2.proto.
 */
export declare const fileDesc_extra_jstype_proto2: GenDescFile;

/**
 * @generated from message spec.JSTypeProto2OmittedMessage
 */
export declare type JSTypeProto2OmittedMessage = Message<"spec.JSTypeProto2OmittedMessage"> & {
  /**
   * @generated from field: optional fixed64 fixed64_field = 1;
   */
  fixed64Field: bigint;

  /**
   * @generated from field: optional int64 int64_field = 3;
   */
  int64Field: bigint;

  /**
   * @generated from field: optional sfixed64 sfixed64_field = 4;
   */
  sfixed64Field: bigint;

  /**
   * @generated from field: optional sint64 sint64_field = 5;
   */
  sint64Field: bigint;

  /**
   * @generated from field: optional uint64 uint64_field = 6;
   */
  uint64Field: bigint;

  /**
   * @generated from field: repeated fixed64 repeated_fixed64_field = 11;
   */
  repeatedFixed64Field: bigint[];

  /**
   * @generated from field: repeated int64 repeated_int64_field = 12;
   */
  repeatedInt64Field: bigint[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64_field = 13;
   */
  repeatedSfixed64Field: bigint[];

  /**
   * @generated from field: repeated sint64 repeated_sint64_field = 14;
   */
  repeatedSint64Field: bigint[];

  /**
   * @generated from field: repeated uint64 repeated_uint64_field = 15;
   */
  repeatedUint64Field: bigint[];
};

/**
 * Describes the message spec.JSTypeProto2OmittedMessage.
 * Use `create(JSTypeProto2OmittedMessageDesc)` to create a new message.
 */
export declare const JSTypeProto2OmittedMessageDesc: GenDescMessage<JSTypeProto2OmittedMessage>;

/**
 * @generated from message spec.JSTypeProto2NormalMessage
 */
export declare type JSTypeProto2NormalMessage = Message<"spec.JSTypeProto2NormalMessage"> & {
  /**
   * @generated from field: optional fixed64 fixed64_field = 1 [jstype = JS_NORMAL];
   */
  fixed64Field: bigint;

  /**
   * @generated from field: optional int64 int64_field = 3 [jstype = JS_NORMAL];
   */
  int64Field: bigint;

  /**
   * @generated from field: optional sfixed64 sfixed64_field = 4 [jstype = JS_NORMAL];
   */
  sfixed64Field: bigint;

  /**
   * @generated from field: optional sint64 sint64_field = 5 [jstype = JS_NORMAL];
   */
  sint64Field: bigint;

  /**
   * @generated from field: optional uint64 uint64_field = 6 [jstype = JS_NORMAL];
   */
  uint64Field: bigint;

  /**
   * @generated from field: repeated fixed64 repeated_fixed64_field = 11 [jstype = JS_NORMAL];
   */
  repeatedFixed64Field: bigint[];

  /**
   * @generated from field: repeated int64 repeated_int64_field = 12 [jstype = JS_NORMAL];
   */
  repeatedInt64Field: bigint[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64_field = 13 [jstype = JS_NORMAL];
   */
  repeatedSfixed64Field: bigint[];

  /**
   * @generated from field: repeated sint64 repeated_sint64_field = 14 [jstype = JS_NORMAL];
   */
  repeatedSint64Field: bigint[];

  /**
   * @generated from field: repeated uint64 repeated_uint64_field = 15 [jstype = JS_NORMAL];
   */
  repeatedUint64Field: bigint[];
};

/**
 * Describes the message spec.JSTypeProto2NormalMessage.
 * Use `create(JSTypeProto2NormalMessageDesc)` to create a new message.
 */
export declare const JSTypeProto2NormalMessageDesc: GenDescMessage<JSTypeProto2NormalMessage>;

/**
 * @generated from message spec.JSTypeProto2StringMessage
 */
export declare type JSTypeProto2StringMessage = Message<"spec.JSTypeProto2StringMessage"> & {
  /**
   * @generated from field: optional fixed64 fixed64_field = 1 [jstype = JS_STRING];
   */
  fixed64Field: string;

  /**
   * @generated from field: optional int64 int64_field = 3 [jstype = JS_STRING];
   */
  int64Field: string;

  /**
   * @generated from field: optional sfixed64 sfixed64_field = 4 [jstype = JS_STRING];
   */
  sfixed64Field: string;

  /**
   * @generated from field: optional sint64 sint64_field = 5 [jstype = JS_STRING];
   */
  sint64Field: string;

  /**
   * @generated from field: optional uint64 uint64_field = 6 [jstype = JS_STRING];
   */
  uint64Field: string;

  /**
   * @generated from field: repeated fixed64 repeated_fixed64_field = 11 [jstype = JS_STRING];
   */
  repeatedFixed64Field: string[];

  /**
   * @generated from field: repeated int64 repeated_int64_field = 12 [jstype = JS_STRING];
   */
  repeatedInt64Field: string[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64_field = 13 [jstype = JS_STRING];
   */
  repeatedSfixed64Field: string[];

  /**
   * @generated from field: repeated sint64 repeated_sint64_field = 14 [jstype = JS_STRING];
   */
  repeatedSint64Field: string[];

  /**
   * @generated from field: repeated uint64 repeated_uint64_field = 15 [jstype = JS_STRING];
   */
  repeatedUint64Field: string[];
};

/**
 * Describes the message spec.JSTypeProto2StringMessage.
 * Use `create(JSTypeProto2StringMessageDesc)` to create a new message.
 */
export declare const JSTypeProto2StringMessageDesc: GenDescMessage<JSTypeProto2StringMessage>;

/**
 * @generated from message spec.JSTypeProto2NumberMessage
 */
export declare type JSTypeProto2NumberMessage = Message<"spec.JSTypeProto2NumberMessage"> & {
  /**
   * @generated from field: optional fixed64 fixed64_field = 1 [jstype = JS_NUMBER];
   */
  fixed64Field: bigint;

  /**
   * @generated from field: optional int64 int64_field = 3 [jstype = JS_NUMBER];
   */
  int64Field: bigint;

  /**
   * @generated from field: optional sfixed64 sfixed64_field = 4 [jstype = JS_NUMBER];
   */
  sfixed64Field: bigint;

  /**
   * @generated from field: optional sint64 sint64_field = 5 [jstype = JS_NUMBER];
   */
  sint64Field: bigint;

  /**
   * @generated from field: optional uint64 uint64_field = 6 [jstype = JS_NUMBER];
   */
  uint64Field: bigint;

  /**
   * @generated from field: repeated fixed64 repeated_fixed64_field = 11 [jstype = JS_NUMBER];
   */
  repeatedFixed64Field: bigint[];

  /**
   * @generated from field: repeated int64 repeated_int64_field = 12 [jstype = JS_NUMBER];
   */
  repeatedInt64Field: bigint[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64_field = 13 [jstype = JS_NUMBER];
   */
  repeatedSfixed64Field: bigint[];

  /**
   * @generated from field: repeated sint64 repeated_sint64_field = 14 [jstype = JS_NUMBER];
   */
  repeatedSint64Field: bigint[];

  /**
   * @generated from field: repeated uint64 repeated_uint64_field = 15 [jstype = JS_NUMBER];
   */
  repeatedUint64Field: bigint[];
};

/**
 * Describes the message spec.JSTypeProto2NumberMessage.
 * Use `create(JSTypeProto2NumberMessageDesc)` to create a new message.
 */
export declare const JSTypeProto2NumberMessageDesc: GenDescMessage<JSTypeProto2NumberMessage>;

