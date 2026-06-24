---
repo: "nikitalita/GodotFormatters"
name: "GodotFormatters"
description: "LLDB Godot type formatters for debugging the engine"
url: "https://github.com/nikitalita/GodotFormatters"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-02-19T17:52:33Z"
lastCommitAt: "2026-06-24T23:37:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 72
maintainers: ["nikitalita"]
openGraphImageUrl: "https://opengraph.githubassets.com/693783fd0baf2f5ed01c401818150dc95e60f30c174359388773e0639e25ecce/nikitalita/GodotFormatters"
---

# README #

I use LLDB to debug the Godot engine, and got tired with there being no visualization for all the built-in types. Here I endeavor to make all of these types visible through the debugger.

# Installation #

Clone this repo somewhere, e.g. ~/GodotFormatters. Then add the following lines to your ~/.lldbinit, or run this line directly in the debug console:

```
command script import ~/GodotFormatters/godot_formatters
```

You can also include it in a launch.json configuration for a [lldb-dap](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.lldb-dap) debug configuration by putting it in the `initCommands` section, like so:

```json
{
    "name": "(lldb-dap) Run tests (editor DEBUG)",
    "type": "lldb-dap",
    "request": "launch",
    "program": "${workspaceFolder}/bin/<godot_bin>",
    "args": [
        "--test"
    ],
    "initCommands": [
        "command script import ~/GodotFormatters/godot_formatters"
    ],
    "cwd": "${workspaceFolder}"
}
```

It's also possible to use it with the official Microsoft C++ extension debugger (i.e. `cppdbg`), but it is generally recommended to use lldb-dap instead:
```json
{
    "name": "(lldb) Run tests…
