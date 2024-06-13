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
// @generated from file extra/name-clash.proto (package spec, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, serviceDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { fileDesc_extra_example } from "./example_pb.js";

/**
 * Describes the file extra/name-clash.proto.
 */
export const fileDesc_extra_name_clash = /*@__PURE__*/
  fileDesc("ChZleHRyYS9uYW1lLWNsYXNoLnByb3RvEgRzcGVjIh0KBFVzZXISFQoBdRgBIAEoCzIKLmRvY3MuVXNlciLtBwoVUmVzZXJ2ZWRQcm9wZXJ0eU5hbWVzGlQKB0J1aWx0SW4SEwoLY29uc3RydWN0b3IYAiABKAkSEQoJdG9fc3RyaW5nGAMgASgJEg8KB3RvX0pTT04YBCABKAkSEAoIdmFsdWVfb2YYBSABKAkatAEKB1J1bnRpbWUSDwoHdG9fanNvbhgEIAEoCRIMCgR0eXBlGAYgASgJEg0KBWNsb25lGAcgASgJEg4KBmVxdWFscxgIIAEoCRITCgtmcm9tX2JpbmFyeRgJIAEoCRIRCglmcm9tX2pzb24YCiABKAkSGAoQZnJvbV9qc29uX3N0cmluZxgLIAEoCRIRCgl0b19iaW5hcnkYDCABKAkSFgoOdG9fanNvbl9zdHJpbmcYDiABKAkabAoLT25lb2ZCdWx0SW4SFQoLY29uc3RydWN0b3IYASABKAlIABITCgl0b19zdHJpbmcYAiABKAlIABIRCgd0b19KU09OGAMgASgJSAASEgoIdmFsdWVfb2YYBCABKAlIAEIKCghidWlsdF9pbhrWAQoMT25lb2ZSdW50aW1lEhEKB3RvX2pzb24YBSABKAlIABIOCgR0eXBlGAYgASgJSAASDwoFY2xvbmUYByABKAlIABIQCgZlcXVhbHMYCCABKAlIABIVCgtmcm9tX2JpbmFyeRgJIAEoCUgAEhMKCWZyb21fanNvbhgKIAEoCUgAEhoKEGZyb21fanNvbl9zdHJpbmcYCyABKAlIABITCgl0b19iaW5hcnkYDCABKAlIABIYCg50b19qc29uX3N0cmluZxgOIAEoCUgAQgkKB3J1bnRpbWUiRQoLRW51bUJ1aWx0SW4SDwoLY29uc3RydWN0b3IQABIMCgh0b1N0cmluZxABEgoKBnRvSlNPThACEgsKB3ZhbHVlT2YQAyKpAQoTRW51bUJ1aWx0SW5QcmVmaXhlZBImCiJFTlVNX0JVSUxUX0lOX1BSRUZJWEVEX2NvbnN0cnVjdG9yEAASIwofRU5VTV9CVUlMVF9JTl9QUkVGSVhFRF90b1N0cmluZxABEiEKHUVOVU1fQlVJTFRfSU5fUFJFRklYRURfdG9KU09OEAISIgoeRU5VTV9CVUlMVF9JTl9QUkVGSVhFRF92YWx1ZU9mEAMijAEKC0VudW1SdW50aW1lEgoKBnRvSnNvbhAAEggKBHR5cGUQBhIJCgVjbG9uZRAHEgoKBmVxdWFscxAIEg4KCmZyb21CaW5hcnkQCRIMCghmcm9tSnNvbhAKEhIKDmZyb21Kc29uU3RyaW5nEAsSDAoIdG9CaW5hcnkQDBIQCgx0b0pzb25TdHJpbmcQDiILCglpbnRlcmZhY2UiCgoIZnVuY3Rpb24iDAoKaW5zdGFuY2VvZiIICgZzd2l0Y2giBgoEY2FzZSIICgZyZXR1cm4iCQoHTWVzc2FnZSIQCg5QYXJ0aWFsTWVzc2FnZSIOCgxQbGFpbk1lc3NhZ2UiLAoFRXJyb3ISEgoKZmllbGRfbmFtZRgBIAEoCRIPCgdtZXNzYWdlGAIgASgJIggKBk9iamVjdCIICgZvYmplY3QiBwoFYXJyYXkiCAoGc3RyaW5nIggKBm51bWJlciIJCgdib29sZWFuIggKBmJpZ2ludCIMCgpVaW50OEFycmF5IgcKBUFycmF5IggKBlN0cmluZyIICgZOdW1iZXIiCQoHQm9vbGVhbiIICgZCaWdJbnQiGwoLQ2xhc2hQYXJlbnQaDAoKQ2xhc2hDaGlsZCIYChZDbGFzaFBhcmVudF9DbGFzaENoaWxkIiMKIUVudW1EZXNjQ2xhc2hXaXRoTWVzc2FnZVNoYXBlRGVzYyIfCh1FbnVtU2hhcGVDbGFzaFdpdGhNZXNzYWdlRGVzYyJxCg1Ob0NsYXNoRmllbGRzEg0KBWNvbnN0GAEgASgJEg4KBnN3aXRjaBgCIAEoCRIMCgRjYXNlGAMgASgJEhAKCGZ1bmN0aW9uGAQgASgJEhEKCWludGVyZmFjZRgFIAEoCRIOCgZyZXR1cm4YBiABKAkihAEKDE5vQ2xhc2hPbmVvZhIPCgVjb25zdBgBIAEoCUgAEhAKBnN3aXRjaBgCIAEoCUgAEg4KBGNhc2UYAyABKAlIABISCghmdW5jdGlvbhgEIAEoCUgAEhMKCWludGVyZmFjZRgFIAEoCUgAEhAKBnJldHVybhgGIAEoCUgAQgYKBGtpbmQiZgoPTm9DbGFzaE9uZW9mQURUEiIKAW0YASABKAsyFy5zcGVjLk5vQ2xhc2hPbmVvZkFEVC5NGi8KAU0SDAoEY2FzZRgBIAEoCRISCgV2YWx1ZRgCIAEoCUgAiAEBQggKBl92YWx1ZSJlCg9Ob0NsYXNoRW51bVdyYXAiUgoBWBIOCgppbnN0YW5jZW9mEAASCgoGc3dpdGNoEAESCAoEY2FzZRADEgwKCGZ1bmN0aW9uEAQSDQoJaW50ZXJmYWNlEAUSCgoGcmV0dXJuEAYqSgodRW51bURlc2NDbGFzaFdpdGhNZXNzYWdlU2hhcGUSKQolTWVzc2FnZURlc2NDbGFzaFdpdGhFbnVtRGVzY0Rlc2NfemVybxAAKk8KIUVudW1TaGFwZUNsYXNoV2l0aE1lc3NhZ2VEZXNjRGVzYxIqCiZFbnVtU2hhcGVDbGFzaFdpdGhNZXNzYWdlRGVzY0Rlc2NfemVybxAAMrgBChxSZXNlcnZlZFByb3BlcnR5TmFtZXNTZXJ2aWNlEicKC2NvbnN0cnVjdG9yEgsuc3BlYy5FcnJvchoLLnNwZWMuRXJyb3ISJAoIdG9TdHJpbmcSCy5zcGVjLkVycm9yGgsuc3BlYy5FcnJvchIjCgd0b19KU09OEgsuc3BlYy5FcnJvchoLLnNwZWMuRXJyb3ISJAoIdmFsdWVfb2YSCy5zcGVjLkVycm9yGgsuc3BlYy5FcnJvcmIGcHJvdG8z", [fileDesc_extra_example]);

