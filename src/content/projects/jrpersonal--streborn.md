---
repo: "JRpersonal/streborn"
name: "streborn"
description: "Cloud-free revival for Bose SoundTouch speakers: internet radio, Spotify Connect, hardware preset buttons, multiroom. The desktop app (Windows, macOS, Linux) installs it onto the speaker over your home network; no Bose cloud, no account. Independent open source project, donation funded, MIT license."
readmeQualityOk: true
url: "https://github.com/JRpersonal/streborn"
homepage: "https://st-reborn.de"
language: "Go"
languages: ["Go"]
languagePcts: [69]
topics: ["bose", "bose-soundtouch", "cloud-free", "dlna", "e-waste", "golang", "home-automation", "internet-radio", "multiroom", "right-to-repair"]
stars: 68
forks: 10
openIssues: 59
closedIssues: 167
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-05-15T15:16:33Z"
lastCommitAt: "2026-08-28T15:34:04Z"
lastReleaseAt: "2026-05-20T20:43:58Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "community_hub"]
healthScore: 95
undervaluedScore: 36
maintainers: ["JRpersonal", "dependabot[bot]", "martinh87"]
openGraphImageUrl: "https://opengraph.githubassets.com/a61662c5214be006aa7bf9fd91195f28e2905a70dbbafd60d3e700e4a79a23bf/JRpersonal/streborn"
fundingLinks: ["GITHUB:https://github.com/JRpersonal", "KO_FI:https://ko-fi.com/streborn", "CUSTOM:https://paypal.me/JR31337"]
discussionCount: 80
---

# STR, SoundTouch Reborn

**Cloud free firmware project for Bose SoundTouch speakers.**

</p>

</p>

Bose discontinued their SoundTouch cloud service in February 2026 and switched the servers off for good on 6 May 2026. STR keeps the speakers usable: a small Go agent is installed onto the speaker itself, stands in for the discontinued cloud locally, and brings back internet radio, Spotify, your own media library, multiroom, and the hardware preset buttons. **The install runs over your home network from the desktop app**, so no USB stick and no second device are needed. The agent persists on the speaker and starts with it on every boot.

## How it works in one paragraph

The desktop app finds the speaker on the network, reaches it on its setup port and copies the agent into the speaker's persistent storage. From then on it starts automatically every time the speaker powers on. A USB stick is still supported as a fallback and recovery path, but it is no longer the normal way to install. It hosts a stand-in for the Bose cloud on the loopback interface and redirects the relevant DNS names so the speaker treats it as the real cloud. Playback then happens over UPnP AVTransport on the…
