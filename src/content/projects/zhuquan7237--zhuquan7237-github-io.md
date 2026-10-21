---
repo: "zhuquan7237/zhuquan7237.github.io"
name: "zhuquan7237.github.io"
description: "DeepSeek Harness Desktop (dsh desktop edition): Windows/Linux/macOS installer. Codex-style GUI for official @deepseek-ai/dsh. Auto-updates harness from npm."
originalDescription: "DeepSeek Harness Desktop (dsh 桌面版): Windows/Linux/macOS installer. Codex-style GUI for official @deepseek-ai/dsh. Auto-updates harness from npm."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhuquan7237/zhuquan7237.github.io"
homepage: "https://dsh.zhuquan.xyz"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [53, 27]
topics: ["ai-agent", "coding-agent", "deepseek", "deepseek-desktop", "deepseek-harness", "deepseek-v4", "desktop-app", "dsh", "electron", "installer"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-22T01:48:25Z"
lastCommitAt: "2026-10-21T17:31:59Z"
lastReleaseAt: "2026-08-14T06:53:21Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 58
maintainers: ["github-actions[bot]", "zhuquan7237"]
openGraphImageUrl: "https://opengraph.githubassets.com/cff6c4313675cd02a4b6a8127884c0b6f0e9a54a33f87303704b593a1fccba15/zhuquan7237/zhuquan7237.github.io"
---

# DeepSeek Harness Desktop

**An Electron desktop app built on the official DeepSeek Harness**  
Ready to use out of the box on Windows · Linux · macOS. The engine installs the official [`@deepseek-ai/dsh`](https://github.com/deepseek-ai/deepseek-harness) from npm, without copying the official source repository wholesale.

[Home / Download](https://dsh.zhuquan.xyz) ·
[About the author](https://dsh.zhuquan.xyz/me.html) ·
[Download 0.5.25](https://dsh.zhuquan.xyz/dl/) ·
[Windows](https://dsh.zhuquan.xyz/dl/DeepSeek-0.5.25-win.exe) ·
[Linux tar.gz](https://dsh.zhuquan.xyz/dl/DeepSeek-0.5.25-linux-x64.tar.gz) ·
[macOS Apple Silicon](https://dsh.zhuquan.xyz/dl/DeepSeek-0.5.25-mac-arm64.dmg)

## What is this

The official `dsh web` already works well, but ordinary users still have to install Node, clone the repository, and start it from a terminal themselves. This project adds a thin **Electron desktop shell**:

1. A double-clickable installer (Windows / Linux / macOS, x64 and arm64, including Intel Mac)
2. On launch, it automatically prepares Node and installs the official `@deepseek-ai/dsh` from npm
3. It embeds the official interface in a native window: desktop shortcut, icon,…
