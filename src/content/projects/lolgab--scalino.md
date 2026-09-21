---
repo: "lolgab/scalino"
name: "scalino"
description: "Scala Native toolchain without the JVM"
readmeQualityOk: true
url: "https://github.com/lolgab/scalino"
language: "Scala"
languages: ["Scala", "Shell"]
languagePcts: [61, 25]
stars: 22
forks: 1
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-09-02T12:08:19Z"
lastCommitAt: "2026-09-21T09:14:07Z"
lastReleaseAt: "2026-09-18T06:54:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 37
maintainers: ["lolgab", "github-actions[bot]", "coreyoconnor"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0ac0161c316fbf739b79425f20d10392b5a4db4fec048f4eaf4a609b34ff219/lolgab/scalino"
---

# scalino

Write, build, and run Scala 3 without installing a JVM. `scalino` compiles
straight to a native executable via Scala Native — no bytecode, no JIT, no
`java` on your machine at all.

The compiler, linker, and LSP server are all themselves self-hosted: compiled
by dotc from their own patched source, targeting Scala Native directly, so
nothing you run day to day touches a JVM — see
[`docs/findings.md`](https://github.com/lolgab/scalino/blob/HEAD/docs/findings.md) for the full story.

Today: compiler + linker + build tool (`scalino`). Next: full editor support —
see [Status](#status).

## Install

```
curl -fsSL https://raw.githubusercontent.com/lolgab/scalino/main/install.sh | bash
```

Grabs the latest [release](https://github.com/lolgab/scalino/releases) for
your OS/arch, verifies its checksum, and installs `scalino` to
`~/.local/bin` (override with `$SCALINO_INSTALL_DIR`/`$SCALINO_BIN_DIR`/`$SCALINO_VERSION`).

Prefer to do it by hand? Each release ships a self-contained `dist/` tarball
(compiler + linker + `scalino`) for Linux (x86_64/arm64), macOS
(x86_64/arm64), and Windows (x86_64 only, experimental — see…
