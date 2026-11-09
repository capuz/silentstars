---
repo: "icetomoyo/KodaX"
name: "KodaX"
description: "A lightweight AI coding agent that actually works. KodaX is modular, zero-config, and supports multiple LLM providers out of the box. Use it as a CLI tool or npm library—with session memory, parallel execution, and agent teams. Written in TypeScript."
readmeQualityOk: true
url: "https://github.com/icetomoyo/KodaX"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 14
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-18T07:05:02Z"
lastCommitAt: "2026-11-09T00:18:58Z"
lastReleaseAt: "2026-03-19T08:52:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 40
maintainers: ["icetomoyo"]
openGraphImageUrl: "https://opengraph.githubassets.com/a90be13ccdc2c0f6741ea997ba8462148978dc588190300a043d2648a1e91da4/icetomoyo/KodaX"
---

Anthropic · OpenAI · DeepSeek · Kimi · Zhipu · MiniMax · MiMo · Ark · Qwen · Gemini · Codex.<br>
  REPL · CLI · library · Node-free single binary.

---

## Current development after alpha.10

The unified Host cutover shipped in the `v0.7.97-alpha.12` tag retires
`runtimeExitSettlement` and `settleKodaXRuntimeExit()`. Version-labelled
paragraphs below describe their historical releases; use the [current SDK
migration guide](https://github.com/icetomoyo/KodaX/blob/HEAD/docs/SDK_MIGRATION.md) for supported interfaces and
[provider contracts](https://github.com/icetomoyo/KodaX/blob/HEAD/docs/LLM_INTEGRATION.md) for credential/account-preserving
upgrades. Existing SDK/config/API_KEY entries remain.

Agent / Coding / experimental Script work modes ship with Coding as the
default. Select them with `--work-mode`, `/work-mode`, or Product Client
Session `workMode`; this is independent of permissions and model choice.
SDK/Host paths now share the corresponding settings, question outcomes,
saved original tool reads, structured task reports and estimated-token
progress. See the [SDK alignment and migration…
