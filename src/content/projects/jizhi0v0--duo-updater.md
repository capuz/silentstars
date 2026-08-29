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
stars: 7
forks: 0
openIssues: 2
closedIssues: 35
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-01T10:47:44Z"
lastCommitAt: "2026-08-29T17:29:14Z"
lastReleaseAt: "2026-08-16T15:41:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["jizhi0v0"]
openGraphImageUrl: "https://opengraph.githubassets.com/87c74e545d9a63754cad99e18effe7fe58c9f13af15913f39a92b7e5308e6820/jizhi0v0/duo-updater"
---

# Duo Updater

A macOS menu-bar app that finds updates for the apps you already have, and
installs them the way each app expects to be updated.

**[duoupdater.app](https://duoupdater.app)** — the download, the release notes,
and what it checks before replacing an app.

Most updaters pick one mechanism and push every app through it. This one reads
each app's own release channel — its Sparkle appcast, its App Store listing, its
Homebrew cask, its vendor's release feed — and uses that. When an app ships its
own updater, it hands over instead of fighting it; when it can't do something
safely, it says so rather than guessing. Pure Swift, no telemetry, no server.

</p>

Each row says what you are going from and to, and the button says what will
actually happen: **Update** installs, **Relaunch** means it is already updated on
disk and only the running copy is stale. A green dot marks an app that is
running, so you know before you click whether something is about to be quit and
reopened, and a channel tag appears where an app is not on its default track —
the Surge row here is a beta, so it compares build numbers rather than the
marketing version they share.

The single row at the bottom…
