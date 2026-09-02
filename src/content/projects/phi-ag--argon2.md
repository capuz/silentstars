---
repo: "phi-ag/argon2"
name: "argon2"
description: "Minimal Argon2 WebAssembly SIMD build"
readmeQualityOk: true
url: "https://github.com/phi-ag/argon2"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["argon2", "crypto", "emscripten", "hashing", "password", "simd", "wasm", "webassembly"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-22T05:27:06Z"
lastCommitAt: "2026-09-02T08:01:19Z"
lastReleaseAt: "2024-09-23T15:08:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 63
maintainers: ["renovate[bot]", "peterhirn", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/918dccf6bc14b3c49a7a6a1509272c7ac57878462e0f5d4d7714b0075d5f54b3/phi-ag/argon2"
discussionCount: 0
---

# Argon2

Minimal Argon2 WebAssembly SIMD build inspired by [antelle/argon2-browser](https://github.com/antelle/argon2-browser)

## Usage

    pnpm add @phi-ag/argon2

### Examples

Node.js / Deno / Bun (see [node.ts](https://github.com/phi-ag/argon2/blob/HEAD/src/node.ts))

> [!NOTE]
> Native implementations are available for [Node.js](https://nodejs.org/api/crypto.html#cryptoargon2algorithm-parameters-callback) and [Bun](https://bun.com/reference/node/crypto/argon2)

```ts
import initialize from "@phi-ag/argon2/node";

const argon2 = await initialize();

const password = "my secret password";
const { encoded } = argon2.hash(password);

argon2.verify(encoded, password);
```

Browser (Vite, see [fetch.ts](https://github.com/phi-ag/argon2/blob/HEAD/src/fetch.ts))

```ts
import wasm from "@phi-ag/argon2/argon2.wasm?url";
import initialize from "@phi-ag/argon2/fetch";

const argon2 = await initialize(wasm);
const { encoded } = argon2.hash("my secret password");
```

Browser (Vanilla, see [e2e/index.html](https://github.com/phi-ag/argon2/blob/HEAD/e2e/index.html))

```ts
import initialize from "/fetch.js";

const argon2 = await initialize("/argon2.wasm");
const { encoded } =…
