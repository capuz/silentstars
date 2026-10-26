---
repo: "doeixd/foldkit-plus"
name: "foldkit-plus"
description: "Foldkit Plus: packages for Foldkit apps. Server data (Remote), local-first sync, routing (Site), SSR, forms, CRUD, a CMS, rich text, a page builder, and AI agents over MCP and WebMCP."
readmeQualityOk: true
url: "https://github.com/doeixd/foldkit-plus"
homepage: "https://foldkit-plus.pages.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai-agents", "effect-ts", "elm-architecture", "foldkit", "json-schema", "llm-tools", "mcp", "model-context-protocol", "typescript", "webmcp"]
stars: 23
forks: 1
openIssues: 8
closedIssues: 110
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-09T15:19:27Z"
lastCommitAt: "2026-10-26T18:06:28Z"
lastReleaseAt: "2026-09-23T03:28:01Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 52
maintainers: ["claude", "doeixd"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a8841871933db269913a3aefdd60e35489df8ee2a8b3a5b01bf31a93d7a0266/doeixd/foldkit-plus"
---

# foldkit-plus

> Packages that extend a [Foldkit](https://foldkit.dev/) application
> outward — to agents, servers, other devices, the URL, and design systems —
> without giving it a second place to keep state.

A Foldkit application is one state machine: a Schema-typed **Model**, a
**Message** union naming everything that can happen, and one pure **`update`**
function that turns a Message into the next Model and some Commands. That shape
is easy to reason about, test, and replay. It gets lost the moment an app grows a
cache in a hook, a store in the URL, a tool handler that re-implements a
transition, or a sync layer with its own reducer.

Everything in this repository keeps the one state machine. An agent can only
send Messages `update` already handles. Server data lives in the Model and is
reconciled by `update`. Replicas replay the same Messages through the same
`update`. The URL and local storage mirror a slice of the Model; they never own
one. Views are styled from outside without forking. Each package answers one
question, and they compose because they meet at explicit application boundaries.

**The website:** [foldkit-plus.pages.dev](https://foldkit-plus.pages.dev/)
has…
