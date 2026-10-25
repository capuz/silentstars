---
repo: "mizorewww/gdirect"
name: "gdirect"
description: "Rust Google Drive direct downloader using pinned libaria2"
readmeQualityOk: true
url: "https://github.com/mizorewww/gdirect"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
stars: 152
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-10-25T05:52:22Z"
lastCommitAt: "2026-10-25T08:40:28Z"
lastReleaseAt: "2026-10-25T08:12:58Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 30
maintainers: ["mizorewww", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f6a0c484a0bdc90d229bc60bd3b65a2d95bca8eeadf885809675dfc00508614/mizorewww/gdirect"
---

# gdirect

[中文](https://github.com/mizorewww/gdirect/blob/HEAD/README.zh-CN.md) · [Changelog](https://github.com/mizorewww/gdirect/blob/HEAD/CHANGELOG.md)

gdirect browses, downloads, uploads and mounts your Google Drive from the terminal. It finds Google IPs that are reachable from your network and sends Drive traffic straight to them, with multi-connection, resumable downloads.

## How it works

| Traffic | Route |
| --- | --- |
| Drive API, downloads, uploads (`browse`, `ls`, `download`, `upload`) | A scanned Google IP. The hostname and certificate check stay the same; the TLS SNI can be changed with `--sni` / `--no-sni` |
| Sign-in and token refresh (`oauth2.googleapis.com`) | Your normal system network (DNS, proxy) |
| `mount` (rclone) | Your normal system network |

The first transfer command scans candidate IPs automatically and keeps the fastest working one for 24 hours. `login` and `mount` do not scan.

Network requirements:

- Sign-in and token refresh must reach `oauth2.googleapis.com` through your system network. If Google is blocked, you still need a proxy or VPN for this.
- If you use a TUN-mode proxy or VPN (for example Clash/Mihomo TUN), route the scanned Google…
