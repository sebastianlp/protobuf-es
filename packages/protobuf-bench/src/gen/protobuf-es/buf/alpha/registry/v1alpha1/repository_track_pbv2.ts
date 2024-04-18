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

// @generated by protoc-gen-es v1.8.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/registry/v1alpha1/repository_track.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage, GenDescService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { fileDesc_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

export const fileDesc_buf_alpha_registry_v1alpha1_repository_track: GenDescFile = /*@__PURE__*/
  fileDesc("CjJidWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvcmVwb3NpdG9yeV90cmFjay5wcm90bxIbYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExIlwKD1JlcG9zaXRvcnlUcmFjaxIKCgJpZBgBIAEoCRIvCgtjcmVhdGVfdGltZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASDAoEbmFtZRgEIAEoCSJDChxDcmVhdGVSZXBvc2l0b3J5VHJhY2tSZXF1ZXN0EhUKDXJlcG9zaXRvcnlfaWQYASABKAkSDAoEbmFtZRgCIAEoCSJnCh1DcmVhdGVSZXBvc2l0b3J5VHJhY2tSZXNwb25zZRJGChByZXBvc2l0b3J5X3RyYWNrGAEgASgLMiwuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlJlcG9zaXRvcnlUcmFjayJsChtMaXN0UmVwb3NpdG9yeVRyYWNrc1JlcXVlc3QSFQoNcmVwb3NpdG9yeV9pZBgBIAEoCRIRCglwYWdlX3NpemUYAiABKA0SEgoKcGFnZV90b2tlbhgDIAEoCRIPCgdyZXZlcnNlGAQgASgIIoABChxMaXN0UmVwb3NpdG9yeVRyYWNrc1Jlc3BvbnNlEkcKEXJlcG9zaXRvcnlfdHJhY2tzGAEgAygLMiwuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlJlcG9zaXRvcnlUcmFjaxIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkiXwoiRGVsZXRlUmVwb3NpdG9yeVRyYWNrQnlOYW1lUmVxdWVzdBISCgpvd25lcl9uYW1lGAEgASgJEhcKD3JlcG9zaXRvcnlfbmFtZRgCIAEoCRIMCgRuYW1lGAMgASgJIiUKI0RlbGV0ZVJlcG9zaXRvcnlUcmFja0J5TmFtZVJlc3BvbnNlIlwKH0dldFJlcG9zaXRvcnlUcmFja0J5TmFtZVJlcXVlc3QSEgoKb3duZXJfbmFtZRgBIAEoCRIXCg9yZXBvc2l0b3J5X25hbWUYAiABKAkSDAoEbmFtZRgDIAEoCSJqCiBHZXRSZXBvc2l0b3J5VHJhY2tCeU5hbWVSZXNwb25zZRJGChByZXBvc2l0b3J5X3RyYWNrGAEgASgLMiwuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlJlcG9zaXRvcnlUcmFjazL0BAoWUmVwb3NpdG9yeVRyYWNrU2VydmljZRKOAQoVQ3JlYXRlUmVwb3NpdG9yeVRyYWNrEjkuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkNyZWF0ZVJlcG9zaXRvcnlUcmFja1JlcXVlc3QaOi5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuQ3JlYXRlUmVwb3NpdG9yeVRyYWNrUmVzcG9uc2USiwEKFExpc3RSZXBvc2l0b3J5VHJhY2tzEjguYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RSZXBvc2l0b3J5VHJhY2tzUmVxdWVzdBo5LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5MaXN0UmVwb3NpdG9yeVRyYWNrc1Jlc3BvbnNlEqABChtEZWxldGVSZXBvc2l0b3J5VHJhY2tCeU5hbWUSPy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuRGVsZXRlUmVwb3NpdG9yeVRyYWNrQnlOYW1lUmVxdWVzdBpALmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5EZWxldGVSZXBvc2l0b3J5VHJhY2tCeU5hbWVSZXNwb25zZRKXAQoYR2V0UmVwb3NpdG9yeVRyYWNrQnlOYW1lEjwuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkdldFJlcG9zaXRvcnlUcmFja0J5TmFtZVJlcXVlc3QaPS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuR2V0UmVwb3NpdG9yeVRyYWNrQnlOYW1lUmVzcG9uc2ViBnByb3RvMw", [fileDesc_google_protobuf_timestamp]);

