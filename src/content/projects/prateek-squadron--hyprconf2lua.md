---
repo: "Prateek-squadron/hyprconf2lua"
name: "hyprconf2lua"
description: "Convert Hyprland .conf to Lua for v0.55+ — drop-in replacement for deprecated hyprlang. ~97% auto-conversion, 0% guesswork."
readmeQualityOk: true
url: "https://github.com/Prateek-squadron/hyprconf2lua"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 109
forks: 13
openIssues: 0
closedIssues: 50
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-05-23T00:52:03Z"
lastCommitAt: "2026-11-25T03:19:10Z"
lastReleaseAt: "2026-08-24T07:33:28Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 17
maintainers: ["Prateek-squadron", "Ryuga-Hideki-L", "sinback"]
openGraphImageUrl: "https://opengraph.githubassets.com/e299f399901d74f2d13515113d7b410434e082fdd4f5e23299f8922139d3458b/Prateek-squadron/hyprconf2lua"
---

# hyprconf2lua

---

## Overview

Starting with **Hyprland v0.55+**, native Lua configuration scripting is officially supported via the `hl` Lua module. Configuring Hyprland with Lua brings powerful benefits: programmatic loop generation, structured tables, conditional monitor setup, dynamic workspace handling, and modular imports.

**`hyprconf2lua`** is a fast, zero-dependency AST transpiler that takes your existing `hyprland.conf` (and any sourced split files) and converts them into idiomatic, valid, and clean Lua configuration files.

Instead of unreliable regex search-and-replace, `hyprconf2lua` implements a full compiler pipeline:
```
hyprlang source (.conf)
      │
      ▼
   [ Lexer ]      (Regex tokenizer preserving string quoting & operators)
      │
      ▼
  [ Parser ]     (Recursive descent AST generation)
      │
      ▼
  [ Codegen ]    (Idiomatic Lua code generator for `hl` module)
      │
      ▼
 Lua config (.lua)
```

---
