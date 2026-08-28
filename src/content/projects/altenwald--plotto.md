---
repo: "altenwald/plotto"
name: "plotto"
description: "Plot library 100% Elixir for SVG and PNG"
readmeQualityOk: true
url: "https://github.com/altenwald/plotto"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-19T23:47:13Z"
lastCommitAt: "2026-08-28T12:22:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 38
maintainers: ["manuel-rubio"]
openGraphImageUrl: "https://opengraph.githubassets.com/afa2a4ffb62679623c1452080533c3f17ba8752e09d4b9dcad1cb07dc198bf61/altenwald/plotto"
---

# Plotto

Plotto is a plot library, 100% Elixir, that's focused on generating beautiful SVG charts and exporting the same chart to PNG when it's needed — including the PNG rasterizer and TrueType font renderer, no external binaries or NIFs required.

It is very useful when you are developing a website and need to integrate SVG charts. Chart data items accept arbitrary HTML/SVG attributes (`phx-click`, `data-*`, etc.), so if you are using Phoenix LiveView you can attach events, actions, and feedback to individual bars/points — without Plotto depending on Phoenix or LiveView in any way.

If you need to export or generate PNG charts for email, PDF, or sending via Telegram, Slack, Mattermost, etc., `Plotto.to_png/1` renders the same chart to a PNG binary, anti-aliased and with full Unicode text support (including accented characters like á, é, ñ) via a bundled DejaVu Sans font.

Charts can also show an optional title and a legend (one color swatch + name row per series), positioned in any of the four corners — see `:title` and `:legend` in `Plotto.BarChart` or `Plotto.LineChart`. Negative values and mixed positive/negative domains are fully supported with an automatic zero baseline.…
