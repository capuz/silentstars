---
repo: "mitodl/open-edx-plugins"
name: "open-edx-plugins"
description: "A repository of plugins for extending and customizing the behavior of Open edX projects"
readmeQualityOk: true
url: "https://github.com/mitodl/open-edx-plugins"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 10
forks: 6
openIssues: 9
closedIssues: 30
watchers: 18
contributors: 23
recentReleases: 0
createdAt: "2021-09-03T17:29:51Z"
lastCommitAt: "2026-11-13T11:13:24Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 94
undervaluedScore: 65
maintainers: ["renovate[bot]", "asadali145", "blarghmatey"]
openGraphImageUrl: "https://opengraph.githubassets.com/5745074f73bfe071f86c784a0dfea8b5f60f7804ecc948112163b6b33e924625/mitodl/open-edx-plugins"
---

# Important

Ensure you update the version number in `src/<plugin>/pyproject.toml` before any merge to `main`.

# Build and Publish

A [build and publish pipeline](https://cicd.odl.mit.edu/teams/main/pipelines/publish-open-edx-plugins-pypi) now exists that will automatically build, package, and publish each plugin to PyPI. The [pipeline definition](https://github.com/mitodl/ol-infrastructure/blob/main/src/ol_concourse/pipelines/open_edx/open_edx_plugins/build_publish_plugins.py) discovers plugins from `src/*/pyproject.toml`, so a new plugin needs no infrastructure code change: regenerate the definition from an updated checkout of this repo and re-apply it with `fly set-pipeline`.

# Instructions to install and test the plugins:

See [this guide](https://github.com/mitodl/open-edx-plugins/blob/HEAD/docs/README.rst) for a step-by-step walkthrough.
