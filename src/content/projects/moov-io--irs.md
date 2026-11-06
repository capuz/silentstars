---
repo: "moov-io/irs"
name: "irs"
description: "Internal Revenue Service (IRS) Filing Information Returns Electronically (FIRE)"
readmeQualityOk: true
url: "https://github.com/moov-io/irs"
homepage: "https://moov-io.github.io/irs/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["irs", "fire", "efile", "taxes"]
stars: 60
forks: 21
openIssues: 6
closedIssues: 14
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2020-06-29T18:30:04Z"
lastCommitAt: "2026-11-06T02:44:22Z"
lastReleaseAt: "2026-08-07T21:27:05Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 51
maintainers: ["adamdecaf", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e28d710133be4d56f40f3bd4c36a9b11caf8bdc4e6eb57f5334f169f21a471e7/moov-io/irs"
---

moov-io/irs
===

IRS implemented a reader, writer, and HTTP server for IRS electronic [Filing Information Returns
Electronically](https://www.irs.gov/e-file-providers/filing-information-returns-electronically-fire) (FIRE). Our tools and library operate at higher levels (JSON) which makes it easier for developers to leverage over the raw bytes (ASCII).

| Input      | Output     |
|------------|------------|
| JSON       | JSON       |
| ASCII FIRE | ASCII FIRE |
|            | PDF Form   |
|            | SQL        |

Docs: [Project](https://moov-io.github.io/irs/) | [API Endpoints](https://moov-io.github.io/irs/api/)

## Project Status

We are just getting started!

- [ ] 1099-MISC [About Form 1099-MISC](https://www.irs.gov/forms-pubs/about-form-1099-misc)
- [x] 1099-NEC [About Form 1099-NEC](https://www.irs.gov/forms-pubs/about-form-1099-nec)

... more to come, open an issue or pull request!

## Commands

Irs has command line interface to manage irs files and to lunch web service.

```
irs --help
```
```
Usage:
   [command]

Available Commands:
  convert     Convert irs file format
  help        Help about any command
  print       Print irs file
  validator   Validate irs file…
