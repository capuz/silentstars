---
repo: "openpeeps/clue"
name: "clue"
description: "An alternative package manager for Nim development"
readmeQualityOk: true
url: "https://github.com/openpeeps/clue"
language: "Nim"
languages: ["Nim"]
languagePcts: [100]
topics: ["nim", "nim-lang", "openpeeps", "package", "package-manager"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-04-22T14:56:15Z"
lastCommitAt: "2026-08-30T09:25:30Z"
lastReleaseAt: "2026-08-25T20:16:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 64
maintainers: ["georgelemon"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f66c0eccb6b571f69a6ed6b07751709f0c9ac7c312f050b902aa3dfed721c30/openpeeps/clue"
---

An alternative package manager for Nim development
</p>

  <code>nimble install clue</code>
</p>

</p>

### Why Clue?
Clue is an alternative to `nimble` — a friendly toolkit for installing, building
and documenting Nim packages, resolving tricky dependencies, and managing
per-version toolchains with virtual environments when `nimble` just doesn't cut it.

> [!NOTE]
> **Version resolution** — Clue resolves dependencies with a lazy, depth-first
> search (no SAT solver): constraints declared closest to the root are *hard*,
> deeper ones are *soft* tie-breakers ("nearest wins"), dependencies are only
> expanded for versions actually explored, and failed choices backtrack
> chronologically (bounded by a probe limit) until a satisfiable set is found —
> or a clear conflict error is raised.

### Supported Constraint Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `*` | any version | `requires "pkg *"` |
| `=` or `==` | exact match | `requires "pkg = 1.2.3"` |
| `>=` | greater or equal | `requires "pkg >= 1.2.0"` |
| `>` | strictly greater | `requires "pkg > 1.2.0"` |
| `<=` | less or equal | `requires "pkg <= 2.0.0"` |
| `<` | strictly less | `requires "pkg…
