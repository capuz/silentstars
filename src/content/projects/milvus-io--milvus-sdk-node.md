---
repo: "milvus-io/milvus-sdk-node"
name: "milvus-sdk-node"
description: "The Official Milvus node.js sdk(client)"
readmeQualityOk: true
url: "https://github.com/milvus-io/milvus-sdk-node"
homepage: "https://milvus-io.github.io/milvus-sdk-node/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["milvus", "sdk", "sdk-node"]
stars: 196
forks: 59
openIssues: 0
closedIssues: 88
watchers: 4
contributors: 33
recentReleases: 0
createdAt: "2021-04-22T07:52:01Z"
lastCommitAt: "2026-07-30T06:07:27Z"
lastReleaseAt: "2021-08-04T08:50:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 43
maintainers: ["shanghaikid", "dependabot[bot]", "sijie-ni-0214"]
openGraphImageUrl: "https://opengraph.githubassets.com/711955a733435968f50b5819e5f4d0aa8362728e704a674b3e0b670d9badccf0/milvus-io/milvus-sdk-node"
---

# @zilliz/milvus2-sdk-node

Official Node.js SDK for [Milvus](https://github.com/milvus-io/milvus) vector database. Provides gRPC and HTTP clients for vector similarity search, metadata filtering, and full collection/index/user management.

**Package**: `@zilliz/milvus2-sdk-node` | **Node.js**: v18+ | **License**: Apache-2.0

## Installation

```bash
npm install @zilliz/milvus2-sdk-node
# or
yarn add @zilliz/milvus2-sdk-node
```

## Compatibility

| Milvus version | SDK version | Install command                             |
| :------------: | :---------: | :------------------------------------------ |
|    v2.6.0+     |  **latest** | `yarn add @zilliz/milvus2-sdk-node@latest`  |
|    v2.5.0+     |   v2.5.0    | `yarn add @zilliz/milvus2-sdk-node@2.5.12`  |
|    v2.4.0+     |   v2.4.9    | `yarn add @zilliz/milvus2-sdk-node@2.4.9`   |

## Quick Start

### Connect to Milvus

```typescript
import { MilvusClient } from '@zilliz/milvus2-sdk-node';

// Local Milvus
const client = new MilvusClient({ address: 'localhost:19530' });

// With authentication
const client = new MilvusClient({
  address: 'localhost:19530',
  username: 'root',
  password: 'milvus',
});

// Zilliz Cloud
const…
