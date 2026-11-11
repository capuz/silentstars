---
repo: "Aran404/SpotAPI"
name: "SpotAPI"
description: "A python wrapper for the public & private Spotify API"
readmeQualityOk: true
url: "https://github.com/Aran404/SpotAPI"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["follow", "like", "playlist", "python", "scraper", "scraping", "spotify", "spotify-api", "spotify-playlist", "spotify-premium"]
stars: 494
forks: 41
openIssues: 0
closedIssues: 49
watchers: 11
contributors: 13
recentReleases: 0
createdAt: "2024-07-01T15:39:37Z"
lastCommitAt: "2026-11-11T11:19:52Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 26
maintainers: ["Aran404", "M1h4n1k", "Desiders"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9c95c96e638226178219c9de9b93f660977520f80c89eef3e266487f75ec11c/Aran404/SpotAPI"
discussionCount: 7
---

---

Search the Spotify catalogue from your terminal, or build a Python app on top of
fully typed async results. Start with public data, no signup and no developer
dashboard. Connect your account later for saved music, playlist editing and live
player events.

> **SpotAPI 2 is a breaking async release.** Synchronous projects can pin
> `spotapi==1.2.8`. See the [migration guide](https://github.com/Aran404/SpotAPI/blob/HEAD/MIGRATION.md) and the
> [release checks](https://github.com/Aran404/SpotAPI/blob/HEAD/docs/release-2.0.0.md).

## 30-second start

Requires Python 3.11 or newer.

```bash
python -m pip install spotapi
spotapi search "Daft Punk"
```

That's it. No key, no login, no config.

Prefer Python?

```python
import asyncio
from spotapi import Public

async def main() -> None:
    results = await Public.search("Daft Punk", limit=5)
    for track in results.tracks:
        print(track.name, track.uri)

asyncio.run(main())
```

`Public` searches ten categories, resolves Spotify links and streams tracks from
public playlists. It cleans up its own connections.

## Why SpotAPI

- **No API key for public data.** Search, lookups, credits, lyrics and playlists work anonymously.
-…
