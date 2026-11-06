---
repo: "rossoctl/cortex"
name: "cortex"
description: "The proxy layer between agents and everything they touch."
readmeQualityOk: true
url: "https://github.com/rossoctl/cortex"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 24
forks: 44
openIssues: 63
closedIssues: 503
watchers: 3
contributors: 40
recentReleases: 0
createdAt: "2025-10-11T14:53:37Z"
lastCommitAt: "2026-11-06T02:43:30Z"
lastReleaseAt: "2026-01-29T20:54:23Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 71
maintainers: ["huang195", "dependabot[bot]", "evaline-ju"]
openGraphImageUrl: "https://opengraph.githubassets.com/aceb1b2627cff110ec3c63fc013dfc5d37a7bbfe7b95edd4ddf160232e730278/rossoctl/cortex"
discussionCount: 0
---

# Cortex

**`top` for your coding agent.** Watch every model call, tool call and dollar your
agent spends, live — then cut the waste.

Claude Code · OpenCode · Codex · IBM Bob · Pi · any agent that can use an HTTPS proxy.
One binary on macOS or Linux. No Kubernetes, no account.

     alt="A terminal installs Cortex with one command, and a second command points Claude Code at it. Three Claude Code sessions run in separate directories, and agentop then lists all three with their token counts, cost and remaining context. Pressing $ breaks the spend down by tier, where cache reads dominate. Drilling into the busiest session shows the whole conversation and the fifteen-tool manifest it re-sends on every turn.">

## Quick start

```sh
curl -fsSL https://www.rossoctl.dev/cortex/install.sh | sh
```

Then, in a new terminal:

```sh
agentop configure claude-code enable    # once — or opencode, codex, bob, pi
claude                                  # start (or restart) your agent as you always do
agentop observe                         # in another terminal: watch it live
```

Setup asks once before changing anything. If something looks wrong, `agentop doctor`
names the fix. Can't reach…
