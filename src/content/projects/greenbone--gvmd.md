---
repo: "greenbone/gvmd"
name: "gvmd"
description: "Greenbone Vulnerability Manager - The database backend for the Greenbone Community Edition"
readmeQualityOk: true
url: "https://github.com/greenbone/gvmd"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["greenbone", "openvas", "vulnerability", "vulnerability-management", "vulnerability-scanners", "openvas-manager", "c", "gea", "backend", "extended"]
stars: 378
forks: 177
openIssues: 25
closedIssues: 207
watchers: 20
contributors: 84
recentReleases: 0
createdAt: "2018-01-28T10:03:23Z"
lastCommitAt: "2026-10-27T09:17:27Z"
lastReleaseAt: "2020-08-11T15:22:39Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 39
maintainers: ["mattmundell", "ozgen", "wiegandm"]
openGraphImageUrl: "https://opengraph.githubassets.com/be051d5f126f2548ccc00a007a301c0d589ad28975dbf183b5f8d8135167bd32/greenbone/gvmd"
---

# Greenbone Vulnerability Manager 

The Greenbone Vulnerability Manager is the central management service between
security scanners and the user clients.

It manages the storage of any vulnerability management configurations and of the
scan results. Access to data, control commands and workflows is offered via the
XML-based Greenbone Management Protocol (GMP). Controlling scanners like
the [OPENVAS Scanner](https://github.com/greenbone/openvas-scanner)* is done via
the Open Scanner Protocol (OSP).

- [Releases](#releases)
- [Installation and Usage](#installation-and-usage)
- [Support](#support)
- [Maintainer](#maintainer)
- [Contributing](#contributing)
  - [Code style and formatting](#code-style-and-formatting)
  - [CMake formatting](#cmake-formatting)
- [License](#license)

## Releases

All [release files](https://github.com/greenbone/gvmd/releases) are signed with
the [Greenbone Community Feed integrity key](https://community.greenbone.net/t/gcf-managing-the-digital-signatures/101).
This gpg key can be downloaded at https://www.greenbone.net/GBCommunitySigningKey.asc
and the fingerprint is `8AE4 BE42 9B60 A59B 311C  2E73 9823 FAA6 0ED1 E580`.

## Installation and Usage

This…
