---
repo: "neocmakelsp/neocmakelsp-vscode"
name: "neocmakelsp-vscode"
description: "vscode extension for neocmakelsp"
readmeQualityOk: true
url: "https://github.com/neocmakelsp/neocmakelsp-vscode"
homepage: "https://open-vsx.org/extension/Decodetalkers/neocmakelsp-vscode"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 11
forks: 2
openIssues: 4
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-11-08T03:49:30Z"
lastCommitAt: "2026-08-04T06:11:45Z"
lastReleaseAt: "2025-02-09T10:51:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 72
maintainers: ["Decodetalkers", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f95f023392197040de0f3ccefc8add93a909dbcec680fc0cc89e15adbfc9d9f/neocmakelsp/neocmakelsp-vscode"
---

# neocmakelsp vscode plugin

This plugin is for [neocmakelsp](https://github.com/Decodetalkers/neocmakelsp)
on vscode, it providing:

- code completion
- compile errors and warnings
- go-to-definition and cross references
- hover information
- code formatting
- highlight
- AST tree

## Settings

neocmakelsp can use tcp way to start, and it can be set to use local target, not
download asserts from github, you can set them like

```json
{
  "neocmakelsp": {
    "tcp": true,
    "localtarget": true,
    "path": "${env:HOME}/.cargo/bin/neocmakelsp"
  }
}
```

NOTE: this feature only enable on unix system which has `nc` command.

## Feature show

### highlight

### Ast tree

### Hover
