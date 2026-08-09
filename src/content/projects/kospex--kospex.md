---
repo: "kospex/kospex"
name: "kospex"
description: "Tools to help know your code and know your developers"
readmeQualityOk: true
url: "https://github.com/kospex/kospex"
homepage: "https://kospex.io/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [66, 34]
stars: 9
forks: 4
openIssues: 35
closedIssues: 72
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2023-08-10T01:24:07Z"
lastCommitAt: "2026-08-09T04:30:41Z"
lastReleaseAt: "2026-07-27T04:29:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 88
maintainers: ["sabbaticas", "bergoinoz"]
openGraphImageUrl: "https://opengraph.githubassets.com/056b81c032f6ced44684b3bbf4e53e24abc5748cfd91f4bd0f0a3b3b3c19d69a/kospex/kospex"
---

# kospex

Kospex is a CLI and Web application gain insights into your developers, opensource maintenacne and technology landscape.

Inspired by the excellent [Mergestat lite](https://github.com/mergestat/mergestat-lite) to model data from git repositories.

## Step 1: Installation, setup and usage

kospex is currently a python module with commands. It works by analysing cloned repositories on the filesystem.

**Optional but strongely recommended** - use a python virtual env.

Installing using pip:

> pip install kospex

For complexity and file type analysis, kospex uses the scc binary.
It is optional, but enables much better file type guessing and provide complexity metrics.
Follow the instructions for installing [scc](https://github.com/boyter/scc)

### Step 2: Initial kospex setup

kospex uses a git repositoriy layout for cloning repos to disk.

The following structure is used \
/BASE/GIT_SERVER/ORG/REPO

If you are ok to use the ~/code directory for cloned repos, then run:
> kospex init --default

See section "Git code layout for running analysis" below for more details.

### Step 3: sync some data and play with some commands

For an existing repo on disk:
> kospex sync…
