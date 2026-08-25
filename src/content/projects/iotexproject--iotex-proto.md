---
repo: "iotexproject/iotex-proto"
name: "iotex-proto"
description: "Protobuf definition for IoTeX transactions, blocks, chain and APIs!"
readmeQualityOk: true
url: "https://github.com/iotexproject/iotex-proto"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [62, 33]
stars: 10
forks: 23
openIssues: 1
closedIssues: 11
watchers: 7
contributors: 19
recentReleases: 0
createdAt: "2019-05-03T20:45:54Z"
lastCommitAt: "2026-08-25T04:08:20Z"
lastReleaseAt: "2020-09-11T20:55:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 59
maintainers: ["envestcc", "CoderZhi"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd5e9df8cd7ba6d6fac320f049308114078176f8103fbaf3d0834d9cf45c3bc5/iotexproject/iotex-proto"
---

# iotex-proto
Protobuf and utility package for IoTeX blockchain transaction and gRPC API

- `\proto` includes protobuf definition for all core data objects and gRPC API used by IoTeX blockchain

- `\golang` includes the generated protobuf files for go language

# Getting Started
## Installing
### Install protoc
Install the Google protocol buffers compiler `protoc` v3.12.0 or above from https://github.com/protocolbuffers/protobuf/releases

Install protoc-gen-go
```
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

Enable go mod. Install grpc-gateway https://github.com/grpc-ecosystem/grpc-gateway. Basically this is what you need:

```
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
```

### Install mockgen
Install golang mock generator `mockgen` v1.4.4 or above to generate mock files.

```
go get -u github.com/golang/mock/mockgen
```

## Compiling
```
make gen
```
This generates the protobuf files and put into \golang directory

## Sign IoTeX blockchain transaction
secp256k1 ECDSA algorithm is used by IoTeX…
