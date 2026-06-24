---
repo: "timeolord/Reinforcement-Learning-Stock-Trader"
name: "Reinforcement-Learning-Stock-Trader"
description: "Using a modified version of Werner Duvaud's MuZero implementation (https://github.com/werner-duvaud/muzero-general) this reinforcement agent learns to trade stocks based on Yahoo Finance data."
url: "https://github.com/timeolord/Reinforcement-Learning-Stock-Trader"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 20
forks: 6
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-04-18T20:37:24Z"
lastCommitAt: "2026-06-24T06:40:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 86
undervaluedScore: 37
maintainers: ["timeolord"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4528c993ad88d04b887be7165b4e5e6a758e402d34355affd430bad40e5b219/timeolord/Reinforcement-Learning-Stock-Trader"
---

# Reinforcement Learning Stock Trader

A stock trading agent trained with [MuZero](https://github.com/werner-duvaud/muzero-general) on historical Yahoo Finance data. The agent learns to trade a portfolio of 13 equities starting with $1000, using 1-minute OHLCV bars from 2019-2021.

## Overview

MuZero builds an internal world model without needing to know the rules of the environment. Here it treats the stock market as a game: the observation is recent price history, and each action is a trade decision. Self-play workers generate experience in parallel via Ray, a replay buffer stores it, and a trainer updates the network weights, all logged to TensorBoard.

Stocks traded: SPY, AAPL, NIO, F, XLF, GE, GM, T, TQQQ, QQQ, MSFT, K, C

## Project layout

```
TradingBot.py          entry point for data fetching and model launch
y_finance_env/         custom OpenAI Gym environment wrapping yfinance data
muzero/
  muzerobot.py         MuZero class, Ray worker orchestration, training loop
  models.py            representation, dynamics, and prediction networks
  self_play.py         parallel self-play workers
  trainer.py           weight update worker
  replay_buffer.py     replay buffer…
