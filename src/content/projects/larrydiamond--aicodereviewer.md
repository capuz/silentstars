---
repo: "larrydiamond/AICodeReviewer"
name: "AICodeReviewer"
description: "AI Code Reviews"
readmeQualityOk: true
url: "https://github.com/larrydiamond/AICodeReviewer"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-01-23T22:49:18Z"
lastCommitAt: "2026-11-06T02:43:50Z"
lastReleaseAt: "2025-01-26T01:34:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 36
maintainers: ["larrydiamond"]
openGraphImageUrl: "https://opengraph.githubassets.com/21827a0d668b00211f49c418d16ddb25369d2062294e2abec97ab215c3d4c8f1/larrydiamond/AICodeReviewer"
---

# AI Code Reviewer README

Welcome to the **AI Code Reviewer** repository! This project provides an AI-powered tool for reviewing code files and providing actionable feedback to fix bugs, improve application speed, and fix security problems.

---

## Features
- Automated code review for various programming languages.
- In-depth suggestions for improving code quality.
- Simple command-line interface for ease of use.

---

## Demos
- Fix Calculate Circumference - https://youtu.be/gjapO5D0guk
- Fix copy and paste bug - https://youtu.be/YdeEu7ofzV4

---

## Examples
Each example below is exercised by an automated integration test in
[CodeReviewExamplesIT](https://github.com/larrydiamond/AICodeReviewer/blob/HEAD/src/test/java/com/ldiamond/dli/examples/CodeReviewExamplesIT.java), which sends the
buggy source to a local Ollama model and asserts the review flags the known bug. Run them yourself with
`./gradlew integrationTest` (requires Ollama running locally; excluded from the default `test` task since it
makes live model calls).

Mutation testing uses [PIT](https://pitest.org/): run `./gradlew pitest` and open
`build/reports/pitest/index.html`. It runs the unit tests only; the Ollama…
