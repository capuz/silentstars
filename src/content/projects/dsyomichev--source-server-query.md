---
repo: "dsyomichev/source-server-query"
name: "source-server-query"
description: "Query client for Source servers using the Source Query Protocol."
readmeQualityOk: true
url: "https://github.com/dsyomichev/source-server-query"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 16
forks: 6
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-05-26T15:06:43Z"
lastCommitAt: "2026-11-10T14:40:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 45
maintainers: ["dsyomichev"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b7b3155756c2bb78405a80a2b39b8858b53cbeef2c6532c714ea1bd7a556f57/dsyomichev/source-server-query"
---

# Source Server Query

A library for querying Source servers using the [Source Query Protocol](https://developer.valvesoftware.com/wiki/Server_queries). Execute A2S_INFO, A2S_PLAYER, and A2S_RULES server queries. Responses will be returned in an array or object depending on the request. All methods are asynchronous resulting in a clean and easy way to query many servers one by one should it be necessary.

## Installing

You can add this package to your own project using npm.

```
$ npm install source-server-query
```

Then load it into your own project. This project includes type declarations for Typescript.

```typescript
import query from 'source-server-query';

/* OR */

const query = require('source-server-query');
```

Or create the object using a constructor.

```typescript
import { SourceQuerySocket } from 'source-server-query';

const query: SourceQuerySocket = new SourceQuerySocket();

/* OR */

const { SourceQuerySocket } = require('source-server-query');

const query = new SourceQuerySocket();
```

## Usage

Each method, `info`, `players`, `rules`, uses the same arguments in the form of an address and port. The port is the UDP query port, not the game port. An optional…
