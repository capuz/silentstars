---
repo: "statsig-io/statsigstatus"
name: "statsigstatus"
description: "Statsig's Status Page, forked from our open-source template."
readmeQualityOk: true
url: "https://github.com/statsig-io/statsigstatus"
language: "JavaScript"
languages: ["JavaScript", "CSS", "HTML"]
languagePcts: [47, 26, 20]
stars: 52
forks: 27
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 21
recentReleases: 0
createdAt: "2021-06-10T22:53:10Z"
lastCommitAt: "2026-08-31T09:58:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 58
maintainers: ["vijaye-statsig"]
openGraphImageUrl: "https://opengraph.githubassets.com/63ab4b5301f1ee3cb529a28fc4e0d812012195d626791998aa982dd05b13c237/statsig-io/statsigstatus"
---

# Statsig's Open-Source Status Page

We tried various Status Pages out there, and built this as a fun little hobby project to make status pages as simple as possible.

## Demo

- https://status.statsig.com

## Setup instructions

1. Fork this repository.
2. Update `urls.cfg` to include your urls.

```cfg
key1=https://example.com
key2=https://statsig.com
```

3. Update `index.html` and change the title.

```html
<title>My Status Page</title>
<h1>Services Status</h1>
```

4. Set up GitHub Pages for your repository.

## How does it work?

This project uses Github actions to wake up every hour and run a shell script (`health-check.sh`). This script runs `curl` on every url in your config and appends the result of that run to a log file and commits it to the repository. This log is then pulled dynamically from `index.html` and displayed in a easily consumable fashion. You can also run that script from your own infrastructure to update the status page more often.

## What does it not do (yet)?

1. Incident management.
2. Outage duration tracking.
3. Updating status root-cause.

## Got new ideas?

Send in a PR - we'd love to integrate your ideas.

## In case...

You are looking for a…
