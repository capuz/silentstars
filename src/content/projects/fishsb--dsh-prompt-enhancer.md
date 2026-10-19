---
repo: "Fishsb/dsh-prompt-enhancer"
name: "dsh-prompt-enhancer"
description: "DeepSeek Harness (DSH) plugin: ✨ One-click prompt enhancement + 💬 Voice input plugin feature enhancements"
originalDescription: "DeepSeek Harness (DSH) 插件：✨ 提示词一键增强 + 💬 语音输入插件功能增强"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Fishsb/dsh-prompt-enhancer"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-plugin", "deepseek", "deepseek-harness", "plugin", "prompt-engineering"]
stars: 99
forks: 10
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-13T23:21:41Z"
lastCommitAt: "2026-10-19T09:09:28Z"
lastReleaseAt: "2026-08-15T20:55:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 38
maintainers: ["Fishsb", "Oct1AtJoe"]
openGraphImageUrl: "https://opengraph.githubassets.com/60c20906d9d8f728ecfcd66895c71d010a21a758d70e8fd746ae4c7c730c0960/Fishsb/dsh-prompt-enhancer"
---

# dsh-prompt-enhancer

DeepSeek Harness (DSH) plugin: **Prompt optimization** + **Voice input enhancement**. It rewrites drafts in the input box to be clearer and more actionable, and adds hotkeys, auto-stop on silence, filler-word removal, and corrections to voice input.

Drafts often contain only half a request, and sending them to the model then requires back-and-forth clarification. Click ✨ to rewrite in place; if you're not satisfied, you can undo. For voice, just speak: a pause stops recording, and the result goes back into the input box.

## Installation

```sh
dsh plugin --profile web add github:Fishsb/dsh-prompt-enhancer#v3.4.2
dsh plugin --profile web update dsh-prompt-enhancer   # Update
dsh plugin --profile web remove dsh-prompt-enhancer   # Uninstall
```

After installing (or after updating or uninstalling), restart DSH. If ✨ appears in the input toolbar, the installation succeeded. You need [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) **≥ 0.1.0-rc.6** installed locally, and `pnpm` must be on the PATH.

## What it can do

**Prompt optimization**

- ✨ **One-click optimization**: rewrites the current draft. You can keep optimizing, undo, or cancel…
