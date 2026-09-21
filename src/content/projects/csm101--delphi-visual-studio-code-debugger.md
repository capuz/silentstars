---
repo: "csm101/delphi-visual-studio-code-debugger"
name: "delphi-visual-studio-code-debugger"
description: "A debugger for delphi in visual studio code, and also a MCP server to give claude/copilot/etc authonomous delphi debugging capabilities"
readmeQualityOk: true
url: "https://github.com/csm101/delphi-visual-studio-code-debugger"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [90]
stars: 39
forks: 6
openIssues: 3
closedIssues: 9
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-07-21T17:35:37Z"
lastCommitAt: "2026-09-21T09:13:57Z"
lastReleaseAt: "2026-08-23T17:27:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 43
maintainers: ["csm101"]
openGraphImageUrl: "https://opengraph.githubassets.com/342c3f8f61584b3ecb9808c5826e5c97478e5f9d8e5f7d75559949841f99caf3/csm101/delphi-visual-studio-code-debugger"
---

# Delphi Debugger for VS Code and AI Agents

Debug Delphi **32-bit and 64-bit** applications outside the Embarcadero IDE — a
real debugger built on the Windows Debug API, written in Delphi.

**Two front ends, one engine.** A **Debug Adapter Protocol** server makes it a
first-class debugger inside VS Code. An **MCP server** hands the same engine to
an **AI agent**: 46 tools to set breakpoints, step, read locals and evaluate
expressions, so an agent can run your program and read what it actually does
instead of inferring it from the source. Neither is an afterthought of the
other; they are two clients of the same `DebuggerCore`.

### 📖 [Documentation, tutorial and feature tour → mcasoftware.dev](https://mcasoftware.dev/products/delphi-debugger/index.html)

**Start there.** It walks through installation and a first debug session, then a
**12-chapter VS Code tutorial**, the MCP / AI-agent guide and the architecture
notes — with screenshots. This page is the source tree; that one is the manual.

> **The debugger itself is always a 64-bit process, whichever target it
> debugs.** A 32-bit application is debugged by a 64-bit adapter across the
> WOW64 boundary, so the debugger is not…
