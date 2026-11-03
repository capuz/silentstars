---
repo: "ShinyWasabi/scrDbg"
name: "scrDbg"
description: "RAGE Script Debugger."
readmeQualityOk: true
url: "https://github.com/ShinyWasabi/scrDbg"
homepage: "https://www.gta5-mods.com/tools/scrdbg-script-debugger-for-gta-v"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["debugger", "gta5", "rage", "scripting", "gta4", "rdr1", "rdr2", "max-payne-3"]
stars: 35
forks: 14
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2025-10-22T16:45:06Z"
lastCommitAt: "2026-11-03T10:52:32Z"
lastReleaseAt: "2026-08-29T08:07:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 43
maintainers: ["ShinyWasabi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2367c3e569f92ff296094e89f60a5f46edde1b7dde5fefe515ff706836c45a4/ShinyWasabi/scrDbg"
---

# scrDbg

scrDbg is a script debugger for RAGE games.
It allows you to inspect, manipulate, debug, disassemble, and even decompile game scripts in real-time.

## Supported Games

- Grand Theft Auto IV: The Complete Edition
- Red Dead Redemption
- Max Payne 3
- Grand Theft Auto V (Legacy & Enhanced)
- Red Dead Redemption 2

## Features

- View running scripts
- Pause scripts
- Kill scripts
- Export disassembly, decompiled C pseudocode, strings, statics, globals, and natives
- Exception handling
- View functions
- View stack
  - View callstack
  - Edit stack frame (function args, locals, temps)
- View disassembly
  - Jump to a raw address
  - Binary search (pattern, hex, decimal, float, string)
  - NOP instructions
  - Apply custom patches
  - Generate patterns
  - View xrefs
  - Set breakpoints
- Script decompiler
  - Pseudocode view alongside the disassembly
  - Follow calls with back/forward navigation
  - Resolve indirect calls from runtime-observed targets
  - Set breakpoints and highlight the executing line in pseudocode
- Dynamic native invoker
  - Search natives by name and invoke them dynamically
  - Specify the script to execute the native in
  - Automatically resolve…
