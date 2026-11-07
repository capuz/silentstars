---
repo: "616390260/daletou-predictor"
name: "daletou-predictor"
description: "Daletou 7-model prediction platform · Python+Vue3+GitHub Actions automatic prediction per draw + WeChat push"
originalDescription: "大乐透 7 模型预测平台 · Python+Vue3+GitHub Actions 每期自动预测+微信推送"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/616390260/daletou-predictor"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [67, 28]
stars: 11
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-20T11:21:01Z"
lastCommitAt: "2026-11-07T13:55:30Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 70
undervaluedScore: 55
maintainers: ["github-actions[bot]", "616390260"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae209cbeed3476b4548bcbb945d871eb0b4a9ee70fdf051483cfcd90919790f4/616390260/daletou-predictor"
---

# Daletou Prediction Lab

The current experiments include a nine-model period-by-period comparison, an independent Laya review, and a [winning-coverage experiment](https://github.com/616390260/daletou-predictor/blob/HEAD/docs/PORTFOLIO.md) with a fixed nine bets totaling 18 yuan. Theoretical coverage, historical simulation, and results published before the actual draw are displayed separately; prizes and ROI are rule-based estimates.

[2026-10-16 retraining record](https://github.com/616390260/daletou-predictor/blob/HEAD/docs/RETRAINING_2026-10-16.md): LSTM, Transformer, and XGBoost have been fully retrained on corrected data through period 26117. The 60-period isolated validation has not yet outperformed the uniform-probability baseline.

A small experiment to **puncture the illusion that lottery can be predicted by algorithms**.

Five models with different approaches (random baseline, frequency statistics, Markov chain, LSTM neural network, genetic algorithm) predict Daletou numbers in parallel, generate 4 bets per draw, and after each draw compare long-term hit rates and return on investment against real results.

---

## Core ideas

- **Lottery is truly random**; any model's…
