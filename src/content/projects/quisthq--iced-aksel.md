---
repo: "QuistHQ/iced_aksel"
name: "iced_aksel"
description: "A data-driven chart building framework for Iced. Built on top of Aksel"
readmeQualityOk: true
url: "https://github.com/QuistHQ/iced_aksel"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["chart", "iced", "plot", "rust"]
stars: 48
forks: 6
openIssues: 12
closedIssues: 34
watchers: 3
contributors: 4
recentReleases: 1
createdAt: "2025-12-01T20:38:04Z"
lastCommitAt: "2026-10-25T02:48:02Z"
lastReleaseAt: "2026-10-22T20:45:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 35
maintainers: ["mahlquistj", "Fee0"]
openGraphImageUrl: "https://opengraph.githubassets.com/608530a8a04d3be7102e4e295c88b9037060cf7c5589261eb13922f1038cd265/QuistHQ/iced_aksel"
discussionCount: 4
---

# 📊 Iced Aksel

`iced_aksel` is a "batteries not included" charting crate for
the [Iced] GUI toolkit, wrapping the [Aksel] plotting core in an ergonomic
widget. It focuses on rendering large, interactive datasets with customizable
axes, grids, styles, and event handlers that plug directly into your Iced
application logic.

## 🔍 Highlights

- 📈 **Chart-first widget** – `Chart` provides layout and event handling that
  feels native to Iced apps.

- 🪓 **Powerful axes** – Configure positions, scales, tick/label policies,
  cursor labels, visibility, and grid renderers per axis. You can even have multiple axes on the same side.

- 🖌️**Canvas-like API** – Implement `PlotData` to add any shape primitive
  (`shape::Line`, `shape::Ellipse`, `shape::Rectangle`, etc.) to the plot - Or
  create your own shape primitives with the `Shape` trait!

- 📏 **Internal Transformation** - Handles all the math headaches associated
  with calculating screen- vs. plot-coordinates.

- 👉 **Rich interactivity** – Subscribe to click, drag, hover, scroll, and
  double-click callbacks for both the plot area and individual axes.

- 🎨 **Composable styling** – Override per-axis/plot styles or swap in entire…
