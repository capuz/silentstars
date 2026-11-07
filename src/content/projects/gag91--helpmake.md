---
repo: "Gag91/HelpMake"
name: "HelpMake"
description: "HelpMake - Build system"
readmeQualityOk: true
url: "https://github.com/Gag91/HelpMake"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["build-system", "cpp", "programming"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-05T17:50:04Z"
lastCommitAt: "2026-11-07T09:29:39Z"
lastReleaseAt: "2026-11-07T09:04:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 56
maintainers: ["Gag91"]
openGraphImageUrl: "https://opengraph.githubassets.com/afa1bb6490ef01f7076a4e1449e83c2ff4f62e793636d9ce917e6abfe90db219/Gag91/HelpMake"
discussionCount: 1
---

# HelpMake (hm)

**Point `hm -b` at any C/C++ project. No CMakeLists. No Makefile. One command.**

HelpMake is a build system for people who think CMake is too much and Make is too little.

**No config file? No problem.** Drop `hm` into any project directory and run `hm -b`. It detects your compiler, standard version, source files, include paths, link flags, target kind, and output name - then builds. Add a `HelpMake.txt` only when you want to pin a field or override a default.

```bash
cd your-existing-project
hm -b                # detects everything, builds
```

When you do want control, one file describes the whole build:

```txt
Compiler: g++
Version: std=c++20
Output: build/app.exe
InputFiles {
  src/**/*.cpp 
}
Includes {
  include 
}
Flags {
  -Wall
  -O2
  linux: -pthread
  win: /W4 
}
```

```bash
hm -b           # build
hm -b -w -r     # rebuild on save + run after every build
hm -b --dry-run # preview build commands without executing them
hm test         # run every config marked Test: true
```

## Why not CMake?

CMake is 20 years old and carries a lot of weight. HelpMake isn't trying to replace it for 100,000-file projects with 400 dependencies. It's for the 90% of…
