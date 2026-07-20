---
repo: "sp00nznet/xboxrecomp"
name: "xboxrecomp"
description: "Turn any Xbox game binary into a native Windows executable. No emulation. No interpreter. Just raw, recompiled C."
readmeQualityOk: true
url: "https://github.com/sp00nznet/xboxrecomp"
language: "C"
languages: ["C", "Python"]
languagePcts: [73, 26]
stars: 24
forks: 9
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2026-03-06T09:08:23Z"
lastCommitAt: "2026-07-20T06:33:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 28
maintainers: ["sp00nznet"]
openGraphImageUrl: "https://opengraph.githubassets.com/d174a7978fcecdb1516056a8307ebbe9189a46009423ab722819207172cd870c/sp00nznet/xboxrecomp"
---

# xboxrecomp

```
 #   #  ####    ###   #   #         #####   ###    ###   #       ###
 #   #  #   #  #   #  #   #           #    #   #  #   #  #      #
  # #   ####   #   #   # #            #    #   #  #   #  #       ##
  # #   #   #  #   #   # #            #    #   #  #   #  #         #
 #   #  #   #  #   #  #   #           #    #   #  #   #  #         #
 #   #  ####    ###   #   #           #     ###    ###   #####   ###

 Static Recompilation Toolkit for Original Xbox Games
```

> Turn any Xbox game binary into a native Windows executable. No emulation. No interpreter. Just raw, recompiled C.

### Recent Changes

- **Cross-Platform / Linux Port** — Platform abstraction layer with an **OpenGL D3D8 backend** alongside the Windows D3D11 path, POSIX path handling, and Linux build deps (`tools/linux/install_deps.sh`). Builds with GCC/Clang.
- **`ghidra_naming` Tool (optional)** — Headless Ghidra FidDb pass recovers real CRT/XDK symbol names from a stripped XBE and merges them into `functions.json`, so generated C uses meaningful names instead of `sub_XXXXXXXX`. The core pipeline still needs no disassembler. See `tools/ghidra_naming/`.
- **`--seed-functions`** — Iterative disasm…
