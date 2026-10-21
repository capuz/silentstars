---
repo: "HerringtonDarkholme/hd-lang"
name: "hd-lang"
description: "My Toy Language"
readmeQualityOk: true
url: "https://github.com/HerringtonDarkholme/hd-lang"
homepage: "https://herringtondarkholme.github.io/hd-lang/"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 33
forks: 0
openIssues: 116
closedIssues: 606
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-19T04:44:06Z"
lastCommitAt: "2026-10-21T23:32:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 41
maintainers: ["HerringtonDarkholme"]
openGraphImageUrl: "https://opengraph.githubassets.com/4810e0bef6417a9d4290a185cc7a3c1250a0ad7ede76bf36256ab3f021b57ab4/HerringtonDarkholme/hd-lang"
---

# hd-lang

**Rustic Effects on Pythonic Goland.**

A statically typed, indentation-based language that compiles to WebAssembly,
built for code that AI writes and humans review.

## Algebraic effects, emulated by three pillars

1. **Requirements declare.** `fn load!(id: Id) -> User $ Db + Cache`: after
   `$`, a function lists every capability it may use, and the checker
   enforces it.
2. **Providers handle.** `$.with(Db=mock_db): ...` binds a capability for a
   block, so tests, sandboxes, and production differ only in providers.
3. **`!` suspends.** `fn!` and `f!(...)` mark one-shot suspension. `all!`,
   `race!`, and `retry!` compose it.

Errors stay plain values: `Result[T, E]` and `?`.

### Why it matters

Without requirements, a function that sends mail and reads the clock looks
like any other, and a test must patch globals or pull in a mocking library to
check it. With them, the signature lists what the function touches, and the
test installs a fake mailer and a fixed clock for one block. Forgetting a
provider is a `missing-requirement` compile error, not a runtime surprise.

```hd
use std.time.{Clock, ManualClock, Timestamp}

trait Mailer:
    fn send!(&mut self, to:…
