---
repo: "nico579/blink2video"
name: "blink2video"
description: "Manage your Blink cameras from a computer: live view, arming, and a local timestamped archive (day / week / month) of what the Sync Module erases."
readmeQualityOk: true
url: "https://github.com/nico579/blink2video"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["blink", "blink-camera", "ffmpeg", "python", "surveillance", "timelapse", "blinkpy", "home-security", "desktop-app", "self-hosted"]
stars: 58
forks: 9
openIssues: 3
closedIssues: 28
watchers: 4
contributors: 6
recentReleases: 10
createdAt: "2026-08-11T13:27:53Z"
lastCommitAt: "2026-11-06T13:19:37Z"
lastReleaseAt: "2026-08-12T19:04:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 41
maintainers: ["nico579", "joelfarthing", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/17565705d55d0f854c33ab6ff58d70460a7dab8d6d0cef337f19ea456b3e027a/nico579/blink2video"
fundingLinks: ["GITHUB:https://github.com/nico579"]
---

***English** | [Français](https://github.com/nico579/blink2video/blob/HEAD/README.fr.md)*

# blink2video

**Manage your Blink cameras from a computer, and keep what they record.**

Blink is built for the phone: one clip at a time, no archive, no desktop
counterpart. Recordings live on a USB stick in a Sync Module 2 or a microSD card
in a Sync Module XR, erased as it fills up, or in the subscription cloud, which
keeps them for a few weeks.

blink2video is the missing side. A local interface to watch cameras live and arm
detection. And what the phone cannot do at all: fetch clips before rotation
erases them, burn the time into the picture,
and assemble them into one video per day, per week and per month.

Everything runs on your machine. Nothing is sent anywhere.

The web interface listens on `127.0.0.1` only: nothing else on your local
network can reach it, just this machine. It has no login of its own beyond
the Blink account session, so anyone with access to this machine can open it.

## Video walkthrough

**[Watch the English walkthrough on YouTube](https://www.youtube.com/watch?v=6rNqLI9K8Tc)**:
3 min 10 s, with captions and no voice-over. See why blink2video exists,
explore…
