---
repo: "LF3551/human-risk-graph"
name: "human-risk-graph"
description: "Find the people your security depends on: bus factor, approval concentration and control-bypass risk, with a fix plan, SARIF and ISO 27001 / SOC 2 / DORA mapping."
readmeQualityOk: true
url: "https://github.com/LF3551/human-risk-graph"
homepage: "https://pypi.org/project/human-risk-graph/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [71, 27]
topics: ["bus-factor", "cybersecurity", "graph-model", "organizational-risk", "risk-modeling", "security", "security-architecture", "decision-risk", "human-factor", "cli"]
stars: 66
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-18T07:06:56Z"
lastCommitAt: "2026-11-13T05:39:48Z"
lastReleaseAt: "2026-02-26T09:27:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 32
maintainers: ["dependabot[bot]", "LF3551"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1136698473/f1cfc024-c482-482e-816a-ff5d342b54c4"
---

# Human Risk Graph

**Your controls are only as strong as the people behind them.** Human Risk Graph maps who
approves, escalates to and can bypass whom, finds the people your organization cannot
afford to lose, and tells you **which three changes raise your score the most**.

- **One score, 0-100 and A-F**, from three metrics you can explain to a board: bus factor,
  effective number of approvers, and how many critical approvals can be bypassed.
- **A fix plan, not just a diagnosis**: deputies and second-person checks simulated on your
  data and ranked by score gain.
- **Built for pipelines and audits**: SARIF for GitHub code scanning, JUnit, a `--min-score`
  gate, `hrg diff` between snapshots, findings mapped to ISO/IEC 27001, SOC 2 and DORA.
- **A report you can hand over**: one offline HTML file with an interactive dependency map,
  readable on a phone and printable as PDF.

## Why

Simple ratios hide the worst cases. HRG is designed so that they cannot:

| Situation | Naive metric | Human Risk Graph |
|---|---|---|
| One person approves everything | "inequality 0" (nothing to compare) | 1.0 effective approvers, grade F |
| 99 people depend on one critical lead | 0.009…
