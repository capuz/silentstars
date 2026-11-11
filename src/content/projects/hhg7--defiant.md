---
repo: "hhg7/defiant"
name: "defiant"
description: "Differential methylation: Easy, Fast, Identification and ANnoTation"
readmeQualityOk: true
url: "https://github.com/hhg7/defiant"
language: "Shell"
languages: ["Shell", "R"]
languagePcts: [64, 36]
topics: ["bisulfite-sequencing", "differentially-methylated-elements", "methylation", "dmr", "rrbs", "wgbs"]
stars: 18
forks: 9
openIssues: 8
closedIssues: 7
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2017-04-04T18:12:01Z"
lastCommitAt: "2026-11-11T19:44:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 34
maintainers: ["hhg7"]
openGraphImageUrl: "https://opengraph.githubassets.com/44e74a4c0caa5524f75471c5da05d2ca30dae78b604c69feb8cf0f465d828139/hhg7/defiant"
---

# defiant
**D**ifferential methylation: **E**asy, **F**ast, **I**dentification and **AN**no**T**ation

by David E. Condon and Kyoung-Jae Won, University of Pennsylvania, 2015-2026.  Email Dave at dec986@gmail.com with questions/complaints/suggestions.  This has been published in BMC Bioinformatics: https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-018-2037-1

Defiant is designed to identify differentially methylated regions as quickly and as easily as possible.  It was designed to make the process as easy as possible on the end user, and to enable DMR detection without having to use (and pay for) supercomputing resources.

# installation
Download the repository and compile it with `make` on a Linux command line:

`git clone https://github.com/hhg7/defiant && cd defiant && make`

which will compile an executable "defiant" for your system.  `make check` runs a quick test of the executable, and `make install` copies it to /usr/local/bin (`make install PREFIX=$HOME/.local` if you don't have root).  `make OPENMP=1` compiles Defiant to run multiple options on multiple CPU (cf. `-cpu`), and `make CC=clang` compiles with clang instead of gcc.  The Makefile lists other…
