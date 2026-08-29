---
repo: "calagopus/vscode-extension"
name: "vscode-extension"
description: "VS Code Extension for Calagopus Server Management."
readmeQualityOk: true
url: "https://github.com/calagopus/vscode-extension"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["calagopus", "extension", "vsce", "vscode", "vscode-extension"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-06-10T23:20:39Z"
lastCommitAt: "2026-08-29T17:28:57Z"
lastReleaseAt: "2026-08-24T13:37:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 71
undervaluedScore: 23
maintainers: ["0x7d8"]
openGraphImageUrl: "https://opengraph.githubassets.com/eba9907dcaafb4cde295391d0cd419ebdfd59b750df026772b94c54ef3da26c8/calagopus/vscode-extension"
fundingLinks: ["GITHUB:https://github.com/calagopus", "GITHUB:https://github.com/0x7d8", "KO_FI:https://ko-fi.com/rjansen"]
---

# Calagopus for VSCode

Browse and edit [Calagopus](https://calagopus.com) server files and access the server console directly from VS Code.

## Features

- Mount server files as a workspace folder over a virtual `calagopus://` filesystem.
- Edit, create, rename, and delete files and directories remotely with native VS Code tooling.
- Search across server files by name and content (when the proposed search APIs are enabled).
- Attach to the live server console as an integrated terminal, with full output streaming and command input.
- Collaborate on server files in real time - edits and cursors are shared live and saves are coordinated when multiple people open the same file.
- Browse a file's revision history in the explorer, diff any revision against the current file or the previous one, and restore old versions.
- View server state in the status bar and trigger power actions (start, stop, restart, kill).
- Follow long-running server work as progress notifications - file operations (compress, extract, copy, pull) as well as backup creation, restoration, and deletion, including the ones started from the panel.
- Open servers and consoles via deep links using the `calagopus` URI…
