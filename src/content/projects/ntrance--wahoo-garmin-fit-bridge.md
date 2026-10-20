---
repo: "ntrance/wahoo-garmin-fit-bridge"
name: "wahoo-garmin-fit-bridge"
description: "Self-hosted Docker bridge that automatically syncs Wahoo and iGPSPORT FIT activities to Garmin Connect"
readmeQualityOk: true
url: "https://github.com/ntrance/wahoo-garmin-fit-bridge"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [68, 31]
topics: ["docker", "fit-file", "garmin-connect", "igpsport", "self-hosted", "wahoo"]
stars: 12
forks: 4
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 6
createdAt: "2026-07-26T10:37:55Z"
lastCommitAt: "2026-10-20T08:48:55Z"
lastReleaseAt: "2026-10-20T08:07:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 64
undervaluedScore: 52
maintainers: ["ntrance", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/afeb8c5135935b8d0780dc5c6fb8529d1eb83de9252d36d31517ca6680a71aa0/ntrance/wahoo-garmin-fit-bridge"
---

---

**FIT to Garmin Bridge** is an easy-to-use, self-hosted tool designed for cyclists who record activities using non-Garmin bike computers or indoor virtual training apps, but still want their rides in **Garmin Connect** with full **Training Load**, **VO2 Max**, and **Watch Physio TrueUp** sync!

---

## 🚴 Supported Platforms

You can enable any combination of sources. The bridge runs them together in the background automatically:

| Platform / Source | Connection Type | How It Works |
| :--- | :--- | :--- |
| **Wahoo / ELEMNT** | Automatic (Dropbox) | Automatically syncs rides shared to your Dropbox from the ELEMNT app. |
| **iGPSPORT Cloud** | Automatic (Cloud API) | Automatically polls and syncs newly completed rides from your iGPSPORT account. |
| **COROS Cloud** (Watches & DURA) | Automatic (Cloud API) | Automatically polls and syncs activities from your COROS account. |
| **Hammerhead Karoo** | Automatic (Dropbox) | Syncs rides directly to Dropbox via Wi-Fi. |
| **Zwift / MyWhoosh / ROUVY / TPVirtual** | Automatic (PC/Mac Link) | Automatically detects and syncs indoor rides the moment you click "End Ride". |
| **Local Folder / NAS** | Automatic (Folder Watch) | Map any…
