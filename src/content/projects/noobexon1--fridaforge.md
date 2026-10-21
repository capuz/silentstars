---
repo: "noobexon1/FridaForge"
name: "FridaForge"
description: "A plugin to generate Frida snippets straight from IDA Pro and Binary Ninja."
readmeQualityOk: true
url: "https://github.com/noobexon1/FridaForge"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["binaryninja", "binaryninja-plugin", "binja", "binja-plugin", "frida", "frida-scripts", "frida-snippets", "generator", "hooks", "ida"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-19T10:12:31Z"
lastCommitAt: "2026-10-21T08:49:38Z"
lastReleaseAt: "2026-10-21T08:26:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["noobexon1"]
openGraphImageUrl: "https://opengraph.githubassets.com/849540b3327f0ec8f21df3f5830bbefb56329102ec06864aaf1c6f8a5e4b3b0e/noobexon1/FridaForge"
---

**Generate Frida scripts directly from IDA Pro, Binary Ninja, and Ghidra.** ⚡

## 📸 Examples

**Generate a function hook** — right-click in the disassembly/pseudocode view and pick an action:

**Get a ready-to-use Frida script** — copied straight to your clipboard:

## ✨ Features

Right-click (or hit a hotkey) in your disassembler to generate ready-to-use Frida snippets — the result is instantly copied to your clipboard.

- 🧩 **Composable scripts** — snippets are independent but can be nested to build complex instrumentation with a few clicks
- 🎯 **Context-aware** — scripts auto-fill module name, function address, section, and any other detail available from your current context
- 🧰 **Three hosts, one experience** — identical features, hotkeys, and menus in IDA Pro, Binary Ninja, and Ghidra
- 📋 **Clipboard integration** — generated scripts are copied the moment you run an action

### Supported Actions

#### 🪝 Hooks

| Action | Description | Hotkey |
|---|---|---|
| Generate function hook | Intercept calls to the selected function, log entry/exit | `Shift+F` |
| Generate dlopen hooks | Monitor `dlopen` (including Android variants) to detect module loading | `Shift+D` |

####…
