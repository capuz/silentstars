---
repo: "hacker-cb/1c-odata"
name: "1c-odata"
description: "TypeScript library for the REST/OData interface of 1С:Enterprise 8 (V3 only — the only version 1С ships as of 2026). Codegen-driven type safety, ergonomic filter API, single source of truth between schema and runtime."
readmeQualityOk: true
url: "https://github.com/hacker-cb/1c-odata"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 7
forks: 4
openIssues: 6
closedIssues: 43
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-14T12:11:16Z"
lastCommitAt: "2026-11-26T15:23:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 59
maintainers: ["hacker-cb", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b595fbb70769acae007e249d75e90381106f18bda29cfb5f5e0b31bdc8344880/hacker-cb/1c-odata"
---

# 1c-odata

TypeScript library for the standard OData interface of 1С:Enterprise 8 — OData protocol **version 3.0** (the dialect any modern 1С 8.3 base exposes; 1С does not offer an OData 4.0 interface). Ergonomic filter API, schema-driven date / Int64 / ValueStorage handling, and a single source of truth between schema and runtime. Codegen is the optional DX layer on top: generate types for full IDE completion, or [run against any base with zero generated files](#schema-sources).

> **Server-side only.** Built on server runtime APIs (`globalThis.fetch`, `Buffer`, `fs`), so it does not run in a browser. Minimum Node: **24.18.0** (active LTS). Pure ESM.
>
> ⚠️ **v0.x — pre-release.** API is unstable; see [`STABILITY.md`](https://github.com/hacker-cb/1c-odata/blob/HEAD/STABILITY.md).