/**
 * Describes the message spec.User.
 * Use `create(UserDesc)` to create a new message.
 */
export const UserDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 0);

/**
 * Describes the message spec.ReservedPropertyNames.
 * Use `create(ReservedPropertyNamesDesc)` to create a new message.
 */
export const ReservedPropertyNamesDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 1);

/**
 * Describes the message spec.ReservedPropertyNames.BuiltIn.
 * Use `create(ReservedPropertyNames_BuiltInDesc)` to create a new message.
 */
export const ReservedPropertyNames_BuiltInDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 1, 0);

/**
 * Describes the message spec.ReservedPropertyNames.Runtime.
 * Use `create(ReservedPropertyNames_RuntimeDesc)` to create a new message.
 */
export const ReservedPropertyNames_RuntimeDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 1, 1);

/**
 * Describes the message spec.ReservedPropertyNames.OneofBultIn.
 * Use `create(ReservedPropertyNames_OneofBultInDesc)` to create a new message.
 */
export const ReservedPropertyNames_OneofBultInDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 1, 2);

/**
 * Describes the message spec.ReservedPropertyNames.OneofRuntime.
 * Use `create(ReservedPropertyNames_OneofRuntimeDesc)` to create a new message.
 */
export const ReservedPropertyNames_OneofRuntimeDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 1, 3);

