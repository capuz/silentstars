---
repo: "machine-gun-tt/agy-purge-T"
name: "agy-purge-T"
description: "Antigravity armor-breaking layer: native hooks for prompt injection, approval bypass, and forced continuation, with a CLI, a loopback panel, and one-click rollback. The Antigravity implementation of the dsh-purge approach."
originalDescription: "Antigravity 破甲层：原生 hooks 做提示词注入、审批放行、强制续跑，附 CLI / 回环面板 / 一键回滚。dsh-purge 思路的 Antigravity 实现。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/machine-gun-tt/agy-purge-T"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["agent-hooks", "agy", "antigravity", "jailbreak", "llm-security", "prompt-injection", "red-team"]
stars: 11
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-11-25T09:26:55Z"
lastCommitAt: "2026-11-27T12:58:56Z"
lastReleaseAt: "2026-11-27T12:57:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 28
maintainers: ["machine-gun-tt"]
openGraphImageUrl: "https://opengraph.githubassets.com/09f693b64007be34df54cf1ee7d81973d13d5fe5e6776c88a29fe360b44f06a3/machine-gun-tt/agy-purge-T"
---

# ⚔️ agy-purge — Antigravity Armor-Breaking Layer

> The same armor-breaking approach, moved to Google Antigravity: **use the host's own hooks to sit upstream of the approval gate and the model calls, without touching `app.asar` or modifying `language_server.exe`.**

`agy-purge` is the Antigravity counterpart of [dsh-purge](https://github.com/YuJunZhiXue/dsh-purge) (DeepSeek Harness armor-breaking). dsh-purge has to patch because DSH exposes no extension points. Antigravity provides `plugin.json` + `hooks.json`, so this project uses those native extension points to get **the same effect**, and upgrades won't break it.

**Since v1.2**: the override prompt is injected **once per user turn** (it no longer repeats within the tool loop of a turn), forced continuation is off by default, and SessionStart no longer injects redundantly. The override prompt is upgraded to v3, specifically targeting "policy self-review + trailing disclaimer", for Antigravity 2.35 / the `gemini-4-neon-high` generation of models. `status` also records the host build fingerprint, so after an upgrade you can see at a glance whether the plugin is still configured for the current version.

---
