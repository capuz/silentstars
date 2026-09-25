---
repo: "imbue-ai/mngr"
name: "mngr"
description: "CLI for managing coding agents"
readmeQualityOk: true
url: "https://github.com/imbue-ai/mngr"
homepage: "https://imbue.com/product/mngr/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 413
forks: 44
openIssues: 35
closedIssues: 73
watchers: 1
contributors: 28
recentReleases: 1
createdAt: "2026-01-19T22:43:30Z"
lastCommitAt: "2026-09-25T09:02:45Z"
lastReleaseAt: "2026-07-09T10:15:55Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 30
maintainers: ["joshalbrecht", "weishi-imbue", "gnguralnick"]
openGraphImageUrl: "https://opengraph.githubassets.com/efcae92f70d529dfa6e37c571c6f7c132e6a55ba0a179c0a5b3fb55a6d1deb5a/imbue-ai/mngr"
discussionCount: 1
---

# mngr: run any coding agent in parallel, anywhere

> This repository is the public mirror of Imbue's development repository: every
> change to the open-source code is exported here automatically, with the
> original author on each commit. Issues and pull requests are welcome here.

`mngr` is a Unix-style tool for managing coding agents.

Seamlessly scale from a single local Claude to 100s of agents across remote hosts, containers, and sandboxes.
List all your agents, see which are blocked, and instantly connect to any of them to chat or debug.
Compose your own powerful workflows on top of agents without being locked in to any specific provider or interface.

*Built on SSH, git, and tmux. Extensible via [plugins](https://github.com/imbue-ai/mngr/blob/HEAD/libs/mngr/docs/concepts/plugins.md) . No managed service required.*

---

**installation:**
```bash
curl -fsSL https://raw.githubusercontent.com/imbue-ai/mngr/main/scripts/install.sh | bash
```

## Overview

`mngr` makes it easy to create and use *any AI agent* (ex: Claude Code, Codex), *anywhere* (locally, in Docker, on Modal, etc.).

Think of `mngr` as "git for agents": just like git allows you to…
