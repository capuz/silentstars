---
repo: "rhmoller/lua2wasm"
name: "lua2wasm"
description: "Lua to WebAssembly compiler"
readmeQualityOk: true
url: "https://github.com/rhmoller/lua2wasm"
homepage: "https://rhmoller.github.io/lua2wasm/"
language: "C"
languages: ["C", "WebAssembly"]
languagePcts: [40, 35]
topics: ["lua", "wasm", "webassembly"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-17T17:00:43Z"
lastCommitAt: "2026-10-08T10:49:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 41
maintainers: ["rhmoller"]
openGraphImageUrl: "https://opengraph.githubassets.com/67905a9cf381307cd8e8c50e26bb944a21e1a8c3828623ae051453b8d4e05391/rhmoller/lua2wasm"
---

# lua2wasm

**An ahead-of-time compiler that turns Lua 5.5 source into standalone WebAssembly modules — no interpreter, no bytecode VM, no bundled garbage collector.**

`lua2wasm` leans on the modern WebAssembly type system (the garbage collector, typed-reference,
and exception-handling). There is no linear memory, no bundled collector, and no bytecode interpreter.

Lua tables become real WebAssembly structs, closures become typed function
references, and the host's garbage collector (V8 / SpiderMonkey) owns every
value.

## Try it now — no install required

**Live playground:** <https://rhmoller.github.io/lua2wasm/>

Type Lua on the left and see the result on the right — the page compiles and
runs your program entirely in the browser, with nothing to download. Flip the
output to **Show WAT** to read the generated WebAssembly text. Works in any
recent Chrome, Edge, Firefox, or Safari (see [Targets](#targets)).

It integrates with just-bash so even the `os` and `io` packages can be used on the web.

Prefer the command line? See [Build & run locally](#build--run-locally).

## A tiny example

```lua
-- A "Stack" class — exercises tables, metatables, OO sugar, closures,
-- errors, and…
