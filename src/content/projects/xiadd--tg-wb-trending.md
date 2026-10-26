---
repo: "xiadd/tg-wb-trending"
name: "tg-wb-trending"
description: "Automatically crawls Weibo hot search with GitHub Actions, archives it every hour, and publishes a website and API via GitHub Pages"
originalDescription: "Github actions自动抓取微博热搜，每小时自动存档，通过github page生成网站和api"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xiadd/tg-wb-trending"
homepage: "https://weibo.xiadd.me"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["weibo"]
stars: 84
forks: 32
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-12-26T07:35:27Z"
lastCommitAt: "2026-10-26T03:03:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 52
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b99620a107e31c12a0d19ef7fc2fb5052f0de8f657af8b565512b3aacc187698/xiadd/tg-wb-trending"
discussionCount: 2
---

## Recommended✈️ Airport

https://www.easy2023.com/#/register?code=xUYr0P4Z Personal-use IPLC airport, stable for 2 years

## Description

GitHub Actions automatically crawls Weibo hot search daily and archives it to the [website](https://xiadd.github.io/tg-wb-trending/), and sends hot topic messages to the tg channel [Weibo Real-time Hot Search](https://t.me/weibo_hots) every hour.

## Deployment

1. Create a bot via [BotFather](https://t.me/BotFather) and get the bot's token

2. Create a channel and set the bot as the channel administrator

3. Get the channel ID. You can use the [GetID](https://t.me/getidsbot) bot to get the channel ID

4. In the GitHub project settings, set TOKEN and CHANNEL_ID

5. Change docs/public/CNAME to your own domain, and set GitHub Pages to the gh-pages branch

## Development

1. Use tg bogfather to create a bot
2. Create a new channel and set the bot as its administrator
3. In the repository, set TOKEN to the Telegram bot's token
