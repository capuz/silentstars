---
repo: "Senpi-ai/senpi-skills"
name: "senpi-skills"
description: "Open-source AI agent skills + 80+ strategy templates for autonomous trading on Hyperliquid — build, deploy, and protect strategies across crypto, equities, commodities & indices, with two-phase trailing-stop (DSL) exits."
readmeQualityOk: true
url: "https://github.com/Senpi-ai/senpi-skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 144
forks: 37
openIssues: 7
closedIssues: 1
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2026-02-23T19:28:09Z"
lastCommitAt: "2026-11-11T11:21:35Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 29
maintainers: ["danielmbirochi", "kinsyudev", "shnoodles"]
openGraphImageUrl: "https://opengraph.githubassets.com/388d07f77855f01a96f5afb115309469f369d55012f4419474581f1495a972c1/Senpi-ai/senpi-skills"
---

# Senpi — Open-Source AI Trading for Hyperliquid

**An AI that runs your Hyperliquid strategy 24/7 — reads the whole market, finds the edge, sizes the trade, and protects the position while you sleep.**

This repository is the **open-source layer** of the Senpi Hyperliquid AI Harness: the [skills](#the-skills) that give a Senpi agent its trading capabilities, and the [strategy templates](#the-strategy-templates) it can deploy. MIT-licensed, readable, forkable.

**Deploy an agent:** [senpi.ai](https://senpi.ai) · **Arena:** [senpi.ai/arena](https://senpi.ai/arena) · **Exchange:** [Hyperliquid](https://hyperliquid.xyz)

---

## The Senpi Hyperliquid AI Harness

Senpi 2.0 isn't a chatbot with a trading API bolted on. It's a **harness** — a disciplined stack that wraps a market-tuned AI model in deterministic execution and risk machinery, so an autonomous agent can trade real capital without hallucinating a position or forgetting a stop.

```
                    ┌─────────────────────────────────────────────┐
   You (chat) ────▶ │  Senpi Samurai  — the model                 │   tuned for Hyperliquid
                    │  not a generalist in a trading costume      │…
