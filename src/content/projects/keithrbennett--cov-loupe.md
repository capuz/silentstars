---
repo: "keithrbennett/cov-loupe"
name: "cov-loupe"
description: "Refines Ruby Simplecov test coverage data as CLI, MCP server, and library"
readmeQualityOk: true
url: "https://github.com/keithrbennett/cov-loupe"
homepage: "https://keithrbennett.github.io/cov-loupe/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 48
forks: 6
openIssues: 0
closedIssues: 3
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2025-09-13T17:05:11Z"
lastCommitAt: "2026-11-14T10:49:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 57
maintainers: ["keithrbennett", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/550ffc8f0051ec19ca3b9ed6bf3cc896209b96ea8de10356eb896215a4ee790f/keithrbennett/cov-loupe"
---

CovLoupe

  An MCP server, command line utility, and library for Ruby SimpleCov test coverage analysis.

**[Documentation Website](https://keithrbennett.github.io/cov-loupe/)**

## ⭐ AI Test Coverage Analysis

**Hand one prompt to your AI coding agent and get a written report of where your tests fall short and why it matters.**

The [Test Coverage Analysis prompt](https://github.com/keithrbennett/cov-loupe/blob/HEAD/docs/user/prompts/test-coverage-analysis-prompt.md) has the agent use cov-loupe to:

- **Map your code into logical areas**, from whole subsystems down to a single critical class or method inside a larger file, rather than reporting by file or directory
- **Measure coverage for each area** from cov-loupe's line-level data, with totals that reconcile to the project's
- **Rank the gaps by risk and difficulty**, with a concrete failure example for each and a check for dead code
- **Review test quality**: unit vs. integration balance, weak assertions, testing anti-patterns, and the well-tested areas worth copying
- **Recommend next steps in priority order**, each with a ready-to-use prompt for an agent to implement it

To run it:

1. Install cov-loupe (`gem install…
