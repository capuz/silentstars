---
repo: "VizzleTF/CommitSage"
name: "CommitSage"
description: "Commit Sage is a VSCode extension that automatically generates commit messages"
readmeQualityOk: true
url: "https://github.com/VizzleTF/CommitSage"
homepage: "https://marketplace.visualstudio.com/items?itemName=VizzleTF.geminicommit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai", "gemini", "git", "git-message", "llm", "openai", "vscode", "vscode-extension"]
stars: 53
forks: 10
openIssues: 0
closedIssues: 36
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-08-23T23:19:00Z"
lastCommitAt: "2026-11-03T11:17:07Z"
lastReleaseAt: "2024-08-26T11:21:04Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 57
maintainers: ["VizzleTF", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d141c44a453b1af4cbb19add601eaf36d37ca9f055560928e4004527f3549ec/VizzleTF/CommitSage"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/vizzletf", "KO_FI:https://ko-fi.com/vizzletf", "CUSTOM:https://boosty.to/vizzletf/donate"]
---

# Commit Sage (formerly GeminiCommit)

Commit Sage is a VS Code extension that writes Git commit messages from your changes with an AI provider of your choice.

## Install

Requires VS Code 1.93.0 or later and Git. Cloud providers need internet access; Ollama and a self-hosted Custom endpoint do not.

Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=VizzleTF.geminicommit), from [Open VSX](https://open-vsx.org/extension/VizzleTF/geminicommit), or from the command line:

```bash
code --install-extension VizzleTF.geminicommit
```

## Quick start

1. Open the **Commit Sage** view in the Activity Bar and pick a provider. The default is `gemini`.
2. In the same view, click the button to set the API key for that provider. The view links to the page where you get the key. Or run `Commit Sage: Set <PROVIDER> API Key` from the Command Palette.

   Ollama and Custom need no key by default.
3. Stage your changes and click the Commit Sage icon in the Source Control header, press `Ctrl+G` (`Cmd+G` on macOS) in the Source Control view, or run `Commit Sage: Generate Commit Message`.

The message appears in the Source Control input box. Review it and…
