---
repo: "edrisranjbar/coolping"
name: "coolping"
description: "A fun, modern alternative to ping. ping but cooler :)"
readmeQualityOk: true
url: "https://github.com/edrisranjbar/coolping"
homepage: "https://edrisranjbar.github.io/coolping"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["linux", "networking", "terminal"]
stars: 17
forks: 3
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-15T06:45:27Z"
lastCommitAt: "2026-08-26T04:15:21Z"
lastReleaseAt: "2026-05-09T07:24:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 63
undervaluedScore: 36
maintainers: ["edrisranjbar"]
openGraphImageUrl: "https://opengraph.githubassets.com/89d3d013ed1501f4707e6276555def9c0e7647f1d925f3b300fb042e5b477328/edrisranjbar/coolping"
---

# 🛰️ CoolPing

CoolPing is a stylish, user-friendly alternative to the classic `ping` command. It provides emoji-based feedback, colorized output, continuous monitoring, and convenient logging, making network diagnostics more fun and informative.

## 📦 Core Features

- **Emoji Feedback:** Instantly see success ✅ or failure ❌ for each ping.
- **Color Output:** Colorful terminal output for easy reading (auto-disabled on non-TTY, with `--color never`, or when `NO_COLOR` is set).
- **Custom Packet Count:** Specify the number of pings with `--count N`.
- **RTT Color Coding:** Latencies are colored green (<50ms), yellow (<150ms), or red.
- **Continuous Monitoring:** Live dashboard with loss graph, RTT sparkline, jitter, quality rating, and uptime.
- **Logging:** Optional logging to `~/coolping.log` with `--log` (works in both modes).
- **No-Emoji Mode:** Compatible with legacy terminals using `--no-emoji`.

## 🚀 Installation

### Debian/Ubuntu

```bash
# The .deb file is included in this repository—no build needed!
sudo dpkg -i coolping_1.7_all.deb
```

#### Or install directly from GitHub (no git required)

```bash
wget…
