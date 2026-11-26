---
repo: "materialyzeai/flamyngo"
name: "flamyngo"
description: "Flask frontend for MongoDB"
readmeQualityOk: true
url: "https://github.com/materialyzeai/flamyngo"
language: "Python"
languages: ["Python", "HTML", "JavaScript"]
languagePcts: [41, 27, 25]
stars: 15
forks: 7
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2016-02-21T05:00:54Z"
lastCommitAt: "2026-11-26T12:56:51Z"
lastReleaseAt: "2016-08-11T12:13:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 43
maintainers: ["shyuep"]
openGraphImageUrl: "https://opengraph.githubassets.com/438652415766eedad0cf9ea301976ad586e661546d73650a7eda99f4802ef3c5/materialyzeai/flamyngo"
---

# Flamyngo

Flamyngo is a YAML-powered Flask frontend for MongoDB. The aim is to delegate
most settings to a YAML configuration file, which then allows the  underlying
code to be reused for any conceivable collection. The official web page is at
https://materialsvirtuallab.github.io/flamyngo/.

Complete change log: [link](https://materialsvirtuallab.github.io/flamyngo//CHANGES).

# Usage

Install via pip:

```bash
pip install flamyngo
```

Create your `.flamyngo.yaml`.

```bash
flm --config <path/to/config.yaml>
```

If `--config` is not provided, it defaults to `~/.flamyngo.yaml`.

# Configuration

A sample commented configuration yaml file is given below. You can start from
the one below and customize it to suit your needs.
