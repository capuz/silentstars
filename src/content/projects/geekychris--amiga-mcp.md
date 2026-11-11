---
repo: "geekychris/amiga_mcp"
name: "amiga_mcp"
description: "This project, Amiga DevBench, is a cross-development environment that connects a modern host machine to an emulated or real Amiga via serial, providing live debugging, memory inspection, and full MCP integration with Claude Code. The primary language used in the development of this library is Python. It enables developers to write C code on macO..."
readmeQualityOk: true
url: "https://github.com/geekychris/amiga_mcp"
language: "Python"
languages: ["Python", "C"]
languagePcts: [43, 34]
topics: ["amiga"]
stars: 52
forks: 7
openIssues: 4
closedIssues: 0
watchers: 6
contributors: 5
recentReleases: 0
createdAt: "2026-03-08T19:00:10Z"
lastCommitAt: "2026-11-11T19:43:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["geekychris", "reinauer", "xphileby"]
openGraphImageUrl: "https://opengraph.githubassets.com/32c7765ca361f5a13200961db37b2b9d43a17be9ed84728c61e987c506261a90/geekychris/amiga_mcp"
---

# Amiga DevBench

**Write, build, run and debug Amiga software from your Mac, Linux or Windows
machine, by hand or with an AI coding agent.**

DevBench links a modern computer to an Amiga, whether that's an emulator or
real hardware. You write C on the host. DevBench cross-compiles it in Docker,
copies it to the Amiga and starts it. While it runs, you can watch its logs,
read and change its variables, call functions inside it, take screenshots,
inject keystrokes and step through it in a debugger.

It does all of this through two front ends at once:

- **A web dashboard** for people: logs, files, memory, tasks, copper lists,
  sprites, screenshots, a shell and a debugger, in the browser.
- **An MCP server** with about 200 tools for AI agents such as Claude Code and
  Codex. An agent can do the whole inner loop itself: edit, build, deploy,
  run, look at the screen, read the logs and fix the bug.

### Why

Traditional Amiga development is hard going. There is no source-level
debugger on the target, a stock machine has no network, and one bad pointer
takes down the whole OS. DevBench puts a modern machine in charge: the Amiga
becomes a build target you can see into and control from…
