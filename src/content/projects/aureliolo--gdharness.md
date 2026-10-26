---
repo: "Aureliolo/gdharness"
name: "gdharness"
description: "A harness for driving a Godot 4 project from an agent: editor addons, a runtime bridge into the running game, an MCP server in front of them, and a CLI that installs and diagnoses the Godot side."
readmeQualityOk: true
url: "https://github.com/Aureliolo/gdharness"
homepage: "https://aureliolo.github.io/gdharness/"
language: "TypeScript"
languages: ["TypeScript", "GDScript"]
languagePcts: [74, 23]
topics: ["gamedev", "gdscript", "godot", "godot-engine", "godot4", "mcp", "mcp-server", "model-context-protocol"]
stars: 26
forks: 11
openIssues: 2
closedIssues: 236
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-09-08T20:59:23Z"
lastCommitAt: "2026-10-26T20:59:58Z"
lastReleaseAt: "2026-09-14T01:32:45Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 57
maintainers: ["Aureliolo", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1361899509/fdeaf6d7-63ab-40ef-8448-ffae744b15d5"
discussionCount: 0
---

# gdharness

**An agent cannot see a running game.** It reads your scripts and guesses at the rest: whether the
button is on screen, whether the panel updated, whether that error mattered.

gdharness makes the engine answerable instead. What the screen says, where a control is, what a
property reads right now, what the console printed, what broke and on which line.

## Install

Hand this to your agent:

```text
Install gdharness here by following https://aureliolo.github.io/gdharness/agent.md,
then tell me what it asked you to recommend back to me.
```

Or do it yourself, and pick your harness:
[aureliolo.github.io/gdharness](https://aureliolo.github.io/gdharness).

## The loop it exists for

```jsonc
editor_run      { "op": "start", "projectPath": "C:/games/hall" }
runtime_inspect { "op": "find", "says": "Buy" }              // the button, by the word on it
runtime_input   { "op": "click", "nodePath": "/root/Hall/Ledger/BuyButton" }
runtime_inspect { "op": "text", "nodePath": "/root/Hall/Ledger" }   // what the panel says now
editor_output   { "projectPath": "C:/games/hall" }           // errors and warnings, with backtraces
```

The open editor plays the game, so its debugger…
