---
repo: "Mokomis/open-amalur-android"
name: "open-amalur-android"
description: "A recompilation of the original Re-Reckoning engine with the Veil UI. Android is available now. Windows is planned next."
readmeQualityOk: true
url: "https://github.com/Mokomis/open-amalur-android"
language: "C"
languages: ["C", "C++"]
languagePcts: [59, 30]
stars: 15
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-14T21:42:52Z"
lastCommitAt: "2026-11-22T02:00:18Z"
lastReleaseAt: "2026-11-17T01:34:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 43
maintainers: ["Mokomis"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ff088b1bb802a5eb675bd286d38085eaa8feaa11a16e7d1a729a54ad6d3ec3e/Mokomis/open-amalur-android"
---

Right. Let’s get this out of the way so we don’t waste each other’s time.

This started as a personal experiment. I wanted to see if I could use AI to get *Kingdoms of Amalur: Re-Reckoning* running natively on Android.

Open Amalur is unequivocally an AI-first project. I led the work and used ChatGPT, Claude, and Qwen throughout. If that’s a deal-breaker for you, this is your cue to walk away.

Open Amalur is a recompilation of the original *Re-Reckoning* engine. The translator and runtime are open source. Starting with v0.1.6, the APK includes the prebuilt ARM64 engine and sets up the game offline using files from your copy.

I substantially reworked the engine’s threading to improve how it schedules simulation, rendering, and background jobs across multiple CPU cores.

Android is available now. The Windows version is in testing, and I plan to build a macOS version. Some of the work on threading, graphics, and the interface could also carry over to Linux and iOS if someone wants to take it there.

## About the UI

The UI got a huge overhaul. I loathed the original interface with a passion, and this was my chance to change it. So I did.
