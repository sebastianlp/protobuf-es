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
// @generated from file extra/wkt-wrappers.proto (package spec, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { fileDesc_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";

export const fileDesc_extra_wkt_wrappers = /*@__PURE__*/
  fileDesc("ChhleHRyYS93a3Qtd3JhcHBlcnMucHJvdG8SBHNwZWMilhkKD1dyYXBwZXJzTWVzc2FnZRI4ChJkb3VibGVfdmFsdWVfZmllbGQYASABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUSNAoQYm9vbF92YWx1ZV9maWVsZBgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWUSNgoRZmxvYXRfdmFsdWVfZmllbGQYAyABKAsyGy5nb29nbGUucHJvdG9idWYuRmxvYXRWYWx1ZRI2ChFpbnQ2NF92YWx1ZV9maWVsZBgEIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlEjgKEnVpbnQ2NF92YWx1ZV9maWVsZBgFIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50NjRWYWx1ZRI2ChFpbnQzMl92YWx1ZV9maWVsZBgGIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlEjgKEnVpbnQzMl92YWx1ZV9maWVsZBgHIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50MzJWYWx1ZRI4ChJzdHJpbmdfdmFsdWVfZmllbGQYCCABKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWUSNgoRYnl0ZXNfdmFsdWVfZmllbGQYCSABKAsyGy5nb29nbGUucHJvdG9idWYuQnl0ZXNWYWx1ZRJAChhvbmVvZl9kb3VibGVfdmFsdWVfZmllbGQYCyABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWVIABI8ChZvbmVvZl9ib29sX3ZhbHVlX2ZpZWxkGAwgASgLMhouZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZUgAEj4KF29uZW9mX2Zsb2F0X3ZhbHVlX2ZpZWxkGA0gASgLMhsuZ29vZ2xlLnByb3RvYnVmLkZsb2F0VmFsdWVIABI+ChdvbmVvZl9pbnQ2NF92YWx1ZV9maWVsZBgOIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlSAASQAoYb25lb2ZfdWludDY0X3ZhbHVlX2ZpZWxkGA8gASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQ2NFZhbHVlSAASPgoXb25lb2ZfaW50MzJfdmFsdWVfZmllbGQYECABKAsyGy5nb29nbGUucHJvdG9idWYuSW50MzJWYWx1ZUgAEkAKGG9uZW9mX3VpbnQzMl92YWx1ZV9maWVsZBgRIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50MzJWYWx1ZUgAEkAKGG9uZW9mX3N0cmluZ192YWx1ZV9maWVsZBgSIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZUgAEj4KF29uZW9mX2J5dGVzX3ZhbHVlX2ZpZWxkGBMgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkJ5dGVzVmFsdWVIABJBChtyZXBlYXRlZF9kb3VibGVfdmFsdWVfZmllbGQYFSADKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUSPQoZcmVwZWF0ZWRfYm9vbF92YWx1ZV9maWVsZBgWIAMoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWUSPwoacmVwZWF0ZWRfZmxvYXRfdmFsdWVfZmllbGQYFyADKAsyGy5nb29nbGUucHJvdG9idWYuRmxvYXRWYWx1ZRI/ChpyZXBlYXRlZF9pbnQ2NF92YWx1ZV9maWVsZBgYIAMoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlEkEKG3JlcGVhdGVkX3VpbnQ2NF92YWx1ZV9maWVsZBgZIAMoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50NjRWYWx1ZRI/ChpyZXBlYXRlZF9pbnQzMl92YWx1ZV9maWVsZBgaIAMoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlEkEKG3JlcGVhdGVkX3VpbnQzMl92YWx1ZV9maWVsZBgbIAMoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50MzJWYWx1ZRJBChtyZXBlYXRlZF9zdHJpbmdfdmFsdWVfZmllbGQYHCADKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWUSPwoacmVwZWF0ZWRfYnl0ZXNfdmFsdWVfZmllbGQYHSADKAsyGy5nb29nbGUucHJvdG9idWYuQnl0ZXNWYWx1ZRJOChZtYXBfZG91YmxlX3ZhbHVlX2ZpZWxkGB8gAygLMi4uc3BlYy5XcmFwcGVyc01lc3NhZ2UuTWFwRG91YmxlVmFsdWVGaWVsZEVudHJ5EkoKFG1hcF9ib29sX3ZhbHVlX2ZpZWxkGCAgAygLMiwuc3BlYy5XcmFwcGVyc01lc3NhZ2UuTWFwQm9vbFZhbHVlRmllbGRFbnRyeRJMChVtYXBfZmxvYXRfdmFsdWVfZmllbGQYISADKAsyLS5zcGVjLldyYXBwZXJzTWVzc2FnZS5NYXBGbG9hdFZhbHVlRmllbGRFbnRyeRJMChVtYXBfaW50NjRfdmFsdWVfZmllbGQYIiADKAsyLS5zcGVjLldyYXBwZXJzTWVzc2FnZS5NYXBJbnQ2NFZhbHVlRmllbGRFbnRyeRJOChZtYXBfdWludDY0X3ZhbHVlX2ZpZWxkGCMgAygLMi4uc3BlYy5XcmFwcGVyc01lc3NhZ2UuTWFwVWludDY0VmFsdWVGaWVsZEVudHJ5EkwKFW1hcF9pbnQzMl92YWx1ZV9maWVsZBgkIAMoCzItLnNwZWMuV3JhcHBlcnNNZXNzYWdlLk1hcEludDMyVmFsdWVGaWVsZEVudHJ5Ek4KFm1hcF91aW50MzJfdmFsdWVfZmllbGQYJSADKAsyLi5zcGVjLldyYXBwZXJzTWVzc2FnZS5NYXBVaW50MzJWYWx1ZUZpZWxkRW50cnkSTgoWbWFwX3N0cmluZ192YWx1ZV9maWVsZBgmIAMoCzIuLnNwZWMuV3JhcHBlcnNNZXNzYWdlLk1hcFN0cmluZ1ZhbHVlRmllbGRFbnRyeRJMChVtYXBfYnl0ZXNfdmFsdWVfZmllbGQYJyADKAsyLS5zcGVjLldyYXBwZXJzTWVzc2FnZS5NYXBCeXRlc1ZhbHVlRmllbGRFbnRyeRpYChhNYXBEb3VibGVWYWx1ZUZpZWxkRW50cnkSCwoDa2V5GAEgASgJEisKBXZhbHVlGAIgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlOgI4ARpUChZNYXBCb29sVmFsdWVGaWVsZEVudHJ5EgsKA2tleRgBIAEoCRIpCgV2YWx1ZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWU6AjgBGlYKF01hcEZsb2F0VmFsdWVGaWVsZEVudHJ5EgsKA2tleRgBIAEoCRIqCgV2YWx1ZRgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GbG9hdFZhbHVlOgI4ARpWChdNYXBJbnQ2NFZhbHVlRmllbGRFbnRyeRILCgNrZXkYASABKAkSKgoFdmFsdWUYAiABKAsyGy5nb29nbGUucHJvdG9idWYuSW50NjRWYWx1ZToCOAEaWAoYTWFwVWludDY0VmFsdWVGaWVsZEVudHJ5EgsKA2tleRgBIAEoCRIrCgV2YWx1ZRgCIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50NjRWYWx1ZToCOAEaVgoXTWFwSW50MzJWYWx1ZUZpZWxkRW50cnkSCwoDa2V5GAEgASgJEioKBXZhbHVlGAIgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDMyVmFsdWU6AjgBGlgKGE1hcFVpbnQzMlZhbHVlRmllbGRFbnRyeRILCgNrZXkYASABKAkSKwoFdmFsdWUYAiABKAsyHC5nb29nbGUucHJvdG9idWYuVUludDMyVmFsdWU6AjgBGlgKGE1hcFN0cmluZ1ZhbHVlRmllbGRFbnRyeRILCgNrZXkYASABKAkSKwoFdmFsdWUYAiABKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWU6AjgBGlYKF01hcEJ5dGVzVmFsdWVGaWVsZEVudHJ5EgsKA2tleRgBIAEoCRIqCgV2YWx1ZRgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5CeXRlc1ZhbHVlOgI4AUIOCgxvbmVvZl9maWVsZHNCA7gBAWIGcHJvdG8z", [fileDesc_google_protobuf_wrappers]);

// Describes the message spec.WrappersMessage. Use `create(WrappersMessageDesc)` to create a new WrappersMessage.
export const WrappersMessageDesc = /*@__PURE__*/
  messageDesc(fileDesc_extra_wkt_wrappers, 0);

