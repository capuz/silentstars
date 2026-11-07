---
repo: "aryx/efuns"
name: "efuns"
description: "An Emacs clone written in OCaml"
readmeQualityOk: true
url: "https://github.com/aryx/efuns"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [96]
stars: 42
forks: 1
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2015-04-25T05:43:27Z"
lastCommitAt: "2026-11-07T13:54:22Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 45
undervaluedScore: 20
maintainers: ["aryx"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d5c0ad10c2d27836d41f74d489a426285367f680fd0accac56ed2102626a7eb/aryx/efuns"
---

# Efuns

An Emacs clone written entirely in OCaml, using GTK/Cairo for rendering.

Efuns was written originally by Fabrice Le Fessant
(INRIA Rocquencourt, FRANCE) in 1999.

It was forked by Yoann Padioleau in 2015 who took over its maintenance
and added many features (see `changes.org`, `authors.txt`, and the
screenshot below).

## Building

### Prerequisites

OCaml 4.14+ (via opam >= 2.1), gcc, git, curl, pkg-config.

On Ubuntu/Debian:
```bash
apt-get install build-essential pkg-config opam curl libpcre3-dev libpcre2-dev libgmp-dev libev-dev libcurl4-gnutls-dev libcairo2-dev libgtk2.0-dev
```

On macOS:
```bash
brew install opam pkg-config cairo gtk+
```

### Quick start

```bash
git clone --recurse-submodules https://github.com/aryx/efuns
cd efuns
./configure     # installs opam deps and sets up tree-sitter (run infrequently)
make            # routine build
make test       # run tests
```

### Docker

A reference build using Ubuntu is provided:

```bash
docker build -t efuns .
```

## Usage

```bash
efuns --help
efuns <file>
```

## Inspiration

Efuns is part of [Principia Softwarica](https://github.com/aryx/principia-softwarica),
a series of literate-programming books that…
