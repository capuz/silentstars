---
repo: "Fishsb/dsh-prompt-enhancer"
name: "dsh-prompt-enhancer"
description: "DeepSeek Harness (DSH) plugin: ✨ One-click prompt enhancement + 💬 Speech recognition (auto-stops when you finish speaking · cloud/local dual engine) · Includes 🔁 one-click restart for service anomalies"
originalDescription: "DeepSeek Harness (DSH) 插件：✨ 提示词一键增强 + 💬 语音识别（说完自动停·云端/本地双引擎）· 附 🔁 服务异常一键重启"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Fishsb/dsh-prompt-enhancer"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-plugin", "deepseek", "deepseek-harness", "plugin", "prompt-engineering"]
stars: 86
forks: 11
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-13T23:21:41Z"
lastCommitAt: "2026-10-09T10:50:21Z"
lastReleaseAt: "2026-08-15T20:55:11Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 39
maintainers: ["Fishsb", "Oct1AtJoe"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd454f1e34d8b07e42d81d368a14c2ed7b7447e3a60653cf81b568d12e0545c3/Fishsb/dsh-prompt-enhancer"
---

# dsh-prompt-enhancer

DeepSeek Harness (DSH) plugin. **Two core capabilities**:

- ✨ **Prompt enhancement**: Rewrite the input-box draft with one click. Undo if unsatisfied.
- 💬 **Speech recognition**: Stops automatically after you finish speaking. Cloud / local dual engine, usable offline. The recognized text fills the draft.

## ✨ Two Core Features

### 1. Prompt Enhancement (✨)

The ✨ button in the input toolbar triggers a separate LLM call that rewrites the current draft directly. You can keep refining it, undo the change, or cancel while enhancement is running.

- **One-click enhancement**: The ✨ button triggers a separate LLM call that replaces the draft directly. You can keep refining, undo, or cancel during enhancement.
- **5 optimization modes**: Basic (send directly) / Light (references the previous conversation turn) / Standard (rules + retrieval) / Expert (task analysis + full retrieval) / One-click release (generates a complete development spec)
- **Memory toggle**: When enabled, the multi-turn “optimize → edit → re-optimize” sequence before sending accumulates into a memory chain. The next round takes in this history and picks up the direction of your edits.…
