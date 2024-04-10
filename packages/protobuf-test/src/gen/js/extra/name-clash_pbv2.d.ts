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

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/name-clash.proto (package spec, syntax proto3)
/* eslint-disable */

import type { DescFile, MethodKind } from "@bufbuild/protobuf";
import type { Message as Message$1 } from "@bufbuild/protobuf/next";
import type { User as User$1 } from "./example_pbv2.js";
import type { GenDescEnum, GenDescMessage, GenDescService } from "@bufbuild/protobuf/next/codegenv1";

export declare const fileDesc_extra_name_clash: DescFile;

/**
 * This message class will clash with the imported message class
 *
 * @generated from message spec.User
 */
export declare type User = Message$1<"spec.User"> & {
  /**
   * Reference the import with the same name to trigger a clash
   *
   * @generated from field: docs.User u = 1;
   */
  u?: User$1;
};

// Describes the message spec.User. Use `create(UserDesc)` to create a new User.
export declare const UserDesc: GenDescMessage<User>;

/**
 * @generated from message spec.ReservedPropertyNames
 */
export declare type ReservedPropertyNames = Message$1<"spec.ReservedPropertyNames"> & {
};

// Describes the message spec.ReservedPropertyNames. Use `create(ReservedPropertyNamesDesc)` to create a new ReservedPropertyNames.
export declare const ReservedPropertyNamesDesc: GenDescMessage<ReservedPropertyNames>;

/**
 * @generated from message spec.ReservedPropertyNames.BuiltIn
 */
export declare type ReservedPropertyNames_BuiltIn = Message$1<"spec.ReservedPropertyNames.BuiltIn"> & {
  /**
   * built-in constructor()
   *
   * @generated from field: string constructor = 2;
   */
  constructor$: string;

  /**
   * built-in toString()
   *
   * @generated from field: string to_string = 3;
   */
  toString$: string;

  /**
   * built-in toJSON()
   *
   * @generated from field: string to_JSON = 4;
   */
  toJSON$: string;

  /**
   * built-in valueOf()
   *
   * @generated from field: string value_of = 5;
   */
  valueOf$: string;
};

// Describes the message spec.ReservedPropertyNames.BuiltIn. Use `create(ReservedPropertyNames_BuiltInDesc)` to create a new ReservedPropertyNames_BuiltIn.
export declare const ReservedPropertyNames_BuiltInDesc: GenDescMessage<ReservedPropertyNames_BuiltIn>;

/**
 * @generated from message spec.ReservedPropertyNames.Runtime
 */
export declare type ReservedPropertyNames_Runtime = Message$1<"spec.ReservedPropertyNames.Runtime"> & {
  /**
   * runtime toJson()
   *
   * @generated from field: string to_json = 4;
   */
  toJson: string;

  /**
   * runtime type()
   *
   * @generated from field: string type = 6;
   */
  type: string;

  /**
   * runtime clone()
   *
   * @generated from field: string clone = 7;
   */
  clone: string;

  /**
   * runtime equals()
   *
   * @generated from field: string equals = 8;
   */
  equals: string;

  /**
   * runtime fromBinary()
   *
   * @generated from field: string from_binary = 9;
   */
  fromBinary: string;

  /**
   * runtime fromJson()
   *
   * @generated from field: string from_json = 10;
   */
  fromJson: string;

  /**
   * runtime fromJsonString()
   *
   * @generated from field: string from_json_string = 11;
   */
  fromJsonString: string;

  /**
   * runtime toBinary()
   *
   * @generated from field: string to_binary = 12;
   */
  toBinary: string;

  /**
   * runtime toJsonString()
   *
   * @generated from field: string to_json_string = 14;
   */
  toJsonString: string;
};

// Describes the message spec.ReservedPropertyNames.Runtime. Use `create(ReservedPropertyNames_RuntimeDesc)` to create a new ReservedPropertyNames_Runtime.
export declare const ReservedPropertyNames_RuntimeDesc: GenDescMessage<ReservedPropertyNames_Runtime>;

