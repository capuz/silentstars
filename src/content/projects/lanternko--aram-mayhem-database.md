---
repo: "Lanternko/ARAM-Mayhem-Database"
name: "ARAM-Mayhem-Database"
description: "查詢 大亂鬥 的英雄和增幅裝置！"
readmeQualityOk: true
url: "https://github.com/Lanternko/ARAM-Mayhem-Database"
homepage: "https://lanternko.github.io/ARAM-Mayhem-Database/"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 36
forks: 3
openIssues: 4
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-13T01:05:37Z"
lastCommitAt: "2026-08-14T05:13:56Z"
lastReleaseAt: "2026-05-26T08:45:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 41
maintainers: ["Lanternko"]
openGraphImageUrl: "https://opengraph.githubassets.com/40671b27cd2f434c7841854dbddcaec4e25a8bcc399761136dddee78b5012b62/Lanternko/ARAM-Mayhem-Database"
discussionCount: 2
---

# arammeta

**League of Legends ARAM 大亂鬥（Mayhem）資料工具**

[開啟 arammeta](https://arammeta.com/) · [English](https://arammeta.com/en/) · [簡體中文](https://arammeta.com/zh-CN/)

arammeta 將實際對局整理成英雄、增幅與陣容資料，協助玩家比較選項。網站顯示的是特定版本與樣本範圍內的歷史統計，不是單場勝負保證。

## 網站怎麼用

- [英雄榜](https://arammeta.com/)：搜尋或篩選英雄，查看 Tier、調整後勝率、樣本數、推薦增幅與裝備。
- [增幅榜](https://arammeta.com/augments/)：依稀有度與類型比較增幅，點開後查看最適合的英雄。
- [Draft](https://arammeta.com/draft/)：選擇我方與敵方英雄；陣容未滿時取得補位建議，選滿後比較隊伍特性與估計勝率。
- [遊戲工具](https://arammeta.com/game/)：用 Meta Pick 練習選角，或用增幅 Draft 比較每輪候選。
- [版本變動](https://arammeta.com/changes/)：查看英雄與增幅在不同版本之間的變化。

閱讀任何數字時，請一起查看頁面標示的 queue、patch、樣本數、資料更新時間與限制。

## 功能預覽

點擊圖片即可開啟對應頁面。

<table>
  <tr>
    <td width="50%">
      <strong>英雄榜</strong> — Tier、勝率、搜尋與角色篩選
    </td>
    <td width="50%">
      <strong>增幅榜</strong> — 稀有度、類型與強度比較
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <strong>Draft</strong> — 我方、候選池與對手的完整選角介面
    </td>
  </tr>
  <tr>
    <td width="50%">
      <strong>Meta Pick</strong> — 選角練習與增幅 Draft
    </td>
    <td width="50%">
      <strong>版本變動</strong> — 版本間的勝率與 Tier 變化
    </td>
  </tr>
</table>

## 資料怎麼來

Mayhem（queue `2400`）的完整對局不由 Riot 公開 API 提供，因此本專案透過玩家電腦上的 **League Client…
