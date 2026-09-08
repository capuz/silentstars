---
repo: "getsentry/sentry-release-registry"
name: "sentry-release-registry"
description: "Meta repository with collected release history for SDKs and apps"
readmeQualityOk: true
url: "https://github.com/getsentry/sentry-release-registry"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["tag-production"]
stars: 20
forks: 21
openIssues: 3
closedIssues: 4
watchers: 34
contributors: 148
recentReleases: 0
createdAt: "2018-09-10T08:50:34Z"
lastCommitAt: "2026-09-08T08:16:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 91
undervaluedScore: 59
maintainers: ["sentry-release-bot[bot]", "pabloDeputter", "joshuarli"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ed432f862a07eba35d1f8e03a696c76893f6f6c97d2a84283db63757fd30b1a/getsentry/sentry-release-registry"
fundingLinks: ["CUSTOM:https://sentry.io/pricing/", "CUSTOM:https://sentry.io/"]
---

# Sentry Release Registry

This is a meta repository holding release information for Sentry repositories.

It centralizes information that used to be in different locations. It is known
to be used by at least:

- The [SDK docs][sdk-docs]
- The [Sentry Loader for JavaScript][js-loader]
- The [SDK update prompt][sdk-update-prompt] in Sentry event pages

[sdk-docs]: https://github.com/getsentry/sentry-docs/
[js-loader]: https://docs.sentry.io/platforms/javascript/#lazy-loading-sentry
[sdk-update-prompt]: https://github.com/getsentry/sentry/blob/ea791cb482d6f77481beed41e64ccc52ce10bc65/src/sentry/sdk_updates.py

## Layout

- `api-server`: A small web service that services up the contents of this repo
- `apps`: A registry of all binary apps and utilities we distribute
- `bin`: Some utility scripts to maintain the files here
- `packages`: A registry of all packages we publish that we want to collect
  releases of
- `sdks`: Canonical representations of packages that together form an sdk
- `marketing-slugs`: Short names for sdks the docs would use

Some of the information here is maintained as symlinks, so this repo only works
on unix platforms.

## AWS Lambda Layer API

Lambda layers are…
