---
repo: "HFrancisla/pi-session-viewer"
name: "pi-session-viewer"
description: "Local, read-only Pi session and system-prompt inspector"
readmeQualityOk: true
url: "https://github.com/HFrancisla/pi-session-viewer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 7
forks: 2
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-16T06:56:27Z"
lastCommitAt: "2026-11-25T13:17:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b6f2a8eea9d84d8257026ab2d30dbdee8181670ec844669beb3472a67b5c6ba7/HFrancisla/pi-session-viewer"
---

# Pi Session Viewer

[English](https://github.com/HFrancisla/pi-session-viewer/blob/HEAD/README.md) | [简体中文](https://github.com/HFrancisla/pi-session-viewer/blob/HEAD/README.zh-CN.md)

A local, read-only desktop web inspector for [Pi](https://github.com/earendil-works/pi) coding-agent sessions. Visualizes multi-turn timelines, tool-call causality, and native persisted system state.

## Install

```bash
pi install npm:@hfrancisla/pi-session-viewer
```

Restart Pi or run `/reload`. The extension loads automatically and begins recording supplemental observations on the next turn.

## Usage

```text
/session-viewer       # Start viewer (alias for on)
/session-viewer on    # Start viewer and open in browser
/session-viewer off   # Stop viewer (supplemental observation continues)
```

- Starting the viewer opens a local tokenized dashboard in your browser.
- Session switches (`/new`, `/resume`, `/fork`) require running `/session-viewer on` again.
- Discover sessions directly from Pi's storage or import any `.jsonl` session file via the browser.
