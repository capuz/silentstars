---
repo: "palantir/amalgomate"
name: "amalgomate"
description: "Go tool for combining multiple different main packages into a single program or library"
readmeQualityOk: true
url: "https://github.com/palantir/amalgomate"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["octo-correct-managed"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 1
watchers: 251
contributors: 38
recentReleases: 0
createdAt: "2016-11-15T17:54:35Z"
lastCommitAt: "2026-11-06T12:17:48Z"
lastReleaseAt: "2022-04-13T03:11:29Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 97
undervaluedScore: 40
maintainers: ["svc-excavator-bot", "svc-autorelease", "nmiyake"]
openGraphImageUrl: "https://opengraph.githubassets.com/81fee017d77b49f5d2a1a0b96e84d1af706a6a1eed8c8da52118a50ece2f8c44/palantir/amalgomate"
---

amalgomate
==========
`amalgomate` combines multiple different Go projects with `main` packages into a single Go program or library.

`amalgomate` is useful in situations where one may want to vendor and use the functionality of multiple Go `main` 
packages that don't provide libraries for accessing their functionality. Because `amalgomate` programmatically rewrites
the packages and provides an invocation mechanism for them, it provides a maintainable solution for using functionality
provided by such `main` packages without having to manually fork or rewrite the libraries.

`amalgomate` takes a configuration file that specifies the `main` packages that should be combined and an output
directory as arguments. It then does the following:

* Creates a directory named `internal` in the output directory
  * This directory acts as a de facto vendoring directory with rewritten imports
* Copies the projects for the specified inputs into the `amaglomated` directory
  * By default, it is assumed that the `main` package is the project root
  * If this is not the case, the configuration can be used to specify the degrees of separation between the `main`
    package and the root of the project…
