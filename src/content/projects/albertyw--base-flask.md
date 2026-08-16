---
repo: "albertyw/base-flask"
name: "base-flask"
description: "Base Flask/uWSGI/nginx setup"
readmeQualityOk: true
url: "https://github.com/albertyw/base-flask"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [56]
topics: ["flask", "python-3", "template", "nginx", "uwsgi", "python", "hacktoberfest"]
stars: 9
forks: 0
openIssues: 6
closedIssues: 63
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2016-04-03T05:12:15Z"
lastCommitAt: "2026-08-16T04:09:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 61
maintainers: ["albertyw", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f7893d55259a3f100d88720efc819a9d764ce2346952761e130f7b51a8cc9f7/albertyw/base-flask"
---

# Base Flask Setup

This is a base Flask/Gunicorn/nginx setup, useful as a skeleton for building
simple web apps from.  This is meant to be used for websites, as opposed to
pure JSON sites which would be better developed using a different language or
framework (e.g. [sanic](https://github.com/channelcat/sanic)).

Features
--------

 - Developed specifically for Python 3
 - Minimal but up-to-date python dependencies
 - 100% test coverage
 - No issues from Code Climate
 - PEP8 compliant
 - Documented setup and usage procedures
 - Includes setting up secure and fast nginx/gunicorn in production
 - Docker support

Users
-----

These repositories are based on base-flask:

 - [albertyw/albertyw.com](https://github.com/albertyw/albertyw.com)
 - [albertyw/chase-center-calendar](https://github.com/albertyw/chase-center-calendar)
 - [albertyw/nopages](https://github.com/albertyw/nopages)
 - [albertyw/pharmadataassociates](https://github.com/albertyw/pharmadataassociates)

Setup
-----

Modify and run `baseflask/scaffold.sh` to create a copy of base-flask for your
project needs, then run `bin/setup.sh` to set up the host.

Base-flask is designed to work with a minimally sized [AWS…
