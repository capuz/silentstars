---
repo: "edujbarrios/semauri"
name: "semauri"
description: "A natural-language-inspired programming language, built for humans and AI agents."
readmeQualityOk: true
url: "https://github.com/edujbarrios/semauri"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 24
forks: 0
openIssues: 59
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-30T15:23:01Z"
lastCommitAt: "2026-11-01T22:58:25Z"
lastReleaseAt: "2026-10-08T21:26:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 82
undervaluedScore: 37
maintainers: ["edujbarrios"]
openGraphImageUrl: "https://opengraph.githubassets.com/352992aa6f7921178e66f8b7fb2a0ecc0112d07e3894839d9e34bb708b3c62c6/edujbarrios/semauri"
---

# Semauri

**A readable, statically typed language for people and AI agents.** Write natural-language-inspired programs in `.suri`; compile with Rust, inspect effects, and run with explicit permissions. Current release: **v0.60.0**.

## Quick Start

Install the [latest binary for Windows, macOS or Linux](https://github.com/edujbarrios/semauri/releases/latest), or build from source with Rust:

```sh
cargo install --path . --locked
semauri version
```

Create `hello.suri` (also available as [`examples/quickstart.suri`](https://github.com/edujbarrios/semauri/blob/HEAD/examples/quickstart.suri)):

```text
let numbers be a list of 1, 2, 3.
let doubled be map every n in numbers to (n times 2).
assert sum of doubled is equal to 12.
print doubled.
```

```sh
semauri check hello.suri
semauri run --allow console_write hello.suri
```

Output: `[2, 4, 6]`.

**Rules for humans and coding agents:** write lowercase keywords; finish each statement with `.`; declare immutable values before use; use `number`, `string`, `boolean`, and typed lists; declare pure functions with `define function ...`; use `if ... otherwise ... end.` for branches. Check generated code with `fmt` and `check` before…
