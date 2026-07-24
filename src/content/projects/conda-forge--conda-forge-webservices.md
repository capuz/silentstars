---
repo: "conda-forge/conda-forge-webservices"
name: "conda-forge-webservices"
description: "the web app deployed to run conda-forge admin commands and linting"
readmeQualityOk: true
url: "https://github.com/conda-forge/conda-forge-webservices"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 14
forks: 38
openIssues: 66
closedIssues: 166
watchers: 11
contributors: 48
recentReleases: 0
createdAt: "2016-03-28T21:24:46Z"
lastCommitAt: "2026-07-24T06:07:26Z"
lastReleaseAt: "2024-09-21T20:47:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 71
maintainers: ["conda-forge-admin", "beckermr", "h-vetinari"]
openGraphImageUrl: "https://opengraph.githubassets.com/20caf0bb6ead1d6f2739e3a2bf8290f9d8fdb44b0911cc79fab1f5027d087235/conda-forge/conda-forge-webservices"
fundingLinks: ["GITHUB:https://github.com/numfocus", "CUSTOM:https://numfocus.org/donate-to-conda-forge"]
---

# conda-forge-webservices

This repository is the source for the Heroku hosted webapp which powers the conda-forge-admin
commands and lints conda-forge's recipes. The linting itself comes from conda-smithy
(https://github.com/conda-forge/conda-smithy).

## Configuration
This app generates GitHub App tokens for the conda-forge-webservices[bot] in order to function. It also
uses a single machine user with no special permissions in order to make forks for rerendering. Ask a member of
`@conda-forge/core` for details if you need them.

## Testing

The tests for this repo require a GitHub API key which is not available on forks. We use a merge queue to handle this.
The tests in your PR will run, but some of them will be skipped. Once the PR is merged, it will be put into a queue on the
upstream repo for complete testing. If it passes, it will be merged. If it does not pass, the PR will be kicked out of the
queue and we will have to try again. Only maintainers on the upstream repo can add tests to the merge queue. You can
bump `@conda-forge/core` for a review and merge into the queue.
