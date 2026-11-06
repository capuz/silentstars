---
repo: "llimllib/nba_data"
name: "nba_data"
description: "Up to date NBA data dumps from stats.nba.com and ESPN Analytics"
readmeQualityOk: true
url: "https://github.com/llimllib/nba_data"
homepage: "https://billmill.org/nba/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 13
forks: 0
openIssues: 7
closedIssues: 92
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-11-20T01:44:39Z"
lastCommitAt: "2026-11-06T02:44:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 68
maintainers: ["llimllib"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fe5b9e8af01134d22e92cb43661fb20c9b6ddb6e4c10d3a5c2db9d1cc7c28e8/llimllib/nba_data"
---

# nba_data

Up to date NBA data dumps

## Query everything from one URL

The data is in object storage, as one dataset with consistent keys. Every
dataset is a table in a small DuckDB catalog:

```sql
ATTACH 'https://basketball-data.billmill.org/nba/nba.duckdb' AS nba;
USE nba;
FROM metadata;   -- every dataset, its seasons and when it was updated

-- scoring leaders, 2025-26 regular season
SELECT p.name, t.nba_abbrev AS team, s.gp, round(s.pts, 1) AS ppg
FROM player_season_stats_per_game s
JOIN players p USING (player_id)
JOIN team_seasons t USING (season, team_id)
WHERE s.season = 2026 AND s.season_type = 'regular_season' AND s.gp >= 50
ORDER BY s.pts DESC LIMIT 10;

-- the Celtics' latest games, with opponent names
SELECT g.game_date, o.nba_abbrev AS opp, g.home, g.win, g.pts, g.plus_minus
FROM team_game_logs g
JOIN team_seasons t USING (season, team_id)
JOIN team_seasons o ON o.season = g.season AND o.team_id = g.opp_team_id
WHERE g.season = 2026 AND t.nba_abbrev = 'BOS'
ORDER BY g.game_date DESC LIMIT 10;

-- ESPN net points leaders
SELECT p.name, count(*) AS games, round(sum(b.t_net_pts), 1) AS net_pts
FROM player_box b JOIN players p USING (player_id)
WHERE b.season = 2026…
