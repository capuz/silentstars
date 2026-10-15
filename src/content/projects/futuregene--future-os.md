---
repo: "futuregene/future-os"
name: "future-os"
description: "One AI agent, everywhere you work — terminal, desktop, mobile, and your chat apps. Rust core."
readmeQualityOk: true
url: "https://github.com/futuregene/future-os"
homepage: "https://future-os.cn"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [65, 30]
topics: ["ai-agents", "rust", "developer-tools", "productivity", "agent-framework", "ai-assistants", "llm", "openclaw-alternative", "personal-ai", "tui"]
stars: 110
forks: 13
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-05-18T02:46:46Z"
lastCommitAt: "2026-10-15T08:32:14Z"
lastReleaseAt: "2026-08-18T09:45:26Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 36
maintainers: ["huichen", "tallcode", "ace331"]
openGraphImageUrl: "https://opengraph.githubassets.com/60512c268d1f622e58fc5e6ee72c23a4e6d0e0e9683ff0c2a7cb38903a6e8cc1/futuregene/future-os"
discussionCount: 1
---

Terminal, desktop, mobile, and your chat apps — one Rust core, one agent.<br>
  Configurable approvals and OS sandboxes. Local-first. Open source.

---

## Why FutureOS

- **Choose the execution boundary.** Configure file-access approvals and OS sandboxing for agent tools. The desktop defaults to Unrestricted (`off`); select Manual or Sandboxed before working with untrusted content. See the [security model](https://github.com/futuregene/future-os/blob/HEAD/SECURITY.md) and [sandbox guide](https://github.com/futuregene/future-os/blob/HEAD/docs/wiki/en/Sandbox.md) for defaults and limitations.
- **One backend, every surface.** A single gRPC agent drives the terminal UI, desktop app, mobile apps, CLI, and IM bots — same sessions, same memory, same skills, wherever you happen to be.
- **Long runs need engineering, not prompting.** The built-in loop control plane gives durable goals, event-sourced state, and verification gates to runs of 24+ hours — start a research task at night, review the results from your phone in the morning.

## Features

| Category | Details |
|---|---|
| **Multi-Interface** | Terminal UI (TUI), desktop app (GUI), mobile apps (Android & iOS), CLI, IM bots — one…
