---
repo: "nv-lang/nova"
name: "nova"
description: "Nova — a programming language for the AI era. Algebraic effects make side effects visible in function signatures."
readmeQualityOk: true
url: "https://github.com/nv-lang/nova"
homepage: "https://nv-lang.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["algebraic-effects", "compiler", "language", "nova", "programming-language", "rust"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-02T13:52:44Z"
lastCommitAt: "2026-08-19T04:08:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["unitcraft"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a384a3e4fff545c577fcb21560ba76e07905ffe681a01a0b78a5b622e483462/nv-lang/nova"
---

<h1>Nova</h1>

  <p><strong>A programming language for the AI era</strong></p>

  <p>
  </p>

  <p><strong>English</strong> | <a href="README.ru.md">Русский</a></p>

</div>

---

Nova compiles to C, then to a native binary — no VM, no interpreter.
Every function's side effects (`Db`, `Net`, `Io`, `Time`, ...) are part of
its type, checked by the compiler, so a reviewer can tell what a function
touches without reading its body. Memory is managed by a Boehm GC by
default; for resources that need deterministic, pause-free cleanup
(files, sockets, locks) `consume`/ownership gives you a guaranteed
`on_exit` at scope end, with no GC in the loop. Concurrency is
structured (`spawn`, `parallel for`, `supervised`) on an M:N
work-stealing fiber scheduler — no `async`/`await`, no function-colour
split. The standard library ships with batteries included: `std`
(collections, IO, time, JSON, ...) plus separately versioned `net`,
`tls`, `http`, and `compress` packages.

```nova
fn process_order(o Order) Db Net Time Fail -> Receipt
```

Reading this single line, you know the function:

- talks to the **database** (`Db`)
- makes **network requests** (`Net`)
- reads **the clock** (`Time`) — so its…
