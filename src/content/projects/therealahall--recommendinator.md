---
repo: "therealahall/recommendinator"
name: "recommendinator"
description: "Behold, the Recommendinator! A local-first engine that devours your media libraries, learns your taste across books, movies, TV, and games, and surfaces what you'll love next. No cloud. No tracking. Your data."
readmeQualityOk: true
url: "https://github.com/therealahall/recommendinator"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 6
forks: 0
openIssues: 6
closedIssues: 75
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-03T06:21:31Z"
lastCommitAt: "2026-11-09T04:34:16Z"
lastReleaseAt: "2026-03-18T04:45:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 61
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/519fb5502e825a9391fd836fcbf0baaaae5aefd4d7cd205040f9a6f2e0ad5217/therealahall/recommendinator"
---

# Recommendinator

A privacy-focused recommendation engine that learns from your ratings and reviews
across books, movies, TV shows, and video games.

- **Runs locally**. Your data never leaves your machine
- **No model, no service**. Scoring is arithmetic over your own library, and
  every score can be read back
- **You own your data**. A SQLite database you can query, back up, or delete

It imports from sources you already use, enriches items with metadata, and ranks
recommendations through a transparent scoring pipeline. Your love of sci-fi books
can influence game and movie suggestions through genre clusters. Browse and tune
everything from a themeable web UI or the CLI, which are
[interchangeable interfaces](https://github.com/therealahall/recommendinator/blob/HEAD/ARCHITECTURE.md#5-interfaces) to the same engine.

## 30-second start

```bash
mkdir -p recommendinator/{config,data,inputs} && cd recommendinator

docker run -d \
  --name recommendinator \
  -p 127.0.0.1:18473:8000 \
  -v "$(pwd)/config:/app/config" \
  -v "$(pwd)/data:/app/data" \
  -v "$(pwd)/inputs:/app/inputs:ro" \
  --restart unless-stopped \
  ghcr.io/therealahall/recommendinator:latest
```

The container…
