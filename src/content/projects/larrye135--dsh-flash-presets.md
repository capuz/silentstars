---
repo: "LarryE135/dsh-flash-presets"
name: "dsh-flash-presets"
description: "Reducing Token consumption for DeepSeek v4.1flash / Raising Token efficiency without losing performance (Works for v4.1flash)"
originalDescription: "降低Deepseek v4.1flash的Token消耗/Raising Token efficiency without lossing performance(Works for v4.1flash)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LarryE135/dsh-flash-presets"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["dsh-plugin", "token-efficiency", "dsh"]
stars: 154
forks: 11
openIssues: 2
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-22T16:27:57Z"
lastCommitAt: "2026-11-10T14:49:37Z"
lastReleaseAt: "2026-11-06T13:47:47Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 33
maintainers: ["LarryE135", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/48c0e66295963077b2bbe90432554da18b835142ae4bccad9e122822a4e5623e/LarryE135/dsh-flash-presets"
---

# dsh-flash-presets

Agent presets for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH), tuned for DeepSeek V4.1 Flash.

Core elements: a shorter context window, tool trimming, optimization of low-frequency tools, and merged `run_code` calls. This plugin cannot raise the model's capability ceiling, but it can complete tasks within the model's capability range at a lower budget.

The whole package is delivered as a DSH bundle (`dsh.bundle`): it inserts preset rows into the profile and does not modify host source code. **Three items take effect for the entire profile at runtime:** the resident PTC runtime (the `ptc-runtime` override in the patch, which applies to **all** presets of that profile; to turn it off, the plugin card must be removed), the read-only concurrency flag for `glob` / `grep` (`DSH_FLASH_PRESETS_CONCURRENCY=0` disables it), and the resolution of old preset ids (`DSH_FLASH_PRESETS_ALIAS=0` disables it).

> Current version: v0.3.0 (2026-11-07) · presets v3 / v3 balance · plan mode plan-mode v1 (1.0.0) · requires DSH `>=0.2.1-rc.5 <0.2.3-0` (`engines` gate: installation is refused, and on startup a DSH version outside the range skips this…
