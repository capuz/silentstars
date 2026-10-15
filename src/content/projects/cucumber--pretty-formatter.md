---
repo: "cucumber/pretty-formatter"
name: "pretty-formatter"
description: "Prints a pretty report of the scenario execution as it happens"
readmeQualityOk: true
url: "https://github.com/cucumber/pretty-formatter"
language: "C++"
languages: ["C++", "Java", "TypeScript"]
languagePcts: [44, 33, 21]
topics: ["java", "polyglot-release", "tidelift", "javascript"]
stars: 5
forks: 0
openIssues: 7
closedIssues: 8
watchers: 2
contributors: 46
recentReleases: 0
createdAt: "2025-06-20T21:07:04Z"
lastCommitAt: "2026-10-15T04:25:41Z"
lastReleaseAt: "2025-11-02T00:56:07Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 70
maintainers: ["renovate[bot]", "mpkorstanje", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7857474b632b35ae9f56ada78e6000250fbe888168803f97ace528c39a8a07e/cucumber/pretty-formatter"
fundingLinks: ["GITHUB:https://github.com/cucumber", "OPEN_COLLECTIVE:https://opencollective.com/cucumber"]
---

pretty-formatter

This package provides several printers and utilities for rich formatting of Cucumber progress and results in the terminal.

## Pretty

The pretty formatter writes a rich report of the scenario and example execution as it happens. Useful when running Cucumber from the terminal.

## Progress

The progress formatter is minimalist progress indicator that writes a single character status for each test. Useful the test suite gets large. Pairs well with the summary formatter.

## Summary

The summary formatter writes a rich summary at the end of the test run.

## Test outcome coloring

Each step is colored according to the outcome. When the `cucumber` theme is in
use the following colors and symbols are used.

| Cucumber Outcome | Color   | Status Symbol | Progress Symbol |
|------------------|---------|---------------|-----------------|
| UNKNOWN          | n/a     | n/a           | n/a             |
| PASSED           | Green   | ✔             | .               |
| SKIPPED          | Yellow  | ↷             | -               |
| PENDING          | Cyan    | ■             | P               |
| UNDEFINED        | Blue    | ■             | U               |
| AMBIGUOUS…
