---
repo: "aalmkainzi/CGS"
name: "CGS"
description: "C library for generic strings"
readmeQualityOk: true
url: "https://github.com/aalmkainzi/CGS"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 20
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-18T11:19:29Z"
lastCommitAt: "2026-09-22T08:45:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 57
maintainers: ["aa-almkainzi", "aalmkainzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/63fa35b205957c066bc2a9af5528d0fb2af085b8d0dacdd88f82c9e84f7e0d0d/aalmkainzi/CGS"
---

# CGS - C Generic Strings

## Quick Examples
```C
#include "cgs.h"

int main()
{
    CGS_StrView s     = cgs_strv("hello, world");
    CGS_StrView hello = cgs_strv(s, 0, 5);
    CGS_StrView world = cgs_strv(s, 7);
    
    cgs_printf("%? %?", hello, world);
}

```
```C
#include "cgs.h"

int main()
{
    CGS_DStr str = cgs_dstr_init();
    
    cgs_append(&str, "world");
    cgs_prepend(&str, "hello, ");
    
    cgs_writeln(str);
    
    cgs_dstr_deinit(&str);
}

```
## Features
The library exposes multiple string types for different use cases:
- [CGS_DStr](#CGS_DStr)
- [CGS_StrBuf](#CGS_StrBuf)
- [CGS_StrView](#CGS_StrView)
- [CGS_ZStrView](#CGS_ZStrView)
- [CGS_MutStrRef](#CGS_MutStrRef)

All of which are null terminated, except for `CGS_StrView`.

There are three categories of string types:
- `anystr_t`: all string types, any of:  
  `char*`, `unsigned char*`, `char[]`, `unsigned char[]`, `CGS_StrView`, `CGS_ZStrView`, `CGS_DStr`, `CGS_DStr*`, `CGS_StrBuf`, `CGS_StrBuf*`, `CGS_MutStrRef`
- `mutstr_t`: mutable string types, any of:  
   `char*`, `unsigned char*`, `char[]`, `unsigned char[]`, `CGS_DStr*`, `CGS_StrBuf*`, `CGS_MutStrRef`
- `writer_t`: writable types, any of:…
