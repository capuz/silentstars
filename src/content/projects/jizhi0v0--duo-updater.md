---
repo: "jizhi0v0/duo-updater"
name: "duo-updater"
description: "Keeps macOS apps up to date through each app's own release channel — Sparkle, App Store, Homebrew, GitHub releases, or a per-app recipe against the vendor's own endpoint — with signature-verified installs and rollback. Pure Swift."
readmeQualityOk: true
url: "https://github.com/jizhi0v0/duo-updater"
homepage: "https://duoupdater.app"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["app-updater", "homebrew", "macos", "macos-app", "menubar", "software-updater", "sparkle", "swift", "swiftui"]
stars: 13
forks: 0
openIssues: 8
closedIssues: 212
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-01T10:47:44Z"
lastCommitAt: "2026-10-04T10:01:21Z"
lastReleaseAt: "2026-08-16T15:41:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 58
maintainers: ["jizhi0v0"]
openGraphImageUrl: "https://opengraph.githubassets.com/24be9b3e209ba098e9a13e03e913c1ddfbf739caf4215227d40dd346a24231b8/jizhi0v0/duo-updater"
---

# DuoUpdater

A macOS menu-bar app that finds updates for the apps you already have, and
installs them the way each app expects to be updated.

**[duoupdater.app](https://duoupdater.app)** — the download, the release notes,
and what it checks before replacing an app.

Most updaters pick one mechanism and push every app through it. This one reads
each app's own release channel — its Sparkle appcast, its App Store listing, its
Homebrew cask, its vendor's release feed — and uses that. When an app ships its
own updater, it hands over instead of fighting it; when it can't do something
safely, it says so rather than guessing. Pure Swift, no telemetry, no server.

Each row says what you are going from and to, and the button says what will
actually happen: **Update** installs, **Relaunch** means it is already updated on
disk and only the running copy is stale. A green dot marks an app that is
running, so you know before you click whether something is about to be quit and
reopened, and a channel tag appears where an app is not on its default track.
When a release keeps the same marketing version, the row shows the build number
beside it — Amp here is 1.0 on both sides, going from build 374…
