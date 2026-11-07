---
repo: "yiranxiaohui/Pier"
name: "Pier"
description: "A cross-device workbench for coding agents."
originalDescription: "A cross-device workbench for coding agents."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yiranxiaohui/Pier"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-28T10:11:28Z"
lastCommitAt: "2026-11-07T09:29:21Z"
lastReleaseAt: "2026-09-29T09:44:46Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 57
maintainers: ["yiranxiaohui", "peanut2001", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/069cab8af9bd1d6f70530e78b14a405a4e865e2e75f14729367314d4704da0d0/yiranxiaohui/Pier"
---

# Pier

A cross-device workbench for coding agents.

Pier is a cross-device workbench for coding agents. In a single interface, you can use the built-in [pi](https://github.com/earendil-works/pi) as well as [Claude Code](https://code.claude.com) and [Codex](https://github.com/openai/codex) installed on your computer. It centrally manages workspaces and sessions across multiple computers and provides file, Git, and terminal operations. Agents run resident on their own computers, and you can check progress, send instructions, and approve operations from the desktop or the phone.

## Features

- **One interface, three agents**: Built in pi, and drives Claude Code and Codex installed on the computer. Their sessions are shared with the CLI in the terminal, so you can continue at any time in the terminal with `claude --resume` / `codex resume`.
- **Unified management of multiple computers**: Each computer is a node. Paste a pairing link, or log in to a Linux computer over SSH to automatically install Pier and pair it. That computer's workspaces and sessions are listed in the sidebar alongside those of the local machine.
- **Follow up from your phone anytime**: The native app (Expo /…
