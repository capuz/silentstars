---
repo: "khanhonthetrack/acr-daily"
name: "acr-daily"
description: "Two daily stages, random cars and one global leaderboard for Assetto Corsa Rally. Windows app + Cloudflare Worker."
readmeQualityOk: true
url: "https://github.com/khanhonthetrack/acr-daily"
homepage: "https://acr-daily.acr-daily-server.workers.dev"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [57, 43]
topics: ["assetto-corsa-rally", "cloudflare-workers", "leaderboard", "rally", "sim-racing"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-05T17:07:39Z"
lastCommitAt: "2026-11-17T14:36:45Z"
lastReleaseAt: "2026-10-06T09:14:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 65
maintainers: ["claude", "khanhonthetrack"]
openGraphImageUrl: "https://opengraph.githubassets.com/735dd9b4ed462506fe85f8c468fe48953361b865566b25d3db4b1cee42215399/khanhonthetrack/acr-daily"
---

# ACR Daily

Two daily stages, random cars and one global leaderboard for **Assetto Corsa Rally**.
Players run a small Windows app next to the game. It reads the game's telemetry, judges the run, shows its
own timer over the game's timer, and sends finished runs to the server. The server takes each result as the
app sent it and keeps a board per daily.

**Play:** <https://acrdaily.com> (download the app there).
**Discord:** <https://acrdaily.com/discord> (chat, ideas, bug reports; the live timing bot).
**Run your own server:** [SETUP.md](https://github.com/khanhonthetrack/acr-daily/blob/HEAD/SETUP.md).

Open source under the [MIT licence](https://github.com/khanhonthetrack/acr-daily/blob/HEAD/LICENSE). Code: <https://github.com/khanhonthetrack/acr-daily>. Issues and pull requests are welcome.

## The rules

| | |
|---|---|
| Dailies | **Two per day**, new at 00:00 UTC. Each has its own stage (never the same one twice in a day), a **random car** from all 18 in the game (`server/src/cars.js`), **conditions** (weather + time of day, `server/src/conditions.js`) and its own board. Each is a **one-stage Rally Weekend** in the game: the app's **DRIVE** button sets it up in the game's…
