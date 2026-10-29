---
repo: "yeager/wifi-analyzer"
name: "wifi-analyzer"
description: "Wi-Fi signal analyzer and channel scanner — GTK4/Adwaita"
readmeQualityOk: true
url: "https://github.com/yeager/wifi-analyzer"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 1
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-02-18T09:06:03Z"
lastCommitAt: "2026-10-29T10:36:55Z"
lastReleaseAt: "2026-09-21T16:41:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 71
maintainers: ["yeager", "AlexanderVanhee"]
openGraphImageUrl: "https://opengraph.githubassets.com/3be1d76d5a873d479e448a9ffe3da6218fac209dbe79f86b1a03217086ed4d9b/yeager/wifi-analyzer"
---

# WiFi Analyzer

Wi-Fi signal analyzer, channel planner and local connection diagnostics tool.

Built with GTK4/Adwaita. Part of the [Danne L10n Suite](https://github.com/yeager/debian-repo).

## Features

- Scan access points through NetworkManager D-Bus; no privileged shell command is required.
- Filter results by network name, BSSID, channel or security type.
- Inspect 2.4, 5 and 6 GHz bands with a channel-overlap graph.
- Navigate the channel graph with Left/Right and Home/End, filter channels with Enter/Space, and hear channel selections read by screen readers.
- Show NetworkManager's announced AP bandwidth when available, with a clearly
  marked estimate as a fallback.
- Mark 5 GHz DFS channels. Their availability depends on the local regulatory domain.
- Recommend less congested channels from observed signal overlap.
- Sort results by signal, channel, or security and group repeated SSIDs by access-point count.
- Export visible, filtered results as CSV, JSON, anonymized JSON or an HTML
  diagnostic report, with a user-selected file name and destination.
- Keep up to 100 local scan summaries for future history views. Scan data never leaves the device and can be cleared from…
