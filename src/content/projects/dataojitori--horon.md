---
repo: "Dataojitori/horon"
name: "horon"
description: "Executable memory & cognitive harness for AI agents. Let your agent learn, remember, and build its own guardrails."
originalDescription: "Executable memory & cognitive harness for AI agents. Let your agent learn, remember, and build its own guardrails."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Dataojitori/horon"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["agent-memory", "ai-agents", "cognitive-architecture", "knowledge-graph", "llm-harness", "state-machine", "agent-guardrails", "ai-memory", "cognitive-harness", "executable-memory"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-25T13:02:13Z"
lastCommitAt: "2026-10-26T21:00:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 47
maintainers: ["Dataojitori", "misaligned-nocturne", "SL-Sherly"]
openGraphImageUrl: "https://opengraph.githubassets.com/55d8b244a2e5989c8750c64aab370d7204e33712a5533e34d6be72db8684eeb1/Dataojitori/horon"
---

**Executable memory for AI agents — turn what an agent learns into attention paths, stateful logic, and tool-level guardrails.**

> **Let AI build redstone circuits out of the losses it has suffered, circuits that stop it from repeating them.**

---

## What it can build

- **Adaptive memory**: Horon learns the paths along which the AI actually browses its memory. After reading A, it often needs B next; the next time A is read, B is more likely to be surfaced right in front of it.
- **Automated circuits**: Chain “finish A before doing B” and “when you see X, remind yourself” into circuits that trigger automatically.
- **Physical brakes**: When a precondition is not met, block the tool before it executes and tell the AI which step is still missing.
- **Reusable patterns (Tag plugins)**: Like industrial molds, write the “correct way” of handling a class of tasks as a plugin. New tasks that get attached a tag are automatically bound by that approach.

## See it in action

1. **Catching verbal promises on the spot**: The AI verbally agrees in conversation with “Got it, I’ve noted that,” but never actually calls a tool to write to the database. Horon intercepts it on the spot and…
