---
repo: "Werkstattl/quick-dungeon-crawler-rpg-od"
name: "quick-dungeon-crawler-rpg-od"
description: "Quick Dungeon Crawler on Demand is an open-source endless dungeon crawler with randomized floors, enemies and items. It's based on the source code of Dungeon crawler on Demand, by Redpangilinan."
readmeQualityOk: true
url: "https://github.com/Werkstattl/quick-dungeon-crawler-rpg-od"
homepage: "https://dungeon.werkstattl.com/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
topics: ["dungeon-crawler", "game", "html5-game", "javascript", "javascript-game", "roguelike", "roguelite", "rpg"]
stars: 33
forks: 9
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2023-08-26T06:52:00Z"
lastCommitAt: "2026-11-07T10:37:32Z"
lastReleaseAt: "2025-10-26T04:20:08Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 63
maintainers: ["7underlines", "werkli"]
openGraphImageUrl: "https://opengraph.githubassets.com/784d9145c3b45b5d9f87623930daaba437b262184e682d33ab9784037119d5d4/Werkstattl/quick-dungeon-crawler-rpg-od"
fundingLinks: ["GITHUB:https://github.com/7underlines"]
discussionCount: 0
---

# Quick Dungeon Crawler on Demand

Quick Dungeon Crawler on Demand is an open-source endless dungeon crawler with randomized floors, enemies and items. It's based on the [source code of Dungeon crawler on Demand](https://github.com/redpangilinan/dungeon-crawler-rpg-od), by [Redpangilinan](https://github.com/redpangilinan).

The game is available for Android, iOS/iPadOS, macOS and Desktop platforms. You can find official releases of the game on:

If you like this game, please consider [supporting me on GitHub Sponsors](https://github.com/sponsors/7underlines)!

Issue reports of all kinds (bug reports, feature requests, etc.) are welcome.

## Playing Locally

To try the latest version from source you only need a small HTTP server. You can use
`npx serve` or Python's built-in web server:

```bash
npx serve
# or
python3 -m http.server
# or
php -S 127.0.0.1:4000
```

After running the server, open your browser at the shown address to play locally.

## Docker

Alternatively, you can run the game using Docker:

```bash
docker build -t quick-dungeon-crawler .
docker run --rm -p 8080:80 quick-dungeon-crawler
```

Open <http://localhost:8080> in your browser after starting the container.…