/**
 * @generated from message spec.ReservedPropertyNames.OneofBultIn
 */
export declare type ReservedPropertyNames_OneofBultIn = Message$1<"spec.ReservedPropertyNames.OneofBultIn"> & {
  /**
   * @generated from oneof spec.ReservedPropertyNames.OneofBultIn.built_in
   */
  builtIn: {
    /**
     * @generated from field: string constructor = 1;
     */
    value: string;
    case: "constructor";
  } | {
    /**
     * @generated from field: string to_string = 2;
     */
    value: string;
    case: "toString";
  } | {
    /**
     * @generated from field: string to_JSON = 3;
     */
    value: string;
    case: "toJSON";
  } | {
    /**
     * @generated from field: string value_of = 4;
     */
    value: string;
    case: "valueOf";
  } | { case: undefined; value?: undefined };
};

// Describes the message spec.ReservedPropertyNames.OneofBultIn. Use `create(ReservedPropertyNames_OneofBultInDesc)` to create a new ReservedPropertyNames_OneofBultIn.
export declare const ReservedPropertyNames_OneofBultInDesc: GenDescMessage<ReservedPropertyNames_OneofBultIn>;

/**
 * @generated from message spec.ReservedPropertyNames.OneofRuntime
 */
export declare type ReservedPropertyNames_OneofRuntime = Message$1<"spec.ReservedPropertyNames.OneofRuntime"> & {
  /**
   * @generated from oneof spec.ReservedPropertyNames.OneofRuntime.runtime
   */
  runtime: {
    /**
     * @generated from field: string to_json = 5;
     */
    value: string;
    case: "toJson";
  } | {
    /**
     * @generated from field: string type = 6;
     */
    value: string;
    case: "type";
  } | {
    /**
     * @generated from field: string clone = 7;
     */
    value: string;
    case: "clone";
  } | {
    /**
     * @generated from field: string equals = 8;
     */
    value: string;
    case: "equals";
  } | {
    /**
     * @generated from field: string from_binary = 9;
     */
    value: string;
    case: "fromBinary";
  } | {
    /**
     * @generated from field: string from_json = 10;
     */
    value: string;
    case: "fromJson";
  } | {
    /**
     * @generated from field: string from_json_string = 11;
     */
    value: string;
    case: "fromJsonString";
  } | {
    /**
     * @generated from field: string to_binary = 12;
     */
    value: string;
    case: "toBinary";
  } | {
    /**
     * @generated from field: string to_json_string = 14;
     */
    value: string;
    case: "toJsonString";
  } | { case: undefined; value?: undefined };
};

// Describes the message spec.ReservedPropertyNames.OneofRuntime. Use `create(ReservedPropertyNames_OneofRuntimeDesc)` to create a new ReservedPropertyNames_OneofRuntime.
export declare const ReservedPropertyNames_OneofRuntimeDesc: GenDescMessage<ReservedPropertyNames_OneofRuntime>;

/**
 * @generated from enum spec.ReservedPropertyNames.EnumBuiltIn
 */
export enum ReservedPropertyNames_EnumBuiltIn {
  /**
   * @generated from enum value: constructor = 0;
   */
  constructor$ = 0,

  /**
   * @generated from enum value: toString = 1;
   */
  toString$ = 1,

  /**
   * @generated from enum value: toJSON = 2;
   */
  toJSON$ = 2,

  /**
   * @generated from enum value: valueOf = 3;
   */
  valueOf$ = 3,
}

// Describes the enum spec.ReservedPropertyNames.EnumBuiltIn.
export declare const ReservedPropertyNames_EnumBuiltInDesc: GenDescEnum<ReservedPropertyNames_EnumBuiltIn>;

/**
 * @generated from enum spec.ReservedPropertyNames.EnumBuiltInPrefixed
 */
