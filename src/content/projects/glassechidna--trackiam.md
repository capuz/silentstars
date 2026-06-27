---
repo: "glassechidna/trackiam"
name: "trackiam"
description: "A project to collate IAM actions, AWS APIs and managed policies from various public sources."
url: "https://github.com/glassechidna/trackiam"
homepage: "https://glassechidna.github.io/trackiam/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["aws", "aws-sdk", "golang", "iam", "aws-iam"]
stars: 305
forks: 25
openIssues: 18
closedIssues: 4
watchers: 20
contributors: 4
recentReleases: 0
createdAt: "2019-10-20T06:08:36Z"
lastCommitAt: "2026-06-27T00:35:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 82
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/216315825/21773800-f701-11e9-9963-4ea0ae6304a3"
---

# AWS IAM Tracker

This project collects IAM actions, AWS APIs and managed policies from various public sources.

You can explore the data collected using [the static site](https://glassechidna.github.io/trackiam/).

Collected data is published to the [policies](/policies) and [services](/services) folders in this repo.

Thank you to [alanakirby/aktion](https://github.com/alanakirby/aktion) for originally 
having this idea and being gracious about me shamelessly ripping it off.
	
# Stats

* Unique services: 458
* Unique actions: 21782
* Managed policies: 1509

Most common managed policy name prefixes:

| Policy ARN | Count |
| ------ | ----- |
| `arn:aws:iam::aws:policy/AWS*` | 404 |
| `arn:aws:iam::aws:policy/Amazon*` | 371 |
| `arn:aws:iam::aws:policy/aws-service-role/*` | 345 |
| `arn:aws:iam::aws:policy/service-role/*` | 221 |
| `arn:aws:iam::aws:policy/job-function/*` | 8 |
| Other | 160 |

The following table summarises the AWS APIs. 

* The first column is the name of the API as far as IAM policies are concerned. 
* The second column is IAM actions that exactly match the names of invokable 
  APIs exposed by AWS.
* The third column is invokable APIs that don't have a…
