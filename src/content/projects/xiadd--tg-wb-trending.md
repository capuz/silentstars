---
repo: "xiadd/tg-wb-trending"
name: "tg-wb-trending"
description: "Github actions自动抓取微博热搜，每小时自动存档，通过github page生成网站和api"
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
lastCommitAt: "2026-06-28T03:11:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 52
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/192a79f3985866ee87927b3a67bccfbd0964e33e6c18a1ea88597984d33a7517/xiadd/tg-wb-trending"
discussionCount: 2
---

## 推荐✈️机场

https://www.easy2023.com/#/register?code=xUYr0P4Z 个人自用IPLC机场，稳定使用2年

## 说明

Github Actions每天自动抓取微博热搜归档 [网站](https://xiadd.github.io/tg-wb-trending/)，并且每小时发送热点消息到tg频道[微博实时热搜](https://t.me/weibo_hots)

## 部署

1. 在[BotFather](https://t.me/BotFather) 创建机器人并获取机器人的token

2. 创建频道并把机器人设置为频道的管理员

3. 获取频道的id, 可以使用[GetID](https://t.me/getidsbot) 机器人获取频道的id

4. 在github的项目设置中设置TOKEN和CHANNEL_ID

5. 将docs/public/CNAME改为自己的域名，github pages设置为gh-pages分支

## 开发

1. 使用tg bogfather创建一个机器人
2. 新建一个频道，并把机器人设置成为频道的管理员
3. 在仓库中设置TOKEN为telegram bot的token
