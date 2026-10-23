---
repo: "mrlarson2007/copilot-tdd-harness"
name: "copilot-tdd-harness"
description: "A GitHub Copilot TDD harness that enforces RED→GREEN→COMMIT→REFACTOR workflow using native Copilot extensibility: hooks, agents, skills, and prompt files."
readmeQualityOk: true
url: "https://github.com/mrlarson2007/copilot-tdd-harness"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
stars: 5
forks: 0
openIssues: 2
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-04-16T01:18:27Z"
lastCommitAt: "2026-10-23T09:33:12Z"
lastReleaseAt: "2026-10-23T09:33:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 58
maintainers: ["Copilot", "mrlarson2007"]
openGraphImageUrl: "https://opengraph.githubassets.com/77267bd619885b766ea7e9ef11d7ddb24d01cd5e5669e811ff62e8fa75fc50d3/mrlarson2007/copilot-tdd-harness"
---

# Copilot TDD Harness

This repository packages an opt-in GitHub Copilot workflow for strict
test-driven development. The shipped harness is single-agent: the live workflow
agent is [`.github/agents/tdd.agent.md`](https://github.com/mrlarson2007/copilot-tdd-harness/blob/HEAD/.github/agents/tdd.agent.md), with
supporting skills and install scripts for copying the harness into another
project.

## What It Includes

- A single `tdd` agent that enforces RED -> GREEN -> COMMIT -> REFACTOR
  discipline.
- Setup and evaluation scripts for tailoring and validating the harness.
- Promptfoo-based evals for scoring protocol fidelity, clarification behavior,
  and commit discipline against disposable fixture repositories.

## Repository Layout

- [`.github/`](https://github.com/mrlarson2007/copilot-tdd-harness/blob/HEAD/.github/) contains the live agent, skills, and repository
  instructions. This is also the distributable package copied into target
  projects by the installer.
- [`scripts/`](https://github.com/mrlarson2007/copilot-tdd-harness/blob/HEAD/scripts/) contains install and eval helper scripts.
- [`evals/`](https://github.com/mrlarson2007/copilot-tdd-harness/blob/HEAD/evals/)…
