---
repo: "yeti-switch/yeti-web"
name: "yeti-web"
description: "Yeti admin interface. Opensource SIP SBC and VOIP billing."
readmeQualityOk: true
url: "https://github.com/yeti-switch/yeti-web"
homepage: "https://yeti-switch.org"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [95]
topics: ["billing", "voip-billing", "voip", "sip", "softswitch", "telecommunications", "sbc"]
stars: 67
forks: 38
openIssues: 36
closedIssues: 407
watchers: 11
contributors: 24
recentReleases: 0
createdAt: "2017-03-02T18:27:21Z"
lastCommitAt: "2026-08-28T14:29:31Z"
lastReleaseAt: "2018-09-04T20:36:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 56
maintainers: ["dmitry-sinina", "senid231", "Ivanov-Anton"]
openGraphImageUrl: "https://opengraph.githubassets.com/d528366365d92ac2dd37634b997720ebcc8f2e3a4a652f7e5ca00bbd85a03c12/yeti-switch/yeti-web"
---

# Welcome to YETI

# Contributing, Development setup

## Ruby

You have to use Ruby version 4.0.6 with installed bundler.

## Postgresql

It is strongly recommended to use PostgreSQL version 16.
The easiest way to install it - is to use Debian Linux and follow official PostgreSQL instruction
https://www.postgresql.org/download/linux/debian/

You need to install:

```sh
curl https://pkg.yeti-switch.org/key.gpg | sudo apt-key add -
curl https://www.postgresql.org/media/keys/ACCC4CF8.asc	| sudo apt-key add -
sudo add-apt-repository "deb http://pkg.yeti-switch.org/debian/buster unstable main"
sudo add-apt-repository "deb http://deb.debian.org/debian buster main buster non-free"
sudo add-apt-repository "deb http://apt.postgresql.org/pub/repos/apt/ buster-pgdg main"
sudo apt-get install postgresql-16 postgresql-contrib-13 postgresql-16-prefix postgresql-16-pgq3 postgresql-16-pgq-ext postgresql-16-yeti postgresql-16-pllua
sudo apt-get install -t buster-pgdg libpq-dev
```
In addition you need to compile or install from .deb package Yeti PostgreSQL extension `postgresql-16-yeti` https://github.com/yeti-switch/yeti-pg-ext

## Preparing yeti-web application

Fork and clone yeti-web…
