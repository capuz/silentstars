---
repo: "LukeLIN-web/claude-board"
name: "claude-board"
description: "interactive with tens of claude code/codex, auto manage tmux"
readmeQualityOk: true
url: "https://github.com/LukeLIN-web/claude-board"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-06-01T02:47:29Z"
lastCommitAt: "2026-10-21T20:01:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 47
maintainers: ["armanakbari", "LukeLIN-web", "XiaoweiLinXL"]
openGraphImageUrl: "https://opengraph.githubassets.com/200ca1437478b912071de9579f1e4549c29e8cc2ce369b6c4bca8af0764fc13c/LukeLIN-web/claude-board"
---

English | [中文](https://github.com/LukeLIN-web/claude-board/blob/HEAD/README.zh-CN.md)

# Claude Fleet

When you're vibe coding with 5–7 Claude Code and Codex windows open at once, you
need one place to see what every window is doing — who's stuck, who's waiting on
you, who's done — and to act on them without hunting for the right terminal tab.

Both **Claude Code** and **Codex** sessions show up as live cards, each tagged
with its agent (a blue `cc` or green `codex` badge) so you can tell them apart at
a glance.

## Run it in 30 seconds

```bash
git clone https://github.com/LukeLIN-web/claude-board
cd claude-board && bash run.sh
# open http://127.0.0.1:7879 in your browser
```

The first run creates a venv and installs dependencies automatically — nothing to
set up. The venv lives on the machine's own disk, in
`~/.local/share/claude-fleet/venv` (`CLAUDE_FLEET_VENV` moves it), so a checkout
shared over NFS gets one per host. Change the port with
`CLAUDE_FLEET_PORT=9000 bash run.sh`. Detached mode
is supervised and restarts the board automatically if it exits. Use
`bash run.sh status`, `bash run.sh restart`, or `bash run.sh stop` to manage it.

## What it solves

The everyday pain…
