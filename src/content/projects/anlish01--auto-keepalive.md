---
repo: "anlish01/Auto-Keepalive"
name: "Auto-Keepalive"
description: "Auto-Keepalive Pro - An automated keep-alive monitoring system deployed based on Cloudflare Workers"
originalDescription: "Auto-Keepalive Pro——一个基于Cloudflare Workers部署的自动化保活监控系统"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/anlish01/Auto-Keepalive"
homepage: "https://alive-demo.gcx.indevs.in/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 49
forks: 18
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-23T02:57:08Z"
lastCommitAt: "2026-07-06T07:04:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 29
maintainers: ["anlish01"]
openGraphImageUrl: "https://opengraph.githubassets.com/0105b15dac41d7f4c89845151da3efe7010b32c5d97bc1816416cff1a05187d8/anlish01/Auto-Keepalive"
---

# 🌐 Cloudflare Workers Automated Keep-Alive Monitoring System (Auto-Keepalive Pro)

* A lightweight, serverless site keep-alive and status monitoring panel built on Cloudflare Workers and KV storage. No additional server deployment is required, and you can achieve minute-level multi-site monitoring and multi-channel alerts using Cloudflare's free quota.
* Frontend panel [online demo test](https://alive-demo.gcx.indevs.in/)
  Test username: admin, password: admin

---

## 📖 Project Origin and Design Intent

When experimenting with various free serverless applications, automated sign-in scripts, or monitoring nodes, one often encounters the issue of containers being forcibly suspended or entering deep sleep due to a lack of external traffic for an extended period. The birth of this project is precisely to perfectly solve this pain point.

1. **Origin and Core Value: Efficient Use of CF's 5 Free Cron Quotas**  
   The initial concept of this project was to help me personally keep alive my **69 Cloud Sign-in**, **Koyeb Free Node**, and **NodeWarden Backend** through scheduled access. Some may wonder: "Aren't the 69 Cloud Sign-in and NodeWarden projects already equipped with…
