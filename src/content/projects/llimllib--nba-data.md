---
repo: "llimllib/nba_data"
name: "nba_data"
description: "Up to date NBA data dumps from stats.nba.com and ESPN Analytics"
url: "https://github.com/llimllib/nba_data"
homepage: "https://billmill.org/nba/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [70]
stars: 9
forks: 0
openIssues: 3
closedIssues: 23
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-11-20T01:44:39Z"
lastCommitAt: "2026-06-27T00:49:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 74
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0246720b95e40822688ed577bc15672961ef9dfd3666b5257390b112b3da479/llimllib/nba_data"
---

# nba_data

Up to date NBA data dumps

## data/

In the `data` directory, all seasons represent the end of the season, so 2025 means the 2024-25 nba season. `data` has data for the 2009-10 season up to the current season

- **`gamelog_<season>.parquet`**: game logs per team for the given season
- **`gamelogs.parquet`**: game logs per team for all seasons
- **`metadata.json`**: the date of the last update
- **`playerlog_<season>.parquet`**: game logs per player
- **`player_game_logs.parquet`**: game logs per player, all seasons
- **`players_<season>.parquet`**: player data for the whole season
- **`players_<season>_playoffs.parquet`**: player data for the whole playoffs
- **`playerstats.parquet`**: player data per season for all collected seasons
- **`playerstats_playoffs.parquet`**: player data per playoff season for all collected seasons
- **`team_efficiency_<season>.json`**: team efficiency stats
- **`team_summary_<season>.json`**: team summary stats for a given season
- **`team_summary.json`**: team summary stats for all seasons

## data/espn

Data collected from [espnanalytics.com](https://espnanalytics.com/). Covers the 2018-19 season through the current season.

**note**: in…
