---
repo: "kamrul1157024/helios"
name: "helios"
description: "A platform that orchestrates AI coding agents on your machine"
readmeQualityOk: true
url: "https://github.com/kamrul1157024/helios"
language: "Go"
languages: ["Go", "Dart"]
languagePcts: [50, 27]
stars: 7
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-09T10:42:39Z"
lastCommitAt: "2026-08-14T05:15:39Z"
lastReleaseAt: "2026-04-12T18:42:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["kamrul1157024", "MusavvirK"]
openGraphImageUrl: "https://opengraph.githubassets.com/b776ee1652aebff3460657eed8f8fd9965361d12b59d938d63e3311000b4ef32/kamrul1157024/helios"
---

# helios

**A head for headless coding harnesses.**

Claude Code, Codex and Aider are headless harnesses: they run in a terminal, on
your machine, with no UI of their own beyond the one terminal you started them
in. Helios is the head on top of them. It runs each harness in a terminal host
it owns, keeps the output in memory, and serves it to three surfaces:

- **Desktop app** — sidebar of every session on every machine, live terminal,
  chat transcript, git diffs, approvals, file tree
- **Mobile app** — the same sessions in your pocket, notified and approvable
  the moment a harness blocks on a permission
- **Tunnel** — nine providers, one keypress, so the phone reaches the daemon
  from anywhere without you configuring a network

The harness stays headless and stays local. Helios is the part you look at.

Claude Code is the harness wired up today, through its native hooks. Attaching
any other harness is a plugin: the provider registry in `internal/provider` is
the seam, and going forward every harness — Codex, Aider, Gemini CLI, your own
— plugs in there rather than being special-cased in the daemon.

## Install

```bash
git clone https://github.com/kamrul1157024/helios.git &&…
