---
repo: "Fishsb/dsh-voice-prompt-enhancer"
name: "dsh-voice-prompt-enhancer"
description: "DeepSeek-Harness (DSH) plugin: ✨ One-click prompt enhancement (5 modes · model chain · memory chain) + 💬 Voice input enhancement (hotkey · auto-stop on silence · filler word cleanup · speech error correction)"
originalDescription: "DeepSeek-Harness (DSH) 插件：✨ 提示词一键增强（5 模式·模型链·记忆链）+ 💬 语音输入增强（热键·说完自动停·口水词清理·语音纠错）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Fishsb/dsh-voice-prompt-enhancer"
homepage: "https://www.npmjs.com/package/dsh-voice-prompt-enhancer"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-plugin", "deepseek", "deepseek-harness", "prompt-engineering", "ai-plugin", "dsh", "prompt-enhancement", "speech-to-text", "typescript", "voice-input"]
stars: 134
forks: 14
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-13T23:21:41Z"
lastCommitAt: "2026-11-21T13:29:32Z"
lastReleaseAt: "2026-08-15T20:55:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 32
maintainers: ["Fishsb"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ef9b04baaab7c3b9b6c1d61d7bc11946e367154ccfaceedb2f56b5aa3fb8979/Fishsb/dsh-voice-prompt-enhancer"
---

# dsh-voice-prompt-enhancer

DeepSeek Harness（DSH）plugin: **Prompt optimization** + **Voice input enhancement** —— Rewrite draft text in the input box to be clearer and more actionable, and add a hotkey, auto-stop after speaking, filler word removal, and correction to voice input.

Drafts often contain only half a request, and then you have to go back and forth with the model to fill in the rest. Click ✨ to rewrite in place; if you're not satisfied, you can undo. For voice, just speak—pausing stops recording, and the result goes back into the input box.

## Installation

```sh
dsh plugin --profile web add dsh-voice-prompt-enhancer
dsh plugin --profile web update dsh-voice-prompt-enhancer   # Update
dsh plugin --profile web remove dsh-voice-prompt-enhancer   # Uninstall
```

You can also install a specific tag from GitHub:

```sh
dsh plugin --profile web add github:Fishsb/dsh-voice-prompt-enhancer#v3.5.1
```

After installing (or after updating / uninstalling), restart DSH. If the ✨ icon appears in the input box toolbar, the installation succeeded. You need [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) **≥ 0.2.1-rc.1** installed locally and `pnpm` in PATH.
