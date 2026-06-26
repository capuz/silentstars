---
repo: "emptymalei/social-pulse"
name: "social-pulse"
description: "my social pulse"
url: "https://github.com/emptymalei/social-pulse"
homepage: "https://emptymalei.github.io/social-pulse"
language: "SCSS"
languages: ["SCSS", "CSS"]
languagePcts: [50, 44]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-04-27T09:02:47Z"
lastCommitAt: "2026-06-26T21:30:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 72
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0b41e90b0afb7a93efa9d1988a4c66c59445d98d9889a37dd0a4349ab343f1c/emptymalei/social-pulse"
---

# social-pulse

Automated collection of social activities using GitHub Actions.

[Demo](https://pulse.leima.is/)

## How it works?

There are two components in this repo

1. Data collection: the python code in `pulse` folder will be executed regularly using cronjob in GitHub Actions.
2. Dashboard: the frontend code in `dashboard` folder takes the data and visualizes it.

## How to set up your own pulse?

Fork the repo, and change the configs.

1. Fork the repo. Make sure to allow GitHub Actions when forking.
2. Remove the data files in `dashboard/data`.
3. Change the `CNAME` file to adjust to your own domain name if needed. Otherwise, delete the file.
3. Change the configs (see below).

### Change the Configs

The config file is located in `configs/config.json`.

Change all the `user_id` fields in the config. Check the details of the `//` comments in the following example.

```
{
    "name": "social pulse",
    "base_folder": "dashboard/data",
    "enabled": [
        ["douban", "book_movie_music"]
    ],
    "combined": {
        "artifacts": {
            "local": "pulses.json"
        }
    },
    "social": {
        "douban": {
            "book_movie_music": {…
