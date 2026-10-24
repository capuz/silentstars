---
repo: "xiadd/tg-wb-trending"
name: "tg-wb-trending"
description: "Automatically crawl Weibo trending topics with GitHub Actions, archive them hourly, and generate a website and API via GitHub Pages"
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
lastCommitAt: "2026-10-24T00:15:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 52
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c40a685431d8ebe965888db7ab747d2512fdab1e2d20fe2f6f6748770b39e57/xiadd/tg-wb-trending"
discussionCount: 2
---

## Recommended ✈️ Airport

https://www.easy2023.com/#/register?code=xUYr0P4Z Personal-use IPLC airport, stable for 2 years

## Description

GitHub Actions automatically crawls Weibo trending topics daily and archives them to the [website](https://xiadd.github.io/tg-wb-trending/), and sends trending messages every hour to the tg channel [微博实时热搜](https://t.me/weibo_hots)

## Deployment

1. Create a bot via [BotFather](https://t.me/BotFather) and get the bot's token

2. Create a channel and set the bot as a channel administrator

3. Get the channel ID; you can use the [GetID](https://t.me/getidsbot) bot to get the channel's ID

4. In the GitHub project settings, set TOKEN and CHANNEL_ID

5. Change docs/public/CNAME to your own domain, and set GitHub Pages to use the gh-pages branch

## Development

1. Create a bot using tg bogfather
2. Create a new channel and set the bot as a channel administrator
3. In the repository, set TOKEN to the telegram bot's token
