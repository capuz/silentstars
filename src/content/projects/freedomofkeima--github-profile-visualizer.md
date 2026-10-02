---
repo: "freedomofkeima/github-profile-visualizer"
name: "github-profile-visualizer"
description: "Visualize Github profile growth (followers, num repo, etc) with daily cron and Github Pages"
readmeQualityOk: true
url: "https://github.com/freedomofkeima/github-profile-visualizer"
homepage: "https://freedomofkeima.github.io/github-profile-visualizer/"
language: "Shell"
languages: ["Shell", "HTML"]
languagePcts: [80, 20]
topics: ["github", "github-stats", "github-statistics"]
stars: 19
forks: 5
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2018-10-01T17:45:37Z"
lastCommitAt: "2026-10-02T10:00:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 56
maintainers: ["freedomofkeima"]
openGraphImageUrl: "https://opengraph.githubassets.com/881e99d770c61ea19aa67cff793341968eff573c3b3687dacdca105c600bce11/freedomofkeima/github-profile-visualizer"
---

# Github Profile Visualizer

Visualize Github profile growth (followers, num repo, rank based on followers or num repo) with daily cron and Github Pages.

Available via Github Pages - [https://freedomofkeima.github.io/github-profile-visualizer/](https://freedomofkeima.github.io/github-profile-visualizer/).

## Make Your Own Github Pages

Github provides a free, static page websites via [Github Pages](https://pages.github.com/). In order to start using it, you need to:

* Fork this repo.
* Open your repo setting and scroll down to Github Pages. Change your `source` and save. Your setup should look like below.

* Clone your repo to your computer and run `sh init.sh GITHUB_USERNAME GITHUB_TOKEN`. Read the guide below on how to generate your token.
* Install `jq`. You can either use `sudo yum install jq` or `sudo apt-get install jq`, depending on your distro.
* Run `sh script.sh` (or `./script.sh`) to update and upload your data. Add cron job integration (explained below) to automatically update your repository everyday.
* Check if it works, visit `https://[GITHUB_USERNAME].github.io/github-profile-visualizer/`.

## Github Personal Access Token

To access Github, we need to create a…
