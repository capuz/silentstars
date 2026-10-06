---
repo: "quarkiverse/quarkus-shim"
name: "quarkus-shim"
description: "Patch any Java class at build time — insert, wrap, or replace behavior in code you don't own"
readmeQualityOk: true
url: "https://github.com/quarkiverse/quarkus-shim"
homepage: "https://docs.quarkiverse.io/quarkus-shim/dev/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["asm", "build-time", "bytecode", "instrumentation", "patching", "quarkus-extension"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 33
recentReleases: 5
createdAt: "2026-07-12T06:54:23Z"
lastCommitAt: "2026-10-06T10:42:52Z"
lastReleaseAt: "2026-08-13T21:14:49Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 61
maintainers: ["Eng-Fouad", "dependabot[bot]", "quarkiverse-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/69c60d0b0d676f5ff2092a6a5173124c1ad545f6b891a7c484743004ce297d2d/quarkiverse/quarkus-shim"
---

# Quarkus Shim
    

Patch any Java class at **build time** — insert, wrap, or replace behavior in code you don't own.

Shim is a Quarkus extension that weaves your patches into target classes during augmentation
(via `BytecodeTransformerBuildItem` + ASM). Because everything happens at build time, patched
classes work in JVM mode, dev mode (with live reload) and GraalVM native image alike — no Java
agent, no runtime instrumentation.

> Note: "shim" here means *modifying existing behavior* in classes you can't edit — not a
> JS-style compatibility polyfill.

The six kinds of hook:

| | |
|---|---|
| `@ShimBefore`  | run code at method entry; may receive `self` and a prefix of the arguments |
| `@ShimAfter`   | run code before every normal return; may receive `self` and the returned value |
| `@ShimCatch`   | run code when the method exits by throwing; may receive `self` and the exception |
| `@ShimFinally` | run code however the method exits; may receive `self` |
| `@ShimReplace` | replace the method body entirely |
| `@ShimAround`  | wrap the method — call the original via `ShimCall`, transforming args/result |

## Installation

Add the extension to your Quarkus application. With…
