---
repo: "nationalarchives/tna-judgments-parser"
name: "tna-judgments-parser"
description: "Converts and parses UK Court Judgments for Find Case Law."
readmeQualityOk: true
url: "https://github.com/nationalarchives/tna-judgments-parser"
language: "HTML"
languages: ["HTML"]
languagePcts: [88]
stars: 13
forks: 8
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 29
recentReleases: 0
createdAt: "2022-02-18T13:17:06Z"
lastCommitAt: "2026-08-28T14:24:59Z"
lastReleaseAt: "2024-06-26T17:05:23Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 61
maintainers: ["dynamictulip", "renovate[bot]", "palmer-bailey"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f2e812c2f062a988efa075276bca9e6763e53877c41c4dab56ba0602bd6e41b/nationalarchives/tna-judgments-parser"
---

# Judgments parser

This parser converts UK judgments from .docx format to XML. It is written in C# and requires .NET 8.0.

* [Judgments parser](#judgments-parser)
  * [Release process](#release-process)
    * [Find Case Law](#find-case-law)
  * [Deployment](#deployment)
    * [Find Case Law](#find-case-law-1)
      * [Validating a deployment](#validating-a-deployment)
  * [Using the parser API](#using-the-parser-api)
    * [C# API](#c-api)
    * [CLI](#cli)
  * [Local development](#local-development)
    * [Dev Containers](#dev-containers)
    * [Pre-commit hooks](#pre-commit-hooks)
    * [Tests](#tests)
  * [Other Documentation](#other-documentation)

## Release process

### Find Case Law

> [!IMPORTANT]
> This section only covers Find Case Law. If you are trying to create a new release for another project, you should instead follow that project's release process.

1. Update the code
    - Make a new branch for the release
    - Update `version.targets` in the root of the repo with the new version number - this is used by the parser code to add `<uk:parser>x.x.x</uk:parser>` to the parsed xml outputs
    - Push the branch and open a new PR against `main`
    - Merge the PR
1.…
