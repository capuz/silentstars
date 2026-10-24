---
repo: "IbrahimHindawi/masm64-init"
name: "masm64-init"
description: "starter project for MASM64"
readmeQualityOk: true
url: "https://github.com/IbrahimHindawi/masm64-init"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [84]
stars: 25
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-01-13T16:57:24Z"
lastCommitAt: "2026-10-24T08:20:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 27
maintainers: ["IbrahimHindawi"]
openGraphImageUrl: "https://opengraph.githubassets.com/c787e7ad807748d315fa07a9929b5f8e5c1b43aa71b2f6bafd78681936d62d16/IbrahimHindawi/masm64-init"
---

# masm64-init
Starter project for MASM64:  
- Launch `x64 Native Tools Command Prompt for VS 2022`.  
- Run `scripts\build.bat`
- Run with `build\main.exe` or `devenv build\main.exe`

## Web guide

Read the annotated source online at [ibrahimhindawi.com/masm64-init](https://ibrahimhindawi.com/masm64-init/).

The site is generated from the assembly files in this repository. To rebuild it into the website checkout:

```powershell
python website/build.py C:\devel\psite\site-static\masm64-init
```

## Learning Resources:
If you are new to x86-64 Assembly I suggest:
- [The Art of 64-Bit Assembly, Volume 1: x86-64 Machine Organization and Programming](https://nostarch.com/art-64-bit-assembly-volume-1)
- [Assembly x64 Programming in easy steps](https://ineasysteps.com/products-page/assembly-x64-programming-in-easy-steps/)
## x86-64 Registers Cheat Sheet
### Registers:
| 64  | 32   | 16    | 8      | name            |
|-----|------|-------|--------|-----------------|
| rax | eax  | ax    | ah/al  | accumulator     |
| rbx | ebx  | bx    | bh/bl  | base            |
| rcx | ecx  | cx    | ch/cl  | counter         |
| rdx | edx  | dx    | dh/dl  | data            |
| rsi | esi  | si    |…
