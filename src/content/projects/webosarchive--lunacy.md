---
repo: "webOSArchive/Lunacy"
name: "Lunacy"
description: "webOS application environment for Android"
readmeQualityOk: true
url: "https://github.com/webOSArchive/Lunacy"
homepage: "https://www.webosarchive.org/lunacy"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [66]
topics: ["android", "enyo", "mojo", "webos"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-19T21:13:20Z"
lastCommitAt: "2026-11-17T14:47:31Z"
lastReleaseAt: "2026-10-09T17:42:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["codepoet80"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfafc4264bdeeac42514a2ee3fb6466c7a59881cf124b710b842892fa52a5285/webOSArchive/Lunacy"
---

# Lunacy

**Run legacy webOS apps on modern Android phones and tablets, inside a shell that looks and
feels like webOS.**

webOS apps were HTML and JavaScript. They loaded their framework (Enyo or Mojo) from the OS,
ran as cards in the Luna system shell, and talked to the system over the Luna service bus
(`palm://…`). The devices are more than a decade old, but the apps are still good. Most of
them never needed Palm's hardware. They needed Palm's *contract*.

Lunacy provides that contract on Android.

## How it works

Lunacy re-implements the contract, not the OS:

1. **A simulated Luna shell.** A native Android UI that recreates the webOS experience: card
   view, gestures, launcher, notification banners and dashboard. None of Palm's code runs.
   It looks and behaves like webOS, and it has to feel right.
2. **Modernized frameworks.** Apps load their framework from
   `/usr/palm/frameworks/...` and trust the OS to provide it. Lunacy supplies the TouchPad's own
   [Enyo 1.0](https://github.com/enyojs/enyo-1.0) (Apache 2.0), fixed to run on a modern
   Chromium renderer. Fixes in the library cover every app built on it.
3. **Apps as cards.** Each app runs unmodified in its own…
