---
repo: "botiverse/oar"
name: "oar"
description: "oar (Open Agent Runtime): programming interface for all agent harnesses"
readmeQualityOk: true
url: "https://github.com/botiverse/oar"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 489
forks: 14
openIssues: 10
closedIssues: 97
watchers: 1
contributors: 9
recentReleases: 10
createdAt: "2026-08-05T06:55:45Z"
lastCommitAt: "2026-11-05T11:25:29Z"
lastReleaseAt: "2026-10-15T12:33:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 27
maintainers: ["stamp-build[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/65655d49d82a8d4f66111011fb24bc5cfe6f56128f014bf4ce661c85fce1c2cb/botiverse/oar"
---

# OAR - *programming interface for all agent harnesses*

OAR (**O**pen **A**gent **R**untime) is a provider-independent programming interface for coding-agent runtimes: a solid foundation for building agent workspaces and other applications.

**Delete harness logic and focus on outcomes and UX.**

## Supported runtimes

        Antigravity
        Claude Code
        Codex
        CodeBuddy Code
        Cursor
        Grok Build
        Kimi Code
        OpenCode
        Pi
        Qwen Code
        Qoder

[Pi Durable](https://github.com/botiverse/oar/blob/HEAD/docs/runtimes/pi-durable.md) also runs through a host-owned Harness,
including in a browser ([demo](https://github.com/botiverse/oar/blob/HEAD/apps/pi-durable/README.md)).

## Library

One API drives every runtime: swap `"claude"` for `"codex"`, `"grok"` or
`"pi"` (with a model it has) and the code stays the same. An option a runtime cannot honor is refused
before anything opens, never silently dropped.

```ts
import { defaultRuntimes, promptAndWait } from "@botiverse/oar";

const claude = defaultRuntimes.require("claude");
const installation = await claude.installation?.();
if (installation?.kind !== "available") throw new…
