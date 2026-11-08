---
repo: "lubin776/tvbox-api-backup"
name: "tvbox-api-backup"
description: "TVBox API automated backup project, including interface scraping, live stream source aggregation, and static front-end navigation, built on Python + GitHub Actions, with all configuration kept external."
originalDescription: "TVBox API 自动化备份项目，包含接口抓取、直播源聚合、静态前端导航，基于 Python + GitHub Actions，配置全外置。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lubin776/tvbox-api-backup"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [57, 30]
stars: 426
forks: 245
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-09-14T17:02:56Z"
lastCommitAt: "2026-11-08T14:13:47Z"
status: "newborn"
tags: ["fork_magnet"]
healthScore: 70
undervaluedScore: 25
maintainers: ["lubin776", "github-actions[bot]", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/494fa1120cb8cf2f8f603c0dae5f298399339b3b8aed7c8eca25e0e150f757dd/lubin776/tvbox-api-backup"
---

# Mass Interface Relay and Backup Site

A TVBox interface relay and backup project built on GitHub Actions automation and static hosting. Three script sets run on a daily schedule to fetch, parse, and aggregate various TVBox interfaces and live stream sources. Outputs are automatically committed back to the repository, and the front-end page reads and displays them in real time. It supports one-click copy, search, and multi-domain backup.

---

## Table of Contents

- [Project Overview](#项目简介)
- [Online Access](#在线访问)
- [Repository Structure](#仓库结构)
- [Automated Workflows](#自动化工作流)
- [Detailed Explanation of the Three Scripts](#三个脚本详解)
- [Front-End Page](#前端页面)
- [Configuration File Description](#配置文件说明)
- [Running Locally](#本地手动运行)
- [Deploying to Cloudflare Pages](#部署到-cloudflare-pages)
- [Common Issues and Pitfalls](#常见问题与避坑)
- [Configuration Change Quick Reference](#配置修改速查)
- [One-Click Verification Checklist](#一键校验清单)
- [Disclaimer](#声明)

---

## Project Overview

This project batch-relays, backs up, and aggregates publicly available TVBox interface resources from the internet. GitHub Actions fetches them on a schedule and commits them to the repository, and a statically…
