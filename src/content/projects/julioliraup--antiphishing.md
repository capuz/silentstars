---
repo: "julioliraup/Antiphishing"
name: "Antiphishing"
description: "Suricata rulesets to protect against phishing attack."
readmeQualityOk: true
url: "https://github.com/julioliraup/Antiphishing"
homepage: "https://julioliraup.github.io/AT"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["anti-phishing", "antiphishing", "openphish", "phishing", "phishstats", "ruleset", "suricata-rule", "suricata-rules", "ids", "ips"]
stars: 13
forks: 2
openIssues: 2
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2024-06-14T21:50:56Z"
lastCommitAt: "2026-07-30T06:07:02Z"
lastReleaseAt: "2026-07-14T15:55:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 80
maintainers: ["julioliraup"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/815329211/c30033b9-d5f7-44c7-84db-1078262bb2d8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T061101Z&X-Amz-Expires=300&X-Amz-Signature=34ac2f7721930521f49636f6c40f5be8dc5d4d6ffe4c6f49b6cff9a94709a707&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTM5MjE2MSwibmJmIjoxNzg1MzkxODYxLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.Yba2zi46prRlpFkHgge6sbWD_Op3oVG9hd5aMRAPtd0"
fundingLinks: ["GITHUB:https://github.com/julioliraup"]
---

[
[DONATE](https://github.com/julioliraup/Antiphishing/blob/HEAD/FUNDING.md) - [DASHBOARD VECTORS](https://julioliraup.github.io/AT) - [CONTRIBUTING](https://github.com/julioliraup/Antiphishing/blob/HEAD/CONTRIBUTING.md) - [SUBMIT A VECTOR](https://github.com/julioliraup/Antiphishing/blob/HEAD/julioliraup/Antiphishing/issues/new?q=state%3Aopen+label%3A%22Phishing+Vector%22) - [REST API CTI](https://github.com/julioliraup/AT/wiki/REST-API-USE) - [WIKI](https://github.com/julioliraup/Antiphishing/blob/HEAD/julioliraup/Antiphishing/wiki)
]

> Protect against phishing attacks

# Functionality

This rule is built using malicious URLs and domains involved in phishing attacks. We utilize some community APIs to construct these rules, and with them, we create TLS, DNS, and HTTP rules.

Our sources:
1. [Phishstats](https://phishstats.info)
2. [Openphish](https://openphish.com/)

Contribution: [CONTRIBUTING.md](https://github.com/julioliraup/Antiphishing/blob/main/CONTRIBUTION.md)

# Installation guide
  </a>

  </a>

  </a>

# General info
The ruleset is the `antiphishing.rules` file, which contains two rules (TLS, DNS) that depend on a `phishing.lst` list. Finally, there is another file…
