---
repo: "Jinbigbig/jinbet"
name: "jinbet"
description: "Sporttery football betting record tool - odds updated automatically every day"
originalDescription: "竞彩足球投注记录工具 - 赔率每日自动更新"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Jinbigbig/jinbet"
homepage: "https://jinbigbig.github.io/jinbet/"
language: "HTML"
languages: ["HTML"]
languagePcts: [81]
stars: 6
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-24T09:01:32Z"
lastCommitAt: "2026-10-24T08:07:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 44
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcd7eb24e9c1b76e950659e5fb7cbeb55ceca418bee7a29259d28aac188ff135/Jinbigbig/jinbet"
---

# 🏆 Sporttery Football Betting Record Tool

A tool for recording and analyzing Sporttery football bets for the World Cup and major leagues. It supports multiple bet types, including match result (win/draw/loss), handicap, correct score, total goals, and half-time/full-time.

## 🌐 Online Access

**👉 https://jinbigbig.github.io/jinbet/**

> Odds are automatically fetched from NetEase Sports and updated every day at 12:00 and 18:00 Beijing time

## Features

- 📊 **Multiple bet types**: Win/Draw/Loss / Handicap / Correct Score / Total Goals / Half-Time/Full-Time
- 💰 **Profit and loss statistics**: Shows win rate and profit/loss for each bet type in real time
- 🔄 **Automatic odds**: GitHub Actions updates odds automatically at 12:00 and 18:00 every day
- 📱 **Responsive**: Works on phones and desktop computers
- 💾 **Local storage**: Bet data is saved in the browser locally (data is separate for each device)

## Directory Structure

```
jinbet/
├── index.html              # Main page (single-file app)
├── odds_data.json          # Odds data (updated automatically by CI)
├── prediction.html         # AI prediction page
├── predictions/            # AI prediction archive
├──…
