---
repo: "rarous/rarousnet"
name: "rarousnet"
description: "My website"
readmeQualityOk: true
url: "https://github.com/rarous/rarousnet"
homepage: "http://www.rarous.net/"
language: "JavaScript"
languages: ["JavaScript", "Nunjucks"]
languagePcts: [42, 33]
stars: 5
forks: 1
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2014-02-13T15:32:43Z"
lastCommitAt: "2026-08-19T04:06:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 83
maintainers: ["renovate[bot]", "rarous"]
openGraphImageUrl: "https://opengraph.githubassets.com/6630eb6e4c499d14d669b4b9f3949ccc9694992c4c3d05673dd3c1844f5bdd84/rarous/rarousnet"
fundingLinks: ["GITHUB:https://github.com/rarous"]
---

# rarousnet

Sources for https://www.rarous.net/ website.

## Site generator

Site generator is Clojure program that reads files in `content/weblog` and related templates in `www.rarous.net/src/html/weblog`
and `generator/templates/weblog` and generates weblog site. Content is Texy with embedded EDN data in header. Texy is PHP library, 
that is used via CLI from the Clojure program.

## Build

```bash
yarn build
```

## Run local development for HTML/CSS/JS hot reloading

```bash
yarn start
```

## Run wrangler for local development of Cloudflare Pages Functions

```bash
cd www.rarous.net
op run --env-file=../.env --no-masking -- wrangler pages dev ../.gryphoon/dist --kv=weblog --r2=storage --compatibility-flag=nodejs_compat --compatibility-date=2023-09-29 
```

## Run wrangler for local development of CRON scripts

```bash
op run --env-file=.env  --no-masking -- wrangler dev --test-scheduled workers/discogs-schedule.js 
```
