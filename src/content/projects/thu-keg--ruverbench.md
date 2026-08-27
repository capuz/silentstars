---
repo: "THU-KEG/RuVerBench"
name: "RuVerBench"
description: "Implementation of “Can LLM-as-a-Judge Reliably Verify Rubrics in Agentic Scenarios?”"
readmeQualityOk: true
url: "https://github.com/THU-KEG/RuVerBench"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-06-24T06:58:31Z"
lastCommitAt: "2026-08-27T14:26:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 54
undervaluedScore: 3
maintainers: ["pengyangda7"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c45c3789f3808ff780ce6abcd43d01cbfc1971c96ecc95084d24b2eae6680cf/THU-KEG/RuVerBench"
---

# RuVerBench

RuVerBench is a rubric verification benchmark for evaluating LLM-as-a-Judge reliability in long agentic scenarios.

The benchmark asks a judge model to decide whether an output satisfies an individual rubric. Each judgment is evaluated against a human gold label.

Code and data are licensed separately. See `LICENSE` for code and
`DATA_LICENSE.md` plus `THIRD_PARTY_NOTICES.md` for dataset terms and
third-party notices. The data package contains materials from multiple upstream
sources and is not covered by a single blanket license.

## Domains

- DeepResearch: question-report pairs.
- AgenticCoding: serialized agent trajectories.

The scored benchmark contains 494 cases and 2,458 rubric-verification instances:

- DeepResearch: 284 scored cases, 1,615 rubric points.
- AgenticCoding: 210 cases, 843 checklist items.

The packaged DeepResearch source files contain 298 question-report records. The
main benchmark and leaderboard use the 284 records that have final rubric
taxonomy assignments.

Released benchmark files contain normalized inputs, rubrics/checklists, labels,
responses/trajectories, and taxonomy assignments. The fixed strategy subset
uses the same compact label…
