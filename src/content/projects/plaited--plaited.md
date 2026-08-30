---
repo: "plaited/plaited"
name: "plaited"
description: "Framework for sovereign agent nodes, A2A modnets, generative UI, and behavioral runtime provenance."
readmeQualityOk: true
url: "https://github.com/plaited/plaited"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["a2a", "agent-framework", "behavioral-programming", "bun", "generative-ui", "modnet", "neuro-symbolic", "sovereign-agents", "personal-agent", "personal-assistant-framework"]
stars: 10
forks: 1
openIssues: 2
closedIssues: 93
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-11-26T00:22:51Z"
lastCommitAt: "2026-08-30T09:26:06Z"
lastReleaseAt: "2023-10-28T21:25:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 74
maintainers: ["EdwardIrby"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5f42f7f2c91749ba6502132c41f00fcd147692f3cd0e61d26c432ef7da55439/plaited/plaited"
discussionCount: 1
---

# plaited

The Plaited framework — behavioral-programming runtime, SSR Renderer, browser
Controller, HTML/CSS schemas, validation utils, and CLI.

## Repository Map

- `src/` — the framework (runtime, schemas, Renderer/Controller, CLI)
- `skills/` — published reference skills (`plaited-framework`, `design`, `git-context`, `markdown`, `mcp-client`, `typescript-lsp`)
- `.agents/skills/` — workspace-installed skills
- `research/` — research briefs (`atproto-content-sites`, `mcp-apps`, Spatiotemporal Composability paper)
- `prompts/` — implementation prompts
- `scripts/` — repo setup and package-maintenance shell glue
- `bin/` — CLI entry point
- `assets/` — brand assets

## Public API

Imported as `plaited`. Three entry points:

```ts
// Main entry — behavioral runtime, Renderer, validation utils, frontier analysis
import { Renderer, validateAndEscapeHtml, validateAttributeValue, ValidationError } from 'plaited'

// Controller — browser-side controller bootstrap
import { Controller } from 'plaited/controller'

// Utils — keyMirror, deepEqual, isTypeOf, trueTypeOf, ueid, case conversion, escape, wait
import { keyMirror, deepEqual } from 'plaited/utils'
```

## What's here

-…
