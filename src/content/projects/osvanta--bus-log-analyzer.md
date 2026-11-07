---
repo: "osvanta/bus-log-analyzer"
name: "bus-log-analyzer"
description: "A portable, zero-install Windows tool for loading CAN measurement files BLF MDF MDF4 CSV, decoding  signals with or without DBC databases, and plotting them interactively."
readmeQualityOk: true
url: "https://github.com/osvanta/bus-log-analyzer"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["blf", "can", "mdf", "mf4"]
stars: 27
forks: 6
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-17T16:46:08Z"
lastCommitAt: "2026-11-07T13:55:01Z"
lastReleaseAt: "2026-04-26T19:06:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 46
maintainers: ["dinacaran", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/83336085551525e6e34b95b2b222b53f11a6c7db6e0edd80546c615ef1531fc5/osvanta/bus-log-analyzer"
discussionCount: 1
---

# Osvanta Bus Log Analyzer

> A portable Windows application for loading automotive measurements, decoding CAN and LIN signals, inspecting raw frames, and plotting signal data interactively.

> **User guide:** [osvanta.github.io/bus-log-analyzer](https://osvanta.github.io/bus-log-analyzer/),
> or **Help ▸ Getting started** (`F1`) in the application.
> **Tutorial videos:** [youtube.com/@osvanta](https://www.youtube.com/@osvanta).

> Formerly released as **CANScope**. The repository moved to
> [github.com/osvanta/bus-log-analyzer](https://github.com/osvanta/bus-log-analyzer)
> in August 2026.

## Screenshots

The pictures follow your GitHub theme. They show a made-up demo vehicle; nothing in them is real data.

**Stacked** plot, the default: every signal in its own lane, with both cursors on.

**Multi-Axis** plot: the same signals over each other, one axis per unit.

**Trace**: the raw CAN and LIN frames, with the time since each ID's previous frame and its changed bytes highlighted.

## Supported formats

| Measurement | Content | Database |
|---|---|---|
| BLF (`.blf`) | Raw CAN and LIN frames | DBC or ARXML for CAN, LDF for LIN |
| ASC (`.asc`) | Raw CAN and LIN frames | DBC or…
