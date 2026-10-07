---
repo: "kristerw/smtgcc"
name: "smtgcc"
description: "Some experiments with SMT solvers and GIMPLE IR"
readmeQualityOk: true
url: "https://github.com/kristerw/smtgcc"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 81
forks: 4
openIssues: 3
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2023-09-29T11:50:03Z"
lastCommitAt: "2026-10-06T17:34:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 37
maintainers: ["kristerw"]
openGraphImageUrl: "https://opengraph.githubassets.com/63d684c112baabc0b4bd03b1ca926cd7bfb2e74f1202ba8d2a009541119eb3b8/kristerw/smtgcc"
---

# smtgcc
This is an implementation of translation validation for GCC (similar to LLVM's [Alive2](https://github.com/AliveToolkit/alive2)), used to find bugs in the compiler.

The main functionality is in a plugin, which is passed to GCC when compiling:
```
gcc -O3 -fplugin=smtgcc-tv file.c
```
This plugin checks the GCC IR (Intermediate Representation) before and after each optimization pass and reports an error if the IR after a pass is not a refinement of the input IR (i.e., the optimized code does not behave the same as the input source code, indicating that GCC has miscompiled the program). While the tool has some limitations, it has already discovered several bugs in GCC. A partial list of bugs found includes:
[106513](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=106513),
[106523](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=106523),
[106744](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=106744),
[106883](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=106883),
[106884](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=106884),
[106990](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=106990),
[108625](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=108625),…
