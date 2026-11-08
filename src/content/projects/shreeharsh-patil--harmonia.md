---
repo: "shreeharsh-patil/Harmonia"
name: "Harmonia"
description: "Harmonia — A modern, feature-rich music streaming experience with personalized recommendations, seamless playback, synced lyrics, curated playlists, offline downloads, and a beautifully crafted interface."
readmeQualityOk: true
url: "https://github.com/shreeharsh-patil/Harmonia"
homepage: "https://listenharmonia.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-10-16T17:50:50Z"
lastCommitAt: "2026-11-08T14:13:55Z"
lastReleaseAt: "2026-11-08T14:13:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 77
undervaluedScore: 34
maintainers: ["shreeharsh-patil"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f7a3acf8c76fa837d6ea5e15abca7fb58b20de8096ec6c5e01c4fae3468bc4a/shreeharsh-patil/Harmonia"
---

# Harmonia Mobile — Landing Page

A promotional landing page for [Harmonia Mobile](https://github.com/shreeharsh-patil/Harmonia), a source-available React Native / Expo music player with free multi-source streaming (JioSaavn, YouTube Music), LRCLib synced lyrics, offline downloads, and native background playback.

The page renders live repository telemetry — star counts, fork counts, release tags, APK sizes and download totals — pulled from the GitHub REST API on the server, with fallback to verified build telemetry.

> [!NOTE]
> This is an independent landing page. All audio streams are resolved directly from free, publicly accessible providers (JioSaavn, YouTube Music, LRCLib) and local device files. No Spotify credentials or subscriptions are required.

---

## Contents

- [Stack](#stack)
- [Quick start](#quick-start)
- [Environment variables](#environment-variables)
- [Scripts](#scripts)
- [Architecture](#architecture)
- [Project structure](#project-structure)
- [License](#license)
- [Credits](#credits)

---

## Stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js 15, App Router | React Server Components, ISR |
| UI | React 19 | Server components by…
