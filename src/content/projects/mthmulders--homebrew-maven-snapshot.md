---
repo: "mthmulders/homebrew-maven-snapshot"
name: "homebrew-maven-snapshot"
description: "Homebrew tap to install the latest Maven build"
readmeQualityOk: true
url: "https://github.com/mthmulders/homebrew-maven-snapshot"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["hacktoberfest"]
stars: 9
forks: 1
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-09-27T07:52:06Z"
lastCommitAt: "2026-09-24T08:41:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 58
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6b382d32b4255aa40b834886d5f2a06bd9add807d9f52623c39f546366797381/mthmulders/homebrew-maven-snapshot"
---

# Maven snapshot builds - Homebrew tap

## Status
The tap seems to work quite well and is automatically updated with newer snapshot builds of Maven as soon as they are built.

**Note that this tap conflicts with the regular, stable Maven that is installed with `brew install maven`.**
**If you prefer a stable version of Maven, use that one.**

If you prefer a possibly less stable version of Maven with the latest features - _and possibly bugs_, you may choose to use this tap.

## Feedback and contributions
If you have feedback on the tap itself, please file an [issue](https://github.com/mthmulders/homebrew-maven-snapshot/issues) or even better, create a [pull request](https://github.com/mthmulders/homebrew-maven-snapshot/pulls).
See under [Development](#development) for how to debug, troubleshoot or test.

Feedback on the Maven builds should **not** does not belong in this repository.
I will simply close such issues.
Instead, please report such feedback at [the Apache Software Foundation JIRA](https://issues.apache.org/jira/browse/MNG).

## How do I install this formula?
`brew install mthmulders/maven-snapshot/maven-snapshot`

Or `brew tap mthmulders/maven-snapshot` and then `brew…
