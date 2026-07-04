---
repo: "hermes-webui/hermes-android"
name: "hermes-android"
description: "The best way to use Hermes from your Android"
readmeQualityOk: true
url: "https://github.com/hermes-webui/hermes-android"
homepage: "https://github.com/nesquena/hermes-webui"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
stars: 25
forks: 4
openIssues: 2
closedIssues: 18
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-04-12T20:17:00Z"
lastCommitAt: "2026-07-04T22:18:19Z"
lastReleaseAt: "2026-06-25T17:27:04Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 52
maintainers: ["Paladin173", "leoburti", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78e760fd0e49c99f9389decabb1434132e352be2bf8a992941b54805eee6f6d6/hermes-webui/hermes-android"
---

# Hermes-Android 🤖📱

Hermes-Android is the native Android wrapper for
[Hermes Web UI](https://github.com/nesquena/hermes-webui). It keeps the
Hermes web app as the primary interface and adds only the Android pieces that
should live on-device: secure WebView hosting, native navigation, sharing,
downloads, notifications, and encrypted local settings.

> 🔒 HTTP/HTTPS URL policy · 🌐 host allowlist · 📂 sharing + downloads · 🧊 encrypted settings
> 🔔 Android-backed WebUI notifications

The app is intentionally thin. Hermes product behavior, UI layout, styling, and
feature workflows stay server-delivered through WebUI, while this repo owns
Android integration and device safety.

## Repository Scope

Use this repository for Android-wrapper issues and PRs only:

- WebView hosting, navigation, compatibility, and Android lifecycle behavior
- Android permissions, microphone, notifications, sharing, uploads, downloads, and deep links
- Local encrypted settings, app identity, build, signing, and Play distribution

Open WebUI/product issues in
[Hermes Web UI](https://github.com/nesquena/hermes-webui) instead:

- Hermes UI layout, styling, animations, routing, and dashboard behavior
-…
