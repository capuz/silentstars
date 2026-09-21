---
repo: "guardian/giant"
name: "giant"
description: "Platform for journalists to search, analyse, categorise and share unstructured data"
readmeQualityOk: true
url: "https://github.com/guardian/giant"
language: "Scala"
languages: ["Scala", "TypeScript"]
languagePcts: [53, 32]
topics: ["production"]
stars: 60
forks: 4
openIssues: 118
closedIssues: 94
watchers: 11
contributors: 31
recentReleases: 0
createdAt: "2021-05-14T10:59:08Z"
lastCommitAt: "2026-09-21T09:14:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 45
maintainers: ["philmcmahon", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/3facc30a7e1eefcbd019d1d6d7463694dc737e5e88ff10c95e1cdbe51118d5d6/guardian/giant"
---

# Giant

Giant makes it easier for journalists to search, analyse, categorise and share unstructured data.
It takes many file formats, indexes them (including converting images to text using OCR) and
provides a UI for search. Users can upload their own files but it also scales up to terabytes
of data.

Giant is part of the Guardian's "Platform for Investigations" suite, you will see references
to `pfi` in the code. Under development since 2017, it's written in Scala and Typescript and
is maintained by the Investigations & Reporting team.

If Giant doesn't fit your needs, check out [Aleph](https://github.com/alephdata/aleph/) from
the OCCRP and [Datashare](https://github.com/icij/datashare) from the ICIJ.

## (Users) Getting started

- [Getting started as a normal user](https://github.com/guardian/giant/blob/HEAD/docs/01-user-quickstart.md)
- [Getting started as an administrator](https://github.com/guardian/giant/blob/HEAD/docs/02-admin-quickstart.md)

## (Developers) Getting started - running on your local machine

Giant has the following pre-requisites for local development:

- [SBT](https://www.scala-sbt.org/)
- [Mise](https://mise.jdx.dev/installing-mise.html) or your choice of…
