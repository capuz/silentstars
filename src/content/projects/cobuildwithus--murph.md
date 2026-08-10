---
repo: "cobuildwithus/murph"
name: "murph"
description: "Superintelligence for your health, in the groupchat. "
readmeQualityOk: true
url: "https://github.com/cobuildwithus/murph"
homepage: "https://withmurph.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 11
forks: 1
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-03-27T08:23:30Z"
lastCommitAt: "2026-08-10T05:05:15Z"
lastReleaseAt: "2026-04-04T01:38:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["rocketman-21", "codex"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1193443398/60d5ff45-d08d-4116-90a7-754786d57f82"
---

# Murph 🌙

Murph is a conversation-first personal health assistant.

It helps people understand, decide, act, and follow through across their health. Murph can answer questions, interpret connected data, remember relevant context, help with plans and tasks, provide private or user-chosen social support, and run bounded experiments when uncertainty about what works is the real problem.

Its compounding advantage is longitudinal context: useful history, evidence, preferences, constraints, goals, actions, and outcomes that can improve later help without making the member repeat the whole story. Underneath that relationship, Murph keeps durable human-reviewed truth in Markdown, append-only machine event ledgers in JSONL, and layers a typed CLI, local daemons, and hosted control/execution surfaces on top of that vault.

The main installable product entrypoint is `@murphai/murph`, which gives you the `murph` command.

## What ships here

- a file-native vault with canonical writes owned by `packages/core`
- the installable `@murphai/murph` package, which provides the `murph` CLI and onboarding flow
- provider-backed local assistant chat and automation, with runtime state under…
