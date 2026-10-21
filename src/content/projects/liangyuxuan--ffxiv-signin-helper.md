---
repo: "LiangYuxuan/ffxiv-signin-helper"
name: "ffxiv-signin-helper"
description: "Automated check-in script for FF14 China server-related activities"
originalDescription: "FF14国服相关签到自动化脚本"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LiangYuxuan/ffxiv-signin-helper"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-05T06:32:17Z"
lastCommitAt: "2026-10-21T23:36:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 52
maintainers: ["renovate[bot]", "LiangYuxuan"]
openGraphImageUrl: "https://opengraph.githubassets.com/249e42452759494b92db38513c0b2d82bc49df6a77fc8d217d0fd6a71772c3e0/LiangYuxuan/ffxiv-signin-helper"
---

# FFXIV SignIn Helper

Automated check-in script for FF14 China server-related activities

## Features

### 石之家 (Rising Stones)

- [x] Daily check-in
- [x] Claim check-in rewards
- [x] Post 5 comments on the [water thread](https://ff14risingstones.web.sdo.com/pc/index.html#/post/detail/9365)
- [x] Publish 5 posts and delete them

## Obtaining Cookies

The program tries to obtain Cookies from the following sources, in order:
  * `COOKIES` in `.env`
  * `COOKIES` environment variable
  * A configured [CookieCloud](https://github.com/easychen/CookieCloud) service
  * Contents of the `.cookies` file

### Getting Existing Cookies

Open the developer tools, select any `apiff14risingstones.web.sdo.com` request in the Network tab, then find Cookie in the request headers.

### Getting New Cookies

After logging into 石之家 with the same type of client, the old login session becomes invalid. Obtaining new Cookies will invalidate the old desktop client login session.

```bash
# Docker
docker run --name ffxiv rhyster/ffxiv-signin-helper:latest pnpm start:cookies && docker cp ffxiv:/usr/src/app/.cookies ffxiv.cookies && docker rm -f ffxiv
# Node
pnpm install
pnpm start:cookies
```

After…
