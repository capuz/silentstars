---
repo: "Ultimate-Hosts-Blacklist/www.blocklist.de"
name: "www.blocklist.de"
description: "Test of https://lists.blocklist.de/lists/all.txt"
url: "https://github.com/Ultimate-Hosts-Blacklist/www.blocklist.de"
language: "Apex"
languages: ["Apex"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2018-03-12T18:22:02Z"
lastCommitAt: "2026-06-23T23:16:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 80
maintainers: ["ultimate-hosts-blacklist-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3607e84c75df4c6860f2b918f2580834d1653b4bba99d8a5a9795710df67cb7/Ultimate-Hosts-Blacklist/www.blocklist.de"
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
