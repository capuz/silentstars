---
repo: "XeldarAlz/FFXIV-AutoMahjongSolver"
name: "FFXIV-AutoMahjongSolver"
description: "Doman Mahjong, solved for you."
url: "https://github.com/XeldarAlz/FFXIV-AutoMahjongSolver"
homepage: "https://raw.githubusercontent.com/XeldarAlz/FFXIV-DomanMahjongSolver/main/repo/repo.json"
language: "C#"
languages: ["C#"]
languagePcts: [77]
topics: ["ai", "automation", "dalamud", "dalamud-plugin", "ffxiv", "gold-saucer", "mahjong", "mcts", "doman-mahjong", "final-fantasy-xiv"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 21
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-04-18T23:57:20Z"
lastCommitAt: "2026-06-24T00:24:43Z"
lastReleaseAt: "2026-04-20T19:08:14Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 62
maintainers: ["XeldarAlz", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f81883439f9b40ab9e0ee7987cf15d0bbe5a77c70b07ba97906cc70a22a6deae/XeldarAlz/FFXIV-AutoMahjongSolver"
discussionCount: 9
---

</p>

<h1 align="center">Currently unstable, new full overhaul version coming very soon</h1>

</p>

  <em>Doman Mahjong, solved for you. Built on Dalamud.</em>
</p>

---

</p>

## What it does

Sit at a mahjong table and a small window watches your hand, suggesting the best discard and why. Three modes:

- **Off**: plugin sleeps.
- **Hints**: shows the best discard + top alternatives with reasoning. You click every move. *100% safe.*
- **Auto-play**: plays for you with natural pacing.

## Features

- Three modes: Off / Hints / Auto-play, one click each.
- Hand, score, and discard-count readout from addon memory.
- Top-3 discard candidates with short reasoning.
- Full call handling: Pon · Chi · Kan · Riichi · Tsumo · Ron.
- Akadora-aware scoring; meld inference for chi/pon/minkan races.
- Adjustable "thinking" delay so auto-play looks human.
- Per-dispatch chat-log annotations make regressions a single log paste away.

## Install

In-game: `/xlsettings` → **Experimental** → paste into **Custom Plugin Repositories**:

```
https://raw.githubusercontent.com/XeldarAlz/DalamudPlugins/main/repo.json
```

Tick **Enabled**, click **+**, then **Save and Close**. Open `/xlplugins` → **All…
