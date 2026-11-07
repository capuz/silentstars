---
repo: "HerringtonDarkholme/hd-lang"
name: "hd-lang"
description: "Rustic Effects on Pythonic Goland"
readmeQualityOk: true
url: "https://github.com/HerringtonDarkholme/hd-lang"
homepage: "https://herringtondarkholme.github.io/hd-lang/"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
topics: ["programming-language"]
stars: 39
forks: 1
openIssues: 69
closedIssues: 1299
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-19T04:44:06Z"
lastCommitAt: "2026-11-07T16:00:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 41
maintainers: ["HerringtonDarkholme", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/072626dd8d7834538ab7a0969b442c071fe3c2d90ec4e7a953feb94c9eeb6a83/HerringtonDarkholme/hd-lang"
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
3. **`!` suspends.** `fn!` and `f!(...)` mark one-shot suspension. `join!`,
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
