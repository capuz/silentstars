---
repo: "blueberrycongee/wuu"
name: "wuu"
description: "Open-source BYOK AI coding agent with a desktop app, scriptable CLI, and built-in multi-agent orchestration. Written in Go."
readmeQualityOk: true
url: "https://github.com/blueberrycongee/wuu"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [41, 31]
topics: ["ai", "automation", "byok", "cli", "coding-agent", "developer-tools", "electron", "golang", "multi-agent"]
stars: 61
forks: 18
openIssues: 12
closedIssues: 184
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2026-04-06T18:59:44Z"
lastCommitAt: "2026-10-29T05:49:21Z"
lastReleaseAt: "2026-07-16T04:22:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 39
maintainers: ["blueberrycongee", "YakiHugo", "kevenhu001-cyber"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c94202a79b485e243b98653c1362840268010d6084a8654362fc5ca2979ff20/blueberrycongee/wuu"
---

An open-source desktop app where AI agents work on your local projects,<br>
  and every file they read, command they run and line they change stays in view.

Point wuu at a folder, describe the task, and let an agent read the code, run commands and edit files. The conversation shows each step as it happens. Beside it, Review shows the actual diff on disk, so you check the result rather than taking the summary on trust.

## See it in action

## Agent benchmark

In the 18-task Terminal-Bench 4 subset reported in [PR #630](https://github.com/blueberrycongee/wuu/pull/630), Wuu matched Codex's pass rate at **11.0% lower recorded API cost**, and solved one more task than Pi at **6.6% lower cost**.

| Harness | Passed | Pass rate | Recorded API cost (USD) | Cost per success (USD) |
| --- | ---: | ---: | ---: | ---: |
| **Wuu** | **10/18** | **55.6%** | **$32.40** | **$3.24** |
| Codex (Code Mode) | 10/18 | 55.6% | $36.42 | $3.64 |
| Pi | 9/18 | 50.0% | $34.68 | $3.85 |

All three harnesses used GPT-6 Astra with high reasoning effort: 18 tasks each, 54 runs total, with skills, memory, ask-user and subagents disabled. Codex 0.150.1 and Pi 0.84.4 retained their native prompts. Codex enabled…
