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
stars: 32
forks: 0
openIssues: 11
closedIssues: 254
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-01T10:47:44Z"
lastCommitAt: "2026-10-22T08:52:32Z"
lastReleaseAt: "2026-08-16T15:41:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 99
undervaluedScore: 49
maintainers: ["jizhi0v0", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/61fb3ea212ba7963c66d4ac3e38278e32fa2e53bbc18bc7f6814c9088620f837/jizhi0v0/duo-updater"
---

# DuoUpdater

A macOS menu-bar app that finds updates for the apps you already have, and
installs them the way each app expects to be updated.

**[duoupdater.app](https://duoupdater.app)** — the download, the release notes,
and what it checks before replacing an app. Or install it with Homebrew:

```sh
brew install --cask jizhi0v0/tap/duoupdater
```

DuoUpdater updates itself after that, so `brew upgrade` leaves it alone. It needs
macOS 15 or later.

Most updaters pick one mechanism and push every app through it. This one reads
each app's own release channel — its Sparkle appcast, its App Store listing, its
Homebrew cask, its vendor's release feed — and uses that. When an app ships its
own updater, it hands over instead of fighting it; when it can't do something
safely, it says so rather than guessing. Pure Swift, no telemetry, and the only
server is the one that serves its own update feed ([Privacy](#privacy)).

Each row says what you are going from and to, and the button says what will
actually happen: **Update** installs, **Relaunch** means it is already updated on
disk and only the running copy is stale. A green dot marks an app that is
running, so you know before you click…
