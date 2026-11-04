---
repo: "Percona-Lab/pmm-submodules"
name: "pmm-submodules"
description: "A repo dedicated to building Percona Monitoring and Management (PMM)"
readmeQualityOk: true
url: "https://github.com/Percona-Lab/pmm-submodules"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["pmm"]
stars: 14
forks: 38
openIssues: 0
closedIssues: 0
watchers: 22
contributors: 43
recentReleases: 0
createdAt: "2017-12-14T18:25:41Z"
lastCommitAt: "2026-11-04T13:05:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 87
undervaluedScore: 63
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a097adca075f9880069144720c683e4f58091371a845c17e44467a92652f406e/Percona-Lab/pmm-submodules"
---

# PMM Submodules

This repository serves the purpose of creating and/or updating the feature builds for PMM Server and PMM Client. It is auxiliary
to our build system managed by Jenkins as it helps pull the right branches from different repositories that PMM [consists of](https://github.com/percona/pmm/blob/main/CONTRIBUTING.md#project-repos-structure).

# Installation of dependencies

If you intend to build PMM with 'ci.py' Python script, then you need to install the dependencies:

```shell
pip install -r requirements.txt
```

## How to create a feature build

To create a feature build (FB) you have to edit `ci.yml` and specify the branches that you want the system to pull when building a feature. For example:

```yaml
deps:
  - name: pmm
    branch: PMM-0000-feature-branch
  - name: pmm-qa
    branch: PMM-0000-bugfix-branch
```

To build from a fork, you need to additionally specify `url` for the dependency, for example:

```yaml
deps:
  - name: pmm-server
    url: https://github.com/<your-account>/pmm-server
    branch: PMM-0000-feature-branch
```

Next, commit your changes to git and push them to the repo:

```shell
git add ci.yml
git commit -m 'use custom branches'
git push…
