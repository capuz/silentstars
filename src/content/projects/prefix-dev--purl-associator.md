---
repo: "prefix-dev/purl-associator"
name: "purl-associator"
description: "PURL ↔ conda-forge mapping with auto-inference + edit-via-PR workflow"
readmeQualityOk: true
url: "https://github.com/prefix-dev/purl-associator"
homepage: "https://prefix-dev.github.io/purl-associator/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [49, 48]
stars: 10
forks: 3
openIssues: 3
closedIssues: 5
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-04-26T20:49:27Z"
lastCommitAt: "2026-07-29T06:13:29Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 51
maintainers: ["purl-associator-app[bot]", "tdejager", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8753f03db6355b08d8a1b5328431f5fcb2313ee6d819a766b487d9442f976ff/prefix-dev/purl-associator"
---

# PURL Associator

This repository maintains canonical **conda-forge package identity mappings**.
Each mapping record is keyed by conda-forge package name and carries identifiers
that downstream security tooling can use:

- a primary Package URL (**PURL**) and optional alternative PURLs
- optional CPE 2.3 vendor/product prefixes for NVD matching
- package context such as latest observed version, recipe/source URLs, summary,
  and download counts

CVE assignment, OpenVEX review state, AI CVE drafts, and SBOM-derived findings
are intentionally out of scope. A downstream CVE project should consume the
identity mapping payload produced here, enumerate conda-forge versions there,
and join those versions with OSV/NVD affected-version data there.

## Data model

The core object is a conda-forge package identity record:

```json
{
  "name": "ncurses",
  "version": "6.5",
  "purl": "pkg:github/ThomasDickey/ncurses-snapshots",
  "type": "github",
  "namespace": "ThomasDickey",
  "pkg_name": "ncurses-snapshots",
  "alternative_purls": [],
  "cpes": [
    "cpe:2.3:a:gnu:ncurses",
    "cpe:2.3:a:invisible-island:ncurses"
  ],
  "status": "verified"
}
```

PURLs identify source/package…
