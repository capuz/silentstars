---
repo: "johannesjo/minded"
name: "minded"
description: "Minded mono repo"
readmeQualityOk: true
url: "https://github.com/johannesjo/minded"
homepage: "http://minded.today/"
language: "TypeScript"
languages: ["TypeScript", "Kotlin"]
languagePcts: [58, 25]
topics: ["doomscrolling", "mindfullness", "procrastination", "screentime", "sleep"]
stars: 23
forks: 1
openIssues: 72
closedIssues: 18
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2024-05-21T08:57:07Z"
lastCommitAt: "2026-10-25T08:40:53Z"
lastReleaseAt: "2026-10-10T08:15:38Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 82
undervaluedScore: 60
maintainers: ["johannesjo", "dependabot[bot]", "dodokr"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8cb7191dc86bdbadad0ac3e46647494955e842b718a7887bb6c9e2f6cb44b2a/johannesjo/minded"
---

# minded

A mindfulness layer that sits between you and the apps and sites that pull you in. minded interrupts doom-scrolling, social-media compulsion, and procrastination with short interventions - a breath, a check-in, a moment to ask whether you actually meant to open this.

- **Browser extension** for Chrome and Firefox (Manifest V3)
- **Android app** (native Kotlin host + shared web UI)
- Shared SolidJS codebase across platforms

  &nbsp;·&nbsp;

## Install

- **Chrome / Edge / Brave** - [Chrome Web Store](https://chromewebstore.google.com/detail/minded/obghjflblojheamhnchaklenibffehjk)
- **Android** - [Google Play](https://play.google.com/store/apps/details?id=com.minded.minded)
- **Firefox** - load `dist/` as an unpacked extension after building locally (AMO listing pending)

Learn more at [minded.today](https://minded.today).

## Develop

Requires Node.js 21+ and npm.

```bash
cd extension
npm install
npm start          # browser-extension dev build (watches files, output in dist/)
npm run startDroid # android dev build (writes into android/app/src/main/assets/web/)
```

Load the extension in Chrome by opening `chrome://extensions`, enabling Developer mode, and pointing…
