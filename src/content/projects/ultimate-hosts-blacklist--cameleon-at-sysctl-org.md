---
repo: "Ultimate-Hosts-Blacklist/cameleon_at_sysctl.org"
name: "cameleon_at_sysctl.org"
description: "Test of http://sysctl.org/cameleon/hosts"
readmeQualityOk: true
url: "https://github.com/Ultimate-Hosts-Blacklist/cameleon_at_sysctl.org"
homepage: "http://sysctl.org/cameleon/"
language: "Apex"
languages: ["Apex"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2018-03-11T12:22:03Z"
lastCommitAt: "2026-11-04T08:03:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 73
maintainers: ["ultimate-hosts-blacklist-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/baaa4ba82ce54204699145d418ef9bf914b4630127a4bab80a72e389b3cf387a/Ultimate-Hosts-Blacklist/cameleon_at_sysctl.org"
---

# About this repository

This is an input source of the Ultimate Hosts Blacklist project.
Its objective is to test and provide a cleaned version the upstream list.

## THIS INPUT SOURCE IS MANAGED BY THE [ULTIMATE HOSTS BLACKLIST](https://github.com/Ultimate-Hosts-Blacklist) COMMUNITY!

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

The…
