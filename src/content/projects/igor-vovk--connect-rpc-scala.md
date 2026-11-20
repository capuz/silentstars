---
repo: "igor-vovk/connect-rpc-scala"
name: "connect-rpc-scala"
description: "HTTP (browser-compatible) server and client for gRPC services written in Scala that follows Connect protocol specification and supports gRPC Transcoding."
readmeQualityOk: true
url: "https://github.com/igor-vovk/connect-rpc-scala"
homepage: "https://connectrpc.com"
language: "Scala"
languages: ["Scala"]
languagePcts: [99]
topics: ["connectrpc", "grpc", "scala", "scalapb", "http4s", "fs2-grpc", "zio-grpc", "grpc-transcoding", "netty", "protobuf"]
stars: 38
forks: 1
openIssues: 3
closedIssues: 10
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-11-23T16:12:51Z"
lastCommitAt: "2026-11-20T12:23:13Z"
lastReleaseAt: "2024-12-06T20:46:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 88
undervaluedScore: 53
maintainers: ["igor-vovk", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d83d256af9f6bc75ae18a6e417a4b64c31c8c09389d79b4642a55224869470e9/igor-vovk/connect-rpc-scala"
discussionCount: 0
---

# Connect RPC for Scala

`connect-rpc-scala` generates unary and server-streaming Connect service APIs from protobuf definitions and serves or calls them with
http4s. ScalaPB still generates the message classes, while this project's generator owns the service definitions.
The runtime does not depend on grpc-java, ScalaPB's gRPC runtime, fs2-grpc, or zio-grpc.

Client-streaming and bidirectional RPCs are not supported yet. The generator skips those methods while still generating
the unary and server-streaming methods in the same service.

## Features

- Unary Connect endpoints using JSON or protobuf encoding.
- Server-streaming Connect endpoints with terminal trailers and streaming errors.
- Generated effect-polymorphic service interfaces, binders, and clients.
- Connect request and response headers, trailers, timeouts, and structured errors.
- Identity and gzip request decompression; responses currently use identity encoding.
- HTTP transcoding from `google.api.http` annotations, including GET, POST, PUT, DELETE, PATCH, path parameters,
  repeated query parameters, `body: "*"`, and request-body field mappings.
- An http4s server and client implementation.
