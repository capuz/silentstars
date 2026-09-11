---
repo: "Hydr0neFN/hinet-dual-path-probe"
name: "hinet-dual-path-probe"
description: "Does a static IP actually lower your game ping? A concurrent A/B of two ISP account types on one line, measured on the UDP path a Source 2 game really uses. Live data, updated hourly from the probe."
readmeQualityOk: true
url: "https://github.com/Hydr0neFN/hinet-dual-path-probe"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [59, 25]
topics: ["homelab", "latency", "networking", "pppoe", "raspberry-pi", "steam-datagram-relay", "cs2", "isp", "network-monitoring", "taiwan"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-27T12:53:28Z"
lastCommitAt: "2026-09-11T08:15:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/db320161273be69704c6a627e5af946f78cdd100032c68967ebc6189c57f6832/Hydr0neFN/hinet-dual-path-probe"
---

# 中華電信CS2爆Ping浮動制切固網測試

**繁體中文** · [English](https://github.com/Hydr0neFN/hinet-dual-path-probe/blob/HEAD/README.en.md)

## TL;DR 以下是Claude寫的，一句話:去申請固網，差很多。(因人而異)

在同一條實體線路上，直接用一台 Raspberry Pi 對兩種 ISP 連線型態做**同步 A/B 測試**（而且量的是 **Source 2 遊戲(CS2)實際走的 UDP 路徑**，不是隨便 ping 個附近的 DNS 敷衍了事）。

遊戲 ping 的中位數不會變低——兩種帳號在遊戲實際走的路徑上，中位數完全一樣。但穩定度差很多：浮動制每 6 次高頻量測就有 1 次出現超過 60 ms 的尖峰，固定制 868 次裡只有 1 次。Cloudflare 後面的東西差非常多：中位數 3 ms vs 24 ms，尖峰時段浮動制飆破 200 ms 並伴隨掉包。

底下的數據由跑在 Pi 上的探針每小時自動更新。

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="data/chart-dark.svg">
</picture>

完整數字（隨時更新）：**[data/stats.md](https://github.com/Hydr0neFN/hinet-dual-path-probe/blob/HEAD/data/stats.md)** · 原始樣本：
[data/paired-scrubbed.csv](https://github.com/Hydr0neFN/hinet-dual-path-probe/blob/HEAD/data/paired-scrubbed.csv)

### 長期走勢（每日彙整）

上面那張主圖是**滾動 48 小時**的視窗。如果遇到沒什麼變化的一天，圖看起來會跟前一天一模一樣，自動發布也就不會產生任何 commit，讓 repo 看起來像停擺。下面這張則是**每日彙整**，一天一個資料點，探針跑越久圖就越長：

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="data/history-dark.svg">
</picture>

逐日數據：**[data/history.csv](https://github.com/Hydr0neFN/hinet-dual-path-probe/blob/HEAD/data/history.csv)**（一天一列——重點是光看 commit diff…
