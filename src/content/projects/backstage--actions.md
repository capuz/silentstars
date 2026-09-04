---
repo: "backstage/actions"
name: "actions"
description: "Custom actions for automating Backstage workflows"
readmeQualityOk: true
url: "https://github.com/backstage/actions"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 23
forks: 23
openIssues: 2
closedIssues: 5
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2022-06-21T13:46:07Z"
lastCommitAt: "2026-09-04T08:10:50Z"
lastReleaseAt: "2023-02-08T18:29:09Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 65
undervaluedScore: 43
maintainers: ["freben", "fearphage", "polarp"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3c388cffb1b56502d1d6e7724b2f680b31d9b0b8875acff0d8798d2895dbd0f/backstage/actions"
---

# Backstage Actions

This repository contains GitHub actions related to Backstage. The goal of the
current actions are to help manage the maintenance of the main Backstage
repository.

## Usage

Each action in this repo can be used by referring to the foldername, for example:

```yaml
- name: yarn install
  uses: backstage/actions/yarn-install@v0.5.9
  with:
    cache-prefix: ${{ runner.os }}-v${{ matrix.node-version }}
```

## Releases

Releases are generated manually via [GitHub](https://github.com/backstage/actions/releases/new). Create the version tag for the next release, click "Generate release notes", and then publish the release.

## TODO

- [x] Get this repo set up with two initial actions, one for PR sync, and one
      for cron polling.
- [ ] Migrate all existing custom workflow scripts from backstage/backstage into
      these new actions.

  - [x] Migrate `.github/workflows/automate_merge_renovate_prs.yaml`
  - [ ] Migrate `.github/workflows/automate_review-labels-scheduled.yaml`
  - [x] Migrate `.github/workflows/automate_review-labels.yaml`
  - [x] Migrate `.github/workflows/sync_approve_renovate_pr.yaml`
  - [x] Migrate `.github/workflows/sync_issue-labels.yml`
  -…
