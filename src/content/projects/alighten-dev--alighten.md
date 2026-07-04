---
repo: "alighten-dev/Alighten"
name: "Alighten"
description: "This repository contains a collection of custom Indicators and Market Analyzer Columns for NinjaTrader 8, developed under the \"Alighten\" namespace. These tools focus on Order Flow analysis, market structure patterns, and high-performance Market Analyzer integrations."
url: "https://github.com/alighten-dev/Alighten"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 9
forks: 6
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-14T21:44:32Z"
lastCommitAt: "2026-07-04T19:19:20Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 48
undervaluedScore: 14
maintainers: ["alighten-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc9191b4a23889bd7b5b1d80e0fd49255b73ab2446e177b0d510989216eeb150/alighten-dev/Alighten"
---

# Alighten NinjaTrader 8 Indicators

This repository contains a proprietary suite of custom NinjaTrader 8 indicators developed for advanced order flow analysis, multi-timeframe pattern recognition, and chart visualization. The suite is centered around the **Alighten Mirror Dashboard** ecosystem and high-performance order flow engines.

## Repository Structure

The core scripts are located in the `NinjaTrader/Indicators/` directory.

### 📊 Alighten Mirror Dashboard Ecosystem
The Mirror ecosystem is a multi-timeframe pattern recognition and dashboard engine. It separates raw pattern detection (PtA-F) from the visualization and strategy-emission layer (Mirror).

* **`AlightenMirrorV0021.cs`** 
  * **Description:** The core Multi-Timeframe Dashboard and visualization engine. It consolidates signals from Patterns A, B, C, E, and F across multiple higher timeframes (HTFs) onto a single primary chart. It handles on-chart visual rendering (Direct2D lines/labels), Databox plot emissions for strategies, and HTF Volume Profile bias filtering.
* **`AlightenMirrorPtAV0008.cs`** (Delta Flip / Exhaustion)
  * **Description:** Core signal engine detecting price exhaustion and delta flips using a…
