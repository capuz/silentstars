---
repo: "getsentry/pypi"
name: "pypi"
description: "sentry internal pypi"
readmeQualityOk: true
url: "https://github.com/getsentry/pypi"
homepage: "https://pypi.devinfra.sentry.io/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["tag-production"]
stars: 22
forks: 5
openIssues: 0
closedIssues: 2
watchers: 32
contributors: 168
recentReleases: 0
createdAt: "2022-06-21T17:05:16Z"
lastCommitAt: "2026-09-30T09:57:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_watch", "funded"]
healthScore: 100
undervaluedScore: 58
maintainers: ["sentry-release-bot[bot]", "wedamija", "oioki"]
openGraphImageUrl: "https://opengraph.githubassets.com/1aceea39be389a989132ccd6b0bddb62701659e4754510eb55de29cd62838b9e/getsentry/pypi"
fundingLinks: ["CUSTOM:https://sentry.io/pricing/", "CUSTOM:https://sentry.io/"]
---

pypi
====

sentry internal pypi

this repository contains the tools to import and/or build packages from public pypi for the
platforms and achitectures required for sentry development.

## why?

this is not merely a mirror; we also build wheels for upstream dependencies that do not ship wheels.

we offer prebuilt wheels so dev machines + ci do not have to build wheels themselves; they just download.

## adding packages

first, setup the dev environment:

```bash
uv sync
direnv allow
```

packages are configured in the `packages.ini` file.

the easiest way to add a package and its dependencies is to use:

```bash
python3 -m add_pkg PKGNAME
```

each section is an individual package and has some additional instructions which helps for
building.

don't worry too much about the formatting, an auto-formatter will ensure the format is correct.

most packages won't need special build instructions and the section contents can be left blank:

```ini
[botocore==1.25.12]

[simplejson==3.17.2]
[simplejson==3.17.6]
```

**Anyone in the [Engineering team](https://github.com/orgs/getsentry/teams/engineering) can approve Pull Requests**, but it's preferred to get somebody from your team with…
