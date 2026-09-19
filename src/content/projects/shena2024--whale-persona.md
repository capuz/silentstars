---
repo: "shenA2024/whale-persona"
name: "whale-persona"
description: "Multi-host persona engine: A single config.json file allows DSH and ZCode to share the same persona set, work contracts, chain-of-thought language, and long-term memory; memory only takes effect after AI proposal and human confirmation (enforced in code). A persona engine for AI coding harnesses (DeepSeek Harness + ZCode)."
originalDescription: "多宿主人设引擎：一份 config.json 让 DSH 与 ZCode 共用同一套人设、工作契约、思维链语言与长期记忆；记忆由 AI 提议、人工确认后才生效（代码强制）。A persona engine for AI coding harnesses (DeepSeek Harness + ZCode)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/shenA2024/whale-persona"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["ai-agent", "deepseek-harness", "dsh", "llm", "memory", "nodejs", "persona", "plugin", "prompt-engineering", "system-prompt"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-18T01:35:30Z"
lastCommitAt: "2026-09-19T08:14:24Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["shenA2024"]
openGraphImageUrl: "https://opengraph.githubassets.com/de310111be7e5b1fbe44723618cd666186ec67c947a256c2104368bacefa6432/shenA2024/whale-persona"
discussionCount: 1
---

# whale-persona —— Multi-host Persona Engine

Turn the **persona** of AI coding assistants into a configurable, editable, memorable configuration: self-name (tiered by model), user address, relationship stance, character description, per-contract toggles, chain-of-thought language, and **long-term memory with code-level confirmation gates**. One `config.json` + one inbox file, **both DSH and ZCode hosts share the same persona**.
> **Maintenance Status (2026-09-19)**: The primary host is **DeepSeek Harness**; **ZCode adapter is frozen** (no longer developed separately / real machine regression, but new capabilities in core are still synced via `scripts/sync-core.mjs` and remain usable).

MIT · Pure ESM · Zero runtime dependencies · Never touches the network · All exceptions degrade to empty (worst case is "no persona", won't break the session).

**English**: a persona engine for AI coding harnesses. One shared JSON config drives self-name
(tiered by model), user address, stance, character, per-contract toggles, thinking-chain language,
appearance (who you are, injected as a given fact) and reply tone (wording only — it never changes
conclusions, evidence standards or the work…
