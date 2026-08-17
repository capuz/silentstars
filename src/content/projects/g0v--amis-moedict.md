---
repo: "g0v/amis-moedict"
name: "amis-moedict"
description: "阿美語萌典網站"
readmeQualityOk: true
url: "https://github.com/g0v/amis-moedict"
homepage: "https://amis.moedict.tw"
language: "JavaScript"
languages: ["JavaScript", "SCSS"]
languagePcts: [50, 41]
topics: ["g0v", "moedict", "amis", "nodejs", "cordova"]
stars: 22
forks: 8
openIssues: 2
closedIssues: 5
watchers: 140
contributors: 109
recentReleases: 0
createdAt: "2017-11-19T20:19:32Z"
lastCommitAt: "2026-08-17T04:20:57Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 89
undervaluedScore: 45
maintainers: ["amis-moedict-editor", "miaoski"]
openGraphImageUrl: "https://opengraph.githubassets.com/16b8863f0b02124d81b0327b424a58941877f5d6c1ebb8e7e4b33319f4abdd0a/g0v/amis-moedict"
---

這是阿美語萌典網站 <https://amis.moedict.tw> 線上及離線查詢 App 的源碼庫。

阿美語萌典團隊的 [hackfoldr 傳送門](https://beta.hackfoldr.org/11BRa7Ftnni8Q1NRdjwS378BgBz832UY4uIr-d0J0YpM)。

## About 'Amis moedict

’Amis/Pangcah Dictionary, an online ’Amis to Chinese / English / French dictionary, was established with the power of citizens to preserve the once considered soon-to-disappear indigenous language.

In Taiwan, there are 16 different indigenous nations. Though their languages never developed into writing system, detailed records have been made with the efforts of missionaries and cultural heritage inheritors.

The ’Amis/Pangcah Dictionary is the first example of an digitized, online indigenous language dictionary. We hope that others can develop their own online dictionaries, too.

# Web 開發

## 環境需求

* Node.js: > v12
* Gulp: v4

## 安裝開發環境

```sh
git clone git@github.com:g0v/amis-moedict.git
npm install
npm install gulp-cli --global
make amis
```

## 本機運行

```
make dev
```

相關設定檔案請看

* gulpfile.js
* webpack.config.js

## JSON 結構說明

json 檔案資料夾分類如下：

* s: 蔡中涵大辭典
* * prefix: `#:`
* p: 方敏英字典
* * prefix: `#~`
* m: 潘世光、博利亞阿法字典
* * prefix: `#!`

### JSON 完整欄位

以下兩段是等義的，因為維護者比較習慣看註解格式，但是 TypeScript 電腦可讀，所以兩種格式都附上。…
