---
repo: "pattty847/Sentinel"
name: "Sentinel"
description: "High performance heatmap trading terminal"
readmeQualityOk: true
url: "https://github.com/pattty847/Sentinel"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["candlestick-chart", "crypto", "heatmap", "sec-filings", "stocks", "trading-terminal", "high-performance-charting"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-06-17T02:37:21Z"
lastCommitAt: "2026-10-03T09:21:54Z"
lastReleaseAt: "2026-03-06T04:37:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["pattty847"]
openGraphImageUrl: "https://opengraph.githubassets.com/d70ee68b5f14f29bea1a81caae5a36f54ba5fab93e899283907e90ee6947e235/pattty847/Sentinel"
---

# Sentinel

High-performance **GPU-accelerated trading terminal** built with **C++20** and **Qt 6**.

A desktop workstation for visualizing market structure, order flow, and real-time data — powered by a custom rendering pipeline and a client/server architecture designed for speed.

</div>

---

## Showcase

### GPU Heatmap Rendering

High-density order book visualization with real-time updates and smooth interaction.

---

### Stock Chart + SEC Insider Signals

Integrated equity charting with insider transaction overlays and contextual signals.

---

### Screener Workflow

Fast symbol discovery and routing into the charting system.

---

## Overview

Sentinel is built around a single constraint:

> dense market data should remain fluid, interactive, and interpretable under load

The system combines:

- GPU-first rendering (no per-frame allocations)
- Real-time streaming data pipelines
- Desktop workstation UI (Qt + QML + Scene Graph)
- Trading and simulation infrastructure

---

## Core Capabilities

### Rendering & Charting

- GPU-accelerated heatmap (single-quad texture sampling)
- ~110+ FPS during pan/zoom with live axis updates
- Zero-allocation axis rendering
- Candle,…
