---
repo: "xiadd/tg-wb-trending"
name: "tg-wb-trending"
description: "Automatically scrapes Weibo trending searches via GitHub Actions, archives them hourly, and generates a website and API through GitHub Pages."
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
lastCommitAt: "2026-10-31T02:00:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 52
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/84b01a535dc1de89421db51a47fe4489c0aa1238f2769362f609655aaa707d24/xiadd/tg-wb-trending"
discussionCount: 2
---

## Recommended✈️ Airport

https://www.easy2023.com/#/register?code=xUYr0P4Z Personal-use IPLC airport, stable for 2 years

## Description

GitHub Actions automatically scrapes Weibo trending searches daily and archives them to [website](https://xiadd.github.io/tg-wb-trending/), and sends hot topic messages to the tg channel [微博实时热搜](https://t.me/weibo_hots) every hour

## Deployment

1. Create a bot on [BotFather](https://t.me/BotFather) and get the bot's token

2. Create a channel and set the bot as a channel administrator

3. Get the channel's id; you can use the [GetID](https://t.me/getidsbot) bot to get the channel id

4. Set TOKEN and CHANNEL_ID in the GitHub project settings

5. Change docs/public/CNAME to your own domain, and set GitHub Pages to the gh-pages branch

## Development

1. Use tg bogfather to create a bot
2. Create a new channel and set the bot as a channel administrator
3. Set TOKEN in the repository to the telegram bot's token
