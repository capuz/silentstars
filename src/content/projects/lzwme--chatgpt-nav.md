---
repo: "lzwme/chatgpt-nav"
name: "chatgpt-nav"
description: "AI chat and drawing online tools navigation site"
originalDescription: "AI 聊天绘图在线工具网址导航"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lzwme/chatgpt-nav"
homepage: "https://lzw.me/x/chatgpt-sites/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai", "chatgpt", "navigation"]
stars: 74
forks: 25
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2024-05-17T06:32:27Z"
lastCommitAt: "2026-10-25T22:11:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["github-actions[bot]", "renxia", "JeremyGDM"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bbdfa54c7029cdc17a852fcc2e3c9f8ebe26c1d4a66f9b2bb53619647ac12b0/lzwme/chatgpt-nav"
---

# ChatGPT/AI Website Navigation Collection List

This repository collects and organizes currently popular, usable online AI applications, for reference by people interested in AI applications and their development.

**Self-recommendations are welcome. Your application will get more exposure.**

Site configuration is set in the `site-info.json` file. Basic format reference (items with `0` do not need to be filled in):

```ts
{
  "https://gpt.demo.com": {
      "type": "",           // Site category
      "source": "recommend",    // Site source
      "star": 3,                // Recommendation star rating, 0-3. 0 marks sites that are accessible but unusable or restricted
      "needLogin": 1,           // Requires registration or account binding login to use
      "desc": "description",
      "title": "title",
      "needPwd": 1,             // Whether a password or account login is required to access
      "needPay": 1,             // Paid app
      "needVerify": 1,          // Requires manual verification of status. -1 means usable and requires no programmatic verification
      "needVPN": 1,             // Requires circumventing internet censorship (VPN)
      "hide": 1,…