export enum ReservedPropertyNames_EnumBuiltInPrefixed {
  /**
   * @generated from enum value: ENUM_BUILT_IN_PREFIXED_constructor = 0;
   */
  constructor$ = 0,

  /**
   * @generated from enum value: ENUM_BUILT_IN_PREFIXED_toString = 1;
   */
  toString$ = 1,

  /**
   * @generated from enum value: ENUM_BUILT_IN_PREFIXED_toJSON = 2;
   */
  toJSON$ = 2,

  /**
   * @generated from enum value: ENUM_BUILT_IN_PREFIXED_valueOf = 3;
   */
  valueOf$ = 3,
}

// Describes the enum spec.ReservedPropertyNames.EnumBuiltInPrefixed.
export declare const ReservedPropertyNames_EnumBuiltInPrefixedDesc: GenDescEnum<ReservedPropertyNames_EnumBuiltInPrefixed>;

/**
 * @generated from enum spec.ReservedPropertyNames.EnumRuntime
 */
export enum ReservedPropertyNames_EnumRuntime {
  /**
   * @generated from enum value: toJson = 0;
   */
  toJson = 0,

  /**
   * @generated from enum value: type = 6;
   */
  type = 6,

  /**
   * @generated from enum value: clone = 7;
   */
  clone = 7,

  /**
   * @generated from enum value: equals = 8;
   */
  equals = 8,

  /**
   * @generated from enum value: fromBinary = 9;
   */
  fromBinary = 9,

  /**
   * @generated from enum value: fromJson = 10;
   */
  fromJson = 10,

  /**
   * @generated from enum value: fromJsonString = 11;
   */
  fromJsonString = 11,

  /**
   * @generated from enum value: toBinary = 12;
   */
  toBinary = 12,

  /**
   * @generated from enum value: toJsonString = 14;
   */
  toJsonString = 14,
}

// Describes the enum spec.ReservedPropertyNames.EnumRuntime.
export declare const ReservedPropertyNames_EnumRuntimeDesc: GenDescEnum<ReservedPropertyNames_EnumRuntime>;

/**
 * reserved identifier
 *
 * @generated from message spec.interface
 */
export declare type interface$ = Message$1<"spec.interface"> & {
};

// Describes the message spec.interface. Use `create(interface$Desc)` to create a new interface$.
export declare const interface$Desc: GenDescMessage<interface$>;

/**
 * reserved identifier
 *
 * @generated from message spec.function
 */
export declare type function$ = Message$1<"spec.function"> & {
};

// Describes the message spec.function. Use `create(function$Desc)` to create a new function$.
export declare const function$Desc: GenDescMessage<function$>;

/**
 * reserved identifier
 *
 * @generated from message spec.instanceof
 */
export declare type instanceof$ = Message$1<"spec.instanceof"> & {
};

// Describes the message spec.instanceof. Use `create(instanceof$Desc)` to create a new instanceof$.
export declare const instanceof$Desc: GenDescMessage<instanceof$>;

/**
 * reserved identifier
 *
 * @generated from message spec.switch
 */
export declare type switch$ = Message$1<"spec.switch"> & {
};

// Describes the message spec.switch. Use `create(switch$Desc)` to create a new switch$.
export declare const switch$Desc: GenDescMessage<switch$>;

/**
 * reserved identifier
 *
 * @generated from message spec.case
 */
export declare type case$ = Message$1<"spec.case"> & {
};

// Describes the message spec.case. Use `create(case$Desc)` to create a new case$.
export declare const case$Desc: GenDescMessage<case$>;

/**
 * reserved identifier
 *
 * @generated from message spec.return
 */
export declare type return$ = Message$1<"spec.return"> & {
};

// Describes the message spec.return. Use `create(return$Desc)` to create a new return$.
export declare const return$Desc: GenDescMessage<return$>;

/**
 * used by runtime
 *
 * @generated from message spec.Message
 */
