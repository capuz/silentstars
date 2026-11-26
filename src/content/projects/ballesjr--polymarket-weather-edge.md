---
repo: "BallesJr/polymarket-weather-edge"
name: "polymarket-weather-edge"
description: "Automated paper-trading bot that bets the NO side of overpriced Polymarket temperature markets, using live METAR observations and Open-Meteo forecasts with a Gaussian probability model."
readmeQualityOk: true
url: "https://github.com/BallesJr/polymarket-weather-edge"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["algorithmic-trading", "metar", "open-meteo", "paper-trading", "polymarket", "prediction-markets", "python", "trading-bot", "weather", "quantitative-finance"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-19T13:20:27Z"
lastCommitAt: "2026-11-26T13:01:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e588a890e457a052ea574e47e89c8d541bc38e9138fc399ada815b396642a980/BallesJr/polymarket-weather-edge"
---

# POLYMARKET WEATHER EDGE BOT

This project is a live test of one hypothesis: that Polymarket's daily temperature markets overprice extreme outcomes (the YES side). **The live test rejected it.** Since the data fixes of June 2026, 3,724 resolved paper trades won 31.1% of the time against an average entry price of 31.6%, and lost money at a statistically significant rate (t = -2.36). See [Paper trading results](#paper-trading-results).

To test the hypothesis I built an automated paper trading bot with a pipeline that combines live METAR observations from each market's resolution station and Open-Meteo forecasts with a Gaussian probability model to trade the NO side. The live entry rule is an explicit NO-price band validated on historical trade buckets; every trade records the full set of weather features so a Random Forest calibrator can be retrained on clean data and reintroduced as a gate.

---
