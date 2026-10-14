---
repo: "project-koku/koku"
name: "koku"
description: "An open source solution for cost management of cloud and hybrid cloud environments."
readmeQualityOk: true
url: "https://github.com/project-koku/koku"
homepage: "https://github.com/project-koku/koku/tree/main/docs"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["koku", "cost-estimation", "cost-control", "cost-optimization", "cost", "cloud"]
stars: 316
forks: 130
openIssues: 0
closedIssues: 0
watchers: 17
contributors: 57
recentReleases: 0
createdAt: "2018-03-23T14:29:23Z"
lastCommitAt: "2026-10-14T08:57:58Z"
lastReleaseAt: "2021-04-08T17:57:26Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 39
maintainers: ["martinpovolny", "bacciotti", "myersCody"]
openGraphImageUrl: "https://opengraph.githubassets.com/b86a07373f5798ccd40299a080f0835368aa17cfc671345ed6d2ebc996e6e545/project-koku/koku"
discussionCount: 6
---

# Koku README

## About

Koku's goal is to provide an open source solution for cost management of cloud and hybrid cloud environments. This solution is offered via a web interface that exposes resource consumption and cost data in easily digestible and filterable views. The project also aims to provide insight into this data and ultimately provide suggested optimizations for reducing cost and eliminating unnecessary resource usage.

Full documentation is available in [docs folder](https://github.com/project-koku/koku/blob/HEAD/docs).

To submit an issue please visit https://issues.redhat.com/projects/COST/.

## Getting Started

This project is developed using Python 3.11. Make sure you have at least this version installed.

### Prerequisites

- Docker or Rancher Desktop
- (macOS only) [Install Homebrew](https://brew.sh/)

## Development

To get started developing against Koku you first need to clone a local
copy of the git repositories.:

    git clone https://github.com/project-koku/koku
    git clone https://github.com/project-koku/nise

This project is developed using the Django web framework. Many
configuration settings can be read in from a `.env` file. To configure,
do the…
