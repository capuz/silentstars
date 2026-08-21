---
repo: "alexchandler100/UFC_Prediction_2022"
name: "UFC_Prediction_2022"
description: "Predict UFC fights with machine learning"
readmeQualityOk: true
url: "https://github.com/alexchandler100/UFC_Prediction_2022"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [95]
stars: 8
forks: 4
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2022-03-10T22:42:17Z"
lastCommitAt: "2026-08-21T04:10:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 46
maintainers: ["alexchandler100", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3a0d57cb952194c131fe466540db4f8bc3cdc16b8298fa496c54cf4d9ab7445/alexchandler100/UFC_Prediction_2022"
---

# UFC Prediction

This project collects UFCStats fight data and publishes weekly winner forecasts at [alexchandler100.github.io/UFC_Prediction_2022](https://alexchandler100.github.io/UFC_Prediction_2022/). The repository also contains older method-prediction and browser-model experiments; the production weekly predictor is the Python point-in-time winner model described below.

## Production pipeline

The weekly job:

1. Reconciles recent completed events from UFCStats and refreshes active fighter profiles.
2. Validates source IDs, mirrored fight rows, results, card order, timing metadata, and numeric domains.
3. Replays fights in causal bout order and builds one stable-ID feature row per physical W/L fight.
4. Tunes and evaluates a regularized logistic model with nested chronological folds, adds pre-bout Elo/state features, applies symmetric temperature calibration, and refits on the full ten-year window.
5. Saves and reloads a content-hashed JSON model artifact before forecasting the next card.
6. Adds timestamped no-vig multi-book consensus from The Odds API when valid lines are available and publishes the website JSON.

The 82-feature model is antisymmetric: swapping the…
