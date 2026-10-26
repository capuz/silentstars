---
repo: "esrrhs/golua"
name: "golua"
description: "Lua 5.4 in pure Go: a line-by-line port of PUC-Lua 5.4.9"
readmeQualityOk: true
url: "https://github.com/esrrhs/golua"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["golang", "interpreter", "bytecode", "compiler", "lua", "lua54", "scripting-language", "virtual-machine"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2018-01-18T09:24:23Z"
lastCommitAt: "2026-10-26T09:18:09Z"
lastReleaseAt: "2026-09-27T09:51:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 77
maintainers: ["esrrhs"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1311e2f5d99b132c880493fa99cd7b28fcb4b43a6b5a29bcf8d06cdd091456f/esrrhs/golua"
---

# golua — Lua 5.4 in pure Go

`golua` is a **line-by-line Go translation of PUC-Lua 5.4.9**. The lexer,
parser, code generator, VM, standard library, C API and the `lua`/`luac`
command-line tools all follow the C sources file by file, and their
behaviour is checked against a reference interpreter built from the same
release.

The one subsystem that is not translated is the garbage collector:
`lgc.c` is gone, and Go's concurrent GC owns object lifetime.

[中文](https://github.com/esrrhs/golua/blob/HEAD/README_CN.md)

## Highlights

- **Complete Lua 5.4** — integer/float subtypes, `//`, bitwise operators,
  `goto`, `<const>`/`<close>`, varargs, coroutines, metatables, weak
  tables, and the full standard library.
- **Go API shaped like the C API** — `NewState`, `PushInteger`, `PCall`,
  `GetGlobal`, … The root package re-exports the API with type aliases;
  all implementation lives in `internal/core`.
- **Bytecode compatibility** — the same binary chunk format as PUC-Lua
  5.4.9: `string.dump` output loads both ways, and `luac -l -l` prints
  the same listings.
- **Optional C modules** — built with cgo, `package.loadlib`/`require`
  load real C extensions on Linux and macOS. With…
