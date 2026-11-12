---
repo: "maxlglky/LingGuangBot-QQ"
name: "LingGuangBot-QQ"
description: "Automatically forwards tweets from an X (Twitter) account to QQ groups or QQ private chats, in a card that looks like QQ's built-in tweet cards"
originalDescription: "把 X（Twitter）账号的推文自动搬到 QQ 群 / QQ 私聊，长得像 QQ 自带的推文卡片"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/maxlglky/LingGuangBot-QQ"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["javascript", "nodejs", "twitter", "x", "mit-license", "qq"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-29T15:03:42Z"
lastCommitAt: "2026-11-12T05:40:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["maxlglky"]
openGraphImageUrl: "https://opengraph.githubassets.com/d63df022c7ec6e25daa130015cd62b3a1b052f7071f8c33ee12a98238e3aba34/maxlglky/LingGuangBot-QQ"
---

# x2qq

> Automatically forwards new tweets from an X (Twitter) account to a QQ group or QQ private chat. The output is a tweet card that closely resembles QQ's native design.

Want to see a particular account's updates right away without constantly refreshing X? Hand it off to x2qq. By default it checks every 5 minutes and sends any new tweets to your group or private chat.

**The card reproduces these details** (all styled after the X client):

| Element | Effect |
| --- | --- |
| Avatar + blue verified badge | `# ![头像] **账号名** ![认证]` |
| Retweet banner | `## **⇄ 谁 已转帖**` + `> 转帖于 …` |
| Reply marker | `**↩ 回复 谁**`, followed by the original tweet being replied to (indented quote block) |
| Quoted tweet | `## 原推作者` + body + images, the whole block indented with `>` |
| Images | Real width and height, multiple images side by side. Can also be changed to image messages outside the card (see `imageMode`) |
| @mentions / #hashtags | The `@someone` and `#tag` in the body become clickable links, opening `https://x.com/某人` and `https://x.com/hashtag/标签` respectively (same for main tweets, retweets, quotes, and replies) |
| Image person tags | Below the image: `> X账号1 及另外4人` |
| External…
