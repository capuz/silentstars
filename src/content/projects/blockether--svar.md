---
repo: "Blockether/svar"
name: "svar"
description: "Type‑safe LLM output for Clojure. Works with any text‑only model."
readmeQualityOk: true
url: "https://github.com/Blockether/svar"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [97]
topics: ["ai", "clojure", "llm", "structured-output"]
stars: 21
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-13T13:25:42Z"
lastCommitAt: "2026-11-22T11:49:34Z"
lastReleaseAt: "2026-04-20T20:27:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["kwojcik-blockether", "michal-blockether"]
openGraphImageUrl: "https://opengraph.githubassets.com/34eb9db42a38cf68adf252f69bbf1d63a3d761e16aaf8853f73bab948dc7d688/Blockether/svar"
---

[Rationale](#rationale) • [Functionalities](#functionalities) • [Quick Start](#quick-start) • [Router](#router) • [Usage](#usage) • [Spec DSL](#spec-dsl-reference)

## Rationale

JSON Schema is the de facto way to get structured output from LLMs — but it's incomplete. Union types have poor cross-provider support, and the entire approach requires your LLM provider to support structured output mode. That rules out local models, smaller providers, and any setup where you just have a text completion endpoint.

SVAR takes a different approach: let the LLM produce plain text, then parse and correct the output post-step. This works with **any** text-producing LLM — OpenAI, Anthropic, local Ollama, vLLM, whatever you have. No provider lock-in, no feature flags, no "this model doesn't support JSON mode" surprises.
