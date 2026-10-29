---
repo: "AtomiJD/jdBasic"
name: "jdBasic"
description: "BASIC reborn for the AI era: APL-style arrays, SDL3 games, native LLVM compile, Win32 forms, local LLMs, and a built-in MCP server your AI agent can pair-program with."
readmeQualityOk: true
url: "https://github.com/AtomiJD/jdBasic"
homepage: "https://www.jdbasic.org"
language: "C++"
languages: ["C++", "C"]
languagePcts: [68, 29]
topics: ["apl", "basic", "cplusplus-20", "interpreter", "llm", "compiler", "gamedev", "programming-language", "retro-programming", "scripting-language"]
stars: 19
forks: 2
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2025-07-04T03:10:37Z"
lastCommitAt: "2026-10-28T17:21:52Z"
lastReleaseAt: "2026-10-26T13:48:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 72
maintainers: ["AtomiJD"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9ccc4c30fb1f0620701191a518818f60a44c64f1a797eb8d17fc0ba085d73b8/AtomiJD/jdBasic"
discussionCount: 2
---

# jdBasic

**A BASIC you can change while it runs, by hand or through an AI agent.**

jdBasic is a BASIC interpreter with a bytecode VM and APL-style arrays.
Graphics, GUI, sound, web and local AI are built in. Programs can be compiled
to a native `.exe`, and an MCP server lets an AI agent inspect and change a
program without restarting it.

**[Try it in the browser](https://jdbasic.org/live/index.html)** · **[Download](https://github.com/AtomiJD/jdBasic/releases/latest)** · **[Take the tour](https://github.com/AtomiJD/jdBasic/blob/HEAD/doc/tour.md)**

## Four examples

### 1. An AI agent edits the program while it runs

Press F6 in the running game and the VM pauses. Ask Claude to turn the ship red
and set the lives to 100, and it changes two variables through `jdb_eval`. Ask
it to move the shield bar 20 pixels up, and it edits the source; `jdb_recompile`
then swaps the changed SUB into the paused program and restores the program
pointer. After resuming, the game continues where it stopped with the new
drawing code. Any MCP client works, for example Claude Code, Cursor, Cline or Zed.

[MCP setup and tool reference](https://github.com/AtomiJD/jdBasic/blob/HEAD/doc/MCP.md) · [Blog…
