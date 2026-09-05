---
repo: "Panoptikum-social/pan"
name: "pan"
description: "The podcast showcase & community / Phoenix based web application"
readmeQualityOk: true
url: "https://github.com/Panoptikum-social/pan"
homepage: "https://panoptikum.social"
language: "HTML"
languages: ["HTML", "Elixir"]
languagePcts: [56, 43]
topics: ["phoenix", "podcasts", "webapp"]
stars: 39
forks: 5
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2016-09-12T07:22:17Z"
lastCommitAt: "2026-09-05T07:49:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 53
maintainers: ["haslinger"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f4fd4e8b39e5675fde0c9c0adef1451dcb7a76236bceb5e548ee7f382b42c04/Panoptikum-social/pan"
---

# Panoptikum

Panoptikum (or short Pan) is a webapplication written in [Phoenix](http://www.phoenixframework.org/)
that represents a podcast discovery and community website.

It is licensed under the AGPL license.
The project website with more information on the project can be found at <https://www.panoptikum.social>
If you are interested and want to get in touch, write an email to [Stefan](mailto:stefan@panoptikum.social).

## Setup

### 📋 Prerequirements

* Make sure you have [Elixir](https://elixir-lang.org) installed.
* Make sure you have [Node.js](https://nodejs.org) installed.
* Make sure you have [PostgreSQL](https://www.postgresql.org) installed and running.
* Make sure you have [ManticoreSearch](https://manticoresearch.com/) installed and running.

### 📦 Install dependencies

* Install Elixir's dependencies with `mix deps.get`
* Install Node.js dependencies with `npm install` _inside the assets folder_

### 🛠 Configuration

* Dev works out of the box with no configuration — `config/runtime.exs` falls
  back to sensible local defaults (Postgres `postgres`/`postgres`, database
  `pan_dev`) if you don't set any env vars. Only set `PAN_DB_USERNAME` /
  `PAN_DB_PASSWORD` /…
