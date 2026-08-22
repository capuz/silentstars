---
repo: "unxed/vtui"
name: "vtui"
description: "tui interface building framework for go"
readmeQualityOk: true
url: "https://github.com/unxed/vtui"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 13
forks: 8
openIssues: 3
closedIssues: 0
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2026-03-13T11:04:32Z"
lastCommitAt: "2026-08-22T04:05:49Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 41
maintainers: ["unxed", "claude", "Zoinen"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fa40a2fd24a28cbcec21b580c9e693ceec8b40887288845260dde67e4e5490e/unxed/vtui"
---

# vtui

**A Stateful, Desktop-Class TUI Framework for Go**

`vtui` is a modern, cross-platform Terminal User Interface (TUI) framework for Go. It is heavily inspired by classic desktop UI paradigms—specifically **Turbo Vision** (Borland) and the **Far Manager** internal UI kit.

Unlike modern web-inspired TUI libraries that use Flexbox or Grid layouts, `vtui` is designed from the ground up for building complex, **stateful** applications: file managers, database clients, IDEs, and heavy-duty text editors.

## Why vtui? (Comparison with tcell/tview)

While `tcell` is an excellent low-level terminal driver and `tview` is a great high-level component library, `vtui` is built with a fundamentally different philosophy:

| Feature | tcell + tview / cview | vtui (this project) |
| :--- | :--- | :--- |
| **Abstractions** | **Driver + Widgets.** Low-level canvas with Flexbox-like layout containers. | **Application Framework.** Full-featured OOP hierarchy (Dialogs, Menus, Focus cycles). |
| **Layout Mode** | **Flexbox/Grid.** Modern web-like proportions. | **GrowMode (Turbo Vision style).** "Rubber" layout with anchors, perfect for pixel-perfect TUI dialogs. |
| **Input** | Standard…
