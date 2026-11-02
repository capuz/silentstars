---
repo: "hassio-addons/app-base-python"
name: "app-base-python"
description: "Docker Python base images (Alpine) - Home Assistant Community Apps"
readmeQualityOk: true
url: "https://github.com/hassio-addons/app-base-python"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [100]
topics: ["docker", "baseimage", "baseimage-docker", "home-assistant", "alpine", "python", "addons"]
stars: 18
forks: 6
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-04-05T20:40:58Z"
lastCommitAt: "2026-11-02T17:57:19Z"
lastReleaseAt: "2019-11-20T21:43:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 60
maintainers: ["renovate[bot]", "frenck"]
openGraphImageUrl: "https://opengraph.githubassets.com/9799c51c6685e17d9e70bb26002578d4babfe2f8545122e274599dc5441a4cfd/hassio-addons/app-base-python"
fundingLinks: ["GITHUB:https://github.com/frenck", "PATREON:https://patreon.com/frenck", "CUSTOM:https://frenck.dev/donate/"]
discussionCount: 1
---

# Home Assistant Community App: Python Base Images

Docker Python base images used by Home Assistant Community Apps.

## About

These are the Python3 app base images for the
Home Assistant Community Apps and are created to give the project more
control over the Python used.

Main reason for this, is because in Alpine 3.9 the shipped Python was broken
for aarch64 based systems and was also still on Python 3.6 instead of the
Python 3.7 (at time of creating this initial image).

This follows Home Assistant's base images, which made the same move.

## Changelog & Releases

This repository keeps a change log using [GitHub's releases][releases]
functionality. The format of the log is based on
[Keep a Changelog][keepchangelog].

Releases are based on [Semantic Versioning][semver], and use the format
of `MAJOR.MINOR.PATCH`. In a nutshell, the version will be incremented
based on the following:

- `MAJOR`: Incompatible or major changes.
- `MINOR`: Backwards-compatible new features and enhancements.
- `PATCH`: Backwards-compatible bugfixes and package updates.

## Support

Got questions?

You have several options to get them answered:

- The [Home Assistant Community Apps Discord chat…
