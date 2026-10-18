---
repo: "tofutools/tclaude"
name: "tclaude"
description: "Coding agent orchestrator"
readmeQualityOk: true
url: "https://github.com/tofutools/tclaude"
homepage: "https://tofutools.github.io/tclaude/"
language: "Go"
languages: ["Go"]
languagePcts: [78]
stars: 10
forks: 4
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-07T11:04:30Z"
lastCommitAt: "2026-10-18T08:15:52Z"
lastReleaseAt: "2026-03-07T12:35:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 63
maintainers: ["GiGurra"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd670aa3601805f4c359167e5bc896ab373f93ae8931b2df25176b13b9ab4016/tofutools/tclaude"
---

# tclaude

`tclaude` is a self-hosted agentic dev environment: a Go CLI plus daemon that
wraps vendor coding CLIs ("harnesses") in tmux and adds the operations layer
you need to run many agents seriously. Durable sessions, searchable history,
a fleet dashboard, agent-to-agent mail, teams with identity and permissions,
sandboxing, and automation, all running on your own machine.

It wraps six harnesses — [Claude Code](https://claude.ai/code),
[OpenAI Codex CLI](https://developers.openai.com/codex/cli),
[OpenCode](https://opencode.ai),
[GitHub Copilot CLI](https://github.com/features/copilot/cli),
[Google Gemini CLI](https://github.com/google-gemini/gemini-cli) (beta), and
[pi](https://github.com/earendil-works/pi) (beta) — behind one
workflow, so a team can mix vendors and switch as models improve. tclaude is
MIT-licensed; the models are the only external part.

## What it adds

- **Fleet dashboard**: start, watch and steer every agent from the browser:
  status, cost, context, branch, PR and CI, down to its live terminal.
- **Durable sessions and history**: agents keep running when you look away;
  resume any harness, and search every conversation across all of them.
- **Agent…
