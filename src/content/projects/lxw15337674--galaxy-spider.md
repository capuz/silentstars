---
repo: "lxw15337674/galaxy-spider"
name: "galaxy-spider"
description: "社交媒体爬虫系统（暂时只支持微博）"
url: "https://github.com/lxw15337674/galaxy-spider"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-09T06:27:48Z"
lastCommitAt: "2026-06-28T02:03:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 59
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/c556bd13dd3048ebf6917ce2bbf5276f303bbd88bdb1d283dc43bd91df39941a/lxw15337674/galaxy-spider"
---

# Gallery Spider

A web crawler system designed to collect media content from Weibo topics and user posts using a producer-consumer architecture.

一个使用生产者-消费者架构设计的网络爬虫系统，用于收集微博话题和用户帖子中的媒体内容。

## Features / 功能特点

- Producer-consumer architecture for efficient data collection
- Support for Weibo topic crawling
- Support for Weibo user posts crawling
- Media content (images/videos) downloading and processing
- Database storage using Prisma
- Automated testing with Vitest

## Prerequisites / 环境要求

- Node.js >= 16
- [pnpm](https://pnpm.io/) package manager
- Database (supported by Prisma)

## Installation / 安装

```bash
# Install dependencies / 安装依赖
pnpm install

# Setup database / 初始化数据库
pnpm run migrate
```

## Usage / 使用方法

```bash
# Run producer to collect data / 运行生产者收集数据
pnpm run produce

# Run consumer to process data / 运行消费者处理数据
pnpm run consume

# Run tests / 运行测试
pnpm run test

# Run tests in watch mode / 以监听模式运行测试
pnpm run test:watch
```

## Project Structure / 项目结构

```
src/
├── producers/         # Data collection modules / 数据收集模块
│   ├── weiboTopic/   # Weibo topic crawler / 微博话题爬虫
│   └── weiboperson/  # Weibo user posts crawler / 微博用户帖子爬虫
├── consumer/         # Data…
