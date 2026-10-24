---
repo: "Printaga/PiLot"
name: "PiLot"
description: "Integrate the powerful PI coding agent directly into VS Code with a user-friendly GUI."
readmeQualityOk: true
url: "https://github.com/Printaga/PiLot"
homepage: "https://pivscode.com/"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [61, 31]
topics: ["ai-agent", "ai-coding", "ai-tools", "pi", "vscode", "vscode-extensions", "vscode-plugin", "pi-extension", "pi-extensions", "pi-package"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-05T10:53:30Z"
lastCommitAt: "2026-10-24T08:08:38Z"
lastReleaseAt: "2026-07-10T14:26:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 47
maintainers: ["Printaga"]
openGraphImageUrl: "https://opengraph.githubassets.com/c64d7764a640caf65eeb55f9b241c9cc2934f5bcff7529b7321250e0a0ea5a5b/Printaga/PiLot"
---

# PiLot Studio

**A VS Code sidebar for the PI coding agent.**

Chat about your workspace, let PI use coding tools, revisit branched sessions, and manage models and packages without leaving your editor.

Official website: **[pivscode.com](https://pivscode.com/)**

Works with VS Code 1.105 or newer on Windows, Linux, and macOS. Requires PI CLI 1.4.0 or newer.

## Get started

Install PI separately from the extension: PiLot Studio loads the runtime from your PI installation. PI 1.4 requires Node.js 22.19 or newer and npm; VS Code 1.105 is the first release that bundles a Node version new enough.

1. Install the PI CLI, then run `pi --version` in VS Code's integrated terminal to check that VS Code can find it:

    ```bash
    npm install -g --ignore-scripts @earendil-works/pi-coding-agent
    pi --version
    ```

2. Install [PiLot Studio from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=PrintagaPublishingLLC.pilots-studio) and open a folder in VS Code.
3. Open the PiLot Studio Activity Bar view, or press `Ctrl+Shift+Alt+P` (`Cmd+Shift+Alt+P` on macOS).
4. Open the **Providers** tab (key icon), add an API key or sign in where supported, then choose a…
