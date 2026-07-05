---
repo: "davidly/dcc"
name: "dcc"
description: "C89 compiler targeting CP/M 2.2 on a Z80"
readmeQualityOk: true
url: "https://github.com/davidly/dcc"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 6
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-29T02:55:43Z"
lastCommitAt: "2026-07-05T20:54:13Z"
lastReleaseAt: "2026-07-04T11:25:33Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["davidly", "gloveboxes"]
openGraphImageUrl: "https://opengraph.githubassets.com/e44fa8f701946928895f2e9ab1b438f21b114dce2073816ee5f6175e13a68324/davidly/dcc"
---

# dcc

C compiler targeting CP/M 2.2 on a Z80

The [dcc documentation](https://davidly.github.io/dcc/) covers all features, usage, and API reference.

## What dcc is
dcc has a C89 core plus target-appropriate C99/C11 front-end support. For every source file it accepts, dcc generates a .MAC assembly file that can be assembled by M80 and linked by L80 to produce CP/M .COM files.

A separate app dccpeep.c is a peephole optimizer that rewrites portions of .MAC files so apps run faster. It's not necessary to use dccpeep; apps will work just fine without it. But if you need your app to be both smaller and faster it's worth running.

DCCRTL.MAC is the dcc C Runtime Library. It's written in Z80 assembly for size and performance. It has the entrypoint start for apps that initializes the heap (for malloc/free) and command-line arguments so main's argc and argv work. It implements a small subset of the C89 C runtime including floating point.

dccrtlstrip.c is an app that examines the code of your .c file and strips portions of the DCCRTL.MAC C runtime so only the parts needed are linked into the .COM file. It's not necessary to run this program for your app to work. But the resulting .COM…
