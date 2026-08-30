---
repo: "alexchandler100/UFC_Prediction_2022"
name: "UFC_Prediction_2022"
description: "Predict UFC fights with machine learning"
readmeQualityOk: true
url: "https://github.com/alexchandler100/UFC_Prediction_2022"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [93]
stars: 8
forks: 4
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2022-03-10T22:42:17Z"
lastCommitAt: "2026-08-30T00:44:09Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 72
maintainers: ["alexchandler100", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/211bcf8ca0c95c163217a4c827a18d3fdd9ffaf7c7980c216174fe4485a5b49a/alexchandler100/UFC_Prediction_2022"
---

# UFC Prediction

This project collects UFCStats fight data and publishes a searchable fighter and matchup research site at [alexchandler100.github.io/UFC_Prediction_2022](https://alexchandler100.github.io/UFC_Prediction_2022/). The site exposes complete fighter profiles, career rates and totals, every recorded bout, matchup-specific comparisons, current model context, and book-by-book market research. The production weekly predictor remains the Python point-in-time winner model described below.

## Production pipeline

The weekly job:

1. Reconciles recent completed events from UFCStats and refreshes active fighter profiles.
2. Validates source IDs, mirrored fight rows, results, card order, timing metadata, and numeric domains.
3. Replays fights in causal bout order and builds one stable-ID feature row per physical W/L fight.
4. Tunes and evaluates a regularized logistic model with nested chronological folds, adds pre-bout Elo/state features, applies symmetric temperature calibration, and refits on the full ten-year window.
5. Saves and reloads a content-hashed JSON model artifact before forecasting the next card.
6. Builds a paper-only Bayesian logistic challenger around the…
