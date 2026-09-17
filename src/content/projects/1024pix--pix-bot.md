---
repo: "1024pix/pix-bot"
name: "pix-bot"
description: "Automatisation de développement"
readmeQualityOk: true
url: "https://github.com/1024pix/pix-bot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["scalingo", "review-app", "chatops-bot", "pix-captains"]
stars: 11
forks: 5
openIssues: 1
closedIssues: 9
watchers: 10
contributors: 55
recentReleases: 0
createdAt: "2020-02-14T18:18:52Z"
lastCommitAt: "2026-09-17T08:51:14Z"
lastReleaseAt: "2026-05-21T15:18:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 66
maintainers: ["renovate[bot]", "HEYGUL", "pix-service-auto-merge"]
openGraphImageUrl: "https://opengraph.githubassets.com/903ba4ebb319644df8d5967256498507639c0136a43adfaef48b6adf223d2f15/1024pix/pix-bot"
---

# Pix Bot

## Goals
Pix Bot helps developers and teams who host their applications on [Scalingo](https://scalingo.com) to manage them pragmatically and economically.

It offers the following services:
- create a Review App;
- shut down and restart Review Apps, at the time you want, every day of the week;
- deploy a specific release into production via a secured API;
- deploy a specific release into production via a Slack command or shortcut (deprecated);
- call external service after a deployment (CDN invalidation).
- handle merge queue for configured repositories.

Pix Bot is deployed into two apps:
- Pix Bot Build: contains the commands for the development tools
- Pix Bot Run: contains the commands related to the releases

[More details about deployment functionnality](https://1024pix.atlassian.net/wiki/spaces/TC1/blog/6097108994/D+ploiements+d+application+sur+Scalingo+avec+Pix+Bot)

## Run locally

*1/* Get the sources

```
git clone git@github.com:1024pix/pix-bot.git && cd pix-bot
```

*2/* Execute the configuration script:

```
npm run configure
```

*3/* Start the application

```
npm start
```

*4/* Access the application on http://localhost:3000

*5/* Develop and add…
