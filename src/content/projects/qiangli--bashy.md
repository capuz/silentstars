---
repo: "qiangli/bashy"
name: "bashy"
description: "A pure-Go GNU Bash 5.3 with coreutils, built to POSIX.1-2016, one binary for Linux, macOS and Windows. Bash# brings Go and fenced code into the shell, so a script is also an agent skill. Yoke is the harness AI agents work and collaborate through, and software shaping lets you change any tool by describing it in plain words."
readmeQualityOk: true
url: "https://github.com/qiangli/bashy"
homepage: "https://github.com/bashsharp/tour"
language: "Go"
languages: ["Go"]
languagePcts: [67]
topics: ["agents", "bash", "bashsharp", "coding-agents", "golang", "posix", "shell", "windows", "agentic", "coreutils"]
stars: 8
forks: 1
openIssues: 4
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-14T22:53:05Z"
lastCommitAt: "2026-11-09T00:54:04Z"
lastReleaseAt: "2026-07-04T01:19:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 51
maintainers: ["qiangli"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aa35ad51647c479f5229c171044b1bd706232cbf4f61c86b4ac2280350d8e0e/qiangli/bashy"
---

---
name: bashy
description: Install bashy, connect the AI agent reading this page to it (skill + MCP), and continue the chat through bashy verbs. Pure-Go Bash 5.3 + coreutils (GNU-compatible, POSIX.1-2016) for Linux, macOS and Windows; Bash# (Go with bash, one file is both script and skill); Yoke, the agentic harness for shaping your own tools.
type: dag
default: help
---

# bashy

> **AI agent setting this up for a user?** Read the raw file —
> https://raw.githubusercontent.com/qiangli/bashy/main/README.md — and follow
> [*For agents*](#for-agents-set-up-and-stay). It starts with one question to your user.

**A pure-Go Bash 5.3 that speaks Bash# — built for AI agents, readable by you.**

> **Try it:** open any AI coding agent (Claude Code, Codex, OpenCode, …) and say
> *"Set up bashy from https://github.com/qiangli/bashy"*. It installs bashy,
> asks you once, connects itself, and keeps working with you through bashy's tools.

**Prefer the terminal?** Paste one line (checksum-verified, into `~/.local/bin`, no sudo).
Drop `--no-service` / `-NoService` to also run outpost as an unpaired boot service.

```sh
curl -fsSL https://dhnt.io/install.sh | sh -s -- --no-service…