/**
 * @generated from message buf.alpha.registry.v1alpha1.RepositoryTrack
 */
export type RepositoryTrack = Message<"buf.alpha.registry.v1alpha1.RepositoryTrack"> & {
  /**
   * primary key, unique, immutable
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * immutable
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * We reserve field number '3' for the update_time.
   * google.protobuf.Timestamp update_time = 3;
   * The name of the repository track, i.e. "v1".
   *
   * @generated from field: string name = 4;
   */
  name: string;
};

// Describes the message buf.alpha.registry.v1alpha1.RepositoryTrack.
// Use `create(RepositoryTrackDesc)` to create a new RepositoryTrack.
export const RepositoryTrackDesc: GenDescMessage<RepositoryTrack> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_track, 0);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateRepositoryTrackRequest
 */
export type CreateRepositoryTrackRequest = Message<"buf.alpha.registry.v1alpha1.CreateRepositoryTrackRequest"> & {
  /**
   * The ID of the repository this track should be created on.
   *
   * @generated from field: string repository_id = 1;
   */
  repositoryId: string;

  /**
   * The name of the repository track, i.e. v1.
   *
   * @generated from field: string name = 2;
   */
  name: string;
};

// Describes the message buf.alpha.registry.v1alpha1.CreateRepositoryTrackRequest.
// Use `create(CreateRepositoryTrackRequestDesc)` to create a new CreateRepositoryTrackRequest.
export const CreateRepositoryTrackRequestDesc: GenDescMessage<CreateRepositoryTrackRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_track, 1);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateRepositoryTrackResponse
 */
export type CreateRepositoryTrackResponse = Message<"buf.alpha.registry.v1alpha1.CreateRepositoryTrackResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.RepositoryTrack repository_track = 1;
   */
  repositoryTrack?: RepositoryTrack;
};

// Describes the message buf.alpha.registry.v1alpha1.CreateRepositoryTrackResponse.
// Use `create(CreateRepositoryTrackResponseDesc)` to create a new CreateRepositoryTrackResponse.
export const CreateRepositoryTrackResponseDesc: GenDescMessage<CreateRepositoryTrackResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_track, 2);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryTracksRequest
 */
export type ListRepositoryTracksRequest = Message<"buf.alpha.registry.v1alpha1.ListRepositoryTracksRequest"> & {
  /**
   * The ID of the repository whose tracks should be listed.
   *
   * @generated from field: string repository_id = 1;
   */
  repositoryId: string;

  /**
   * @generated from field: uint32 page_size = 2;
   */
  pageSize: number;

  /**
   * The first page is returned if this is empty.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * @generated from field: bool reverse = 4;
   */
  reverse: boolean;
};

// Describes the message buf.alpha.registry.v1alpha1.ListRepositoryTracksRequest.
// Use `create(ListRepositoryTracksRequestDesc)` to create a new ListRepositoryTracksRequest.
export const ListRepositoryTracksRequestDesc: GenDescMessage<ListRepositoryTracksRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_track, 3);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryTracksResponse
 */
export type ListRepositoryTracksResponse = Message<"buf.alpha.registry.v1alpha1.ListRepositoryTracksResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RepositoryTrack repository_tracks = 1;
   */
  repositoryTracks: RepositoryTrack[];

  /**
   * There are no more pages if this is empty.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

// Describes the message buf.alpha.registry.v1alpha1.ListRepositoryTracksResponse.
// Use `create(ListRepositoryTracksResponseDesc)` to create a new ListRepositoryTracksResponse.
export const ListRepositoryTracksResponseDesc: GenDescMessage<ListRepositoryTracksResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_track, 4);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteRepositoryTrackByNameRequest
 */
