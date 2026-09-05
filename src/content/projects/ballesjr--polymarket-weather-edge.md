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
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-19T13:20:27Z"
lastCommitAt: "2026-09-05T07:47:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea630587bdcfd2696efd30bfdb230683bc2d02c5aa47c43f821136cbfca69eb1/BallesJr/polymarket-weather-edge"
---

# POLYMARKET WEATHER EDGE BOT

This project builds an automated paper trading bot that exploits a systematic mispricing in Polymarket's daily temperature markets. I noticed that the market consistently overprices extreme temperature outcomes (YES side), so I built a pipeline that combines live METAR observations from each market's resolution station and Open-Meteo forecasts with a Gaussian probability model to trade the NO side. The live entry rule is an explicit NO-price band validated on historical trade buckets; every trade records the full set of weather features so a Random Forest calibrator can be retrained on clean data and reintroduced as a gate.

---

## WHAT I WORKED ON

- **Weather market pipeline**: Connected to Polymarket's Gamma API to fetch active daily temperature contracts and parsed each market to extract city, date, and temperature range from the question text, handling both °C and °F market formats with unit-aware bin corrections.
- **Resolution-source alignment**: Audited every market's resolution station against its live description (catching that Paris resolves at Le Bourget, not CDG) and validated data sources against the actual resolution of 500+…
