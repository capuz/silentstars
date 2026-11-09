---
repo: "hed-standard/hed-javascript"
name: "hed-javascript"
description: "HED/BIDS-friendly JavaScript validator."
readmeQualityOk: true
url: "https://github.com/hed-standard/hed-javascript"
homepage: "https://www.hedtags.org/hed-javascript"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["hed", "bids", "bids-format", "event", "annotation", "validation", "javascript"]
stars: 5
forks: 7
openIssues: 3
closedIssues: 105
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2018-10-26T18:10:14Z"
lastCommitAt: "2026-11-09T11:58:46Z"
lastReleaseAt: "2024-03-09T15:07:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 97
maintainers: ["VisLab", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c90ea449cb390ea9a7374128d5c4c1332e1cf9b163bb64daacd1245b9100036d/hed-standard/hed-javascript"
---

# hed-validator

This package contains a JavaScript validator for HED (Hierarchical Event Descriptor) annotations for
tabular files and their associated JSON metadata files such as those found in datasets formatted
in [BIDS (Brain Imaging Data Structure)](https://bids.neuroimaging.io/).

[HED](https://www.hedtags.org/) is a system for annotating events using comma-separated path strings.
Any type of event can be annotated using HED-type syntax.
The HED annotation strategy is very general and a standardized vocabulary in the form of a
[HED schema](https://github.com/hed-standard/hed-specification) enables
annotation of events in an understandable, machine-actionable format.

The current focus of the `hed-validator` package is to support full validation of HED in
[BIDS datasets](https://bids-specification.readthedocs.io/en/stable/) under the BIDS validator 2.0.
A sample of current `hed-validator` usage in BIDS can be found in the BIDS validator in
[`hed.ts`](https://github.com/bids-standard/bids-validator/blob/43be01517aaf338aa8bf87676be192dd57087c50/src/validators/hed.ts).

## Online validation

A browser-based validator that uses this package is available at…