/**
 * Describes the enum spec.ReservedPropertyNames.EnumBuiltIn.
 */
export const ReservedPropertyNames_EnumBuiltInDesc = /*@__PURE__*/
  enumDesc(fileDesc_extra_name_clash, 1, 0);

/**
 * @generated from enum spec.ReservedPropertyNames.EnumBuiltIn
 */
export const ReservedPropertyNames_EnumBuiltIn = /*@__PURE__*/
  tsEnum(ReservedPropertyNames_EnumBuiltInDesc);

/**
 * Describes the enum spec.ReservedPropertyNames.EnumBuiltInPrefixed.
 */
export const ReservedPropertyNames_EnumBuiltInPrefixedDesc = /*@__PURE__*/
  enumDesc(fileDesc_extra_name_clash, 1, 1);

/**
 * @generated from enum spec.ReservedPropertyNames.EnumBuiltInPrefixed
 */
export const ReservedPropertyNames_EnumBuiltInPrefixed = /*@__PURE__*/
  tsEnum(ReservedPropertyNames_EnumBuiltInPrefixedDesc);

/**
 * Describes the enum spec.ReservedPropertyNames.EnumRuntime.
 */
export const ReservedPropertyNames_EnumRuntimeDesc = /*@__PURE__*/
  enumDesc(fileDesc_extra_name_clash, 1, 2);

/**
 * @generated from enum spec.ReservedPropertyNames.EnumRuntime
 */
export const ReservedPropertyNames_EnumRuntime = /*@__PURE__*/
  tsEnum(ReservedPropertyNames_EnumRuntimeDesc);

/**
 * Describes the message spec.interface.
 * Use `create(interfaceDesc)` to create a new message.
 */
export const interfaceDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 2);

/**
 * Describes the message spec.function.
 * Use `create(functionDesc)` to create a new message.
 */
export const functionDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 3);

/**
 * Describes the message spec.instanceof.
 * Use `create(instanceofDesc)` to create a new message.
 */
export const instanceofDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 4);

/**
 * Describes the message spec.switch.
 * Use `create(switchDesc)` to create a new message.
 */
export const switchDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 5);

/**
 * Describes the message spec.case.
 * Use `create(caseDesc)` to create a new message.
 */
export const caseDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 6);

/**
 * Describes the message spec.return.
 * Use `create(returnDesc)` to create a new message.
 */
export const returnDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 7);

/**
 * Describes the message spec.Message.
 * Use `create(MessageDesc)` to create a new message.
 */
export const MessageDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 8);

/**
 * Describes the message spec.PartialMessage.
 * Use `create(PartialMessageDesc)` to create a new message.
 */
export const PartialMessageDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 9);

/**
 * Describes the message spec.PlainMessage.
 * Use `create(PlainMessageDesc)` to create a new message.
 */
export const PlainMessageDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 10);

/**
 * Describes the message spec.Error.
 * Use `create(ErrorDesc)` to create a new message.
 */
export const ErrorDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 11);

/**
 * Describes the message spec.Object.
 * Use `create(ObjectDesc)` to create a new message.
 */
export const ObjectDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 12);

/**
 * Describes the message spec.object.
 * Use `create(objectDesc)` to create a new message.
 */
export const objectDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 13);

/**
 * Describes the message spec.array.
 * Use `create(arrayDesc)` to create a new message.
 */
export const arrayDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 14);

/**
 * Describes the message spec.string.
 * Use `create(stringDesc)` to create a new message.
 */
export const stringDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 15);

/**
 * Describes the message spec.number.
 * Use `create(numberDesc)` to create a new message.
 */
export const numberDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 16);

/**
 * Describes the message spec.boolean.
 * Use `create(booleanDesc)` to create a new message.
 */
export const booleanDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 17);

/**
 * Describes the message spec.bigint.
 * Use `create(bigintDesc)` to create a new message.
 */
export const bigintDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 18);

/**
 * Describes the message spec.Uint8Array.
 * Use `create(Uint8ArrayDesc)` to create a new message.
 */