export declare type Message = Message$1<"spec.Message"> & {
};

// Describes the message spec.Message. Use `create(MessageDesc)` to create a new Message.
export declare const MessageDesc: GenDescMessage<Message>;

/**
 * used by runtime
 *
 * @generated from message spec.PartialMessage
 */
export declare type PartialMessage = Message$1<"spec.PartialMessage"> & {
};

// Describes the message spec.PartialMessage. Use `create(PartialMessageDesc)` to create a new PartialMessage.
export declare const PartialMessageDesc: GenDescMessage<PartialMessage>;

/**
 * used by runtime
 *
 * @generated from message spec.PlainMessage
 */
export declare type PlainMessage = Message$1<"spec.PlainMessage"> & {
};

// Describes the message spec.PlainMessage. Use `create(PlainMessageDesc)` to create a new PlainMessage.
export declare const PlainMessageDesc: GenDescMessage<PlainMessage>;

/**
 * clash with global type "Error"
 * either this message name is escaped in generated code, or the generated
 * code must escape its calls to the global error object (i.e. `new Error`)
 *
 * @generated from message spec.Error
 */
export declare type Error = Message$1<"spec.Error"> & {
  /**
   * @generated from field: string field_name = 1;
   */
  fieldName: string;

  /**
   * @generated from field: string message = 2;
   */
  message: string;
};

// Describes the message spec.Error. Use `create(ErrorDesc)` to create a new Error.
export declare const ErrorDesc: GenDescMessage<Error>;

/**
 * clash with global type
 *
 * @generated from message spec.Object
 */
export declare type Object$ = Message$1<"spec.Object"> & {
};

// Describes the message spec.Object. Use `create(Object$Desc)` to create a new Object$.
export declare const Object$Desc: GenDescMessage<Object$>;

/**
 * @generated from message spec.object
 */
export declare type object$ = Message$1<"spec.object"> & {
};

// Describes the message spec.object. Use `create(object$Desc)` to create a new object$.
export declare const object$Desc: GenDescMessage<object$>;

/**
 * clash with global type
 *
 * @generated from message spec.array
 */
export declare type array = Message$1<"spec.array"> & {
};

// Describes the message spec.array. Use `create(arrayDesc)` to create a new array.
export declare const arrayDesc: GenDescMessage<array>;

/**
 * clash with global type
 *
 * @generated from message spec.string
 */
export declare type string$ = Message$1<"spec.string"> & {
};

// Describes the message spec.string. Use `create(string$Desc)` to create a new string$.
export declare const string$Desc: GenDescMessage<string$>;

/**
 * clash with global type
 *
 * @generated from message spec.number
 */
export declare type number$ = Message$1<"spec.number"> & {
};

// Describes the message spec.number. Use `create(number$Desc)` to create a new number$.
export declare const number$Desc: GenDescMessage<number$>;

/**
 * clash with global type
 *
 * @generated from message spec.boolean
 */
export declare type boolean$ = Message$1<"spec.boolean"> & {
};

// Describes the message spec.boolean. Use `create(boolean$Desc)` to create a new boolean$.
export declare const boolean$Desc: GenDescMessage<boolean$>;

/**
 * clash with global type
 *
 * @generated from message spec.bigint
 */
export declare type bigint$ = Message$1<"spec.bigint"> & {
};

// Describes the message spec.bigint. Use `create(bigint$Desc)` to create a new bigint$.
export declare const bigint$Desc: GenDescMessage<bigint$>;

/**
 * clash with global type
 *
 * @generated from message spec.Uint8Array
 */
export declare type Uint8Array$ = Message$1<"spec.Uint8Array"> & {
};

// Describes the message spec.Uint8Array. Use `create(Uint8Array$Desc)` to create a new Uint8Array$.
export declare const Uint8Array$Desc: GenDescMessage<Uint8Array$>;

/**
 * clash with global type
 *
 * @generated from message spec.Array
 */
