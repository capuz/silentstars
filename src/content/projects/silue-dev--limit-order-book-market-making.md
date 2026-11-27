---
repo: "silue-dev/limit-order-book-market-making"
name: "limit-order-book-market-making"
description: "Market making on a limit order book matching engine in Python."
readmeQualityOk: true
url: "https://github.com/silue-dev/limit-order-book-market-making"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 11
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-12-09T15:41:32Z"
lastCommitAt: "2026-11-27T12:01:57Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 43
maintainers: ["silue-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/211a1c228edbea23464044ab468f21109a0303964dab262c0cd7ce2869b3f6ca/silue-dev/limit-order-book-market-making"
---

# Limit Order Book Market Making
This project implements a limit order book matching engine and a market maker agent in Python. The limit order book matching engine runs on a server that functions as an exchange and simulates a dynamic market environment by processing randomly incoming limit orders, market orders, and optionally IOC or Post-Only orders. The resulting mid-price exhibits behavior similar to a Brownian motion. Meanwhile, the market maker agent continuously sends order requests to the exchange, placing quotes around the mid-price to provide liquidity and generate a steady profit. The agent adjusts these quotes to neutralize their inventory position and maintain a non-directional strategy.

## How to Run
Make sure to have [`uv`](https://docs.astral.sh/uv/) installed. Open the root directory of this project in your terminal and run the following command to install Python 3.12 and all required packages:

```sh
uv sync --frozen
```

Next, to run the simulation along with the market maker, run the following command:

```sh
uv run python src/main.py
```

Finally, open the link to your local server (http://localhost:5001) in a browser to see the market simulation in action.
