---
repo: "Golden-Pigeon/dsh-remote"
name: "dsh-remote"
description: "DSH remote-development plugin: SSH hosts, mirrored remote sessions, terminal/file integration, and one-package installation."
readmeQualityOk: true
url: "https://github.com/Golden-Pigeon/dsh-remote"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["dsh-plugin", "deepseek", "deepseek-harness", "developer-tools", "dsh", "nodejs", "plugin", "remote-development", "remote-sessions", "remote-workspace"]
stars: 8
forks: 4
openIssues: 3
closedIssues: 12
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-10-18T17:12:32Z"
lastCommitAt: "2026-11-23T10:29:53Z"
lastReleaseAt: "2026-10-19T10:16:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 63
maintainers: ["Golden-Pigeon", "samwei12", "XuHuaiyu"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3bee5218096ea1010bcef83fc1b6bad5aa495ee66685dd0b219453e1dd35676/Golden-Pigeon/dsh-remote"
---

# dsh-remote

English | [Chinese](https://github.com/Golden-Pigeon/dsh-remote/blob/HEAD/README.zh.md)

Remote development that behaves like a local session.

Add an SSH host once. The plugin provisions the remote DSH runtime itself, mirrors its workspaces and
sessions into the local sidebar, and opens a remote session in the **ordinary Conversation UI** — the
same transcript, composer, tool cards, stop control, and session list as a local session.

```text
Local DSH                                         Remote host
┌──────────────────────────────────────┐          ┌──────────────────────────────┐
│ normal sidebar + Conversation UI     │          │ dsh web (installed by plugin)│
│  local mirror Session + Agent façade │  SSH     │ dsh-remote-agent             │
│  host registry / auto provisioning   │◀────────▶│  workspace/session write     │
│  direct key or local key proxy        │          │  remote tools + model calls  │
│  authenticated /api route            │  tunnel  │                              │
└──────────────────────────────────────┘          └──────────────────────────────┘
```
