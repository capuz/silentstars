---
repo: "openshift-eng/art-tools"
name: "art-tools"
description: "Automated Release Team tooling"
readmeQualityOk: true
url: "https://github.com/openshift-eng/art-tools"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 12
forks: 52
openIssues: 0
closedIssues: 0
watchers: 17
contributors: 75
recentReleases: 0
createdAt: "2018-08-15T18:52:23Z"
lastCommitAt: "2026-09-25T09:02:06Z"
lastReleaseAt: "2023-10-12T10:28:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 66
maintainers: ["lgarciaaco", "openshift-merge-bot[bot]", "redhat-chai-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/64e12476f21636ce65070168002cb2c9afa5d9ce97cfcd9b3d871509dba16196/openshift-eng/art-tools"
---

# art-tools

Collection of Release tools for managing OCP releases

- [Doozer](https://github.com/openshift-eng/art-tools/blob/HEAD/doozer) - cli tool for managing builds (and more)
- [Elliott](https://github.com/openshift-eng/art-tools/blob/HEAD/elliott) - cli tool for managing release advisories and bugs (and more)
- [pyartcd](https://github.com/openshift-eng/art-tools/blob/HEAD/pyartcd) - code for release pipelines
- [ocp-build-data-validator](https://github.com/openshift-eng/art-tools/blob/HEAD/ocp-build-data-validator) - schema validator for [ocp-build-data](https://github.com/openshift/ocp-build-data)
- [artcommon](https://github.com/openshift-eng/art-tools/blob/HEAD/artcommon) - common package used by Doozer, Elliott, pyartcd

## Setup

- Requires Python >= 3.11
- `git clone https://github.com/openshift-eng/art-tools.git`
- You will need to install local package dependencies, redhat certificates and configure kerberos for authentication before we get to installing python dependencies. See [Containerfile](https://github.com/openshift-eng/art-tools/blob/HEAD/.devcontainer/Containerfile) for details
- `make venv`
