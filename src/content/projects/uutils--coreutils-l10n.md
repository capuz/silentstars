---
repo: "uutils/coreutils-l10n"
name: "coreutils-l10n"
description: "Translations of the Rust coreutils"
readmeQualityOk: true
url: "https://github.com/uutils/coreutils-l10n"
language: "Fluent"
languages: ["Fluent"]
languagePcts: [100]
stars: 5
forks: 12
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 74
recentReleases: 0
createdAt: "2025-06-29T19:57:11Z"
lastCommitAt: "2026-11-02T13:39:39Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 93
maintainers: ["Hekzory", "tron90x", "chengwu26"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3f54ffe94d1db2269abe6ea7b85906a51cb4820d3d774887d4dd13ceb5aeadd/uutils/coreutils-l10n"
---

# uutils Coreutils - translation repository

This repository stores the [Fluent](https://projectfluent.org/) (`.ftl`) files used
to translate the Rust implementation of the GNU Coreutils.

English reference files come from the main repository:
https://github.com/uutils/coreutils

## How to contribute

Translations can be contributed two ways:

- **Via [Weblate](https://hosted.weblate.org/projects/rust-coreutils/)** -
  the web UI handles syntax and syncs back here automatically.
- **Directly via pull requests** editing the `.ftl` files.

## Layout

- `src/uu/<utility>/locales/<locale>.ftl` - per-utility translations (~100 utilities).
- `src/uucore/locales/<locale>.ftl` - shared strings used across utilities.

`en-US.ftl` is the source/reference locale in every `locales/` directory; every other
file (including `fr-FR.ftl`) is a translation of it.

> **Note:** `base32`, `base64`, and `basenc` share one set of translations -
> `base64/locales` and `basenc/locales` are symlinks to `base32/locales`.

## Editing translations

Each `.ftl` file is monolingual: a complete set of `key = value` message definitions.

- Change only the right-hand side (the value). Keep the keys identical to…
