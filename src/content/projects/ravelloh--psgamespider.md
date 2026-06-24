---
repo: "RavelloH/PSGameSpider"
name: "PSGameSpider"
description: "自动爬取所有PlayStationStore中的所有游戏信息，包括封面、描述、价格、评分等，生成网页并索引 # # # Automatically crawl all game infos in all playstationstore, automatically generate web pages and index them"
url: "https://github.com/RavelloH/PSGameSpider"
homepage: "https://psgamespider.ravelloh.top"
language: "JavaScript"
languages: ["JavaScript", "EJS"]
languagePcts: [65, 35]
topics: ["automation", "crawler", "html", "javascript", "python", "python3", "spider", "imgbot", "playstation", "ps"]
stars: 65
forks: 6
openIssues: 0
closedIssues: 4
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2022-05-08T09:36:05Z"
lastCommitAt: "2026-06-24T00:18:44Z"
lastReleaseAt: "2023-03-17T15:11:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 54
maintainers: ["Ravello-H"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/489901059/a0b78df3-1add-4b6c-b3de-18817659da59"
discussionCount: 4
---

# PSGameSpider

> 项目已完全重构！
> 旧版本已存档： https://github.com/ravello-h/PSGameSpider

# PSGameSpider
自动爬取所有PlayStationStore中的所有游戏信息，包括封面、描述、价格、评分等，生成静态页面以供索引，并自动生成价格、评分历史图表。  
包含港、日、韩、欧、美五个区域的所有游戏，且具有多语言支持。

![GitHub repo size](https://img.shields.io/github/repo-size/RavelloH/PSGameSpider?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/RavelloH/PSGameSpider?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/RavelloH/PSGameSpider?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/RavelloH/PSGameSpider?style=for-the-badge)
![GitHub speed](https://img.shields.io/github/commit-activity/m/RavelloH/PSGameSpider?style=for-the-badge)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/RavelloH/PSgameSpider?style=for-the-badge)

在线预览: https://psgamespider.ravelloh.top

## 介绍
基于Github Actions的自动Nodejs爬虫，每日获取Playstation Store中的游戏信息，并构建页面

### 数据总数

![img](https://img.shields.io/github/directory-file-count/RavelloH/PSGameSpider/origin/images?style=for-the-badge)  

 

----
## 使用

### 拉取信息  

```
npm i
node program/fetchAll.js
```

### 构筑页面
```
npm i
node program/webPage.js
node program minimize.js…
