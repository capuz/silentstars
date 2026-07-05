---
repo: "RiekertQuant/polymarket-weather-bot-poc"
name: "polymarket-weather-bot-poc"
description: "Paper trading bot for Polymarket weather temperature markets (POC)"
readmeQualityOk: true
url: "https://github.com/RiekertQuant/polymarket-weather-bot-poc"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 21
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-26T19:10:38Z"
lastCommitAt: "2026-07-05T20:16:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/58c4039e48505c01408c9adc69d4e3dc28b00d970129cc00e982e1fca17ca8b5/RiekertQuant/polymarket-weather-bot-poc"
---

# Polymarket Weather Trading Bot (POC)

A paper trading bot for Polymarket weather temperature markets. This is a **Proof of Concept** that demonstrates automated trading logic for temperature-based prediction markets.

## ⚠️ Important Disclaimers

- **PAPER TRADING ONLY**: This bot does NOT place real trades. All trading is simulated.
- **NO FINANCIAL ADVICE**: This is for educational and research purposes only.
- **LIVE TRADING DISABLED**: The LiveBroker is intentionally not implemented.

## Features

- **Market Discovery**: Scans Polymarket for weather temperature markets
- **Weather Probability Engine**: Uses Open-Meteo forecasts to estimate true probabilities
- **Asymmetric Trading Strategy**: Only trades cheap mispriced shares with high edge
- **Risk Management**: Configurable position limits per city and daily caps
- **ML Calibration**: Optional calibration module for probability refinement
- **Paper Trading**: Full simulation with PnL tracking

## Supported Cities

- New York City
- London
- Seoul

## Installation

```bash
# Create virtual environment
python -m venv .venv

# Activate (Windows)
.venv\Scripts\activate

# Activate (Unix/Mac)
source .venv/bin/activate

#…
