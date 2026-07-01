---
repo: "openjdk/skara"
name: "skara"
description: "https://openjdk.org/projects/skara"
url: "https://github.com/openjdk/skara"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["openjdk", "skara", "git", "hg", "java"]
stars: 211
forks: 94
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 40
recentReleases: 0
createdAt: "2019-06-24T12:22:10Z"
lastCommitAt: "2026-07-01T07:05:11Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 33
maintainers: ["zhaosongzs", "edvbld", "erikj79"]
openGraphImageUrl: "https://opengraph.githubassets.com/870744cf58e0ddbd5d9b396bceba0597ee78ed7c71e70950c3b5d701e30023d6/openjdk/skara"
---

# OpenJDK Project Skara

The goal of Project Skara is to investigate alternative SCM and code review
options for the OpenJDK source code, including options based upon Git rather than
Mercurial, and including options hosted by third parties.

This repository contains tooling for working with OpenJDK projects and
their repositories. The following CLI tools are available as part of this
repository:

- git-jcheck - a backwards compatible Git port of [jcheck](https://openjdk.org/projects/code-tools/jcheck/)
- git-webrev - a backwards compatible Git port of [webrev](https://openjdk.org/projects/code-tools/webrev/)
- git-defpath - a backwards compatible Git port of [defpath](https://openjdk.org/projects/code-tools/defpath/)
- git-fork - fork a project on an external Git source code hosting provider to your personal space and optionally clone it
- git-sync - sync the personal fork of the project with the current state of the upstream repository
- git-pr - interact with pull requests for a project on an external Git source code hosting provider
- git-info - show OpenJDK information about commits, e.g. issue links, authors, contributors, etc.
- git-token - interact with a Git credential…
