---
repo: "Ultimate-Hosts-Blacklist/smed79_blacklist_nsfw"
name: "smed79_blacklist_nsfw"
description: "Test of https://raw.githubusercontent.com/smed79/blacklist/master/extra/nsfw.txt"
readmeQualityOk: true
url: "https://github.com/Ultimate-Hosts-Blacklist/smed79_blacklist_nsfw"
language: "Apex"
languages: ["Apex"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2019-08-05T12:49:23Z"
lastCommitAt: "2026-08-29T17:28:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 78
maintainers: ["ultimate-hosts-blacklist-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/eba9907dcaafb4cde295391d0cd419ebdfd59b750df026772b94c54ef3da26c8/Ultimate-Hosts-Blacklist/smed79_blacklist_nsfw"
fundingLinks: ["GITHUB:https://github.com/funilrys", "KO_FI:https://ko-fi.com/mitchellkrog"]
---

# About this repository

This is an input source of the Ultimate Hosts Blacklist project.
Its objective is to test and provide a cleaned version the upstream list.

## Understanding the structure

### `.pyfunceble` directory

The `.pyfunceble` directory is the directory that PyFunceble consider as its
configuration directory.
In other words, it is where PyFunceble stores everything that has nothing to
do with the test results.

### `output` directory

The `output` directory is the directory where the results of the execution of
PyFunceble is stored until a test is complete (all subjects tested).

### `info.json`

The `info.json` file is interpreted by our launcher. It describes the
input source to work with, where to fetch it and when we fetch it.

### `clean.list` file

The `clean.list` file contains all `ACTIVE` results of
PyFunceble.

### `domains.list` file

The `domains.list` file contains the decoded version of the upstream list.

### `ip.list` file

The `ip.list` file contains all `ACTIVE` IP tested by PyFunceble.

### `volatile.list` file

The `volatile.list` file contains the content of the `clean.list` file + the
list of subjects which were flagged by the SPECIAL rules…
