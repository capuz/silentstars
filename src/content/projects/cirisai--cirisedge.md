---
repo: "CIRISAI/CIRISEdge"
name: "CIRISEdge"
description: "Reticulum-native federation transport for the CIRIS stack — replaces the Python edge with a single Rust crate. Spec-first; code lands when Phase 1 starts."
readmeQualityOk: true
url: "https://github.com/CIRISAI/CIRISEdge"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 180
closedIssues: 406
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-03T17:22:07Z"
lastCommitAt: "2026-11-26T15:22:49Z"
lastReleaseAt: "2026-05-29T00:10:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 57
maintainers: ["emooreatx"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa6198b6edd34d7e9a152f9a36509f9aebfa0889f56e508180dff862af6bb848/CIRISAI/CIRISEdge"
---

# `ciris-edge`

`ciris-edge` is the part of CIRIS that moves signed messages between devices,
over the internet or over radio, and decides who may receive each one.

- **CIRIS** is a network that people, organisations and AI agents share. It runs
  on the phones and computers people already own, with no company in the middle.
- **Its rules are written down and checked.** The
  [CIRIS Constitution](https://github.com/CIRISAI/CIRISConstitution) states them
  precisely. Tests, machine proofs and a conformance suite check the programs
  against it. Edge implements its transport part,
  [Part 5](https://github.com/CIRISAI/CIRISConstitution/blob/main/constitution/part_5_transport_substrate.md).
- **No coordinator is needed.** Every act is a signed record, and records are
  only ever added: taking something back is a new record. So devices that hold
  the same records reach the same answer, in any order. An answer a later record
  could change, such as a vote, is final once enough of the people who could
  change it have acknowledged it.
