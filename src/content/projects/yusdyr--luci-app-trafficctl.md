---
repo: "YusDyr/luci-app-trafficctl"
name: "luci-app-trafficctl"
description: "LuCI Traffic Control — per-device monitoring, rate limiting, traffic shaping, and blocking for OpenWrt"
readmeQualityOk: true
url: "https://github.com/YusDyr/luci-app-trafficctl"
language: "Shell"
languages: ["Shell", "ucode"]
languagePcts: [62, 20]
topics: ["openwrt-package"]
stars: 60
forks: 13
openIssues: 3
closedIssues: 32
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-05-25T12:15:16Z"
lastCommitAt: "2026-11-19T11:57:15Z"
lastReleaseAt: "2026-05-28T14:06:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 37
maintainers: ["YusDyr", "github-actions[bot]", "sjurgis"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4c2e5c36d117e3c725a2d059c537264a364dbf0aa2b9231af1c467250098b09/YusDyr/luci-app-trafficctl"
discussionCount: 4
---

# luci-app-trafficctl

Per-device traffic monitoring and control for OpenWrt routers. Monitor connections, limit bandwidth, shape traffic, block internet access, and manage WiFi MAC filtering -- all from a single LuCI page.

---

I built this because I wanted a reliable one-click way to cut my kids off the internet — and found that doing it properly on OpenWrt is surprisingly awkward. Most approaches either miss already-established connections (so the device stays online until the session times out on its own), or require navigating across several LuCI pages just to get something done.

Custom shell scripts solved the immediate problem. But once I had something working, I wanted to actually *see* what was happening on the network — who was online, how much traffic each device was generating, where they were connecting to. So I added a live traffic table.

That opened the door to more: which interface is each device on? What's the TCP state breakdown? What are the top destinations? One thing led to another, and the connection detail view followed.
