---
repo: "edeandrea/non-deterministic-no-problem"
name: "non-deterministic-no-problem"
description: "Demo repo for my talk about testing non-deterministic things."
readmeQualityOk: true
url: "https://github.com/edeandrea/non-deterministic-no-problem"
language: "Java"
languages: ["Java"]
languagePcts: [77]
stars: 9
forks: 5
openIssues: 9
closedIssues: 28
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-17T16:23:47Z"
lastCommitAt: "2026-11-02T11:36:16Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 91
undervaluedScore: 78
maintainers: ["edeandrea", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/99160236f72617fbdf7e5f541d84e76bfe0da1bc918d6cedf6cb8028aac627b6/edeandrea/non-deterministic-no-problem"
---

# Non-Deterministic? No Problem!

A demo application — Parasol Insurance — showing how to test and continuously evaluate
non-deterministic AI systems.

It is a single [Quarkus](https://quarkus.io) application (Java 25) with a React/PatternFly frontend
served by [Quinoa](https://docs.quarkiverse.io/quarkus-quinoa/dev/). The business app itself is
deliberately small; the interesting part is the three-tier AI evaluation strategy built on top of
[Langfuse](https://langfuse.com) via the
[quarkus-langfuse](https://github.com/quarkiverse/quarkus-langfuse) extension.

## What it demonstrates

- **An AI chat bot doing RAG** — `ClaimService` (model `parasol-chat`) answers questions about an
  insurance claim, augmented by Easy RAG over a policy PDF
  (`src/main/resources/policies/policy-info.pdf`). Chat runs over a WebSocket (`/_chat/routes`,
  route `chat`), not REST.
- **An LLM tool call with real side effects** — the model may call
  `NotificationService.updateClaimStatus`, which updates the claim in PostgreSQL and then asks a
  second AI service (`generate-email`) to compose a notification email that is actually sent.
- **Output guardrails, including one that calls another LLM** — the…
