---
repo: "satkynovilgiz/FIFA-World-Cup-Predictor"
name: "FIFA-World-Cup-Predictor"
description: "Predicting World Cup match outcomes and simulating tournaments with machine learning and Monte Carlo methods."
readmeQualityOk: true
url: "https://github.com/satkynovilgiz/FIFA-World-Cup-Predictor"
homepage: "https://satkynovilgiz.github.io/FIFA-World-Cup-Predictor/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [89]
topics: ["machine-learning", "monte-carlo-simulation", "python", "world-cup-2026-prediction", "xgboost"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-21T17:52:21Z"
lastCommitAt: "2026-11-24T02:01:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 63
undervaluedScore: 16
maintainers: ["satkynovilgiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8d5db5c66325d61b7439076fe8b55ab2805f08108d6f77568fd2245fdc01861/satkynovilgiz/FIFA-World-Cup-Predictor"
---

# ⚽ FIFA World Cup Predictor

### Can a model predict the world's biggest football tournament?

Match probabilities, XGBoost, and Monte Carlo simulations — from historical World Cups to a 48-team tournament.

## The idea

Predict each match using **EA Sports FIFA ratings, Elo ratings, and FIFA rankings**. Then simulate the entire tournament repeatedly to estimate each team's chances of advancing and winning.

A good match prediction is useful. A realistic **tournament simulation** is the real goal.

## 🏆 Historical evaluation

The model was evaluated with leave-one-World-Cup-out cross-validation and tournament-level simulations. XGBoost was selected from five tested models.

| World Cup | Actual champion | Model's top pick | Reported probability |
| :---: | :--- | :--- | ---: |
| 2006 | Italy | France | 4.94% |
| 2010 | Spain | Spain ✅ | 33.71% |
| 2014 | Germany | Germany ✅ | 19.84% |
| 2018 | France | Brazil | 24.38% |
| 2022 | Argentina | Argentina ✅ | 20.17% |

**Reported results:** 3 of 5 champions predicted · Actual champion among the top four favorites in 4 of 5 tournaments · Average log loss: 1.961 · Tournament loss: 1.938
