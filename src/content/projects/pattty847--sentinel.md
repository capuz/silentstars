---
repo: "pattty847/Sentinel"
name: "Sentinel"
description: "High performance heatmap trading terminal"
readmeQualityOk: true
url: "https://github.com/pattty847/Sentinel"
language: "C++"
languages: ["C++"]
languagePcts: [91]
topics: ["candlestick-chart", "crypto", "heatmap", "sec-filings", "stocks", "trading-terminal", "high-performance-charting"]
stars: 23
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-06-17T02:37:21Z"
lastCommitAt: "2026-10-23T08:47:22Z"
lastReleaseAt: "2026-03-06T04:37:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["pattty847"]
openGraphImageUrl: "https://opengraph.githubassets.com/20ab411cd2833213fe02a89beeb0ece3970156f7f0df176e05bc43d553b28a81/pattty847/Sentinel"
---

# Sentinel

**GPU-accelerated trading terminal** built with **C++20** and **Qt 6**.

A desktop workstation for viewing market structure, order flow, and real-time data. A headless server ingests and records Coinbase market data. A Qt client draws it on the GPU. Orders are simulated: Sentinel has paper trading only and sends no real orders.

Documentation: [documentation index](https://github.com/pattty847/Sentinel/blob/HEAD/docs/README.md).

---

## Showcase

### GPU Heatmap Rendering

Order book heatmap with live updates, pan, and zoom.

---

### Stock Chart + SEC Insider Signals

Equity charting with insider transaction overlays and signals from SEC filings.

---

### Screener Workflow

Screener rows open on the charts: crypto pairs on the main chart, stocks on the Stock Chart.

---

## Overview

Sentinel is built around a single constraint:

> dense market data should remain fluid, interactive, and interpretable under load

The system combines:

- GPU-first rendering
- Real-time streaming data pipelines
- Recorded order book history
- Desktop workstation UI (Qt Widgets docks, QML, Qt Scene Graph)
- Paper trading and simulation

---

## Core Capabilities

### Rendering &…
