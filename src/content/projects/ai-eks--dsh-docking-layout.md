---
repo: "ai-eks/dsh-docking-layout"
name: "dsh-docking-layout"
description: "Organize unlimited conversation tabs into editor-style, drag-to-split groups for DeepSeek Harness Web."
readmeQualityOk: true
url: "https://github.com/ai-eks/dsh-docking-layout"
homepage: "https://www.npmjs.com/package/@ai-eks/dsh-docking-layout"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["docking-layout", "dsh-plugins", "layout", "dsh-plugin"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-08-21T11:18:27Z"
lastCommitAt: "2026-11-09T11:59:31Z"
lastReleaseAt: "2026-10-22T06:29:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 64
maintainers: ["ai-eks", "nahuel-borda"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc3f63c77e149798434d939e58ff26e90c440cf753efb3525dba7eed79ddec53/ai-eks/dsh-docking-layout"
---

# @ai-eks/dsh-docking-layout

English | [中文](https://github.com/ai-eks/dsh-docking-layout/blob/HEAD/README.zh.md)

A DeepSeek Harness Web UI plugin for organizing unlimited conversation tabs into editor-style groups. Split freely, then close or move tabs whenever a pane becomes too small.

## Preview

| Two groups | Three groups |
| --- | --- |
|  |  |

## Features

- Unlimited tabs and groups, with no fixed pane-size guard.
- Drag a tab to another group to move it, or to an edge to split; toolbar buttons split right or down.
- At widths up to 760 pixels, one full-width group is shown at a time with a group switcher.
- Switching to single-column mode or another main panel hides the docked panes; returning restores the groups.
- Closing a tab changes only the browser layout and never deletes its DSH Session. Closing the final tab opens a blank Session, reusing an existing blank Session when DSH selects one.

## Install

From npm:

```sh
dsh plugin --profile web add @ai-eks/dsh-docking-layout@latest
```

From Git:

```sh
dsh plugin --profile web add github:ai-eks/dsh-docking-layout
```

From a local checkout:

```sh
git clone https://github.com/ai-eks/dsh-docking-layout.git
cd…
