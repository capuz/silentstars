---
repo: "yowcow/dude"
name: "dude"
description: "Yet another AI workflow"
readmeQualityOk: true
url: "https://github.com/yowcow/dude"
language: "Shell"
languages: ["Shell"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 9
closedIssues: 373
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-04T06:00:05Z"
lastCommitAt: "2026-10-16T08:26:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["yowcow"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea2e832926d4286acc801a885b68b84285dd2d3404ea7df77acb2d8cbb944b31/yowcow/dude"
---

# dude

Yet another AI workflow.

dude packages the skills that carry a change from an issue to a pull request
whose CI passes and whose review is clean, and the skills that root-cause a
problem before any change is proposed. Merging is left to a person, and so is
everything that depends on it. They are written to wire into one another: each
names the next flow rather than absorbing it, and each has its own gate.

## Skills

| Skill                     | What it produces                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------- |
| `audit-code`              | A repository or path scanned, with what to fix reported and nothing changed         |
| `implement-work`          | A draft PR on a pushed branch of verified commits, for one PR-sized task            |
| `investigate-anomaly`     | A blameless findings report on a failure, incident, or drifting metric              |
| `investigate-performance` | An evidence-backed explanation of a performance shortfall                           |
| `judge-findings`          | Review findings judged accept, reject, or…
