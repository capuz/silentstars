---
repo: "Magisk-Modules-Alt-Repo/json"
name: "json"
description: "Magisk Manager JSON file generation for the repository list"
readmeQualityOk: true
url: "https://github.com/Magisk-Modules-Alt-Repo/json"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["non-module"]
stars: 131
forks: 23
openIssues: 1
closedIssues: 4
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2020-10-09T23:14:45Z"
lastCommitAt: "2026-11-07T13:54:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 44
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/53d7b49364fb1f1885927672b7ed90b8df4182c42da1dc41bd08869176d5649e/Magisk-Modules-Alt-Repo/json"
---

# JSON
Magisk Manager JSON file generation for the repository list

# Why?
Magisk Manager custom repositories work by providing a JSON file with information about each of the available modules, as opposed to providing a GitHub URL. This repository is responsible for keeping the JSON file updated, and thereby keeping the Magisk Manager repostory list updated.

# How?
A simple Python script called `generate.py` takes an access token as an input, and prints a the JSON format for the Alt-Repo. We use a GitHub Action to take care of the commit process to this repository.