export type DeleteRepositoryTrackByNameRequest = Message<"buf.alpha.registry.v1alpha1.DeleteRepositoryTrackByNameRequest"> & {
  /**
   * @generated from field: string owner_name = 1;
   */
  ownerName: string;

  /**
   * @generated from field: string repository_name = 2;
   */
  repositoryName: string;

  /**
   * The name of the repository track
   *
   * @generated from field: string name = 3;
   */
  name: string;
};

// Describes the message buf.alpha.registry.v1alpha1.DeleteRepositoryTrackByNameRequest.
// Use `create(DeleteRepositoryTrackByNameRequestDesc)` to create a new DeleteRepositoryTrackByNameRequest.
export const DeleteRepositoryTrackByNameRequestDesc: GenDescMessage<DeleteRepositoryTrackByNameRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_track, 5);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteRepositoryTrackByNameResponse
 */
export type DeleteRepositoryTrackByNameResponse = Message<"buf.alpha.registry.v1alpha1.DeleteRepositoryTrackByNameResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.DeleteRepositoryTrackByNameResponse.
// Use `create(DeleteRepositoryTrackByNameResponseDesc)` to create a new DeleteRepositoryTrackByNameResponse.
export const DeleteRepositoryTrackByNameResponseDesc: GenDescMessage<DeleteRepositoryTrackByNameResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_track, 6);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetRepositoryTrackByNameRequest
 */
export type GetRepositoryTrackByNameRequest = Message<"buf.alpha.registry.v1alpha1.GetRepositoryTrackByNameRequest"> & {
  /**
   * @generated from field: string owner_name = 1;
   */
  ownerName: string;

  /**
   * @generated from field: string repository_name = 2;
   */
  repositoryName: string;

  /**
   * The name of the repository track
   *
   * @generated from field: string name = 3;
   */
  name: string;
};

// Describes the message buf.alpha.registry.v1alpha1.GetRepositoryTrackByNameRequest.
// Use `create(GetRepositoryTrackByNameRequestDesc)` to create a new GetRepositoryTrackByNameRequest.
export const GetRepositoryTrackByNameRequestDesc: GenDescMessage<GetRepositoryTrackByNameRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_track, 7);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetRepositoryTrackByNameResponse
 */
export type GetRepositoryTrackByNameResponse = Message<"buf.alpha.registry.v1alpha1.GetRepositoryTrackByNameResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.RepositoryTrack repository_track = 1;
   */
  repositoryTrack?: RepositoryTrack;
};

// Describes the message buf.alpha.registry.v1alpha1.GetRepositoryTrackByNameResponse.
// Use `create(GetRepositoryTrackByNameResponseDesc)` to create a new GetRepositoryTrackByNameResponse.
export const GetRepositoryTrackByNameResponseDesc: GenDescMessage<GetRepositoryTrackByNameResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_track, 8);

/**
 * @generated from service buf.alpha.registry.v1alpha1.RepositoryTrackService
 */
export const RepositoryTrackService: GenDescService<{
  /**
   * CreateRepositoryTrack creates a new repository track.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackService.CreateRepositoryTrack
   */
  createRepositoryTrack: {
    kind: "unary";
    I: CreateRepositoryTrackRequest;
    O: CreateRepositoryTrackResponse;
  },
  /**
   * ListRepositoryTracks lists the repository tracks associated with a repository.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackService.ListRepositoryTracks
   */
  listRepositoryTracks: {
    kind: "unary";
    I: ListRepositoryTracksRequest;
    O: ListRepositoryTracksResponse;
  },
  /**
   * DeleteRepositoryTrackByName deletes a repository track by name.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackService.DeleteRepositoryTrackByName
   */
  deleteRepositoryTrackByName: {
    kind: "unary";
    I: DeleteRepositoryTrackByNameRequest;
    O: DeleteRepositoryTrackByNameResponse;
  },
  /**
   * GetRepositoryTrackByName gets a repository track by name.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackService.GetRepositoryTrackByName
   */
  getRepositoryTrackByName: {
    kind: "unary";
    I: GetRepositoryTrackByNameRequest;
    O: GetRepositoryTrackByNameResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_track, 0);

