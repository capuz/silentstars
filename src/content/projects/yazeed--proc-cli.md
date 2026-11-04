---
repo: "yazeed/proc-cli"
name: "proc-cli"
description: "Semantic CLI tool for process management. Target by port, PID, name or path."
readmeQualityOk: true
url: "https://github.com/yazeed/proc-cli"
homepage: "https://proc-cli.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["cli", "command-line", "developer-tools", "devtools", "linux", "macos", "port", "process-management", "rust", "terminal"]
stars: 69
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-08T15:26:40Z"
lastCommitAt: "2026-11-04T02:56:08Z"
lastReleaseAt: "2026-01-29T06:57:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 46
maintainers: ["yazeed"]
openGraphImageUrl: "https://opengraph.githubassets.com/97c645528fe7d3da4a3897b543299b0acea3761ef5352ad706af479e5c622b06/yazeed/proc-cli"
fundingLinks: ["GITHUB:https://github.com/yazeed"]
discussionCount: 0
---

# proc

Semantic CLI tool for process management. Target by port, PID, name or path.

Find what's on a port, why it's there, and stop it, in one command you'd guess on the first try. On macOS, Linux, Windows, FreeBSD and NetBSD.

```bash
brew install yazeed/proc/proc
```

Also on [npm, cargo, Scoop, Nix, Docker, and as .deb and .rpm files](#install).

A dev server won't start because port 3000 is taken. proc finds the old tmux session holding it, frees the port, then cleans up what else was left running.

**Docs:** [commands](https://proc-cli.com/commands) · [install](https://proc-cli.com/install) · [FAQ](https://proc-cli.com/faq) · [agent skill](https://proc-cli.com/skill) · [changelog](https://github.com/yazeed/proc-cli/blob/HEAD/CHANGELOG.md)

## One command instead of a pipeline

| Task | proc | Without proc |
|------|------|-------------|
| What's on port 3000? | `proc on :3000` | `lsof -i :3000 -P -n` |
| What is PID 1234, and what does it listen on? | `proc on 1234` | `ps -p 1234 -o pid,ppid,user,etime,command` + `lsof -a -p 1234 -iTCP -sTCP:LISTEN` |
| Why is it there? | `proc why :3000` | `lsof -i :3000` + `ps -o ppid=` chain |
| Kill it | `proc kill :3000` | `lsof -i…
