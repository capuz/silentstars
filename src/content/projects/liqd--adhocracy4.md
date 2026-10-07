---
repo: "liqd/adhocracy4"
name: "adhocracy4"
description: "The core library for the e-participation projects by Liquid Democracy "
readmeQualityOk: true
url: "https://github.com/liqd/adhocracy4"
homepage: "https://liqd.net/software"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [73, 24]
topics: ["e-participation", "democracy", "liquid-democracy", "django"]
stars: 114
forks: 19
openIssues: 37
closedIssues: 114
watchers: 13
contributors: 23
recentReleases: 0
createdAt: "2016-12-06T13:23:38Z"
lastCommitAt: "2026-10-07T10:31:18Z"
lastReleaseAt: "2020-12-10T09:24:09Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 37
maintainers: ["shn-liqd", "partizipation", "glanzel"]
openGraphImageUrl: "https://opengraph.githubassets.com/345ec9449a7bc26ada66aa416725d234ade9d2319456e58f7133107583007121/liqd/adhocracy4"
---

Adhocracy4
==========

A library for building online participation software.
It is maintained and developed by Liquid Democracy e.V. and
heavily relies on the Django web framework.

Examples of using adhocracy4 are [a+](https://github.com/liqd/adhocracy-plus),
[meinBerlin](https://github.com/liqd/a4-meinberlin) and
[Civic Europe](https://github.com/liqd/a4-civic-europe). The first two being
online participation platforms implementing different processes like idea
collections or debates, and the latter using adhocracy4 as the basis for a
transparent idea challenge.

To try it out yourself, best start with [a+][https://github.com/liqd/adhocracy-plus/blob/main/docs/installation_prod.md].

### Local Development

## Adhocracy4 Installation

    git clone https://github.com/liqd/adhocracy4.git
    cd adhocracy4
    make install

Global setup: `make install` uses pipx to install uv system-wide
Project isolation: It then uses uv to create a local `.venv` and installs dependencies into it.

## Use Make
    make test
    make help

## Development
To add a new Library use uv 
```
uv add module
```
this automaticly updates pyproject.toml and uv.lock

## Virtual Enviroment
if you want to do…
