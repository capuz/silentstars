---
repo: "banacorn/agda-mode-vscode"
name: "agda-mode-vscode"
description: "agda-mode on VS Code"
readmeQualityOk: true
url: "https://github.com/banacorn/agda-mode-vscode"
homepage: "https://marketplace.visualstudio.com/items?itemName=banacorn.agda-mode"
language: "ReScript"
languages: ["ReScript"]
languagePcts: [97]
topics: ["agda", "agda-mode", "vscode", "vscode-extension", "reasonml"]
stars: 185
forks: 44
openIssues: 49
closedIssues: 146
watchers: 8
contributors: 29
recentReleases: 0
createdAt: "2020-01-25T13:05:31Z"
lastCommitAt: "2026-07-17T05:58:26Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 90
undervaluedScore: 43
maintainers: ["banacorn", "andy0130tw", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d898d58380e25fbecab0fc02399f93951e9e863715a76546370611544a5abf2/banacorn/agda-mode-vscode"
discussionCount: 0
---

# agda-mode on VS Code

## Installation

If you have [Agda](https://agda.readthedocs.io/en/latest/getting-started/installation.html) properly installed (to check this in your terminal, type `agda` and see if it's on your machine). Open an Agda file and you should be able to load it by typing <kbd>C-c</kbd> <kbd>C-l</kbd>.

It's okay if you don't have Agda installed, we can also download and install [Agda Language Server](https://github.com/agda/agda-language-server) for you on Windows, macOS, or Ubuntu.

You can install multiple versions of Agda or ALS by adding more paths to `agdaMode.connection.paths` in the settings, and switch between them with <kbd>C-c</kbd> <kbd>C-r</kbd>.

### Extension Activation

To activate the extension, open an Agda file, and trigger either of these 2 commands:

| Command                       |            Keymap             |
| :---------------------------- | :---------------------------: |
| load                          | <kbd>C-c</kbd> <kbd>C-l</kbd> |
| activate unicode input method |         <kbd>\\</kbd>         |

See the next section for the exhaustive list of other commands.
You will get `command ... not found` if you try to trigger other…
