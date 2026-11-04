---
repo: "yuanxiawan/cfipv4db"
name: "cfipv4db"
description: "Get the best IP routes for China Mobile, China Telecom, and China Unicom; preferred IPs are updated every 15 minutes!"
originalDescription: "获取最优的移动，电信，联通的ip线路，优选ip每15分钟更新一次！"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yuanxiawan/cfipv4db"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 31
forks: 13
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-29T16:35:59Z"
lastCommitAt: "2026-11-04T11:28:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 51
maintainers: ["yuanxiawan"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b77dc8c9644cbe89081317f50d3cdfae07ceff5d1e93ee87f88533633794a26/yuanxiawan/cfipv4db"
---

# cfipv4db

Get the best IP addresses from China Mobile, China Telecom, and China Unicom every 30 minutes!

Data source: https://github.com/gacjie/cf2dns

Main function: When using cFvless, quickly generate 15 preferred nodes at once. No need to manually enter them one by one each time you log in. Combined with subscriptions, you can get multiple preferred IPs at once!

For convenience, you can directly use the files cfip.txt and cf.txt!

CNchina.txt: this file is a program I ran with local code, suited to China Telecom broadband. If needed, you can call it yourself.

Latest update file for 2026: https://raw.githubusercontent.com/yuanxiawan/cfipv4db/refs/heads/main/high_score_ips.txt
Clean IPs, selected by scanning from my own server and from US-region VPSes, so most of the IPs are from there. The planned update frequency is every 15 minutes (provided only that very high-quality IPs ranking near the top by weight after scanning are included)!
