---
repo: "mjoe/sharebeacon"
name: "sharebeacon"
description: "Reliable macOS SMB mounts and Finder sidebar favorites"
readmeQualityOk: true
url: "https://github.com/mjoe/sharebeacon"
homepage: "https://mjoe.github.io/sharebeacon/"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["automount", "finder", "homebrew", "macos", "menu-bar-app", "nas", "smb", "swift"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-08-07T07:13:42Z"
lastCommitAt: "2026-10-29T10:21:26Z"
lastReleaseAt: "2026-10-29T10:21:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 67
maintainers: ["mjoe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1326333394/b61b68a2-fbb2-474c-a201-353ac7b47752"
fundingLinks: ["GITHUB:https://github.com/mjoe"]
---

# ShareBeacon

ShareBeacon is a macOS menu-bar application for macOS 26 (Tahoe) and newer,
including macOS 27, that keeps SMB shares available over LANs, Tailscale,
WireGuard, OpenVPN, and other routed networks. It stores credentials in the login
Keychain and is designed to restore Finder sidebar favorites after a share
reconnects.

## Features

- Multiple independently configured SMB shares
- Per-share automatic reconnect or on-demand mounting
- Shared Keychain credentials reused across shares
- Serialized mount operations and endpoint readiness checks
- Automatic recovery after login, network changes, sleep/wake, and disconnects
- Sleep-aware: pauses all monitoring and mount activity while the Mac sleeps
- Network-aware: pauses checks and repairs during an outage, then waits for a stable path
- Credentials kept out of URLs, configuration, process arguments, and logs
- User-owned mount points by default, without requiring administrator privileges; custom paths such as `/Volumes` are supported
- Settings window with Shares, General, and Log tabs (live log with level filter)
- Finder sidebar favorite repair with a safe no-op fallback
- Per-share Finder favorite preference with a…
