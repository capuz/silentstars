---
repo: "UKHSA-Internal/data-dashboard-infra"
name: "data-dashboard-infra"
description: "Infrastructure for UKHSA data dashboard"
readmeQualityOk: true
url: "https://github.com/UKHSA-Internal/data-dashboard-infra"
homepage: "https://ukhsa-dashboard.data.gov.uk"
language: "HCL"
languages: ["HCL", "JavaScript"]
languagePcts: [55, 31]
stars: 7
forks: 6
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 38
recentReleases: 0
createdAt: "2022-10-03T10:38:45Z"
lastCommitAt: "2026-09-18T08:27:33Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 81
maintainers: ["jrdh", "dependabot[bot]", "itsthatianguy"]
openGraphImageUrl: "https://opengraph.githubassets.com/a47b842712b691ebc5adf72b97b6d17d5232ad4d70c371db2fd8b390b4a5e786/UKHSA-Internal/data-dashboard-infra"
---

# UKHSA Data Dashboard Infrastructure

This repo contains the infrastructure to bootstrap our AWS accounts and deploy an instance of the [UKHSA Data Dashboard](https://ukhsa-dashboard.data.gov.uk) app.

The tooling and scripts in this repo are tested with Linux and Mac. If you're using Windows these may work with WSL2 🤞.

## Prerequisites

There are a few steps needed before you can get started:

1. [Setup an SSH key for GitHub](#setup-an-ssh-key-for-github)
2. [Clone this repo](#clone-this-repo)
3. [Install tools](#install-tools)
4. [Configure AWS SSO](#configure-aws-sso)
5. [Login to the GitHub CLI](#login-to-the-github-cli)
6. [Enable multi-platform Docker builds](#enable-multi-platform-docker-builds)

### Setup an SSH key for GitHub

Please follow the instructions here to [setup an SSH key for GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

### Clone this repo

Open a terminal and run the following commands:

```
git clone git@github.com:UKHSA-Internal/data-dashboard-infra.git
cd data-dashboard-infra
```

### Install tools

We use homebrew to manage our software dependencies. If you don't already…
