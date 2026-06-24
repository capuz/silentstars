---
repo: "Tonic-Box/JStudio"
name: "JStudio"
description: "A Java reverse engineering and static analysis IDE for analyzing, decompiling, and transforming Java bytecode."
url: "https://github.com/Tonic-Box/JStudio"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 21
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2025-12-16T19:44:10Z"
lastCommitAt: "2026-06-24T23:38:05Z"
lastReleaseAt: "2026-06-10T06:55:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["Tonic-Box"]
openGraphImageUrl: "https://opengraph.githubassets.com/41a7c0f2c6a474f9cf988a11730c924e20ec93331898297499ad46d02b62567b/Tonic-Box/JStudio"
---

A Java reverse engineering and static analysis IDE for analyzing, decompiling, and transforming Java bytecode.

Powered by [YABR](https://github.com/Tonic-Box/YABR)

## Features

### Multi-View Editor

**Code Views**
- **Source** - Decompiled Java with syntax highlighting
- **Bytecode** - JVM instructions with color-coded opcodes
- **Dual** - Source and bytecode side-by-side, linked by double-click

**IR Views**
- **SSA IR** - Static Single Assignment intermediate representation
- **AST IR** - Abstract Syntax Tree representation

**Graph Views**
- **Control Flow** - Basic block CFG with bytecode/IR toggle
- **Program Dependence** - Data and control dependency graph
- **System Dependence** - Interprocedural dependence graph
- **Code Property** - Unified code property graph
- **Call Graph** - Method call hierarchy with depth control and invoke-type colored edges (virtual, static, special, interface, dynamic)

**Other Views**
- **Const Pool** - Constant pool entry browser with filtering
- **Attributes** - Class, field, and method attributes tree view
- **Statistics** - Class metrics dashboard with charts (method sizes, complexity, opcode distribution)
- **Hex** - Raw class file bytes…
