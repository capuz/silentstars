---
repo: "Smeldr/core"
name: "core"
description: " Content backend with typed lifecycle enforcement, MCP-native API, and zero runtime dependencies. Self-hosted. Open source."
url: "https://github.com/Smeldr/core"
homepage: "https://smeldr.dev"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["content-management", "go", "golang", "open-source", "zero-dependency", "ai-agents", "mcp", "smeldr"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T10:05:50Z"
lastCommitAt: "2026-06-30T06:49:27Z"
lastReleaseAt: "2026-03-15T20:20:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["xxwink", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/9125f5cf85a924261db714d5721e1e3fecc719045163d3b80cdc74465a45649d/Smeldr/core"
discussionCount: 0
---

# Smeldr

Content-driven backend for agents, readers, and APIs.

Smeldr has MCP as primary interface.
Go. Zero runtime dependencies.

Start a chat with your favorite agent, create content together and then...

...build and publish websites. Edit sections, upload images and manage access directly in chat. Hook up your workflow states to AI actions.

...schedule, change, delete posts on X, Mastodon or LinkedIn

...build apps and manage data and automate workflows

...manage multiple agents to react to signals with the built-in agent runtime

Or coordinate your entire pipeline and automated workflow, AI actions and human review included.

Directly from chat.

**v1.44.3 — stable.** Public APIs are stable within v1.
See [CHANGELOG.md](CHANGELOG.md).

## 30-second start

```bash
git clone https://github.com/smeldr/core
cd example/blog
go run .
# open http://localhost:8080
```

## What Smeldr gives you

**Content**
- **Full CRUD** — create, update, publish, archive, and delete through a single `Module[T]`
- **Draft-safe lifecycle** — drafts return 404 to guests; only Published content is visible
- **Draft preview** — share a signed `?preview=<token>` URL to let reviewers see a draft…
