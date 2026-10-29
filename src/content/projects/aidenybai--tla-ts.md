---
repo: "aidenybai/tla-ts"
name: "tla-ts"
description: "A TLA+ interpreter and model checker in TypeScript"
readmeQualityOk: true
url: "https://github.com/aidenybai/tla-ts"
homepage: "https://tla-ts.aidenybai.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["formal-verification", "tlaplus", "typescript"]
stars: 40
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-26T08:07:52Z"
lastCommitAt: "2026-10-29T05:50:38Z"
lastReleaseAt: "2026-10-28T03:32:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 39
maintainers: ["aidenybai"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9ff32c5eb1892429d50d14145432f17d17c1bc9a981a54dcbd42912c6ec09c5/aidenybai/tla-ts"
---

# tla-ts

tla-ts is a drop-in replacement for [TLC](https://github.com/tlaplus/tlaplus) that's **2× faster**.

TLA+ lets you write formal models of a system, and TLC model checks them. But TLC is written in Java and needs the JVM. tla-ts runs anywhere JavaScript runs, such as the browser, Node, and Bun. Try it in the [playground](https://tla-ts.aidenybai.com).

```ts
import { check } from "tla-ts";

const result = await check({
  source: `---- MODULE Counter ----
EXTENDS Naturals
VARIABLE x
Init == x = 0
Next == x' = x + 1
Small == x < 3
====`,
  config: "INIT Init NEXT Next INVARIANT Small",
});

result.status; // "invariant-violation"
```

## Install

```shell
npm install tla-ts
```

## Command line

The `tla-ts` command takes TLC's options and prints TLC's output. `tla-ts prove` takes tlapm's options and prints tlapm's output.

### Check a spec

To check a spec, pass its path:

```shell
npx tla-ts Spec.tla
```

tla-ts reads the configuration from `Spec.cfg` next to the spec. It exits with the exit code TLC uses for the same result.

You can pass several paths, or a glob such as `"specs/*.tla"`. tla-ts checks each spec in turn and exits with the exit code of the first spec that…
