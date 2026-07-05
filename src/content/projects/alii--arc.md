---
repo: "alii/arc"
name: "arc"
description: "⌒ JavaScript on the BEAM"
readmeQualityOk: true
url: "https://github.com/alii/arc"
homepage: "https://arc.alistair.sh"
language: "Gleam"
languages: ["Gleam"]
languagePcts: [86]
topics: ["beam", "compiler", "engine", "erlang", "javascript"]
stars: 202
forks: 8
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-02-21T08:43:32Z"
lastCommitAt: "2026-07-05T20:55:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 30
maintainers: ["alii", "alistair-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1163196410/392a5583-a38d-49a1-92d4-f3d0f2e2c7d9"
---

> [!NOTE]
> arc is an **extremely early** research project, tread carefully!

# arc ⌒

JavaScript on the BEAM

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./.github/js.png">
</picture>
<br><br>

Arc is a JavaScript engine written in [Gleam](https://gleam.run) — the whole language, not a subset. It runs wherever the BEAM runs: on Erlang/OTP, and in the browser through [AtomVM](https://www.atomvm.net) compiled to WebAssembly.
<br><br>

It implements the language itself — closures, generators, async/await, classes, proxies, typed arrays, plus Intl and Temporal. The engine is small and host-agnostic: it knows nothing about the world outside ECMAScript. You embed it in a BEAM program and give it the globals and host functions you want — timers, I/O, a concurrency model — instead of inheriting a fixed runtime.
<br><br>

Tested against [test262](https://github.com/tc39/test262) on every commit:

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/test262/conformance-dark.png">
</picture>

---

```sh
gleam run -- file.js       # run a script
gleam test                 # unit tests
TEST262_EXEC=1 gleam test  # full test262 suite
TEST262=1 gleam…
