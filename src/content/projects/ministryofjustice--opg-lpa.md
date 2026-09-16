---
repo: "ministryofjustice/opg-lpa"
name: "opg-lpa"
description: "The Office of the Public Guardian Lasting Power of Attorney online service: Managed by opg-org-infra & Terraform"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/opg-lpa"
language: "PHP"
languages: ["PHP"]
languagePcts: [74]
stars: 10
forks: 6
openIssues: 1
closedIssues: 4
watchers: 15
contributors: 44
recentReleases: 0
createdAt: "2019-07-05T15:37:34Z"
lastCommitAt: "2026-09-16T08:23:42Z"
lastReleaseAt: "2024-02-01T10:11:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 95
undervaluedScore: 67
maintainers: ["allenannom", "hawx", "andrewpearce-digital"]
openGraphImageUrl: "https://opengraph.githubassets.com/516d04da43164637699a2eeec653021afe68f82cdec9fadc2a91914f3da3782a/ministryofjustice/opg-lpa"
---

# LPA Online Service

The Office of the Public Guardian Lasting Power of Attorney online service: Managed by opg-org-infra &amp; Terraform.

## Pre-requisites for Local Development

Set up software on your machine required to run the application locally:

* Install `git`
* Install `make`
* Install [docker](https://docs.docker.com/get-docker/)
* Install [docker-compose](https://docs.docker.com/compose/install/)
* Install [homebrew](https://docs.brew.sh/) (Mac only)
* Install [uv](https://docs.astral.sh/uv/getting-started/installation/) (manages Python and all Python dependencies — replaces pip/virtualenv)

### Clone repo

Download the repo via:

```bash
git clone https://github.com/ministryofjustice/opg-lpa.git
cd opg-lpa
```

### Install pre-commit hooks (Mac)

Install the precommit hooks and dependencies in the root of the repo directory:

```bash
brew install golang

# python code linting
brew install black

# javascript code linting
brew install eslint

# Go code fortmatting/tidying
brew install go

brew install pre-commit

pre-commit install
```

Pre-commit hooks run any time you add a commit. They cover:

* PHP code formatting and fixing (via docker)
* Python code linting
*…
