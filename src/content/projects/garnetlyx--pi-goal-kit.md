---
repo: "garnetlyx/pi-goal-kit"
name: "pi-goal-kit"
description: "Goal-gated workflow extensions for Pi: the gated-goal plan-act-review loop, subagent delegation, todo nudges, and agent-authored wait conditions."
readmeQualityOk: true
url: "https://github.com/garnetlyx/pi-goal-kit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["pi-agent", "pi-agent-extension", "pi-agent-orchestrator", "pi-plugins"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T01:53:23Z"
lastCommitAt: "2026-11-25T03:18:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 32
maintainers: ["garnetlyx"]
openGraphImageUrl: "https://opengraph.githubassets.com/93b5a816146a48ade034559820fb25d394d00382b9442403c0c880ebcb44d20b/garnetlyx/pi-goal-kit"
---

# pi-goal-kit

**Goal-gated workflow for [Pi](https://pi.dev)** — four cooperating extensions.
The design center is **gated-goal**: a six-phase loop that pins the acceptance
bar out of the agent's reach, keeps it self-driving mid-task, and gates
completion behind an adversarial review — after the same reviewer has audited
the plan against the user's intent. The other three (`reminder-hook`,
`todo`, `subagent`) are useful standalone, and together they form the substrate
gated-goal runs on.

Two ideas run through all four:
