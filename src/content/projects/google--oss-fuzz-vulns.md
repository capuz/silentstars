---
repo: "google/oss-fuzz-vulns"
name: "oss-fuzz-vulns"
description: "OSS-Fuzz vulnerabilities for OSV."
readmeQualityOk: true
url: "https://github.com/google/oss-fuzz-vulns"
homepage: "https://osv.dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 194
forks: 57
openIssues: 3
closedIssues: 13
watchers: 13
contributors: 20
recentReleases: 0
createdAt: "2021-03-23T06:04:38Z"
lastCommitAt: "2026-11-08T14:14:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 44
maintainers: ["osv-robot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b84ece99385659f46c591f339dd37886ec3c028011c6c219c500c0193e4ffd86/google/oss-fuzz-vulns"
---

# OSS-Fuzz vulnerabilities

This is a repo for recording disclosed [OSS-Fuzz](https://github.com/google/oss-fuzz)
vulnerabilities, and acts as the source of truth for OSS-Fuzz vulnerabilities in
[OSV].

Each OSS-Fuzz vulnerability has precise impacted version and commit version
information added by OSV.

Users may submit PRs to update any information here.

## Format spec

The format is described [here](https://ossf.github.io/osv-schema/).

## Automation

Vulnerabilities undergo **automated bisection** and **repository analysis** as part of 
[OSV] to determine the affected commit ranges and versions. They are then
automatically imported in this repository.

Any user changes to vulnerability files in this repository will trigger a
re-analysis by OSV within a few minutes (
[example change](https://github.com/google/oss-fuzz-vulns/commit/8546454f8ad92bee001ca3be5b4c236bcc2df3d5),
[re-analysis](https://github.com/google/oss-fuzz-vulns/commit/5a1e660f6e8ddd3d3db513f976f4987287fc258e)).

OSV will also regularly recompute affected versions and detect cherry picks
across different branches for each vulnerability…
