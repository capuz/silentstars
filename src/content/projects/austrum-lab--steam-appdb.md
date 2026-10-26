---
repo: "Austrum-lab/steam-appdb"
name: "steam-appdb"
description: "Open database of all Steam app ids — games, dedicated-server tools, DLC, software, music, videos, hardware — split into per-type JSON files."
readmeQualityOk: true
url: "https://github.com/Austrum-lab/steam-appdb"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["app-list", "appid", "applist", "dataset", "dedicated-server", "game-server", "json", "pics", "steam", "steam-api"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-12T13:17:17Z"
lastCommitAt: "2026-10-26T20:59:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 46
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/e54379b258b2b5d3d3f030a5970caeb5a1c151146e8d61b85a260eab42b6a574/Austrum-lab/steam-appdb"
---

# steam-appdb

Open database of **all** Steam app ids — games, dedicated-server tools, DLC,
software, music, videos, hardware — split into per-type JSON files. Built
over anonymous PICS (the keyless Steam-client protocol steamcmd itself uses):
no account, no API key.

## Why

Valve removed the keyless `ISteamApps/GetAppList`, and its key-gated
replacement exposes no tools — so dedicated servers can't be listed through
the Web API at all. Anonymous PICS still sees everything; this repo keeps
that data public and fresh.

## How it updates

`.github/workflows/update.yml` runs the pipeline **every 2 hours** (cron
`17 */2 * * *`, plus manual `workflow_dispatch`):

1. checkout + `pip install -r requirements.txt`;
2. `python dump_applist.py --data-dir data` — anonymous PICS login, asks the
   changes feed what changed since the changenumber stored in
   `data/meta.json`, re-probes only those app ids (seconds per run), rewrites
   the files in `data/`;
3. commits and pushes `data/` if anything changed.

New releases emit PICS changes, so they arrive automatically; the id-space
scan below is only ever needed once. Manual run with a `scan_to` input does a
backfill scan instead.

##…
