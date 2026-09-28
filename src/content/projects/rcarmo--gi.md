---
repo: "rcarmo/gi"
name: "gi"
description: "An elegant Go coding agent, for more civilized times"
readmeQualityOk: true
url: "https://github.com/rcarmo/gi"
homepage: "https://rcarmo.github.io/projects/gi/"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [53, 24]
topics: ["agents", "go", "harness", "clojure"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T08:20:22Z"
lastCommitAt: "2026-09-28T10:06:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 42
maintainers: ["rcarmo"]
openGraphImageUrl: "https://opengraph.githubassets.com/15b1243fee13c4d842cf8d71874bb60934cd9ae3861073f45891b10b73149133/rcarmo/gi"
---

# gi

A coding agent built on `go-ai`, informed by lessons learned from Pi, Piclaw, and Vibes.

## Status

Gi runs a web UI and a terminal UI from one pure-Go binary, with embedded web assets and SQLite-backed sessions, messages and turns. Bun is needed to build the browser assets, but there is no Node or Bun runtime dependency.

Piclaw parity is partial. Gi reuses pinned Piclaw components and implements its own backend, adapters and host UI. Composer/picker layout and several keyboard journeys still need work; sharing component source does not make the applications interchangeable. See the dated [feature and parity matrix][parity] for what works, what differs and what is planned.

## Features

* Streaming chat, session-local models, durable follow-up queues and run-bound steering use the same Go turn engine. Reconnect refreshes authoritative state; automatic and manual compaction retain the visible conversation.
* The browser has durable drafts and attachments, session selection and management, scoped search, Markdown/code rendering, image lightboxes and read-only workspace tabs. Settings covers models, appearance, instance identity, compaction and OpenAI/Anthropic API keys; it…
