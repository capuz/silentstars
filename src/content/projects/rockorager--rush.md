---
repo: "rockorager/rush"
name: "rush"
description: "rockorager's user-friendly shell"
readmeQualityOk: true
url: "https://github.com/rockorager/rush"
homepage: "https://rush.horse"
language: "Zig"
languages: ["Zig"]
languagePcts: [88]
stars: 15
forks: 2
openIssues: 13
closedIssues: 34
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-06-07T17:55:13Z"
lastCommitAt: "2026-07-16T05:59:21Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 47
maintainers: ["ampagent", "rockorager", "hspak"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6b4481e34202b68302b5b71389a31ede2919ed851fb353cc5a6a24b4d370715/rockorager/rush"
---

# rush

Rush is an experimental, POSIX-facing shell with Bash compatibility and
interactive UX improvements under active development. It is early software: the
implementation moves quickly, APIs may change, and POSIX compatibility is a
work in progress rather than a certification claim.

## Current focus

- POSIX shell execution, expansion, redirection, job-control, and builtins.
- Incremental Bash-compatible features; Rush defaults to POSIX-facing behavior.
- A terminal line editor with history search, emacs/vi editing modes, styled
  diagnostics, and a rebuilt interactive shell on top of `shell/` and
  `runtime/`.

Rush targets POSIX-like systems first: Linux, macOS, and BSDs.

## Build and install

Rush currently requires Zig 0.16. The repository includes `mise.toml` for
`mise` users, and Zig fetches the declared dependencies from `build.zig.zon`.
SQLite is built from the bundled amalgamation by default; packagers can opt into
system SQLite with `-fsys=sqlite3`.

```sh
git clone https://github.com/rockorager/rush
cd rush
zig build
zig build install --prefix "$HOME/.local" -Doptimize=ReleaseSafe
```

Arch Linux users can install the latest development revision from the AUR:…
