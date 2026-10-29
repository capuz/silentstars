---
repo: "bootjp/elastickv"
name: "elastickv"
description: "Elastickv: An experimental project aimed at developing a distributed key-value store for cloud environments, similar to DynamoDB. Plans to feature Raft-based replication, dynamic node scaling, and automatic hot spot re-allocation."
readmeQualityOk: true
url: "https://github.com/bootjp/elastickv"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["database", "distribute-database", "distributed-systems", "dynamodb", "key-value-store", "memorydb", "redis", "sqs", "hlc", "s3"]
stars: 7
forks: 2
openIssues: 7
closedIssues: 28
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-11-27T12:50:54Z"
lastCommitAt: "2026-10-29T05:50:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 77
maintainers: ["bootjp", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b028ba9476978872cc258aa3ac07e890ac8c7c5b1ace44d462f158a140508b6c/bootjp/elastickv"
discussionCount: 0
---

# Elastickv

## Overview
Elastickv is an experimental distributed key-value store backed by Raft. It exposes gRPC, Redis-compatible, DynamoDB-compatible, S3-compatible, and SQS-compatible APIs, plus an optional FUSE filesystem. Sharded storage, durable route management, and several operator tools are implemented; automatic cross-group data relocation and node scaling remain future work.

**THIS PROJECT IS CURRENTLY UNDER DEVELOPMENT AND IS NOT READY FOR PRODUCTION USE.**

## Implemented Features
- **Raft-based Data Replication**: KV state replication is implemented on Raft, with leader-based commit and follower forwarding paths.
- **Shard-aware Data Plane**: Static shard ranges across multiple Raft groups with shard routing/coordinator are implemented.
- **Route Management and Load Distribution**: A durable route catalog, versioned route snapshots, watcher-based refresh, and manual `ListRoutes`/`SplitRange` are implemented. Opt-in `--autoSplit` detects hot ranges and splits them within the same Raft group; opt-in `--leaderBalance` distributes Raft-group leadership among existing voters.
- **Protocol Adapters**: gRPC (`RawKV`/`TransactionalKV`), Redis-compatible server,…
