---
repo: "kakaxi-1/zubo"
name: "zubo"
description: "A lightweight script for GitHub Actions that periodically fetches multicast sources and hotel sources (includes upgraded Docker version)"
originalDescription: "适用于GitHub actions的轻量级脚本，定时获取组播源、酒店源(附升级docker版)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kakaxi-1/zubo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 56
forks: 66
openIssues: 6
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-06T14:17:38Z"
lastCommitAt: "2026-09-19T01:16:34Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 67
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/537a169532e1c3c704ad9664f0de1596baac302e4c2cb92ef975d1e7048baa10/kakaxi-1/zubo"
---

# (This repository is lightweight: suitable for GitHub Actions) Periodically scrapes multicast sources and hotel sources

## ⚠️ Note
**Adding new channels or adding local channels or other**  
1. For multicast sources, ensure rtp/province_operator.txt has the required channels, add new ones if they don't exist.
2. Add the new channel name in the channel classification CHANNEL_CATEGORIES in the script, and if needed, make mapping changes in the channel name mapping CHANNEL_MAPPING.
3. WeChat Official Account: Kakashi's TV Room

---

## Multicast Docker Version (Solves Stream Interruption)
1. Pull the image `docker pull kakaxi088/zubo` defaults to pulling the latest version

2. Start the container `docker run -d --name zubo -p 5020:5020 kakaxi088/zubo:latest` If port 5020 is occupied, you can set another port (port)

3. The container takes about 5 minutes to fetch on first startup, enter `docker logs -f zubo` to check the fetch status

4. Add or remove channels through the visual panel `http://device_ip:port`, add mappings

5. After the fetch is complete, subscribe to `http://device_ip:port/zubo.txt`.

---

## Hotel Sources Docker Version
1. Pull the image `docker pull…
