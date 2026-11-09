---
repo: "sou350121/VLA-expert-skill"
name: "VLA-expert-skill"
description: "VLA領域知識技能：按需讀取已發布Handbook、來源分級與可證偽分析；DeepSeek每日維護來源索引，歷史信念分開標示。"
readmeQualityOk: true
url: "https://github.com/sou350121/VLA-expert-skill"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 49
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-26T07:50:33Z"
lastCommitAt: "2026-11-09T12:00:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 28
maintainers: ["sou350121", "noreply"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2b8fa5ad35b3688f04f35fb5fceda26912e00b7946fa78c3b1f6674cc4f4761/sou350121/VLA-expert-skill"
---

# VLA Expert Skill

[English](https://github.com/sou350121/VLA-expert-skill/blob/HEAD/README_EN.md) · 中文

用已發布的 [VLA Handbook](https://github.com/sou350121/VLA-Handbook) 來源支援 VLA 論文、架構、部署與產業判斷。按問題讀取證據，不接管你的開發流程。

## 現行知識與歷史快照

- [當前來源導覽](https://github.com/sou350121/VLA-expert-skill/blob/HEAD/skill/references/HANDBOOK_CURRENT.md)：來源提交、涵蓋範圍及 DeepSeek 閱讀建議。
- [完整來源索引](https://github.com/sou350121/VLA-expert-skill/blob/HEAD/skill/references/HANDBOOK_INDEX.md)：理論、公司、雙周報與部署頁；每個連結固定到上游提交。
- [逐檔清單](https://github.com/sou350121/VLA-expert-skill/blob/HEAD/skill/references/handbook-manifest.json)：實際檔案計數、內容 SHA、來源 commit。
- [歷史專家記憶](https://github.com/sou350121/VLA-expert-skill/blob/HEAD/skill/references/VLA_EXPERT_MEMORY.md)：保留舊版內容；信念機率、相變百分比、估值及預測並未因同步重新校準。

「理論 Markdown 檔數」與「論文拆解檔數」是不同口徑，不能當成獨立論文篇數。同步日期也不代表所有論文已重新查核。產業頁的自報、補錄與覆蓋缺口須照原文保留。

## 如何使用

| 問題 | 處理 |
|---|---|
| 某個模型的 action head、訓練配方 | 找對版本，簡短回答並引用支持它的來源 |
| Diffusion Policy 與 Flow Matching 選型 | 對照任務、控制頻率、action chunk、推理成本與評估條件 |
| 論文是否值得讀、方向是否值得投入 | 分析機制、最強正反證據、失效條件及可推翻判斷的訊號 |
| 公司、發布或部署消息 | 區分公告、規劃、交付與獨立驗證，不把不同指標當可比結果 |
| 一般重構、寫測試、無關話題 | 保持原開發流程，不啟動本模組 |

QUICK 問題簡短答；DEEP…
