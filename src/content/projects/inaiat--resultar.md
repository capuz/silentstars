---
repo: "inaiat/resultar"
name: "resultar"
description: "Resultar is a TypeScript library for robust, type-safe error handling without throwing exceptions. It's a fork of the neverthrow library, adding features for more flexibility in error handling"
readmeQualityOk: true
url: "https://github.com/inaiat/resultar"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 34
recentReleases: 0
createdAt: "2024-04-08T20:04:45Z"
lastCommitAt: "2026-10-21T17:31:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 69
maintainers: ["inaiat", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/783d879364c8d97e1d2297581274df6e6852dc280ec71c205d5ae7808a47c4ff/inaiat/resultar"
---

# Resultar

**Typed error handling and resilient workflows for TypeScript — from a single `Result<T, E>` to lazy, dependency-injected `ResultTask<T, E, R>`.**

[Core Package](https://github.com/inaiat/resultar/blob/HEAD/packages/resultar/README.md) · [Gradual Adoption Guide](https://github.com/inaiat/resultar/blob/HEAD/docs/gradual-adoption.md) · [Full Reference (`DOCUMENTATION.md`)](https://github.com/inaiat/resultar/blob/HEAD/DOCUMENTATION.md) · [`resultar-check` Compiler CLI/LSP](https://github.com/inaiat/resultar/blob/HEAD/packages/check/README.md) · [Benchmarks](https://github.com/inaiat/resultar/blob/HEAD/benchmarks/README.md) · [AI / Agent Skill (`llms.txt`)](https://github.com/inaiat/resultar/blob/HEAD/llms.txt)

---

## Why Resultar in 30 Seconds

In standard TypeScript, `throw` and rejected promises are invisible in function signatures. Callers cannot tell what can fail—or whether every failure mode was handled—without reading the implementation of every transitive call.

```ts
// ❌ Standard TypeScript: the signature promises a number, but silently throws at runtime
const parsePort = (input: string): number => {
  const port = Number(input)
  if (!Number.isInteger(port)…
