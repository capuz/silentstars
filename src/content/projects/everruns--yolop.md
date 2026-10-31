---
repo: "everruns/yolop"
name: "yolop"
description: "Nice and friendly Coding Agent"
readmeQualityOk: true
url: "https://github.com/everruns/yolop"
homepage: "https://everruns.com/yolop/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["acp", "ai-agents", "ai-coding", "coding", "everruns"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-27T03:38:41Z"
lastCommitAt: "2026-10-31T09:52:54Z"
lastReleaseAt: "2026-07-21T00:15:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["chaliy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a222513be1226a998c984cf3b3ce21c927a2ee9fff68eeae88251b7396132b6/everruns/yolop"
---

# yolop

Yolop is a terminal coding agent that plans the fix, runs the commands, and shows every step. Point it at your repo, describe the outcome, watch it work.

```bash
yolop
# > add retry with backoff to the sync client, then run the tests for it
```

## Origin of the name

`yolop` comes from the Ukrainian `Йолоп`: a dummy, fool, or not-too-bright person. The name was meant to sound clever and funny in Ukrainian while also describing the agent's starting point: Yolop avoids per-tool approval pop-ups. Routine workspace work runs automatically; hard prompts are reserved for the configured shell boundary, with [soft approval](#trust-and-guardrails) for critical moments that need spoken consent and an audit trail.

## Contents

- [Origin of the name](#origin-of-the-name)
- [Why yolop](#why-yolop)
- [Install](#install)
- [Quickstart](#quickstart)
- [How you work with it](#how-you-work-with-it)
- [Trust and guardrails](#trust-and-guardrails)
- [Providers and models](#providers-and-models)
- [Context superpowers](#context-superpowers)
- [MCP servers](#mcp-servers)
- [Extensions](#extensions)
- [Skills, memory, and hooks](#skills-memory-and-hooks)
- [Reference](#reference)
-…
