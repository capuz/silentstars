---
repo: "akitaonrails/frank_type"
name: "frank_type"
description: "Ruby on Rails-based MonkeyType.com simpler clone"
readmeQualityOk: true
url: "https://github.com/akitaonrails/frank_type"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [44, 28]
stars: 29
forks: 8
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2026-06-14T20:28:40Z"
lastCommitAt: "2026-11-07T16:11:56Z"
lastReleaseAt: "2026-10-22T04:36:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 29
maintainers: ["akitaonrails", "dependabot[bot]", "hellitonsm"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b065eed279fe475e0c2d137dc8648713a250d1f3e015de90df2c42b995d8184/akitaonrails/frank_type"
---

# Frank Type

Frank Type is a Rails 8 typing trainer for practicing on normalized public-domain prose instead of random word lists. It is built for local-first, no-account use: session history, timing data, and profile charts stay in the browser's local storage.

## Run with Docker

Docker is the easiest way to run Frank Type. The image is published as `akitaonrails/frank_type` and runs Rails through Thruster on container port `80`.

### Option 1: run the published image

Fast launcher from GitHub:

```bash
curl -fsSL https://raw.githubusercontent.com/akitaonrails/frank_type/master/bin/docker-run.sh | bash
```

It defaults to <http://localhost:3200>. Override values when needed:

```bash
curl -fsSL https://raw.githubusercontent.com/akitaonrails/frank_type/master/bin/docker-run.sh | PORT=8080 HOST=localhost bash
```

Manual equivalent:

```bash
docker run --rm \
  -p 3200:80 \
  -e RAILS_ENV=production \
  -e SECRET_KEY_BASE=development-only-secret-key-base-change-me-development-only-secret-key-base \
  -e HOST=localhost \
  -e FORCE_SSL=false \
  -e ASSUME_SSL=false \
  akitaonrails/frank_type:latest
```

Open <http://localhost:3200>.

### Option 2: run from this repository…
