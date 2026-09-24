---
repo: "bracesoftware/newasm"
name: "newasm"
description: "💻 • NewASM is a low-level programming language which combines explicit memory and register control, giving it a breeze of assembly-like feel, with high-level functionalities such as objects, threads and more."
readmeQualityOk: true
url: "https://github.com/bracesoftware/newasm"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 7
forks: 0
openIssues: 25
closedIssues: 15
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-09T11:10:08Z"
lastCommitAt: "2026-09-24T08:41:29Z"
lastReleaseAt: "2024-08-18T18:52:55Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "under_pressure"]
healthScore: 75
undervaluedScore: 65
maintainers: ["DEntis-T"]
openGraphImageUrl: "https://opengraph.githubassets.com/14cef572476f48dbb0ccd64f45da75e1056a0b6b13c4704f806470ad6e3c40aa/bracesoftware/newasm"
discussionCount: 2
---

</div>

<h1 align = "center">Welcome to the <i><b>NewASM</b></i> Wiki</h1>

    <h3><img border-radius="5px" height="20" align="center" src="readme_resources/brace_product.png"></h3>

</div>

<h3 align = "center">Low-Level Language that Mimics Assembly</h3>

**NewASM** is a low-level programming language which combines explicit memory and register control, giving it a breeze of assembly-like feel, with high-level functionalities such as objects, threads and more.

> [!NOTE]
> **NewASM** language runs inside a NewASM Virtual Machine.

> [!CAUTION]
> All of the following documentation applies exclusively to the version currently being in development. For docs about the version you downloaded, check the files you downloaded from the releases page.

# Documentation
Below is the simple `Hello World` program written in New-Assembly.

```asm
using "ios"
.data
    string text : "Hello world\n"
    intg len : $-text
.start
    mov tlr, text
    mov fdx, 1
    mov bos, len

    sysenter "ios"
    
    syscall

    ret 0
```
> [!WARNING]
> The wiki is being completely reworked, so it may be missing some stuff.

NewASM allows you to write semi-efficient low-level programs in one universal…
