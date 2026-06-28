---
repo: "w3c/webref"
name: "webref"
description: "Machine-readable references of terms defined in web browser specifications"
url: "https://github.com/w3c/webref"
homepage: "https://w3c.github.io/webref/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["idl", "css", "definitions-data", "web-platform"]
stars: 445
forks: 127
openIssues: 52
closedIssues: 155
watchers: 21
contributors: 26
recentReleases: 0
createdAt: "2017-07-03T06:50:01Z"
lastCommitAt: "2026-06-28T01:46:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 38
maintainers: ["github-actions[bot]", "dependabot[bot]", "tidoust"]
openGraphImageUrl: "https://opengraph.githubassets.com/3035a93888dfbdd1d761519c60fc202fffa419fd5cd6787366d62f789d32375f/w3c/webref"
---

# Webref

## Description

This repository contains **machine-readable references of CSS properties, definitions, IDL, and other useful terms that can be automatically extracted from web browser specifications** (see a [list of projects known to use the data](#known-consumers)). The contents of the repository are updated automatically **every 6 hours** (although note information about published _[/TR/](https://www.w3.org/TR/)_ versions of specifications are updated only once per day).

Specifications covered by this repository are technical Web specifications that appear in [browser-specs](https://github.com/w3c/browser-specs).

The `main` branch of this repository contains **automatically-generated raw extracts** from web browser specifications. These extracts come with no guarantee on validity or consistency. For instance, if a specification defines invalid IDL snippets or uses an unknown IDL type, the corresponding IDL extract in this repository will be invalid as well.

The `curated` branch contains **curated extracts**. Curated extracts are generated from raw extracts in the [`ed`](ed) folder by applying manually-maintained patches to fix invalid content and provide [validity…
