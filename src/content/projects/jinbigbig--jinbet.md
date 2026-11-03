---
repo: "Jinbigbig/jinbet"
name: "jinbet"
description: "Jingcai football betting record tool - odds automatically updated daily"
originalDescription: "竞彩足球投注记录工具 - 赔率每日自动更新"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Jinbigbig/jinbet"
homepage: "https://jinbigbig.github.io/jinbet/"
language: "HTML"
languages: ["HTML"]
languagePcts: [82]
stars: 6
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-24T09:01:32Z"
lastCommitAt: "2026-11-03T10:52:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 44
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb355b6415fea7f5e51abc6d33ce822d4bec6e3743ffeba4382e53af4a3e7d10/Jinbigbig/jinbet"
---

# 🏆 Jingcai Football Betting Record Tool

A tool for recording and analyzing Jingcai football bets for the World Cup and major leagues. It supports win/draw/lose, handicap, correct score, total goals, and half-time/full-time bet types.

## 🌐 Online Access

**👉 https://jinbigbig.github.io/jinbet/**

> Odds are automatically scraped from NetEase Sports and updated daily at 12:00 and 18:00 Beijing time

## Features

- 📊 **Multiple bet types**: Win/Draw/Lose / Handicap / Correct Score / Total Goals / Half-Time/Full-Time
- 💰 **Profit and loss statistics**: Displays win rate and profit/loss for each bet type in real time
- 🔄 **Automatic odds**: GitHub Actions automatically updates at 12:00 and 18:00 daily
- 📱 **Responsive**: Works on mobile and desktop
- 💾 **Local storage**: Bet data is saved in the browser locally (data is separate across devices)

## Directory Structure

```
jinbet/
├── index.html              # Main page (single-file app)
├── odds_data.json          # Odds data (auto-updated by CI)
├── prediction.html         # AI prediction page
├── predictions/            # AI prediction results archive
├── version.txt             # Version number
├── update_odds_net.py…
