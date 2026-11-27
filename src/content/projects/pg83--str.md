---
repo: "pg83/str"
name: "str"
description: "Fast, Z3-verified, string functions"
readmeQualityOk: true
url: "https://github.com/pg83/str"
language: "Python"
languages: ["Python", "C"]
languagePcts: [78, 22]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-11-02T21:55:58Z"
lastCommitAt: "2026-11-27T16:28:04Z"
lastReleaseAt: "2026-11-12T18:46:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["pg83"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee127f4a1c02efd6382f03df04d8aaa93b6a71c83f87832e9d47be636e5cfa39/pg83/str"
---

# str

Permissively licensed string and memory functions for x86-64: `memcpy`,
`memmove`, `memset`, `memcmp`, `memchr`, `strlen`, `strnlen`, `strcpy`,
`strcat`, `strcmp`, `strspn`, `strcspn`. Written in a small C dialect with
builtin SIMD operations, compiled by the project's Python compiler, and
dispatched once by `cpuid` through one table of primitives. Made of these
(`derived.c`): `bcmp`, `bcopy`, `bzero`, `explicit_bzero`, `mempcpy`,
`strncat`, `strlcpy`, `strlcat`, `strpbrk`, `strsep`, `strtok`, `strtok_r`,
`memmem`, `strstr`. The archive is one object and takes no name from
outside (`strdup` and `strndup`, which need `malloc`, are left to the C
library); meant to be linked into a static libc in place of its string
routines.

## Build

```sh
./build -j8 libstr             # .build/libstr.a; Python only
./build -j8 libstr_wasm2o      # .build/wasm2o/libstr.o: the same code for pizdos's wasm2o
./build -j8 checks             # compiler tests, C test driver (on musl built from its tarball), decoder round-trip, the wasm2o contract
./build -j8 strbench           # .build/strbench/strbench: the lab in one static binary, for any x86-64 Linux (dev/lab/README.md)
```
