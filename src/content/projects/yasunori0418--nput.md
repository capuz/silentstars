---
repo: "yasunori0418/nput"
name: "nput"
description: "Place nix store paths (whole repo, subdirectory, or single file) at arbitrary user paths via symlink or copy — a placement primitive that doesn't generate config."
readmeQualityOk: true
url: "https://github.com/yasunori0418/nput"
language: "Go"
languages: ["Go"]
languagePcts: [81]
stars: 16
forks: 0
openIssues: 48
closedIssues: 113
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-24T14:00:18Z"
lastCommitAt: "2026-08-10T05:04:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 42
maintainers: ["yasunori0418"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1905ef783ab2341ac6ec2387c15fd15bd40be35044a8d0bbe883a17c5d252c5/yasunori0418/nput"
---

# nput

*Read this in [Japanese (日本語)](https://github.com/yasunori0418/nput/blob/HEAD/README.ja.md).*

> Place fetched git repositories at arbitrary paths via symlink or copy.

nput is a Nix library and module set that **places the contents of an already-fetched
Nix store path at a `root`-relative target** — as a symlink or a copy. It does **not**
generate configuration. It puts a repository's contents where you ask, untouched.

The core is a **placement primitive**: a pure function that places a Nix store path at a
`root`-relative `target`. It is not hidden behind a module abstraction — you compose it
directly. `home.file`-style placement (`root` = `$HOME`) is just one application; `root`
is chosen explicitly with the `projectRoot` / `homeRoot` / `systemRoot` markers (there is
**no implicit default**).

> **Status: MVP / implementation phase.** The implemented scope is the standalone CLI +
> **project mode** as the core, with **home mode** also supported. NixOS / nix-darwin
> modules and **system mode** are future work. See [MVP status](#mvp-status) for the full
> matrix. APIs may still change.

---

## Why nput

Nix can *fetch* a repository (`fetchFromGitHub`, `fetchGit`, flake…
