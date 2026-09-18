---
repo: "indada/repopilot"
name: "repopilot"
description: "Self-hosted PR testing and repair agent built with the OpenAI Codex SDK. Checks repository rules, generates tests, and verifies fixes before proposing draft PRs."
readmeQualityOk: true
url: "https://github.com/indada/repopilot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-18T03:36:12Z"
lastCommitAt: "2026-09-18T08:26:43Z"
lastReleaseAt: "2026-09-18T07:07:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 25
maintainers: ["indada"]
openGraphImageUrl: "https://opengraph.githubassets.com/12b5f64cc6feaf1b1aeeba81d6d7eb38ec6bc9117e8103f408b968570772351c/indada/repopilot"
---

# RepoPilot

**Verification-driven software iteration, powered by the OpenAI Codex SDK and hosted on your own worker.**

[中文说明](https://github.com/indada/repopilot/blob/HEAD/README.zh-CN.md) · [Architecture](https://github.com/indada/repopilot/blob/HEAD/docs/ARCHITECTURE.md) · [Security](https://github.com/indada/repopilot/blob/HEAD/SECURITY.md) · [Verification](https://github.com/indada/repopilot/blob/HEAD/docs/VERIFICATION.md)

RepoPilot turns GitHub Issues and pull requests into a bounded cycle of test generation, failure reproduction, code repair and independent verification. It uses Codex to review repository rules, generate requirement-driven tests, and propose fixes. A separate Docker runner checks the code before the controller can publish a repair branch and draft PR. Maintainers retain the merge decision.

## What problem does it solve?

A passing existing test suite may miss a new requirement or an untested edge case. Maintainers also need to check repository-specific conventions, reproduce reported failures, and confirm that a proposed fix preserves existing behavior. RepoPilot brings these steps into one repeatable workflow.

| Maintainer problem | How RepoPilot…
