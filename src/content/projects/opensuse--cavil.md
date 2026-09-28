---
repo: "openSUSE/cavil"
name: "cavil"
description: "The legal review and SBOM system used by SUSE and openSUSE"
readmeQualityOk: true
url: "https://github.com/openSUSE/cavil"
language: "Perl"
languages: ["Perl", "Vue"]
languagePcts: [63, 22]
topics: ["legal", "sbom", "spdx", "ai", "opensuse", "cra", "cisa"]
stars: 63
forks: 9
openIssues: 18
closedIssues: 32
watchers: 6
contributors: 26
recentReleases: 0
createdAt: "2018-10-17T15:58:54Z"
lastCommitAt: "2026-09-28T09:51:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 48
maintainers: ["kraih"]
openGraphImageUrl: "https://opengraph.githubassets.com/f74a94aa38e3a7900395470583767299a1c143973eceb18affaf2598a6f5c123/openSUSE/cavil"
---

# [](https://github.com/openSUSE/cavil/actions) [](https://coveralls.io/github/openSUSE/cavil?branch=master)

Cavil is a legal review and Software Bill of Materials (SBOM) system. It is used in the development of
openSUSE Tumbleweed, openSUSE Leap, as well as SUSE Linux Enterprise.

**Important**: Note that most of the data used by Cavil has been curated by lawyers, but the generated reports do not
count as legal advice and no guarantees are made for their correctness!

## Features

### Scanning & detection

* Source code legal review for RPMs, DEBs, tarballs and various other package formats
* High performance scanner with recursive decompression of almost any archive format
* 28.000 curated patterns for 2000 license combinations with 500 distinct [SPDX](https://spdx.dev) expressions
* Detection of vendored/bundled subcomponents (npm, Cargo, PyPI, Maven, Go, Composer, NuGet, RubyGems) shipped inside
  packages, surfaced in the SBOM and the review report

### SBOM & compliance

* Software Bill of Materials (SBOM) generation in SPDX 3.0.1 format, for the EU Cyber Resilience Act (CRA) as specified
  by [BSI TR-03183-2](https://www.bsi.bund.de/dok/TR-03183-en), and satisfying the…
