---
repo: "anglil/kalshi-ai-trading-bot"
name: "kalshi-ai-trading-bot"
description: "AI-powered Kalshi prediction market trading bot using Gemini"
readmeQualityOk: true
url: "https://github.com/anglil/kalshi-ai-trading-bot"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-21T21:15:50Z"
lastCommitAt: "2026-08-14T05:15:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd4987d7b1a2c8764029230e01bb81bcfaae13a6ab45e3353b21e92331e2d7cd/anglil/kalshi-ai-trading-bot"
---

# Kalshi AI Trading Bot

**Multi-model AI trading bot for Kalshi prediction markets.**

An autonomous trading system that combines a five-model AI ensemble, portfolio
optimization, market making, and dynamic exit strategies to find and exploit
edges on [Kalshi](https://kalshi.com) event contracts.

> **Disclaimer -- This is experimental software for educational and research
> purposes only.** Trading involves substantial risk of loss. Only trade with
> capital you can afford to lose. Past performance does not guarantee future
> results. This software is not financial advice. Use at your own risk. The
> authors are not responsible for any financial losses incurred through the use
> of this software.

---

## Architecture

```
                           Kalshi AI Trading Bot

  INGEST               DECIDE (Multi-Agent)         EXECUTE          TRACK
 --------             ----------------------        ---------       --------
                      +--------------------+
  Kalshi    --------> |  Grok-4            |
  REST API            |  (Forecaster, 30%) |
                      +--------------------+
  WebSocket --------> +--------------------+
  Stream              |  Claude…
