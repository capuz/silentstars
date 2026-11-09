---
repo: "FerroHEALTH/FerroEHR"
name: "FerroEHR"
description: "A pure-Rust openEHR Clinical Data Repository: ITS-REST 1.1.0, AQL 1.1, PostgreSQL 18-native storage."
readmeQualityOk: true
url: "https://github.com/FerroHEALTH/FerroEHR"
homepage: "https://ferroehr.eu/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cdr", "clinical-data", "ehr", "openehr", "openehr-standard", "ferroehr"]
stars: 68
forks: 4
openIssues: 77
closedIssues: 3107
watchers: 1
contributors: 39
recentReleases: 0
createdAt: "2026-07-01T19:18:07Z"
lastCommitAt: "2026-11-09T00:17:28Z"
lastReleaseAt: "2026-07-21T00:09:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 37
maintainers: ["rubentalstra"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1286429270/f3893e25-3f48-4171-a60c-72a5916fbe02"
fundingLinks: ["GITHUB:https://github.com/rubentalstra"]
discussionCount: 1
---

**The openEHR health record server, written in Rust, with every conformance claim measured.**

[Documentation](https://ferroehr.eu/docs/latest/) ·
[Live sandbox](https://sandbox.ferroehr.eu) ·
[Quick start](#quick-start) ·
[Commercial licence](https://ferroehr.eu/docs/latest/licensing.html)

**Project**<br>

**Quality and security**<br>

**openEHR conformance**<br>
**Compliance**<br>

## What FerroEHR does

FerroEHR stores patient health records. It keeps them in openEHR, an open
standard that describes clinical information (a blood pressure, a diagnosis,
a discharge letter) independently of any one software product. Every change
is kept as a new version, so the full history of a record stays readable and
nothing is ever overwritten.

Applications such as an electronic patient record, a nursing app or a
research dashboard all read and write through one standard interface. The
data does not belong to the application that wrote it: you can replace an
application, or add a new one, and the records stay where they are. That
ends the usual lock-in, where moving to a new system means a migration
project and a loss of history.

### Who it is for

- **Hospitals and care providers** that…