export declare type Array = Message$1<"spec.Array"> & {
};

// Describes the message spec.Array. Use `create(ArrayDesc)` to create a new Array.
export declare const ArrayDesc: GenDescMessage<Array>;

/**
 * clash with global type
 *
 * @generated from message spec.String
 */
export declare type String = Message$1<"spec.String"> & {
};

// Describes the message spec.String. Use `create(StringDesc)` to create a new String.
export declare const StringDesc: GenDescMessage<String>;

/**
 * clash with global type
 *
 * @generated from message spec.Number
 */
export declare type Number = Message$1<"spec.Number"> & {
};

// Describes the message spec.Number. Use `create(NumberDesc)` to create a new Number.
export declare const NumberDesc: GenDescMessage<Number>;

/**
 * clash with global type
 *
 * @generated from message spec.Boolean
 */
export declare type Boolean = Message$1<"spec.Boolean"> & {
};

// Describes the message spec.Boolean. Use `create(BooleanDesc)` to create a new Boolean.
export declare const BooleanDesc: GenDescMessage<Boolean>;

/**
 * clash with global type
 *
 * @generated from message spec.BigInt
 */
export declare type BigInt = Message$1<"spec.BigInt"> & {
};

// Describes the message spec.BigInt. Use `create(BigIntDesc)` to create a new BigInt.
export declare const BigIntDesc: GenDescMessage<BigInt>;

/**
 * @generated from message spec.ClashParent
 */
export declare type ClashParent = Message$1<"spec.ClashParent"> & {
};

// Describes the message spec.ClashParent. Use `create(ClashParentDesc)` to create a new ClashParent.
export declare const ClashParentDesc: GenDescMessage<ClashParent>;

/**
 * should clash with message ClashParent_ClashChild
 *
 * @generated from message spec.ClashParent.ClashChild
 */
export declare type ClashParent_ClashChild = Message$1<"spec.ClashParent.ClashChild"> & {
};

// Describes the message spec.ClashParent.ClashChild. Use `create(ClashParent_ClashChildDesc)` to create a new ClashParent_ClashChild.
export declare const ClashParent_ClashChildDesc: GenDescMessage<ClashParent_ClashChild>;

/**
 * @generated from message spec.NoClashFields
 */
export declare type NoClashFields = Message$1<"spec.NoClashFields"> & {
  /**
   * ok as object property
   *
   * @generated from field: string const = 1;
   */
  const: string;

  /**
   * ok as object property
   *
   * @generated from field: string switch = 2;
   */
  switch: string;

  /**
   * ok as object property
   *
   * @generated from field: string case = 3;
   */
  case: string;

  /**
   * ok as object property
   *
   * @generated from field: string function = 4;
   */
  function: string;

  /**
   * ok as object property
   *
   * @generated from field: string interface = 5;
   */
  interface: string;

  /**
   * ok as object property
   *
   * @generated from field: string return = 6;
   */
  return: string;
};

// Describes the message spec.NoClashFields. Use `create(NoClashFieldsDesc)` to create a new NoClashFields.
export declare const NoClashFieldsDesc: GenDescMessage<NoClashFields>;

/**
 * @generated from message spec.NoClashOneof
 */
export declare type NoClashOneof = Message$1<"spec.NoClashOneof"> & {
  /**
   * @generated from oneof spec.NoClashOneof.kind
   */
  kind: {
    /**
     * ok as object property
     *
     * @generated from field: string const = 1;
     */
    value: string;
    case: "const";
  } | {
    /**
     * ok as object property
     *
     * @generated from field: string switch = 2;
     */
    value: string;
    case: "switch";
  } | {
    /**
     * ok as object property
     *
     * @generated from field: string case = 3;
     */
    value: string;
    case: "case";
  } | {
    /**
     * ok as object property
     *
     * @generated from field: string function = 4;
     */
    value: string;
    case: "function";
  } | {
    /**
     * ok as object property
     *
     * @generated from field: string interface = 5;
     */
    value: string;
    case: "interface";
  } | {
    /**
     * ok as object property
     *
     * @generated from field: string return = 6;
     */
    value: string;
    case: "return";
  } | { case: undefined; value?: undefined };
};

