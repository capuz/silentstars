---
repo: "atsign-foundation/noports"
name: "noports"
description: "Connect to any device with no external listening ports open"
readmeQualityOk: true
url: "https://github.com/atsign-foundation/noports"
homepage: "https://noports.com"
language: "Dart"
languages: ["Dart"]
languagePcts: [71]
topics: ["dart", "hacktoberfest", "ssh", "atsign"]
stars: 283
forks: 18
openIssues: 127
closedIssues: 584
watchers: 10
contributors: 28
recentReleases: 0
createdAt: "2022-04-23T01:44:00Z"
lastCommitAt: "2026-11-04T08:03:29Z"
lastReleaseAt: "2022-11-29T20:50:42Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 39
maintainers: ["cpswan", "AquibAquil", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0bb0d611ab255789e65ce99fd3e7b8ff5d93229a4fb60cee5dfe392400b50ec/atsign-foundation/noports"
discussionCount: 4
---

# noports

This repo contains the open source code of the Atsign's NoPorts product. Check
out our product site at [noports.com](https://noports.com).

## Get Started

Installation, use-cases and usage guides can all be found on our
[docs site](https://docs.noports.com).

## Source Code Availability

If you are interested in auditing the source code for NoPorts, this is where you
can find various bits of interest:

- [packages/](https://github.com/atsign-foundation/noports/blob/HEAD/packages/) - contains the bulk of the source code
  - [dart/](https://github.com/atsign-foundation/noports/blob/HEAD/packages/dart/) - contains the Dart implementation of NoPorts
    - [noports_core/](https://github.com/atsign-foundation/noports/blob/HEAD/packages/dart/noports_core/) - contains the core logic
      for NoPorts as a shared library which is used by the other Dart packages
    - [sshnoports/](https://github.com/atsign-foundation/noports/blob/HEAD/packages/dart/sshnoports) - contains the Dart CLI binaries
      for NoPorts (sshnp, npt, sshnpd, srvd)
    - [npt_flutter/](https://github.com/atsign-foundation/noports/blob/HEAD/packages/dart/npt_flutter/) - contains NoPorts Desktop,
      the…
