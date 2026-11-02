---
repo: "616390260/daletou-predictor"
name: "daletou-predictor"
description: "Daletou 7-Model Prediction Platform · Python+Vue3+GitHub Actions automatic per-draw prediction + WeChat push"
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
lastCommitAt: "2026-11-02T11:36:30Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 70
undervaluedScore: 54
maintainers: ["github-actions[bot]", "616390260"]
openGraphImageUrl: "https://opengraph.githubassets.com/50dff9f3f82a2c769a26f44cb86150986f91c321d6e90b90908e75b62a991cdb/616390260/daletou-predictor"
---

# Daletou Prediction Lab

Current experiments include a nine-model per-draw comparison, an independent Laya review, and a [winning-coverage experiment](https://github.com/616390260/daletou-predictor/blob/HEAD/docs/PORTFOLIO.md) with a fixed stake of nine bets for 18 yuan. Theoretical coverage, historical simulations, and results published before the actual draw are displayed separately; prizes and ROI are rule-based estimates.

[2026-10-16 retraining log](https://github.com/616390260/daletou-predictor/blob/HEAD/docs/RETRAINING_2026-10-16.md): LSTM, Transformer, and XGBoost have been fully retrained on corrected data through draw 26117. The 60-draw isolated validation has not yet outperformed the uniform-probability baseline.

A small experiment to **expose the illusion that "lottery can be predicted by algorithms"**.

Five models with different approaches (random baseline, frequency statistics, Markov chain, LSTM neural network, genetic algorithm) predict Daletou numbers in parallel, generating 4 bets per draw. After each draw, their long-term hit rates and return on investment are compared head-to-head.

---

## Core ideas

- **The lottery is truly random**, so any model's…
