---
repo: "thomasnormal/sv-tutorial"
name: "sv-tutorial"
description: "System Verilog Tutorial"
readmeQualityOk: true
url: "https://github.com/thomasnormal/sv-tutorial"
homepage: "https://thomasnormal.github.io/sv-tutorial/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [39, 26]
stars: 7
forks: 5
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-23T07:19:13Z"
lastCommitAt: "2026-11-07T22:50:49Z"
lastReleaseAt: "2026-06-25T12:25:34Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 88
undervaluedScore: 69
maintainers: ["thomasahle"]
openGraphImageUrl: "https://opengraph.githubassets.com/17d88ceab530d2771af49c7fa9b393a29cff9f25d8486588274127d3298bd980/thomasnormal/sv-tutorial"
---

# sv-tutorial

Svelte-based interactive tutorial shell for SystemVerilog, SVA, and UVM.

The [curriculum tracker](https://github.com/thomasnormal/sv-tutorial/blob/HEAD/CURRICULUM.md) is the source of truth for lesson order,
prerequisites, and quality scores. Completed lessons include starter and solution
source plus a runnable testbench with labelled PASS/FAIL output where the lesson
can be checked in simulation.

The build-generated [`Lesson status`](https://github.com/thomasnormal/sv-tutorial/blob/HEAD/status) page lists the current browser
result for every lesson. Each lesson carries the same status badge; lessons
with a Mox or environment limitation include the measured diagnostic, the
relevant IEEE clause, a browser-friendly fallback, and a native-Mox command.

See [`CONTRIBUTING.md`](https://github.com/thomasnormal/sv-tutorial/blob/HEAD/CONTRIBUTING.md) for setup, lesson authoring, validation,
and pull-request guidance.

## Reproducible Requirements

Pinned versions are centralized in `scripts/toolchain.lock.sh`:

- Node major: `22`
- Emscripten (emsdk): `4.0.21`
- MOX repo: `https://github.com/normal-computing/mox.git` (ref and LLVM ref are
  read from…
