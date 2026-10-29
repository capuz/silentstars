---
repo: "aljaz-h/spool-tracker"
name: "spool-tracker"
description: "A self-hosted tracker for movies, TV, and anime. Browse trending titles, log your watch history, rate and list what you've seen, and keep an eye on upcoming releases all on your own server."
readmeQualityOk: true
url: "https://github.com/aljaz-h/spool-tracker"
homepage: "https://aljaz-h.github.io/spool-tracker/"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["django", "docker", "homelab", "htmx", "media-tracker", "movie-tracker", "postgresql", "python", "self-hosted", "tailwindcss"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-09T20:01:11Z"
lastCommitAt: "2026-10-29T21:24:02Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 51
maintainers: ["aljaz-h", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1295733311/adf8717a-b0bb-4777-bb15-6c715e61165a"
discussionCount: 0
---

Track what your household watches — movies, TV, and anime — on your own
  server, not someone else's. A self-hosted Trakt/Simkl/WeTrakr
  alternative: Django + Postgres + Redis/Celery, server-rendered with HTMX,
  shipped as a five-container Docker Compose stack you can be running in
  under five minutes.

> **Why not just use Trakt or Simkl?** Your watch history stays on your
> own server instead of a third party's — no account limits, no ads, no
> paywalled features, and multiple household members can share one
> instance without separate paid accounts each.

## Screenshots

Every screenshot below is a real render of the app against seeded demo
data (`manage.py seed_demo`) — nothing mocked up.

|  |  |
|---|---|
|  Dashboard — streak, up next, watching, watchlist |  Movies & TV — trending/popular/upcoming/top rated, live from TMDB |
|  Title detail — cast, lists, recommend-to-a-housemate |  Stats — streaks, genre breakdown, watch time |
|  History — every play, day-grouped, filterable |  Activity — household feed and leaderboard |

|  |  |
|---|---|
|  Lists — shared and private, plus "Surprise me" |  Automatic backups — to a server folder, WebDAV, Google Drive, or Dropbox |

A…
