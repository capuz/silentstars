---
repo: "mozilla-releng/fxci-config"
name: "fxci-config"
description: "Configuration for the FirefoxCI Taskcluster instance"
readmeQualityOk: true
url: "https://github.com/mozilla-releng/fxci-config"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 37
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 65
recentReleases: 0
createdAt: "2024-03-25T19:34:07Z"
lastCommitAt: "2026-09-11T08:14:34Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 79
maintainers: ["ahal", "jwmossmoz", "jcristau"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6e8e043872a5db67ba588a3da64b6716fa54eb0990a9bca6d011c2e67e56b25/mozilla-releng/fxci-config"
---

# Firefox-CI Configuration

This repository contains configuration for the Firefox-CI Taskcluster instance,
the CI for Firefox and other Mozilla repositories.

Specifically, this configuration does not "ride the trains".  Instead, the head
of the default branch of this repository applies to all Gecko projects and
products.  Previous revisions exist for historical context, but have no
relevance to production.

Configuration in this repository includes:

* Information about the trains themselves -- Mercurial repositories, access
  levels, etc.
* Information about external resources -- URLs, pinned fingerprints, etc.
* Settings that should apply to all branches at once -- for example,
  proportional allocation of work across workerTypes

This repository was originally proposed in [Taskcluster
RFC#91](https://github.com/taskcluster/taskcluster-rfcs/issues/91).

## Structure

Data is stored in distinct YAML files in the root of this repository.  Each
file begins with a lengthy comment describing

* The purpose of the file
* The structure of the data in the file

Code to implement this configuration is in `src/ciadmin`.  The implementation
of `fxci` is in `src/fxci`.

## Access

Data in…
