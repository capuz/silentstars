---
repo: "glide-lang/Glide"
name: "Glide"
description: "A general-purpose language that just glides."
url: "https://github.com/glide-lang/Glide"
homepage: "https://glide-lang.org"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["compiler", "glide", "glide-lang", "glide-language", "programming-language", "systems-programming"]
stars: 37
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-01-28T05:17:11Z"
lastCommitAt: "2026-06-26T06:45:32Z"
lastReleaseAt: "2026-06-19T04:51:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 42
maintainers: ["Murilinho145SG"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8e86c1848eebef36e1d81113eef67ca302300a69db63143f39abdad0cac5006/glide-lang/Glide"
---

</p>

  <b>A small systems language with automatic memory safety, real concurrency, and a batteries-included standard library.</b>
</p>

Glide is a compiled systems language. It gives you native performance through a
portable C backend, memory safety without a garbage collector and without
lifetime annotations, and real M:N concurrency. The whole compiler is written
in Glide itself.

Memory is managed for you. A value is owned by default, moves when you hand it
off, and frees itself at the end of its scope, so the common case needs no
manual allocation or cleanup, and use-after-move and double-free are caught at
compile time. Borrows, a manual heap, and arenas stay available for the moments
you want to take control.

Errors are values rather than exceptions: results and options carried in the
type system, propagated with light postfix operators. Concurrency is built in:
spawn lightweight coroutines and pass data over typed channels. The standard
library ships networking and a full HTTP stack, crypto, JSON, a package
manager, a formatter, and a language server.

Glide is plug-and-play. A release is a single self-contained binary that
carries its own toolchain, so a fresh install…
