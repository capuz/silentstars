---
repo: "julia-vscode/DebugAdapter.jl"
name: "DebugAdapter.jl"
description: "Julia implementation of the Debug Adapter Protocol"
readmeQualityOk: true
url: "https://github.com/julia-vscode/DebugAdapter.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 53
forks: 16
openIssues: 2
closedIssues: 13
watchers: 4
contributors: 16
recentReleases: 2
createdAt: "2019-07-01T17:33:24Z"
lastCommitAt: "2026-10-03T22:04:30Z"
lastReleaseAt: "2026-09-12T00:25:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 58
maintainers: ["davidanthoff", "pfitzseb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82f1005ca5e33180c378e8c2f06c9a49d4b9d47dc3ef2d7928ecda3c313bcf43/julia-vscode/DebugAdapter.jl"
---

# DebugAdapter

Julia implementation of the Debug Adapter Protocol

## Running the debug adapter

To run a debug session, first instantiate `DebugAdapter.DebugSession` by passing it a connection, which can be a socket, named pipe. Then call `run` on the session:

```julia
import DebugAdapter

# Create or acquire a connection
conn = ... # This should be a Base.IO subtype, for example a named pipe or socket connection

session = DebugAdapter.DebugSession(conn)

run(session)
```

The call to `run` will return once the debug session has finished.

## Julia specific launch and attach arguments

The Julia specific launch arguments can be seen in the type `JuliaLaunchArguments` in this repo. The most important one is `program`, which needs to be an absolute path to a Julia file.

The Julia specific attach arguments can be seen in the type `JuliaAttachArguments` in this repo. Note that even when the debugger is attached, no code will automatically be debugged. Instead, one needs to run the code that should be debugged via a call to `DebugAdapter.debug_code` like this:

```julia
mod = Main # This is the module in which the code should run
code = """
println("Hello world")
""" # This is the…
