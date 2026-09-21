---
repo: "btakita/agent-doc"
name: "agent-doc"
description: "Interactive document sessions with AI agents"
readmeQualityOk: true
url: "https://github.com/btakita/agent-doc"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 6
forks: 1
openIssues: 26
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-23T16:35:53Z"
lastCommitAt: "2026-09-21T09:14:52Z"
lastReleaseAt: "2026-02-25T23:28:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 48
maintainers: ["btakita"]
openGraphImageUrl: "https://opengraph.githubassets.com/2db295234357dee9564f61bc1a7c10cf23d06c479ca8108cbbeb96ffc5de7530/btakita/agent-doc"
---

# agent-doc

Interactive document sessions with AI agents.

Grok Build is supported through `agent: grok`, including managed interactive
sessions and headless runs. Install its shared skill and MCP connection with
`agent-doc skill install --harness grok`. See [Grok Build setup](https://github.com/btakita/agent-doc/blob/HEAD/docs/guide/agent-backends.md#grok-build).

Edit a markdown file, press a hotkey, and the tool diffs your changes, sends them to an AI agent, and writes the response back into the document. The document is the UI.

> **Alpha Software** — actively developed; APIs and frontmatter format may change between versions.

Supervisor freshness warnings are pane-local and refresh on binary-state changes,
including child-preserving upgrades, without changing the child's turn title.
Automatic editor layout sync retains proof of outgoing pane assignments across
tab switches; layout-reuse invalidation does not erase controller ownership.
Renaming a managed document preserves its live pane when the session identity
has one unambiguous old-path owner, and editor routes await newer layout state
that still covers the routed document instead of racing it with republication.

>…
