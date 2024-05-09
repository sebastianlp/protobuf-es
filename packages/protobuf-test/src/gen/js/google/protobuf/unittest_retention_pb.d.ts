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
// @generated from file google/protobuf/unittest_retention.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

import type { GenDescEnum, GenDescExtension, GenDescFile, GenDescMessage, GenDescService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { EnumOptions, EnumValueOptions, ExtensionRangeOptions, FieldOptions, FileOptions, MessageOptions, MethodOptions, OneofOptions, ServiceOptions } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/protobuf/unittest_retention.proto.
 */
export declare const fileDesc_google_protobuf_unittest_retention: GenDescFile;

/**
 * Retention attributes set on fields nested within a message
 *
 * @generated from message protobuf_unittest.OptionsMessage
 */
export declare type OptionsMessage = Message<"protobuf_unittest.OptionsMessage"> & {
  /**
   * @generated from field: optional int32 plain_field = 1;
   */
  plainField: number;

  /**
   * @generated from field: optional int32 runtime_retention_field = 2;
   */
  runtimeRetentionField: number;

  /**
   * @generated from field: optional int32 source_retention_field = 3;
   */
  sourceRetentionField: number;
};

/**
 * Describes the message protobuf_unittest.OptionsMessage.
 * Use `create(OptionsMessageDesc)` to create a new message.
 */
export declare const OptionsMessageDesc: GenDescMessage<OptionsMessage>;

/**
 * @generated from message protobuf_unittest.Extendee
 */
export declare type Extendee = Message<"protobuf_unittest.Extendee"> & {
};

/**
 * Describes the message protobuf_unittest.Extendee.
 * Use `create(ExtendeeDesc)` to create a new message.
 */
export declare const ExtendeeDesc: GenDescMessage<Extendee>;

/**
 * @generated from message protobuf_unittest.TopLevelMessage
 */
export declare type TopLevelMessage = Message<"protobuf_unittest.TopLevelMessage"> & {
  /**
   * @generated from field: optional float f = 1;
   */
  f: number;

  /**
   * @generated from oneof protobuf_unittest.TopLevelMessage.o
   */
  o: {
    /**
     * @generated from field: int64 i = 2;
     */
    value: bigint;
    case: "i";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message protobuf_unittest.TopLevelMessage.
 * Use `create(TopLevelMessageDesc)` to create a new message.
 */
export declare const TopLevelMessageDesc: GenDescMessage<TopLevelMessage>;

/**
 * @generated from message protobuf_unittest.TopLevelMessage.NestedMessage
 */
export declare type TopLevelMessage_NestedMessage = Message<"protobuf_unittest.TopLevelMessage.NestedMessage"> & {
};

/**
 * Describes the message protobuf_unittest.TopLevelMessage.NestedMessage.
 * Use `create(TopLevelMessage_NestedMessageDesc)` to create a new message.
 */
export declare const TopLevelMessage_NestedMessageDesc: GenDescMessage<TopLevelMessage_NestedMessage>;

/**
 * @generated from enum protobuf_unittest.TopLevelMessage.NestedEnum
 */
export enum TopLevelMessage_NestedEnum {
  /**
   * @generated from enum value: NESTED_UNKNOWN = 0;
   */
  NESTED_UNKNOWN = 0,
}

/**
 * Describes the enum protobuf_unittest.TopLevelMessage.NestedEnum.
 */
export declare const TopLevelMessage_NestedEnumDesc: GenDescEnum<TopLevelMessage_NestedEnum>;

/**
 * @generated from extension: optional string s = 2;
 */
export declare const TopLevelMessage_s: GenDescExtension<Extendee, string>;

/**
 * @generated from enum protobuf_unittest.TopLevelEnum
 */
export enum TopLevelEnum {
  /**
   * @generated from enum value: TOP_LEVEL_UNKNOWN = 0;
   */
  TOP_LEVEL_UNKNOWN = 0,
}

/**
 * Describes the enum protobuf_unittest.TopLevelEnum.
 */
export declare const TopLevelEnumDesc: GenDescEnum<TopLevelEnum>;

/**
 * @generated from service protobuf_unittest.Service
 */
export declare const Service: GenDescService<{
  /**
   * @generated from rpc protobuf_unittest.Service.DoStuff
   */
  doStuff: {
    kind: "unary";
    I: TopLevelMessage;
    O: TopLevelMessage;
  },
}
>;

/**
 * @generated from extension: optional int32 plain_option = 505092806;
 */
export declare const plain_option: GenDescExtension<FileOptions, number>;

/**
 * @generated from extension: optional int32 runtime_retention_option = 505039132;
 */
export declare const runtime_retention_option: GenDescExtension<FileOptions, number>;

/**
 * @generated from extension: optional int32 source_retention_option = 504878676;
 */
export declare const source_retention_option: GenDescExtension<FileOptions, number>;

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage file_option = 504871168;
 */
export declare const file_option: GenDescExtension<FileOptions, OptionsMessage>;

/**
 * @generated from extension: repeated protobuf_unittest.OptionsMessage repeated_options = 504823570;
 */
export declare const repeated_options: GenDescExtension<FileOptions, OptionsMessage[]>;

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage extension_range_option = 504822148;
 */
export declare const extension_range_option: GenDescExtension<ExtensionRangeOptions, OptionsMessage>;

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage message_option = 504820819;
 */
export declare const message_option: GenDescExtension<MessageOptions, OptionsMessage>;

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage field_option = 504589219;
 */
export declare const field_option: GenDescExtension<FieldOptions, OptionsMessage>;

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage oneof_option = 504479153;
 */
export declare const oneof_option: GenDescExtension<OneofOptions, OptionsMessage>;

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage enum_option = 504451567;
 */
export declare const enum_option: GenDescExtension<EnumOptions, OptionsMessage>;

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage enum_entry_option = 504450522;
 */
export declare const enum_entry_option: GenDescExtension<EnumValueOptions, OptionsMessage>;

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage service_option = 504387709;
 */
export declare const service_option: GenDescExtension<ServiceOptions, OptionsMessage>;

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage method_option = 504349420;
 */
export declare const method_option: GenDescExtension<MethodOptions, OptionsMessage>;

/**
 * @generated from extension: optional int32 i = 1;
 */
export declare const i: GenDescExtension<Extendee, number>;

