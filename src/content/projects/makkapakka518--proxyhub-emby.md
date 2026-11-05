---
repo: "MakkaPakka518/ProxyHub_Emby"
name: "ProxyHub_Emby"
description: "A Cloudflare-based Emby reverse-proxy management panel."
originalDescription: "基于Cloudflare搭建的emby反代管理面板"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/MakkaPakka518/ProxyHub_Emby"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 175
forks: 36
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-01T22:17:09Z"
lastCommitAt: "2026-11-05T14:05:10Z"
lastReleaseAt: "2026-10-20T23:26:54Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 30
maintainers: ["MakkaPakka518"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae01e173c92938a2f5f8bf91421ba573a8a85e87076b0dcdaf340f009fadfb66/MakkaPakka518/ProxyHub_Emby"
---

# 𝙈𝙖𝙠𝙠𝙖𝙋𝙖𝙠𝙠𝙖 Emby Reverse Proxy Panel

A management panel for Emby reverse-proxy nodes, deployed on Cloudflare Workers. It centrally manages reverse-proxy nodes for multiple Emby origin servers, and supports adding, editing, and deleting nodes, switching proxy modes, global speed testing, DNS management, traffic statistics, and a data dashboard. It also includes a **subscriber read-only mode**, **node application review**, and a **multi-level permission system**.

It is a single-file Worker: the login page and admin panel are all in one `worker.js`. Copy and paste to deploy; no build step is needed.

---

## Before You Start

- **Channel**: [𝙈𝙖𝙠𝙠𝙖𝙋𝙖𝙠𝙠𝙖’𝙨 𝘾𝙝𝙖𝙣𝙣𝙚𝙡](https://t.me/MakkaPakkaOvO)
- **Group**: [𝙈𝙖𝙠𝙠𝙖𝙋𝙖𝙠𝙠𝙖’𝙨 𝙂𝙧𝙤𝙪𝙥](https://t.me/MakkaPakkaGroupO_O)
- If you have questions, ask in the group. For a detailed illustrated tutorial, reply with the keyword 教程 (tutorial) in the group.
- **If your server does not allow reverse proxying, do not reverse proxy it**, as it affects other users' experience.

---

## Preparation

1. **Cloudflare account**
   [Cloudflare Dashboard | Manage Your Account](https://dash.cloudflare.com/sign-up) (if…
