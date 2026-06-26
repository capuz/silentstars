---
repo: "MTKruto/MTKruto"
name: "MTKruto"
description: "Cross-runtime JavaScript library for building Telegram clients"
url: "https://github.com/MTKruto/MTKruto"
homepage: "https://mtkru.to"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["bun", "deno", "mtproto", "nodejs", "telegram"]
stars: 164
forks: 17
openIssues: 1
closedIssues: 32
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2023-04-01T15:25:03Z"
lastCommitAt: "2026-06-26T21:30:38Z"
lastReleaseAt: "2023-05-18T15:59:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 99
undervaluedScore: 45
maintainers: ["rojvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcdfaf8203c73b0f837f1026f26dce7d5dda93c24df650137aa6cd9fbac4d0e7/MTKruto/MTKruto"
---

# MTKruto

Cross-runtime JavaScript library for building Telegram clients

###### [Documentation](https://mtkruto.deno.dev) / [API Reference](https://deno.land/x/mtkruto/mod.ts) / [Discussion Chat](https://t.me/MTKrutoChat) / [License](#license)

</div>

### Key Features

- **Cross-runtime.** Supports Node.js, Deno, browsers, and Bun.
- **Type-safe.** Written in TypeScript with accurate typings.
- **Prioritizes the Web.** Prefers Web APIs over runtime-specific APIs.
- **Easy-to-use.** Provides its own high-level API on top of the Telegram API.
- **Extensible.** Its middleware system lets you integrate external code.

> Note: MTKruto has not reached version 1.0.0 yet. While it can run in production, we currently do not recommend depending on it for critical projects.

## Get Started

### Node.js

```ts
const { Client, getRandomId } = require("@mtkruto/node"); // npm install @mtkruto/node

const client = new Client();
await client.connect();

const pong = await client.invoke({ _: "ping", ping_id: getRandomId() });
console.debug(pong);
```

### Deno

```ts
import { Client, getRandomId } from "https://deno.land/x/mtkruto/mod.ts";

const client = new Client();
await client.connect();…
