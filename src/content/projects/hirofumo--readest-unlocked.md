---
repo: "hirofumo/readest-unlocked"
name: "readest-unlocked"
description: "Automatically builds an unlocked (premium client gates removed) Readest from upstream readest/readest via GitHub Actions"
readmeQualityOk: true
url: "https://github.com/hirofumo/readest-unlocked"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-06T06:53:17Z"
lastCommitAt: "2026-10-31T08:53:48Z"
lastReleaseAt: "2026-10-18T13:35:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 52
maintainers: ["hirofumo"]
openGraphImageUrl: "https://opengraph.githubassets.com/98e76e6a7a9a282526f8ecd2b99d33ad33524b96d9e8b9cb73ea4efeeb0f7611/hirofumo/readest-unlocked"
---

# Readest Unlocked

English | [中文](https://github.com/hirofumo/readest-unlocked/blob/HEAD/README.zh-CN.md)

An automatically built **unlocked** build of [Readest](https://github.com/readest/readest), with the premium client gates removed, published to this repository's [Releases](https://github.com/hirofumo/readest-unlocked/releases).

This repository is a build recipe, not a source tree and not a fork. It contains no upstream code: every release is built from an exact upstream tag plus the patch scripts in `tools/`, and the complete diff against that tag ships with the release as `unlock.patch` — so what changed is always readable, and never taken on trust.

## Client features

### Unlocked

The first five features run through the same client-side entitlement check. These builds force that check open, so the features are available to every account — including a signed-out free one.

| Feature | What it means in the app |
| --- | --- |
| Third-party cloud sync | WebDAV, an S3-compatible bucket, Google Drive, OneDrive and iCloud Drive can be configured and used. |
| Per-chapter read-aloud (TTS) audio download | Read Aloud audio can be downloaded chapter by chapter for offline…
