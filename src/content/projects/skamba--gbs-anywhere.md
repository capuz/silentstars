---
repo: "Skamba/gbs-anywhere"
name: "gbs-anywhere"
description: "Grind-by-Sync for the Mahlkönig E64 WS with any espresso machine"
readmeQualityOk: true
url: "https://github.com/Skamba/gbs-anywhere"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 10
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-09-27T09:49:49Z"
lastCommitAt: "2026-10-09T18:56:38Z"
lastReleaseAt: "2026-09-30T07:04:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 25
maintainers: ["Skamba", "rvdh"]
openGraphImageUrl: "https://opengraph.githubassets.com/3087addbf6de14d46affda94df848c9b601ca821cf1774c6c2e968226bf9b9f8/Skamba/gbs-anywhere"
---

# gbs-anywhere

Grind-by-Sync for the Mahlkönig **E64 WS** with any espresso machine.

Grind-by-Sync (GbS) lets the E64 WS dial itself in: after each shot it
compares the extraction time with the recipe's target and adjusts its grind
setting. Normally that needs Mahlkönig's own Xenia machine, with its built-in
scale, to report the shot. gbs-anywhere takes that place: you pull the shot on your own machine, time and
weigh it with your own scale, enter the numbers on your phone, and the grinder
adjusts as usual.

> Not affiliated with Mahlkönig or Hemro.

## Run it

On any computer on the same network as the grinder (PC, NAS, Raspberry Pi),
with Docker:

```sh
docker run -d --name gbs-anywhere --restart unless-stopped \
  -p 80:80 -v gbs-anywhere:/data ghcr.io/skamba/gbs-anywhere
```

The `/data` volume keeps the integrations you add in the app (see
[Integrations](#integrations)).

`latest` is the newest release. Pin a version with `:0.1` (newest 0.1.x) or
`:0.1.0`, or follow `main` for the newest commit, which may not be released
yet. The app shows the version at the bottom of the page; what changed is in
[CHANGELOG.md](https://github.com/Skamba/gbs-anywhere/blob/HEAD/CHANGELOG.md).…
