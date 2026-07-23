---
repo: "adrogin/al-prettier"
name: "al-prettier"
description: "Prettier plugin for Business Central's AL language"
readmeQualityOk: true
url: "https://github.com/adrogin/al-prettier"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["al", "bcopensource", "code", "formatter", "vscode-extension"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 15
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-19T15:08:01Z"
lastCommitAt: "2026-07-23T06:16:25Z"
lastReleaseAt: "2026-07-15T06:43:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 64
maintainers: ["adrogin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1215164066/f5bc579a-7f2c-4a5f-81bb-21e817c90789"
---

# AL Prettier for VS Code

A [Prettier](https://prettier.io/) plugin for AL language and a VS Code extension that provides code formatting using this plugin.

## Installation

1. Install from VS Code Extensions Marketplace (direct link: [AL Prettier](https://marketplace.visualstudio.com/items?itemName=alexander-drogin.al-prettier-vscode) or search for "AL Prettier")
2. Or install manually by downloading the `.vsix` file and running `code --install-extension al-prettier-vscode-0.4.1.vsix`

## Usage

### Format Document
- Use the keyboard shortcut: `Shift+Alt+F` (Windows/Linux) or `Shift+Option+F` (macOS)
- Or right-click and select "Format Document"

### Format Selection
**Selection formatting is currently not supported. This feature will be available in future releases.**

### Format on Save
Enable format on save in VS Code settings:
```json
{
  "[al]": {
    "editor.defaultFormatter": "alexander-drogin.al-prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

## Configuration

You can customize the formatting behavior in VS Code settings:

```json
{
  "alPrettier.tabWidth": 4,
  "alPrettier.useTabs": false,
  "alPrettier.printWidth": 120,
  "alPrettier.groupGlobalVars":…
