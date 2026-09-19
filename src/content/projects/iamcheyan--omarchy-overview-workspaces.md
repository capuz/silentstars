---
repo: "iamcheyan/omarchy-overview-workspaces"
name: "omarchy-overview-workspaces"
description: "A full-screen Omarchy workspace overview with live window thumbnails, wallpaper-backed cards, dynamic and native ordering, drag-and-drop movement, and keyboard navigation."
readmeQualityOk: true
url: "https://github.com/iamcheyan/omarchy-overview-workspaces"
language: "QML"
languages: ["QML"]
languagePcts: [86]
topics: ["desktop", "hyprland", "omarchy", "quickshell", "workspaces"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-08-21T15:28:52Z"
lastCommitAt: "2026-09-19T02:47:04Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["iamcheyan", "iamcheyan-netizen", "r404r"]
openGraphImageUrl: "https://opengraph.githubassets.com/669569a8c11630dcabc80bcffa43b58d37df5cff2f5737950c9c14b3d5c329c6/iamcheyan/omarchy-overview-workspaces"
---

# Overview Workspaces

## 0.1.10

- Added an MRU workspace-ordering switch. With MRU off, Overview and the top bar
  use fixed native workspace numbers, and Win+number keeps its normal stable
  meaning. With MRU on, Overview and Win+number follow recent-use order while
  the top bar shows `WORKSPACE` instead of ambiguous numeric slots.

## 0.1.9

- Restored automatic Win/Super, Win+Tab, and optimized Win+number bindings on
  Omarchy 4 by using its capability-scoped `barConfig` API.
- Kept compatibility with older Omarchy hosts without requesting access to the
  full shell configuration.
- Remove the raw Super-key listener when the plugin service is disabled or
  destroyed, so no Overview event observer remains behind.
- Restore native Win+number bindings when changing from optimized ordering to
  system ordering, preventing stale Overview slots after a later disable.
- Document the required Shell restart after updating an existing enabled copy;
  Omarchy intentionally preserves `keepLoaded` services during plugin rescans.

## 0.1.8

- Added a guarded force-kill mode to Overview: press `Ctrl+Shift+X`, then click
  a window to terminate only that client by address.
- The mode hides…
