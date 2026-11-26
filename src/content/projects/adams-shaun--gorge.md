---
repo: "adams-shaun/gorge"
name: "gorge"
description: "golang based MTG engine"
readmeQualityOk: true
url: "https://github.com/adams-shaun/gorge"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 6
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-09-04T00:49:18Z"
lastCommitAt: "2026-11-26T23:37:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["adams-shaun", "mergify[bot]", "web-flow"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f69430c43eadc0d5ce9c0223abf7bf0b40c863d98b5952cf65e2476e973aac7/adams-shaun/gorge"
---

# gorge

This repository holds two *Magic: The Gathering* rules engines in pure Go, a server
and browser client to play on them, and the bots and draft stack around them.

**gorge** plays two to eight seats, Constructed and Commander. It compiles
[Forge](https://github.com/Card-Forge/forge)'s card scripts instead of hand-coding
cards, and records every game as a deterministic, hash-chained event log that
replays byte for byte.

**dirac** plays two to four seats, built for search and self-play: a game is one flat value
and one buffer sized to its card table, copied in place. It plays only cards it has
shown it agrees with gorge on, decision by decision, and refuses the rest by name.

**Run it: a container image of green `main`, published daily.** The newest oracle-green
commit on `main` is built at 06:30 UTC and pushed as
[`ghcr.io/adams-shaun/gorge`](https://github.com/adams-shaun/gorge/pkgs/container/gorge),
tagged `:latest`, `:YYYY-MM-DD` (the build day, UTC; the newest date tag is the image's date) and `:<sha>`.

```sh
docker run --rm -p 8080:8080 ghcr.io/adams-shaun/gorge:latest        # then open http://localhost:8080
```
