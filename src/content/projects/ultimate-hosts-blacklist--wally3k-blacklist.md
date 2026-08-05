---
repo: "Ultimate-Hosts-Blacklist/WaLLy3K_Blacklist"
name: "WaLLy3K_Blacklist"
description: "Test of https://v.firebog.net/hosts/static/w3kbl.txt"
readmeQualityOk: true
url: "https://github.com/Ultimate-Hosts-Blacklist/WaLLy3K_Blacklist"
language: "Apex"
languages: ["Apex"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2018-03-18T17:27:46Z"
lastCommitAt: "2026-08-05T06:08:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 66
maintainers: ["ultimate-hosts-blacklist-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6deef20c69a6930fcd5a0f8e927d46e8f79ba5c5702bcac2928ec1624de8636/Ultimate-Hosts-Blacklist/WaLLy3K_Blacklist"
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
