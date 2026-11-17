---
repo: "pzfreo/specify-core"
name: "specify-core"
description: "Interview-driven AP242 PMI authoring for STEP parts in Rust and Python"
readmeQualityOk: true
url: "https://github.com/pzfreo/specify-core"
homepage: "https://draftwright.io/specify"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["3d", "ap242", "cad", "mbd", "nist", "pmi", "pmi-certification", "step"]
stars: 55
forks: 6
openIssues: 30
closedIssues: 19
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-08T16:41:48Z"
lastCommitAt: "2026-11-17T14:39:09Z"
lastReleaseAt: "2026-10-27T09:41:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 38
maintainers: ["pzfreo"]
openGraphImageUrl: "https://opengraph.githubassets.com/8286dfe21550fb3b1a0621d80ee6b45b24def3f4e733db622827ee36f324b6de/pzfreo/specify-core"
---

# Specify

**Add manufacturing intent to a STEP part, write it as AP242 semantic PMI, and keep it with the
part as the model changes.**

Specify reads a STEP part and recognises its features: holes, threads, hole patterns, slots,
bosses and turned diameters. It then asks what a drawing would need to say, and proposes an
answer, with its reason, for each question:

- the material;
- what each hole is for;
- which faces are datums;
- fits, threads, positions;
- surface finish and the general tolerance.

It writes your answers into the STEP file as AP242 semantic PMI, which CAD and inspection tools
can read, and verifies the file by reading it back. The answers are stored in the file too. When
the part changes, Specify carries them to the new revision and says what changed. An answer it
can't place is listed, never silently moved.

Specify captures manufacturing intent; it is not a DFM (design-for-manufacturability) checker.
It does not judge whether a part can be made, or how cheaply: wall thickness, tool access,
draft, internal radii or cost. The facts it reports — the features it recognises — can inform
that judgement, made by an engineer or an AI.

It is deterministic (rules and…
