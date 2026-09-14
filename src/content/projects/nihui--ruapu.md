---
repo: "nihui/ruapu"
name: "ruapu"
description: "Detect CPU features with single-file"
readmeQualityOk: true
url: "https://github.com/nihui/ruapu"
homepage: "https://github.com/nihui/ruapu"
language: "C"
languages: ["C"]
languagePcts: [64]
topics: ["android", "arm", "clang", "cpu-features", "gcc", "ios", "linux", "loongarch", "macos", "mingw"]
stars: 460
forks: 58
openIssues: 13
closedIssues: 20
watchers: 11
contributors: 31
recentReleases: 0
createdAt: "2024-02-20T13:26:49Z"
lastCommitAt: "2026-09-14T09:12:26Z"
status: "thriving"
tags: []
healthScore: 71
undervaluedScore: 20
maintainers: ["nihui", "zqb-all", "Fros1er"]
openGraphImageUrl: "https://opengraph.githubassets.com/93b858927bd053f53915fceeb8d96fc9704c884a9c75c356a99fd32589d5aa32/nihui/ruapu"
discussionCount: 0
---

# ruapu

Detect CPU ISA features with single-file

<table>
<tr><td>CPU</td><td>&#9989; x86, x86-64<br/>&#9989; arm, aarch64<br/>&#9989; mips<br/>&#9989; powerpc<br/>&#9989; s390x<br/>&#9989; loongarch<br/>&#9989; risc-v<br/>&#9989; openrisc</td><td rowspan=3>

```c
#define RUAPU_IMPLEMENTATION
#include "ruapu.h"

int main()
{
    // initialize ruapu once
    ruapu_init();

    // now, tell me if this cpu has avx2
    int has_avx2 = ruapu_supports("avx2");

    // loop all supported features
    const char* const* supported = ruapu_rua();
    while (*supported)
    {
        fprintf(stderr, "%s\n", *supported);
        supported++;
    }

    return 0;
}
```

</td></tr>
<tr><td>OS</td><td>&#9989; Windows<br/>&#9989; Linux<br/>&#9989; macOS<br/>&#9989; Android<br/>&#9989; iOS<br/>&#9989; FreeBSD<br/>&#9989; NetBSD<br/>&#9989; OpenBSD<br/>&#9989; DragonflyBSD<br/>&#9989; Solaris<br/>&#9989; SyterKit</td></tr>
<tr><td>Compiler</td><td>&#9989; GCC<br/>&#9989; Clang<br/>&#9989; MSVC<br/>&#9989; MinGW</td></tr>
</table>

#### Best practice for using `ruapu.h` in multiple compilation units

1. Create one `ruapu.c` for your project
2. `ruapu.c` is **ONLY** `#define RUAPU_IMPLEMENTATION`…
