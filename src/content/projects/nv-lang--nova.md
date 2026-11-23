---
repo: "nv-lang/nova"
name: "nova"
description: "Nova — a programming language for the AI era. Algebraic effects make side effects visible in function signatures."
readmeQualityOk: true
url: "https://github.com/nv-lang/nova"
homepage: "https://nv-lang.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
topics: ["algebraic-effects", "compiler", "language", "nova", "programming-language", "rust"]
stars: 16
forks: 1
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-02T13:52:44Z"
lastCommitAt: "2026-11-23T11:40:59Z"
lastReleaseAt: "2026-11-17T02:21:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 54
maintainers: ["unitcraft"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd0042ac5cf7608b5fe16addb4938f0eb834ea4617dd3d834f667859cd2ebec4/nv-lang/nova"
---

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
