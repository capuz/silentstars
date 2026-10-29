---
repo: "shortcuts/radin"
name: "radin"
description: "🐀 the software factory stack for those who have to save tokens"
readmeQualityOk: true
url: "https://github.com/shortcuts/radin"
language: "Shell"
languages: ["Shell", "C"]
languagePcts: [76, 23]
topics: ["claude-agents", "claude-code", "claude-skills", "llm-tools", "ai", "claude-code-plugin", "prompt-engineering"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-20T08:24:58Z"
lastCommitAt: "2026-10-29T10:36:47Z"
lastReleaseAt: "2026-10-19T20:19:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 57
maintainers: ["shortcuts", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e631e7e1d6c9df87183adbcf66487d80e8ff502fa30750c202f6702c81a3136d/shortcuts/radin"
fundingLinks: ["GITHUB:https://github.com/shortcuts"]
---

radin is a Claude Code plugin for a solo dev on a small subscription. It has two parts.

1. **A backlog that outlives the conversation.** Tasks and epics are files in your repo.
   You record a bug or an idea mid-session and come back to it later.
2. **An agent harness that works the backlog.** A router plans a task, hands it to a fresh
   sub-agent, reviews the diff, and commits. One task, one commit. A run resumes where it stopped.

Both run on a tool stack picked to cut token use without cutting output quality.
radin installs that stack and wires it into the harness.

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/shortcuts/radin/main/install.sh | bash
```

You need `curl`, `tar`, `bash` and the `claude` CLI. Add `-s -- --yes` to accept every default.
Update, repair and uninstall: [docs/install.md](https://github.com/shortcuts/radin/blob/HEAD/docs/install.md).

## Use it

Record, plan, execute, review. Each skill runs in your own conversation, so it can ask you questions.

| Command | What it does |
| --- | --- |
| `/radin-record` | Turn a bug, idea or aside from this session into a backlog task |
| `/radin-plan` | Write a step-by-step plan for one task. Touches…
