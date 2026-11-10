---
repo: "g0v/amis-moedict"
name: "amis-moedict"
description: "Amis Moedict dictionary website"
originalDescription: "阿美語萌典網站"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/g0v/amis-moedict"
homepage: "https://amis.moedict.tw"
language: "JavaScript"
languages: ["JavaScript", "SCSS"]
languagePcts: [50, 41]
topics: ["g0v", "moedict", "amis", "nodejs", "cordova"]
stars: 22
forks: 7
openIssues: 2
closedIssues: 5
watchers: 140
contributors: 110
recentReleases: 0
createdAt: "2017-11-19T20:19:32Z"
lastCommitAt: "2026-11-10T11:38:40Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 89
undervaluedScore: 45
maintainers: ["miaoski", "amis-moedict-editor", "ss1111119"]
openGraphImageUrl: "https://opengraph.githubassets.com/210061c6ff1e1738a5a8dc8b3652324fb9cfe563e0e5e0645027eaee0f47e06d/g0v/amis-moedict"
---

This is the source repository for the online and offline query App of the Amis Moedict website <https://amis.moedict.tw>.

The Amis Moedict team's [hackfoldr portal](https://beta.hackfoldr.org/11BRa7Ftnni8Q1NRdjwS378BgBz832UY4uIr-d0J0YpM).

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

For related configuration files, see

* gulpfile.js
* webpack.config.js

## JSON 結構說明

The json file folders are categorized as follows:

* s: 蔡中涵大辭典
*…
