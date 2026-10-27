---
repo: "getsentry/pypi"
name: "pypi"
description: "sentry pypi (public, mostly for prebuilt wheels)"
readmeQualityOk: true
url: "https://github.com/getsentry/pypi"
homepage: "https://pypi.devinfra.sentry.io/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["tag-production"]
stars: 23
forks: 5
openIssues: 0
closedIssues: 2
watchers: 32
contributors: 169
recentReleases: 0
createdAt: "2022-06-21T17:05:16Z"
lastCommitAt: "2026-10-27T09:17:13Z"
status: "thriving"
tags: ["hidden_gem", "community_watch", "funded"]
healthScore: 100
undervaluedScore: 58
maintainers: ["sentry-release-bot[bot]", "sentry-junior[bot]", "oioki"]
openGraphImageUrl: "https://opengraph.githubassets.com/53b617ba5f3ed1abc5d583720839d0b8bbf42cf6c776b0d38ad0e816615e8b14/getsentry/pypi"
fundingLinks: ["CUSTOM:https://sentry.io/pricing/", "CUSTOM:https://sentry.io/"]
---

pypi
====

sentry pypi (public!)

this repository contains the tools to import and/or build packages from public pypi for the
platforms and achitectures required for sentry development.

## why?

this is not merely a mirror; we also build wheels for upstream dependencies that do not ship wheels.

we offer prebuilt wheels so dev machines + ci do not have to build wheels themselves; they just download.

## use the index

The index URL is `https://pypi.devinfra.sentry.io/simple`. With uv, add it to `pyproject.toml`:

```toml
[[tool.uv.index]]
url = "https://pypi.devinfra.sentry.io/simple"
```

With pip, pass `--index-url https://pypi.devinfra.sentry.io/simple`.

The index serves wheels only, and only for the versions listed in `packages.ini`.
If a version is not listed, installing it from this index fails.

Wheels are built for CPython 3.11, 3.12, 3.13, and 3.14 on linux amd64, linux arm64, and macos.

## adding packages

1. Set up the dev environment:

   ```bash
   uv sync
   direnv allow
   ```

   If you do not use direnv, prefix the commands below with `uv run`.

1. Add the package and its dependencies to `packages.ini`:

   ```bash
   python3 -m add_pkg PKGNAME
   ```…
