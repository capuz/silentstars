---
repo: "Zaious/jev-capability-atlas"
name: "jev-capability-atlas"
description: "Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. Chinese-primary bilingual repo."
originalDescription: "Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. 中文為主的雙語 repo。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Zaious/jev-capability-atlas"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "benchmark", "calibration", "jev", "llm-evaluation", "machine-learning", "typesafe", "zh-tw"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-18T21:30:40Z"
lastCommitAt: "2026-09-19T02:45:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 16
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/54fbbf45c0463c0ccc6f481ff0af421d0f55be43596f58c3e14bc7fee6b7d49d/Zaious/jev-capability-atlas"
---

🇹🇼 Chinese (this page) | 🇬🇧 [English](https://github.com/Zaious/jev-capability-atlas/blob/HEAD/README.en.md)

# Jev Capability Atlas

**Independent, unofficial, non-TypeSafe-sponsored community project.** Using real receipts from API calls, map out where [Jev](https://typesafe.ai) (TypeSafe's System One model) "calibrated decision-making" claim holds up and where it breaks down——show people how to use it, help agents bring it into projects to see where it can potentially be swapped in, and give anyone who's done real experiments a place to contribute their results.

Not a leaderboard (the market already has [jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) and [thaiexam-jev-charts](https://github.com/vehas/thaiexam-jev-charts) doing this work and doing it well; we cite them and don't duplicate). What this addresses is a more fundamental question: **when is it strong, when is it weak, and why**.

## 30-Second Version

Jev is fast and cheap, can only do "pick one option/give a score/answer yes or no" type narrow judgments, won't write text explanations of what it's thinking. Because the answer space is already pre-defined by you, it's **structurally impossible to…
