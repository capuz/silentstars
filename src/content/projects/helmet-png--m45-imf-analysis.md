---
repo: "helmet-png/m45-imf-analysis"
name: "m45-imf-analysis"
description: "M45 (Pleiades) 疏散星團質量函數的分析選擇誤差預算 — Gaia DR3 + 前向模型"
readmeQualityOk: true
url: "https://github.com/helmet-png/m45-imf-analysis"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-08-09T04:39:29Z"
lastCommitAt: "2026-09-18T08:28:48Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 42
maintainers: ["helmet-png", "yutunglan11-hue", "alexlee981113-cpu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b396b49f84cbee81ea840f41b617f09910a99270c1aa3115eb9790ac4b096f96/helmet-png/m45-imf-analysis"
---

# 星團分析 pipeline（第 1–5 步）

從 Gaia DR3 資料判定星團成員星、建色光圖、用前向模型擬合年齡與消光、
求雙星比例並比較四種雙星判定法、最後量質量函數與 IMF 斜率。
所有可調參數集中在 [config.toml](https://github.com/helmet-png/m45-imf-analysis/blob/HEAD/config.toml)，本檔說明每個參數的作用、
改動後會發生什麼、以及預設值為何這樣選。

目前標的是 M45，主線是 PDMF→IMF 五步計畫（見下方「PDMF → IMF」一節）。
流程的設計目標是讓同一套規則可套到其他星團，而不是替每團人工調到最好看；
但**目前尚未達到「一套 M45 參數直接跑全銀河」**：誤差模型與選擇函數必須
每團由資料重校準，完整聯合前向模型在 NGC 3532／Praesepe 都出現角落解
（見 `LIMITATIONS.md` D16、D17）。哪些模組已通過、哪些仍失敗，見
[MULTICLUSTER_VALIDATION.md](https://github.com/helmet-png/m45-imf-analysis/blob/HEAD/MULTICLUSTER_VALIDATION.md)。

---

## 兩種成員機率的算法

pyUPMASK 可以用兩種方式給出成員機率，由 `KDEP_flag` 切換。兩者是**不同的量**，
數值不可互相比較。

**頻率版（原始 UPMASK 的定義，`--kdep False`）**：P = 25 輪外圈中被判為成員的
輪數比例。只有 26 個可能值（0/25 到 25/25），刻度均勻，不會飽和。

**KDE 後驗版（pyUPMASK 預設，`--kdep True`）**：對「已判為成員」與「已判為場星」
兩堆星各建一個五維核密度估計（位置 x, y ＋ pmRA, pmDE, Plx），再問每顆星
所在位置哪一堆的密度高：

    P = 1 / (1 + L_field / L_memb)

這是貝氏定理在互斥且窮盡的兩假設下的形式，並隱含假設 P(成員) = P(場星) = 1/2。

實測比較（M45，三個亂數種子）：

| | KDE 後驗版 | 頻率版 |
|---|---|---|
| 相異機率值 | 390 個 | 26 個 |
| 中間帶（0.3–0.99）星數 | 158 | 362 |
| P≥0.7 種子離散度 | 0.8% | 1.3% |
| P≥0.9 種子離散度 | 1.2% | 5.7% |
| P≥0.99 種子離散度 | 35.2% | 89.6% |
| P≥0.7 precision / recall | 0.717 / 1.000 | 0.836 /…
