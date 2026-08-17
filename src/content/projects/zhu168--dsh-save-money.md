---
repo: "zhu168/dsh-save-money"
name: "dsh-save-money"
description: "Save-money plugin for DSH (DeepSeek Harness) — define your own \"pause / resume\" time windows; at pause time running long tasks are paused (not stopped) automatically, and they resume when the window ends. "
readmeQualityOk: true
url: "https://github.com/zhu168/dsh-save-money"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [60, 40]
topics: ["dsh", "dsh-plugin", "dsh-plugins"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T12:48:07Z"
lastCommitAt: "2026-08-17T04:20:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 17
maintainers: ["zhu168"]
openGraphImageUrl: "https://opengraph.githubassets.com/97e1ec475fd9e8418699f774e202e170638e9b427c26223c089e93a25312f96d/zhu168/dsh-save-money"
---

# dsh-save-money

**Save-money plugin** for DSH (DeepSeek Harness) — define your own "pause / resume" time windows; at pause time running long tasks are **paused** (not stopped) automatically, and they resume when the window ends. Built for LLM API **peak/off-peak pricing** (e.g. DeepSeek peak hours 9:00–12:00, 14:00–18:00 Beijing time, off-peak at half price), and equally useful for time-of-use electricity rates, bandwidth off-peak shifting, or any "I don't want the machine working during this period" scenario.

> Status: ✅ Implemented, continuously maintained. [中文版](https://github.com/zhu168/dsh-save-money/blob/HEAD/README.zh.md)

## Interface

The colored status text in the top-right of the session header (Save · ⚪/🟢/🟡/🔴, color follows the state) is the single persistent entry — click it to open the settings popover. When a pause is upcoming or active, a reminder banner appears at the top of the page (with the **End this save mode** button).

## Features

- **Multiple time windows**: add / remove pause-resume windows freely; supports midnight-crossing windows (23:00–08:00) and per-weekday filtering;
- **Automatic pause on schedule**: when the pause time arrives, running…
