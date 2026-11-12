---
repo: "nitros9project/nitros9-c-libs"
name: "nitros9-c-libs"
description: "OS-9/NitrOS-9 library support for CMOC"
readmeQualityOk: true
url: "https://github.com/nitros9project/nitros9-c-libs"
language: "C"
languages: ["C"]
languagePcts: [63]
stars: 12
forks: 8
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2018-01-16T01:42:41Z"
lastCommitAt: "2026-11-12T11:39:08Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 47
maintainers: ["jamieleecho", "DrPitre"]
openGraphImageUrl: "https://opengraph.githubassets.com/616d1c1a1c6e11f697b5a151fe7918aedcc386f07340b93f1a2be70afd1bb099/nitros9project/nitros9-c-libs"
---

# CMOC C Library support for OS-9/NitrOS-9

CMOC is an excellent ANSI C cross-compiler by Pierre Sarrazin. It supports the creation of OS-9 executables, which needs a complete C library. [Download CMOC here](https://perso.b2b2c.ca/~sarrazip/dev/cmoc.html).

This project aims to deliver two libraries: the standard C library (libc.a) and the CGFX library (libcgfx.a).

The code for the standard C library is based off of the Kreider C library.

Likewise, the code for the CGFX library is based off of Mike Sweet's CGFX7 library.

## Building

You will need LWTOOLS and ToolShed to build this library.

To make both the default non-floating-point `libc.a` and the floating-point
`libcf.a` C libraries, type:

```
cd cmoc_os9
cd lib; make clean all
cd ../cgfx; make
```

To make just the default non-floating-point `libc.a`, type:

```
cd cmoc_os9
cd lib; make clean libc.a
```

To make just the floating-point `libcf.a`, type:

```
cd cmoc_os9
cd lib; make clean libcf.a
```

The default `libc.a` build uses a small dummy `pffloat` implementation so the
library can be built and linked for integer/string-only programs without
pulling in the MC6839 floating-point path. The `libcf.a` build enables…
