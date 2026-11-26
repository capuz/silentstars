---
repo: "yushang657/DSH-YS-pojia"
name: "DSH-YS-pojia"
description: "DSH ?? ?? ?? ?? ?? ?? | DSH (DeepSeek Harness) breach / jailbreak / unlock plugin: 96 host patches across 70 files, refusal purge, 11 prompt sections, tiers T3-T1, 40 rules at delivery depth, vendor-aware overclock with generic fallback, Android / DSH Go support, no topic exclusion, ASR 46.2%, 95 templates / 29 vendors."
readmeQualityOk: true
url: "https://github.com/yushang657/DSH-YS-pojia"
homepage: "https://yushang657.github.io/DSH-YS-pojia/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["agent", "ai-safety", "dsh", "dsh-plugin", "llm-security", "model-eval", "prompt-eval", "red-team", "deepseek", "jailbreak"]
stars: 89
forks: 14
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-11-20T15:10:34Z"
lastCommitAt: "2026-11-26T23:31:48Z"
lastReleaseAt: "2026-11-24T21:57:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 23
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4002042b69623ab05ed5bfc816329a84965ec51e8a329ce254daefac45305e1e/yushang657/DSH-YS-pojia"
discussionCount: 0
---

# DSH-ys-pojia

**破甲 plugin for DSH (DeepSeek Harness)** — make LLMs drop refusals on demand.

**English** · [简体中文](https://github.com/yushang657/DSH-YS-pojia/blob/HEAD/README.zh-CN.md)
> **[Landing page →](https://YSN.github.io/ys-pojia/)** · interactive intro, layer diagrams, tier comparison, known weaknesses

> 破甲 (pò jiǎ, "armor-breaking") is the Chinese term for prompt-layer breach testing: systematically finding what a model will and will not refuse, and how far it goes.

---

## How the breach works: three layers stacked, not a prompt tool

Most breach plugins only rewrite the prompt. The moment the model says "I'm sorry", the thousands of characters of rules above it are void. This project acts on **three layers at once**, so there is no point at which the model can refuse.

```
1 Host layer    96 patches / 70 carrier files   rewrites DSH's own code and constants
2 Message layer history scrub + tail + prefill  rewrites the request view, never persists
3 Prompt layer  11 sections                     injects into the system prompt
```
