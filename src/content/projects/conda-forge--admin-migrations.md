---
repo: "conda-forge/admin-migrations"
name: "admin-migrations"
description: "repo to run background admin migrations of conda-forge feedstocks"
readmeQualityOk: true
url: "https://github.com/conda-forge/admin-migrations"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 7
forks: 9
openIssues: 1
closedIssues: 15
watchers: 8
contributors: 36
recentReleases: 0
createdAt: "2020-02-29T20:42:43Z"
lastCommitAt: "2026-07-16T05:58:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 81
maintainers: ["conda-forge-admin"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5b4915e0823cacf1d031e7cc05554602d246a333813f6caf358bacde93d724d/conda-forge/admin-migrations"
fundingLinks: ["GITHUB:https://github.com/numfocus", "CUSTOM:https://numfocus.org/donate-to-conda-forge"]
---

# admin-migrations

repo to run background admin migrations of conda-forge feedstocks

## How to Use this Repo

1. Write a subclass of `admin_migrations.base.Migrator`. You will need to
   fill out the `migrate` method. This method is called with the feedstock
   as the current working directory.
2. Add your migration class to the list in `admin_migrations.__main__.main`

GitHub actions is set to run once an hour on a cron job.

## Guidelines and Ground Rules

1. Don't migrate more than several hundred feedstocks per hour.
2. Make sure to put `[ci skip] [skip ci] [cf admin skip] ***NO_CI***` in any commits to
   avoid massive rebuilds.
3. Rate-limit commits to feedstocks to in order to reduce the load on our admin webservices.
4. Test your migration first. The `https://github.com/conda-forge/cf-autotick-bot-test-package-feedstock`
   is available to help test migrations.
5. GitHub actions has a `GITHUB_TOKEN` in the environment. Please do not exhaust this
   token's API requests.
6. Do not rerender feedstocks!

Items 1-3 are taken care of by the migrations code.

## Migration Progress

| migrator           | progress                                             | percent…
