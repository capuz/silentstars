---
repo: "getsentry/sentry-infra-tools"
name: "sentry-infra-tools"
description: "Standalone repo for sentry-kube and other related tools"
readmeQualityOk: true
url: "https://github.com/getsentry/sentry-infra-tools"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["tag-production"]
stars: 8
forks: 2
openIssues: 9
closedIssues: 3
watchers: 24
contributors: 132
recentReleases: 0
createdAt: "2024-08-29T21:24:43Z"
lastCommitAt: "2026-10-21T20:00:50Z"
lastReleaseAt: "2024-10-17T23:04:29Z"
status: "watched"
tags: ["community_watch", "funded"]
healthScore: 78
undervaluedScore: 52
maintainers: ["mwarkentin", "tnt-sentry", "sentry-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a53e7774487f8f35fce4f902c06bd43f0865773c16c88a98b8633de5939e844f/getsentry/sentry-infra-tools"
fundingLinks: ["CUSTOM:https://sentry.io/pricing/", "CUSTOM:https://sentry.io/"]
---

# `sentry-kube`

```
   __                  __
  /  |                /  |
  $$ |   __  __    __ $$ |____    ______
  $$ |  /  |/  |  /  |$$      \  /      \
  $$ |_/$$/ $$ |  $$ |$$$$$$$  |/$$$$$$  |
  $$   $$<  $$ |  $$ |$$ |  $$ |$$    $$ |
  $$$$$$  \ $$ \__$$ |$$ |__$$ |$$$$$$$$/
  $$ | $$  |$$    $$/ $$    $$/ $$       |
  $$/   $$/  $$$$$$/  $$$$$$$/   $$$$$$$/

  Get kubed.
```

## Installation

Run `./install.sh` to install sentry-kube.

## Releasing a new version

Versioning note: When cutting a new release we should try to follow [SemVer](https://semver.org/).

To cut a new release, we use the `Release` Github Actions Workflow. This can be triggered manually using the [UI](https://github.com/getsentry/sentry-infra-tools/actions/workflows/release.yml)

Or with the [`gh`](https://cli.github.com) CLI:

```
gh workflow run Release --field version=0.0.33
```

## Help

All commands support `--help`, so please reference this.

```shell
sentry-kube --help
```

## Emergency sentry-options changes

`sentry-kube options` reads and makes incident-only changes directly to the
live `sentry-options` ConfigMaps. It does not invoke GoCD or GitHub Actions.
It discovers the relevant…
