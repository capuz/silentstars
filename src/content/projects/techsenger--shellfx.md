---
repo: "techsenger/shellfx"
name: "shellfx"
description: "Techsenger ShellFX  – A platform for building JavaFX applications using an extended MVVM pattern."
readmeQualityOk: true
url: "https://github.com/techsenger/shellfx"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["javafx", "javafx-application", "javafx-component", "javafx-components", "javafx-desktop-app", "javafx-desktop-apps", "javafx-gui", "javafx-library", "javafx-project", "javafx-platform"]
stars: 44
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-20T19:43:04Z"
lastCommitAt: "2026-11-02T10:21:30Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 55
maintainers: ["pcastornii"]
openGraphImageUrl: "https://opengraph.githubassets.com/78c54ee0f4b0a58a968e4fdbe1cae7b180593ab67c504553cd2f97034b992130/techsenger/shellfx"
fundingLinks: ["GITHUB:https://github.com/techsenger"]
---

# Techsenger ShellFX

Techsenger ShellFX is a platform for building JavaFX applications, where an application is structured
as a tree of MVVM components, each of which has its own lifecycle, config, etc. The platform provides abstract
classes for creating the main types of components: window, tab, area, page, dialog, and popup.

It also includes ready-to-use implementations of containers (including a docking layout) and dialogs (including a
universal file chooser). In addition, the platform provides powerful devtools that allow you to inspect both the MVVM
component tree and the underlying JavaFX scene graph. These tools make it easy to understand how the platform works
and are invaluable during development.

ShellFX is built around two core subsystems: the dynamic main menu and the workspace. The main menu is assembled
at runtime and automatically adapts to the currently focused component. The workspace is everything below the main
menu in the `Shell` — it provides the structural foundation of the application and defines how components are
arranged and interact visually. The platform supports different types of workspace models.

`ShellFX` is built according to the KISS…