export const Uint8ArrayDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 19);

/**
 * Describes the message spec.Array.
 * Use `create(ArrayDesc)` to create a new message.
 */
export const ArrayDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 20);

/**
 * Describes the message spec.String.
 * Use `create(StringDesc)` to create a new message.
 */
export const StringDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 21);

/**
 * Describes the message spec.Number.
 * Use `create(NumberDesc)` to create a new message.
 */
export const NumberDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 22);

/**
 * Describes the message spec.Boolean.
 * Use `create(BooleanDesc)` to create a new message.
 */
export const BooleanDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 23);

/**
 * Describes the message spec.BigInt.
 * Use `create(BigIntDesc)` to create a new message.
 */
export const BigIntDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 24);

/**
 * Describes the message spec.ClashParent.
 * Use `create(ClashParentDesc)` to create a new message.
 */
export const ClashParentDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 25);

/**
 * Describes the message spec.ClashParent.ClashChild.
 * Use `create(ClashParent_ClashChildDesc)` to create a new message.
 */
export const ClashParent_ClashChildDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 25, 0);

/**
 * Describes the message spec.ClashParent_ClashChild.
 * Use `create(ClashParent_ClashChildDesc$)` to create a new message.
 */
export const ClashParent_ClashChildDesc$ = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 26);

/**
 * Describes the message spec.EnumDescClashWithMessageShapeDesc.
 * Use `create(EnumDescClashWithMessageShapeDescDesc)` to create a new message.
 */
export const EnumDescClashWithMessageShapeDescDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 27);

/**
 * Describes the message spec.EnumShapeClashWithMessageDesc.
 * Use `create(EnumShapeClashWithMessageDescDesc$)` to create a new message.
 */
export const EnumShapeClashWithMessageDescDesc$ = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 28);

/**
 * Describes the message spec.NoClashFields.
 * Use `create(NoClashFieldsDesc)` to create a new message.
 */
export const NoClashFieldsDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 29);

/**
 * Describes the message spec.NoClashOneof.
 * Use `create(NoClashOneofDesc)` to create a new message.
 */
export const NoClashOneofDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 30);

/**
 * Describes the message spec.NoClashOneofADT.
 * Use `create(NoClashOneofADTDesc)` to create a new message.
 */
export const NoClashOneofADTDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 31);

/**
 * Describes the message spec.NoClashOneofADT.M.
 * Use `create(NoClashOneofADT_MDesc)` to create a new message.
 */
export const NoClashOneofADT_MDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 31, 0);

/**
 * Describes the message spec.NoClashEnumWrap.
 * Use `create(NoClashEnumWrapDesc)` to create a new message.
 */
export const NoClashEnumWrapDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_name_clash, 32);

/**
 * Describes the enum spec.NoClashEnumWrap.X.
 */
export const NoClashEnumWrap_XDesc = /*@__PURE__*/
  enumDesc(fileDesc_extra_name_clash, 32, 0);

/**
 * @generated from enum spec.NoClashEnumWrap.X
 */
export const NoClashEnumWrap_X = /*@__PURE__*/
  tsEnum(NoClashEnumWrap_XDesc);

/**
 * Describes the enum spec.EnumDescClashWithMessageShape.
 */
export const EnumDescClashWithMessageShapeDesc$ = /*@__PURE__*/
  enumDesc(fileDesc_extra_name_clash, 0);

/**
 * @generated from enum spec.EnumDescClashWithMessageShape
 */
export const EnumDescClashWithMessageShape = /*@__PURE__*/
  tsEnum(EnumDescClashWithMessageShapeDesc$);

/**
 * Describes the enum spec.EnumShapeClashWithMessageDescDesc.
 */
export const EnumShapeClashWithMessageDescDescDesc = /*@__PURE__*/
  enumDesc(fileDesc_extra_name_clash, 1);

/**
 * enum shape should clash with message descriptor
 *
 * @generated from enum spec.EnumShapeClashWithMessageDescDesc
 */
export const EnumShapeClashWithMessageDescDesc = /*@__PURE__*/
  tsEnum(EnumShapeClashWithMessageDescDescDesc);

/**
 * @generated from service spec.ReservedPropertyNamesService
 */
export const ReservedPropertyNamesService = /*@__PURE__*/
  serviceDesc(fileDesc_extra_name_clash, 0);

