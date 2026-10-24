---
repo: "therealtinhtute/mono-harness"
name: "mono-harness"
description: "Persona taste skills and harness"
readmeQualityOk: true
url: "https://github.com/therealtinhtute/mono-harness"
homepage: "https://harness.tinhtute.me"
language: "Rust"
languages: ["Rust", "Shell", "HTML"]
languagePcts: [38, 25, 22]
topics: ["agentic", "agentic-workflows", "claude-code", "codex", "golang", "harness", "sdlc", "skills"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 28
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-04-06T13:52:36Z"
lastCommitAt: "2026-10-24T08:20:33Z"
lastReleaseAt: "2026-08-10T02:32:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 73
maintainers: ["therealtinhtute", "claude", "baroitrung"]
openGraphImageUrl: "https://opengraph.githubassets.com/608c14e58e28b5b8f772f55c854f9fe0e99ba7f7cb89936cb5cc50198d289456/therealtinhtute/mono-harness"
---

# mono-harness

Turn a git repository into a legible, agent-ready workspace.

`zharness` installs a small repository protocol and a safe updater. The
repository remains the system of record: product documents, decisions, plans,
code, tests, CI, and runtime evidence define the work.

It is not a task database, story tracker, agent orchestrator, or application
runtime. The binary scaffolds docs; it does not run the lifecycle.

Start with [`AGENTS.md`](https://github.com/therealtinhtute/mono-harness/blob/HEAD/AGENTS.md), then [`.harness/WORKFLOW.md`](https://github.com/therealtinhtute/mono-harness/blob/HEAD/.harness/WORKFLOW.md).

## Give this to a coding agent

Copy the block into the consumer repository chat when you want the agent to
install, refresh, or work with zharness.

```text
Work in this git repository. Read https://github.com/therealtinhtute/mono-harness/blob/master/README.md and, once they exist, this repo's AGENTS.md and .harness/WORKFLOW.md. If zharness is not on PATH or outdated, install/upgrade it with scripts/install-zharness.sh. If this repo has no .harness/WORKFLOW.md, run zharness install. Before upgrading, independently install the six workflow skills…
