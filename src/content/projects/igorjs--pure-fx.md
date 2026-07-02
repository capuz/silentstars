---
repo: "igorjs/pure-fx"
name: "pure-fx"
description: "Functional application framework for TypeScript. Zero dependencies. Errors as values. Immutability at runtime."
url: "https://github.com/igorjs/pure-fx"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 44]
topics: ["framework", "functional-programming", "typescript", "zero-dependencies"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-03-14T10:46:02Z"
lastCommitAt: "2026-07-02T06:33:14Z"
lastReleaseAt: "2026-05-03T20:52:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 40
maintainers: ["igorjs[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a537036e490c8b836c18a11c02b76938e0903b0f8c7a607b004598f32c439211/igorjs/pure-fx"
---

# Pure FX

Functional application framework for TypeScript. Zero dependencies.

> **Note:** This project is in beta. APIs may change between minor versions until 1.0.

Errors are values, not exceptions. Data is immutable, enforced at runtime. Async is lazy and composable.

Runs on Node.js 22+, Deno 2+, Bun, Cloudflare Workers, and Chromium.

## Install

```bash
npm install @igorjs/pure-fx
```

Also available on [JSR](https://jsr.io/@igorjs/pure-fx):

```bash
npx jsr add @igorjs/pure-fx
```

## Quick Example

```ts
import { Ok, Err, pipe, Task, Schema, File, Valid, Invalid } from '@igorjs/pure-fx'

// Errors as values, not exceptions
const parse = (s: string) => {
  const n = Number(s);
  return Number.isNaN(n) ? Err('not a number') : Ok(n);
};

pipe(parse('42'), r => r.map(n => n * 2)); // Ok(84)

// Lazy async with Result
const data = await Task.fromPromise(() => fetch('/api'), String)
  .map(r => r.json())
  .timeout(5000, () => 'timed out')
  .run(); // Result<unknown, string>

// Validate unknown input
const User = Schema.object({ name: Schema.string, age: Schema.number });
User.parse(untrustedData); // Result<{ name: string; age: number }, SchemaError>

// Accumulate ALL…
