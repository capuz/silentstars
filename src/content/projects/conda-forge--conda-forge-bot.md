---
repo: "conda-forge/conda-forge-bot"
name: "conda-forge-bot"
description: "bot for conda-forge version updates and pinning migrations"
readmeQualityOk: true
url: "https://github.com/conda-forge/conda-forge-bot"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 77
forks: 102
openIssues: 297
closedIssues: 2134
watchers: 10
contributors: 84
recentReleases: 0
createdAt: "2018-02-25T00:00:50Z"
lastCommitAt: "2026-11-07T16:12:29Z"
lastReleaseAt: "2024-08-06T21:42:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 57
maintainers: ["regro-cf-autotick-bot", "beckermr", "mgorny"]
openGraphImageUrl: "https://opengraph.githubassets.com/5073239f9f095f3330f34a4694d61c633889d46a3114bb6a94b5178ae0010cce/conda-forge/conda-forge-bot"
fundingLinks: ["GITHUB:https://github.com/numfocus", "CUSTOM:https://numfocus.org/donate-to-conda-forge"]
---

# conda-forge-bot

the actual bot in an actual place doing an actual thing

## Table of Contents

- [What has the bot done recently?](#what-has-the-bot-done-recently)
- [Starting and Stopping the Worker](#starting-and-stopping-the-worker)
- [User Documentation](#user-documentation)
- [Developer Documentation](#developer-documentation)

## What has the bot done recently?

Check out the following pages for status information on the bot:

- [PRs](https://github.com/pulls?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+author%3Aregro-cf-autotick-bot+archived%3Afalse+)
- [running jobs](https://github.com/conda-forge/conda-forge-bot/actions?query=is%3Ain_progress++)
- [status page](https://conda-forge.org/status/#current_migrations)

## Starting and Stopping the Worker

In order to start the worker, make a commit to main with the file `please.go`
in the `autotick-bot` subdirectory.

If you want to stop the worker, rename the file to `please.stop`, and it will not restart
itself on the next round.

## User Documentation

**WARNING: This section is not complete.**

### Configuring the Bot via the `conda-forge.yml`

The primary way to configure the bot for your feedstock is through the `bot` section in…
