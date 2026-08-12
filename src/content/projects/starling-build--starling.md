---
repo: "starling-build/starling"
name: "starling"
description: "Starling — a new Linux desktop environment: Swift shell, its own compositor, a Flutter-to-Swift framework port, and first-party apps"
readmeQualityOk: true
url: "https://github.com/starling-build/starling"
homepage: "https://starling.build"
language: "Swift"
languages: ["Swift"]
languagePcts: [77]
topics: ["ai", "compositor", "desktop", "desktop-environment", "drm", "flutter", "gpu", "kms", "linux", "swift"]
stars: 310
forks: 18
openIssues: 10
closedIssues: 9
watchers: 7
contributors: 2
recentReleases: 8
createdAt: "2026-07-28T04:31:38Z"
lastCommitAt: "2026-08-12T05:14:13Z"
lastReleaseAt: "2026-08-11T15:53:13Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 89
undervaluedScore: 28
maintainers: ["starling-build-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/f31bd4a927dae8397cb8e560b07f9dd81fea204dd9676185f048e5b908c8a581/starling-build/starling"
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
