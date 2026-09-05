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
lastCommitAt: "2026-09-05T07:49:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 72
maintainers: ["alexchandler100", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b23989be4b273f56864ddd2b2d0e1c107c47877312a2aeb2641549b4d19dfcf3/alexchandler100/UFC_Prediction_2022"
---

# UFC Prediction

This project collects UFCStats fight data and publishes a searchable fighter and matchup research site at [alexchandler100.github.io/UFC_Prediction_2022](https://alexchandler100.github.io/UFC_Prediction_2022/). The site exposes complete fighter profiles, career rates and totals, every recorded bout, matchup-specific comparisons, current model context, and book-by-book market research. The production weekly predictor remains the Python point-in-time winner model described below.

## Production pipeline

The September 2026 profitability repair uses independently recorded scheduled
fight lengths for duration training. An offline reconciliation recovered 686
historical schedules from saved round statistics; unresolved schedules are
excluded. Legacy duration artifacts remain historical evidence and cannot
generate new funded recommendations. Totals still require their own successful
betting-performance evaluation, even after their probabilities are rebuilt.

The paper board now qualifies bets using calibrated probabilities and requires
a positive conservative return. It selects among the user's chosen sportsbooks,
expires prices after 30 minutes and at card start, and…
