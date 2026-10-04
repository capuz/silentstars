---
repo: "wieslawsoltes/SharpForge"
name: "SharpForge"
description: "C# subset compiler written in JavaScript with ECMA-335 IL/PE output, a managed runtime, debugger and browser IDE (SharpForge Studio)."
readmeQualityOk: true
url: "https://github.com/wieslawsoltes/SharpForge"
homepage: "https://wieslawsoltes.github.io/SharpForge/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [74]
topics: ["browser-ide", "cil", "compiler", "csharp", "dap", "debugger", "dotnet", "ecma-335", "hot-reload", "ide"]
stars: 8
forks: 0
openIssues: 2863
closedIssues: 334
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-03T09:25:18Z"
lastCommitAt: "2026-10-04T10:02:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 72
undervaluedScore: 41
maintainers: ["wieslawsoltes"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6d811120cecadbbeb119492623b43c6c93c72fb336768e2b4f00fb36ec8ca6d/wieslawsoltes/SharpForge"
---

Compiler, .NET-compatible IL, managed runtime, debugger, WinUI-style UI framework, visual designer and a Visual Studio-style IDE — written in JavaScript, with no server and no install.

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

> **Work in progress.** SharpForge is a development preview on the way to full C#, CLR, .NET BCL, WinUI and Visual Studio parity. Features below are marked **Available**, **Preview**, **WIP** or **Planned**. A program compiling and running here is not yet a guarantee that it behaves exactly as it does on .NET; see [Status](#status).

## What is SharpForge?

SharpForge lets you write, build, run, debug and design C# applications entirely inside a web page.

- **Write** C# in an editor with IntelliSense, navigation, refactorings and Visual Studio, VS Code, Vim, Emacs or Sublime key bindings.
- **Build** it with a C# compiler that emits real ECMA-335 assemblies (`.dll`) and Portable PDBs that the .NET runtime also loads.
- **Run** it on a managed runtime with its own garbage collector, task scheduler and base class library — in a Web Worker, in Node.js, or from the command line.
- **Debug** it with breakpoints, stepping, watches, call…
