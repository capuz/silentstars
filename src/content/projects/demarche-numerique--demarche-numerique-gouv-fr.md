---
repo: "demarche-numerique/demarche.numerique.gouv.fr"
name: "demarche.numerique.gouv.fr"
description: "Dématérialiser et simplifier les démarches administratives "
readmeQualityOk: true
url: "https://github.com/demarche-numerique/demarche.numerique.gouv.fr"
homepage: "https://demarche.numerique.gouv.fr"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [75]
stars: 271
forks: 106
openIssues: 541
closedIssues: 3587
watchers: 13
contributors: 78
recentReleases: 0
createdAt: "2015-10-13T10:01:34Z"
lastCommitAt: "2026-09-23T08:41:53Z"
lastReleaseAt: "2016-09-16T16:20:53Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 43
maintainers: ["LeSim", "colinux", "tchak"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fd54447746a893e8725e378a70af630ad144ea21886a5ff1ad62afca859c853/demarche-numerique/demarche.numerique.gouv.fr"
---

# demarche.numerique.gouv.fr

> [!NOTE]
> [Lire la version française du README](https://github.com/demarche-numerique/demarche.numerique.gouv.fr/blob/HEAD/README.fr.md)

## Context

[demarche.numerique.gouv.fr](https://demarche.numerique.gouv.fr) is a web platform designed to address the French government's urgent need to comply with the directive for 100% digitization of administrative procedures.

## How to contribute?

demarche.numerique.gouv.fr is [open source](https://en.wikipedia.org/wiki/Open-source_software) software under the AGPL license.

Would you like to make changes or improvements? Read our [contribution guide](https://github.com/demarche-numerique/demarche.numerique.gouv.fr/blob/HEAD/CONTRIBUTING.md).

## Development setup

### Technical dependencies

#### All environments

- postgresql (version >= 15)
- libvips-dev (version >= 8.13, image processing and watermark generation)
- gsfonts (fonts for watermark text rendering)
- zip (Info-ZIP 3.0 or later, used to build the export and archive files)

  On macOS the system `/usr/bin/zip` is an Apple build that dropped support for
  the `-UN=UTF8` flag, which we pass to keep accented filenames intact. Export
  and archive…
