---
repo: "Exter-N/Dynamis"
name: "Dynamis"
description: "Developer/debugging/RE tool and experiment workbench for Dalamud"
readmeQualityOk: true
url: "https://github.com/Exter-N/Dynamis"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["dalamud-plugin", "developer-tools", "reverse-engineering"]
stars: 12
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-02-26T21:02:14Z"
lastCommitAt: "2026-07-13T06:36:42Z"
lastReleaseAt: "2025-03-27T08:44:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 62
undervaluedScore: 41
maintainers: ["Exter-N"]
openGraphImageUrl: "https://opengraph.githubassets.com/5776e73773d1cbfe1daad097b0f1c72943d0940093f7260595a6a48d2c50f528/Exter-N/Dynamis"
---

# Dynamis

**Dynamis** is a development/reverse engineering toolbox for Dalamud, including features such as:
- UI for various Dalamud APIs such as the signature scanner and the object table ;
- Object inspector that will try to guess the size and type of what you're trying to look at using just a start address, with support for various types:
  - Objects known to the [FFXIVClientStructs](https://github.com/aers/FFXIVClientStructs) project ;
  - Other game objects ;
  - Functions (using the disassembler shipped with Dalamud) ;
  - Some types have special support (for example, texture objects offer a preview).
- IPFD (In-Process Faux Debugger), a facility that enables setting breakpoints and watchpoints without a debugger:
  - While it cannot meaningfully stop the process for inspection, it instead takes snapshots of threads that hit the breakpoints ;
  - Not stopping the process, though, has the benefit of avoiding disconnection issues due to the game becoming unresponsive from the server's viewpoint ;
  - Snapshots include the CPU state and the entire stack, allowing thorough analysis ;
- Optionally, a hosted PowerShell, that can be used to interact with various facilities from…
