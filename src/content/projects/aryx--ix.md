---
repo: "aryx/IX"
name: "IX"
description: "A complete computer system in small, readable OCaml programs: an ARM emulator, a kernel, a shell,  C and ML compilers, an editor, version control and more."
readmeQualityOk: true
url: "https://github.com/aryx/IX"
homepage: "https://aryx.github.io/IX/"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [71]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-21T09:10:17Z"
lastCommitAt: "2026-10-03T09:23:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 51
maintainers: ["aryx"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcc2177fd6cc5e5460f4a2f21ab95aac5b738487f04a6ebd46bd4ca3d183166e/aryx/IX"
---

# <img src="docs/logo.svg" alt="IX" height="48">

**A whole computer system in small, readable OCaml programs: an ARM
emulator, a kernel, a shell, C and ML compilers, an assembler and a linker,
an editor, a build system, a database, version control, and more.**

Website: **[aryx.github.io/IX](https://aryx.github.io/IX/)**, with a
[code map](https://aryx.github.io/IX/codemap.html) of the whole
repository to explore in the browser.

IX is a way to learn how a computer system works, end to end, by
reading its code. Each part of the system is a separate program, and
each program is small enough to read in a few sittings. None of them
is a toy, though. The emulator runs real ARM binaries, the compiler
makes them, and the kernel boots a real operating system's user
programs, up to its windowing system and the network.

The system IX follows is **Plan 9**, the successor of Unix written at
Bell Labs by Unix's own authors. Plan 9 is small, clean, and complete:
it has its own kernel, compilers, shell (`rc`), build tool (`mk`),
editor and windowing system (`rio`). It is explained program by
program in [Principia Softwarica](https://principia-softwarica.org/), a
series of books I (Yoann…
