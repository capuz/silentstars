---
repo: "rudi-cilibrasi/leanos"
name: "leanos"
description: "experimental LeanOS formally verified OS"
readmeQualityOk: true
url: "https://github.com/rudi-cilibrasi/leanos"
language: "Lean"
languages: ["Lean"]
languagePcts: [60]
stars: 15
forks: 5
openIssues: 3
closedIssues: 177
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-14T16:37:38Z"
lastCommitAt: "2026-10-14T08:57:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["rudi-cilibrasi", "ruclaw7"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e432c36db3454bcb1b0c5196e9525fab14a40b2d6f3688d0c9212c83533b0b6/rudi-cilibrasi/leanos"
discussionCount: 4
---

# LeanOS

LeanOS is an experiment in building a small operating-system kernel whose
implementation, executable specification, and machine-checked proofs evolve
together in Lean 4.

**[▶ Boot LeanOS in your browser](https://rudi-cilibrasi.github.io/leanos/)** —
watch the unchanged canonical ISO boot live in a pinned WebAssembly QEMU, from
firmware through the versioned protocol to `LEANOS/10 FINAL status=PASS` and
guest debug-exit 33. Needs a desktop browser with cross-origin isolation;
first load downloads a ~40 MB runtime.
[How the demo is built and what it does and does not prove](https://github.com/rudi-cilibrasi/leanos/blob/HEAD/docs/browser-boot.md).

**[📖 What LeanOS provably guarantees, in plain English](https://github.com/rudi-cilibrasi/leanos/blob/HEAD/INVARIANTS.md)** — a
generated, machine-checked index that explains every Lean theorem in the
repository (all of them, and only them) for readers without a formal-methods
background.

The project is an **experimental research prototype**, not a verified operating
system. It now builds bootable x86-64 images, exercises several deterministic
machine scenarios under QEMU, and checks a growing set of Lean models and
theorems.…
