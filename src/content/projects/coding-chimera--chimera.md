---
repo: "coding-chimera/chimera"
name: "chimera"
description: "AI coding agent CLI with built-in CodeGraph-powered impact analysis and propagation audit, harness tooling, native-agent experience, and tailored adapters for Kimi and DeepSeek."
readmeQualityOk: true
url: "https://github.com/coding-chimera/chimera"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [70, 27]
topics: ["agent", "ai-coding-agent", "harness-engineering", "opencode", "propagation-audit"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-06-17T15:58:51Z"
lastCommitAt: "2026-09-02T07:59:51Z"
lastReleaseAt: "2026-07-07T04:58:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 55
maintainers: ["logic10492"]
openGraphImageUrl: "https://opengraph.githubassets.com/34d47f50dd05377dc55e36ea7fb051872f8263f1772b9afd76a00485a32dc517/coding-chimera/chimera"
---

</p>

# Chimera

[English](https://github.com/coding-chimera/chimera/blob/HEAD/README.md) | [简体中文](https://github.com/coding-chimera/chimera/blob/HEAD/README.zh.md)

Chimera is an AI coding agent distribution: an opencode-derived interactive CLI plus the built-in Chimera/CodeGraph graph and propagation-audit runtime.

The public package and command name is `chimera`. Graph/runtime commands are part of the same CLI; there are no public `opencode` or `codegraph` bins for this distribution.

## Package identity

- Complete agent package source: [`packages/chimera`](https://github.com/coding-chimera/chimera/blob/HEAD/packages/chimera)
- npm package name: `chimera`
- public CLI command: `chimera`
- graph command entry points: `chimera graph ...` and `chimera --graph ...`

When this repository refers to the original project, it uses **upstream opencode** or **original opencode** explicitly.

## Design lineage and references

The name Chimera is intentional: this project combines strengths from several agent and graph-runtime systems into one distribution, while keeping the public package and command identity as `chimera`.

Chimera acknowledges these design references:

- [upstream…
