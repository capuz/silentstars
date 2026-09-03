---
repo: "Hikari-Tsai/software-salary"
name: "software-salary"
description: "台灣軟體工程師薪水分布與求職洞察"
readmeQualityOk: true
url: "https://github.com/Hikari-Tsai/software-salary"
homepage: "https://hikari-tsai.github.io/software-salary/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [56, 25]
stars: 68
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-08-27T11:31:32Z"
lastCommitAt: "2026-09-03T08:13:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 25
maintainers: ["Hikari-Tsai"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ab0e01fc288c924b05ad7b8ce18417edf44a921cec2840ee7e58ad0f07fa736/Hikari-Tsai/software-salary"
---

# 台灣軟體工程師薪水分布

這是一個整理台灣軟體工程師匿名薪資回報的互動網站。你可以依年資、職務和公司類型比較薪資，先確認自己的大致位置。

網站也提供公司排行、年資薪資估算和面試問題，方便求職或談薪時查閱。

## 線上網站

- [GitHub 前端網站](https://hikari-tsai.github.io/software-salary/)

## 主要功能

- 顯示總年薪、月底薪與工時的市場百分位
- 依年資、職務及公司類型比較薪資中位數與 P75
- 依工作年資估算薪資中位數與 P75
- 綜合薪資、爽度、工作強度、工時和樣本數排列公司名單
- 整理不同年資階段的求職重點與面試問題
- 使用 Anime.js，在數字與圖表進入畫面時播放動畫
- 支援桌面與手機版面，也會遵循系統的「減少動態效果」設定

## 資料來源

資料來自：

- [DCard 科技業版－軟體工程師調查表](https://docs.google.com/spreadsheets/d/1GMYKVBxRlMv6oNVNzpXYoLUSyT8ZnLEjGcRbn0b4KsA/edit?gid=788239997#gid=788239997)
- [自行調查匿名表單](https://docs.google.com/spreadsheets/d/134kDFDnJIBFJLr1HEHktWnlZ015ATELy8YwahHE3ZDo/edit?usp=sharing)

- 原始資料：844 筆
- 薪資分析樣本：709 筆
- 工時統計樣本：659 筆
- 資料更新：2026 年 8 月 31 日 16:49
- 金額單位：新台幣萬元

資料由使用者匿名填寫，可能受到樣本組成、欄位理解和填寫時間影響。這些數字適合用來比較相對差異和大致區間，不能直接代表某個職缺的合理薪資。

## 技術組成

- React 19
- TypeScript
- vinext / Vite
- Tailwind CSS
- Anime.js
- GitHub Actions 與 GitHub Pages

## 主要檔案結構

```text
software-salary/
├── app/
│   ├── page.tsx                 # 首頁內容、圖表與互動介面
│   ├── layout.tsx               # 全站版型、SEO 與社群分享設定
│   ├── globals.css              # 全站樣式與響應式版面
│   ├── company-rankings.ts      # 公司名稱統一與排行資料
│   ├── salary-interpolation.ts  # 年資薪資的線性內插計算
│   └──…
