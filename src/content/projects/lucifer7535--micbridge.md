---
repo: "Lucifer7535/micbridge"
name: "micbridge"
description: "Voice input for sideloaded apps on Jio set-top boxes (no root)"
readmeQualityOk: true
url: "https://github.com/Lucifer7535/micbridge"
language: "Java"
languages: ["Java"]
languagePcts: [95]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-11-20T12:24:22Z"
lastCommitAt: "2026-11-23T10:16:44Z"
lastReleaseAt: "2026-11-23T10:17:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 26
maintainers: ["Lucifer7535"]
openGraphImageUrl: "https://opengraph.githubassets.com/20140407f6d2d7064097ba81306902127d653a263eae91596f1df0bfa68f5c8b/Lucifer7535/micbridge"
---

# MicBridge

**Voice input for sideloaded apps on Jio set-top boxes.**

MicBridge makes the Jio remote's microphone work in apps that Jio never whitelisted — SmartTube, Nuvio, Kodi, Jellyfin, and anything else you sideload. It needs **no root** and does not modify the system partition.

It was built and tested for the **JHSD200** (Android 11, SDK 30) running production Jio firmware, where the mic key is hard-wired to Jio's voice assistant. Not sure about other models you can try.

*Recorded on a JHSD200: SmartTube home → search → mic key → “hello” typed into the search box → results.*

---

## The problem

On these boxes the remote's mic button only works in Jio/preset apps:
