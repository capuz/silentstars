---
repo: "bendsp/bedrock"
name: "bedrock"
description: "A modern cross-platform text editor!"
readmeQualityOk: true
url: "https://github.com/bendsp/bedrock"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 5
forks: 0
openIssues: 0
closedIssues: 53
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2025-10-17T09:57:37Z"
lastCommitAt: "2026-09-30T09:57:02Z"
lastReleaseAt: "2026-09-29T16:00:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 57
maintainers: ["bendsp"]
openGraphImageUrl: "https://opengraph.githubassets.com/860a64a88e68e269b979b526899a39747f2c59ebfc7094bd1eb2a906f8a15a61/bendsp/bedrock"
---

## Bedrock

Bedrock is a local Markdown workspace and text editor built with **Electron + React + CodeMirror 6**.

### Root folder and Home

On first launch, choose a root folder or use the suggested `~/Documents/Bedrock`.
Change it later in **Settings → Files → Root folder**. Switching folders does
not move or delete existing files.

Home lists the 20 most recently opened or created files for that root. New
creates `Untitled.md`, then `Untitled 2.md`, and so on without overwriting files.
Open and Save As start in the root folder; external Markdown files can still
be opened and edited in place, as can other UTF-8 text files. Home navigation asks before discarding edits.
Normal startup opens Home; opening a Markdown or TXT file from Finder opens that file.

Notes remain plain Markdown. Recent-file data is stored in
`.bedrock/recent-files.json` inside the root, with relative paths for files
inside it and absolute paths for external files. Only the root-folder pointer
is stored in `workspace-location.json` in Electron's user-data directory.
Appearance and keyboard preferences remain local app settings.

### Find files and add images

Press **Cmd/Ctrl+P** to find files by filename,…
