---
repo: "starling-build/starling"
name: "starling"
description: "Starling — a new Linux desktop environment: Swift shell, its own compositor, a Flutter-to-Swift framework port, and first-party apps"
readmeQualityOk: true
url: "https://github.com/starling-build/starling"
homepage: "https://starling.build"
language: "Swift"
languages: ["Swift", "C"]
languagePcts: [68, 22]
topics: ["ai", "compositor", "desktop", "desktop-environment", "drm", "flutter", "gpu", "kms", "linux", "swift"]
stars: 350
forks: 18
openIssues: 17
closedIssues: 10
watchers: 8
contributors: 2
recentReleases: 10
createdAt: "2026-07-28T04:31:38Z"
lastCommitAt: "2026-09-19T08:13:15Z"
lastReleaseAt: "2026-08-17T15:50:24Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "release_machine", "under_pressure"]
healthScore: 87
undervaluedScore: 27
maintainers: ["starling-build-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c8cf8fc7d08561ce05acfd675d4e62afbcad175a857e5e5dc492127867c3305/starling-build/starling"
discussionCount: 2
---

# Starling

**[starling.build](https://starling.build)**

A new Linux desktop environment, whose shell, compositor, framework, and apps
are written in Swift (the framework is a full port of Flutter's Dart framework
to Swift — no Dart VM). It brings its own Wayland compositor and its own X11
server, so it runs native Wayland clients and X11 apps alike. Runs on the
Flutter engine's C core via the sibling repo **starling-engine**, and on the
Flutter→Swift framework from the sibling repo **flutter-swift**.

```
sdk   -> symlink to a flutter-swift checkout — the Flutter→Swift framework port
         (SwiftPM package "FlutterSwift"). Its own repo; ./bootstrap.sh links it.
engine -> symlink to a starling-engine checkout
shell/   the desktop shell: compositor (C Wayland server), window manager,
         dock, spaces, portals — SwiftPM package "DesktopShellApp"
apps/    first-party apps (Settings, Files, Terminal, …), one SwiftPM package each
host/    the windowed host (FlutterRunner + GLFWBridge): run a Swift Flutter app
         in an ordinary window rather than through the shell. Demos only.
build/   packaging: the Ubuntu .deb, session files, app-run/app-install tools,
         vendored…
