---
repo: "kakaxi-1/zubo"
name: "zubo"
description: "A lightweight script for GitHub Actions that periodically fetches multicast sources and hotel sources (with upgraded Docker version)"
originalDescription: "适用于GitHub actions的轻量级脚本，定时获取组播源、酒店源(附升级docker版)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kakaxi-1/zubo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 61
forks: 65
openIssues: 6
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-06T14:17:38Z"
lastCommitAt: "2026-11-07T13:55:36Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 67
undervaluedScore: 51
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0df909786081bc569a9e74b48c16c2b9fb5f5ccf4464f9fff360736bb41be78e/kakaxi-1/zubo"
---

# (This repository is lightweight, for GitHub Actions) Periodically scrape multicast sources and hotel sources

## ⚠️ Notes
**Adding new channels, new local channels, or other changes**  
1. Make sure `rtp/省份运营商.txt` contains the required channels for the multicast source; add them if they are missing.
2. In the script, add new channel names to CHANNEL_CATEGORIES in the channel categories. If needed, make mapping changes in CHANNEL_MAPPING under channel name mapping.
3. WeChat official account (WV): 卡卡西的电视房 (Kakaxi's TV Room)

---

## Multicast Docker version (fixes stream interruptions)
1. Pull the image `docker pull kakaxi088/zubo`. It pulls the latest version by default.

2. Start the container with `docker run -d --name zubo -p 5020:5020 kakaxi088/zubo:latest`. If port 5020 is in use, set another port (port).

3. On the first start, the container takes about 5 minutes to run the initial scrape. To check scraping status, run `docker logs -f zubo`.

4. Add or remove channels and add mappings through the web panel at `http://载具ip:port`.

5. After scraping completes, subscribe to `http://载具ip:port/zubo.txt`.

---

## Hotel source Docker version
1. Pull the image `docker pull…
