---
repo: "Ultimate-Hosts-Blacklist/someonewhocares.org"
name: "someonewhocares.org"
description: "Test of http://someonewhocares.org/hosts/zero/hosts"
url: "https://github.com/Ultimate-Hosts-Blacklist/someonewhocares.org"
homepage: "http://someonewhocares.org/hosts/zero/"
language: "Apex"
languages: ["Apex"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2018-03-11T12:58:35Z"
lastCommitAt: "2026-07-04T19:20:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 71
maintainers: ["ultimate-hosts-blacklist-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5712fb1e3ff7873cd8fd031a476e07d481d4a1525d46c00de122fd63121f99ad/Ultimate-Hosts-Blacklist/someonewhocares.org"
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
