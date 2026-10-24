---
repo: "richstokes/cheekymonkey"
name: "cheekymonkey"
description: "🐵 A literal Chaos Monkey for your Kubernetes clusters"
readmeQualityOk: true
url: "https://github.com/richstokes/cheekymonkey"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["kubernetes", "chaos-engineering", "chaos-monkey", "python", "python-arcade", "kubernetes-service"]
stars: 155
forks: 22
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-04-09T20:06:13Z"
lastCommitAt: "2026-10-24T00:15:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 71
undervaluedScore: 23
maintainers: ["richstokes", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fac41688c49abf021d3c617c26f4f902feb80cdcabdc54c7c45c5ae8e9f16052/richstokes/cheekymonkey"
---

# Cheeky Monkey

Inspired by Netflix's "[Chaos Monkey](https://github.com/Netflix/chaosmonkey)", this game quite literally sets a monkey loose in your Kubernetes cluster.

>CHAOS ENGINEERING IS:
>"the discipline of experimenting on a distributed system in order to build confidence in the system's capability to withstand turbulent conditions in production."  

This game is more for fun and demonstration purposes than to be a genuine chaos engineering tool. You _probably_ don't want to run this in production.

## How to play

Kubernetes pods are represented by crates in the game. The more pods you have, the more crates are dropped!  

You control the monkey with the arrow keys, and punch crates with space bar. You can also hold 'G' to grab a crate to your right and drag it around.  

Every time the monkey destroys a crate, a pod in your cluster is randomly selected and deleted!

Press 'R' to reset the game.

## Install & run

### Using pipenv

1. Clone the repo
2. Install dependencies: `pipenv install`
3. Run the game: `pipenv run python cheekymonkey.py`

Unless offline mode is set (see below), the game will attempt to connect to your currently-set Kubernetes context.

By default,…
