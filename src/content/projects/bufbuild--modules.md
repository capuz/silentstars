---
repo: "bufbuild/modules"
name: "modules"
description: "Collection of third-party modules managed and synced by Buf."
readmeQualityOk: true
url: "https://github.com/bufbuild/modules"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["protobuf", "buf-cli", "buf-schema-registry", "grpc", "protoc", "protocol-buffers"]
stars: 37
forks: 3
openIssues: 3
closedIssues: 32
watchers: 4
contributors: 26
recentReleases: 0
createdAt: "2023-03-16T18:21:25Z"
lastCommitAt: "2026-09-18T14:02:37Z"
lastReleaseAt: "2023-03-29T20:04:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["app-token-modules[bot]", "dependabot[bot]", "pkwarren"]
openGraphImageUrl: "https://opengraph.githubassets.com/8794f470f0495c27237529f7413a4073d3b5b2b3a06ad306838642e6fabf1a6d/bufbuild/modules"
---

# modules

## Description

This repository contains first and third-party modules synced and published to the [Buf Schema Registry][bsr].

If you'd like a common third-party module to be managed by Buf, open an issue using the [Managed Module Request for Buf 
Schema Registry][issue-template] issue template and our team will follow up.

## Managed modules

We currently sync automatically the following modules:

| Module | Source Community Repository | Depends on |
|---|---|---|
| bufbuild/confluent | https://github.com/bufbuild/confluent-proto |  |
| bufbuild/protovalidate | https://github.com/bufbuild/protovalidate |  |
| bufbuild/protovalidate-testing | https://github.com/bufbuild/protovalidate | - bufbuild/protovalidate |
| bufbuild/reflect | https://github.com/bufbuild/reflect | |
| cncf/xds | https://github.com/cncf/xds | - envoyproxy/protoc-gen-validate<br>- google/cel-spec<br>- googleapis/googleapis |
| envoyproxy/envoy | https://github.com/envoyproxy/envoy | - cncf/xds<br>- envoyproxy/protoc-gen-validate<br>- googleapis/googleapis<br>- opencensus/opencensus<br>- opentelemetry/opentelemetry<br>- prometheus/client-model |
| envoyproxy/protoc-gen-validate |…
