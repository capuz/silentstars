---
repo: "lcwecker/decorated-pi"
name: "decorated-pi"
description: "A practical enhancement pack for pi coding agent — token-efficient workflow, cache-friendly design, and smarter tools"
readmeQualityOk: true
url: "https://github.com/lcwecker/decorated-pi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 12
forks: 0
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-15T12:45:47Z"
lastCommitAt: "2026-10-14T08:57:24Z"
lastReleaseAt: "2026-06-01T02:32:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["lcwecker"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2ae13740f95dfb34cf78e3be09d5ef8c201998405778f4f67ebf7dc14061970/lcwecker/decorated-pi"
---

# decorated-pi

`decorated-pi` is a practical enhancement pack for [Pi](https://github.com/earendil-works/pi) — token-efficient workflow, cache-friendly design, and smarter tools.

## Install

```bash
pi install npm:decorated-pi
# or
pi install git:github.com/lcwecker/decorated-pi
# or
pi install /path/to/decorated-pi
```

## Features

### 1. Token Efficiency

Multiple layers of token savings that compound across every session.

**Talk Normal Prompt** — injects a response-style prompt adapted from [talk-normal](https://github.com/hexiecs/talk-normal) (prompt.md v0.6.2), trimming filler, summary stamps, conditional follow-up menus, negation-frame phrasing, and verbose framing. This reduces assistant output tokens and keeps visible reasoning / explanation blocks tighter.

**Codegraph** — integrates [codegraph](https://github.com/colbymchenry/codegraph) to offer a code map of your project, so the LLM can navigate symbols and call graphs without chaining `ls` → `grep` → `read`. **Create and maintain the project index yourself; see the [codegraph documentation](https://github.com/colbymchenry/codegraph/blob/main/README.md).**

**Auxiliary Models** — offloads heavy-but-dumb tasks to…
