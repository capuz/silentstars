---
repo: "CHOAM-CO/Discodex"
name: "Discodex"
description: "Text and voice conversations in Discord, connected to the official Codex app-server."
readmeQualityOk: true
url: "https://github.com/CHOAM-CO/Discodex"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-15T14:01:04Z"
lastCommitAt: "2026-10-23T08:46:30Z"
lastReleaseAt: "2026-10-20T12:35:46Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["K-for-cay", "Eunho-J", "web-flow"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb54ff89314d9761a6f58cca7ceee5ef4fb2b33e3dd6e515eaa05727cb76725c/CHOAM-CO/Discodex"
---

A Rust bridge connecting Discord to a persistent conversation, powered by a bundled Codex fork.

---

Discodex connects one Discord app profile to a persistent working conversation. Codex or the optional Antigravity CLI executes work; OpenAI Realtime provides voice and delegates to that same working conversation. The bundled Codex fork manages native tasks and subagents.

This page describes the current source tree. Downloadable binaries follow the published release tags.

## Features

| Feature | What it does |
| --- | --- |
| Persistent context | Chat and voice share a Codex conversation that resumes after a worker restart or voice call. |
| Voice and transcripts | Talk in an allowed voice channel. Confirmed transcripts are kept in a per-call Discord thread. |
| Questions and approvals | Answer Codex questions and approval requests in Discord forms and buttons; selections return to the matching request. |
| Profile and memory | Set a profile name and, with `memoryEnabled: true`, use official native memory features and dedicated memory tools. |
| Bundled Discodex skill | Provides a guide in the installation language with setup, settings, and troubleshooting references for the…