// Describes the message spec.NoClashOneof. Use `create(NoClashOneofDesc)` to create a new NoClashOneof.
export declare const NoClashOneofDesc: GenDescMessage<NoClashOneof>;

/**
 * @generated from message spec.NoClashOneofADT
 */
export declare type NoClashOneofADT = Message$1<"spec.NoClashOneofADT"> & {
  /**
   * @generated from field: spec.NoClashOneofADT.M m = 1;
   */
  m?: NoClashOneofADT_M;
};

// Describes the message spec.NoClashOneofADT. Use `create(NoClashOneofADTDesc)` to create a new NoClashOneofADT.
export declare const NoClashOneofADTDesc: GenDescMessage<NoClashOneofADT>;

/**
 * @generated from message spec.NoClashOneofADT.M
 */
export declare type NoClashOneofADT_M = Message$1<"spec.NoClashOneofADT.M"> & {
  /**
   * @generated from field: string case = 1;
   */
  case: string;

  /**
   * @generated from field: optional string value = 2;
   */
  value?: string;
};

// Describes the message spec.NoClashOneofADT.M. Use `create(NoClashOneofADT_MDesc)` to create a new NoClashOneofADT_M.
export declare const NoClashOneofADT_MDesc: GenDescMessage<NoClashOneofADT_M>;

/**
 * just here as a "namespace" for the enum
 *
 * @generated from message spec.NoClashEnumWrap
 */
export declare type NoClashEnumWrap = Message$1<"spec.NoClashEnumWrap"> & {
};

// Describes the message spec.NoClashEnumWrap. Use `create(NoClashEnumWrapDesc)` to create a new NoClashEnumWrap.
export declare const NoClashEnumWrapDesc: GenDescMessage<NoClashEnumWrap>;

/**
 * @generated from enum spec.NoClashEnumWrap.X
 */
export enum NoClashEnumWrap_X {
  /**
   * ok as object property
   *
   * @generated from enum value: instanceof = 0;
   */
  instanceof = 0,

  /**
   * ok as object property
   *
   * @generated from enum value: switch = 1;
   */
  switch = 1,

  /**
   * ok as object property
   *
   * @generated from enum value: case = 3;
   */
  case = 3,

  /**
   * ok as object property
   *
   * @generated from enum value: function = 4;
   */
  function = 4,

  /**
   * ok as object property
   *
   * @generated from enum value: interface = 5;
   */
  interface = 5,

  /**
   * ok as object property
   *
   * @generated from enum value: return = 6;
   */
  return = 6,
}

// Describes the enum spec.NoClashEnumWrap.X.
export declare const NoClashEnumWrap_XDesc: GenDescEnum<NoClashEnumWrap_X>;

/**
 * @generated from service spec.ReservedPropertyNamesService
 */
export declare const ReservedPropertyNamesService: GenDescService<{
  /**
   * @generated from rpc spec.ReservedPropertyNamesService.constructor
   */
  constructor$: {
    kind: MethodKind.Unary;
    I: Error;
    O: Error;
  },
  /**
   * @generated from rpc spec.ReservedPropertyNamesService.toString
   */
  toString$: {
    kind: MethodKind.Unary;
    I: Error;
    O: Error;
  },
  /**
   * @generated from rpc spec.ReservedPropertyNamesService.to_JSON
   */
  to_JSON: {
    kind: MethodKind.Unary;
    I: Error;
    O: Error;
  },
  /**
   * @generated from rpc spec.ReservedPropertyNamesService.value_of
   */
  value_of: {
    kind: MethodKind.Unary;
    I: Error;
    O: Error;
  },
}
>;

