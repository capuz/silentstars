---
repo: "gold-silver-copper/fux"
name: "fux"
description: "agent native multiplexer with a mosh-grade peer-to-peer attach path"
readmeQualityOk: true
url: "https://github.com/gold-silver-copper/fux"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 12
forks: 0
openIssues: 6
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-03T07:14:13Z"
lastCommitAt: "2026-10-31T15:59:15Z"
lastReleaseAt: "2026-10-17T18:58:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 45
maintainers: ["gold-silver-copper"]
openGraphImageUrl: "https://opengraph.githubassets.com/559681f7246da671c50babf132844248c71d84bdbe7476551206ab58bbb0120b/gold-silver-copper/fux"
---

# fux

A small terminal multiplexer. One server keeps your shells running in
workspaces, tabs and split panes; `fux` attaches a terminal to it. Every
other `fux` command line is a short program in **fuxth**, a tiny Forth made
for the shell, and so are fux's config, key bindings, command prompt and
dumped sessions. Several terminals can attach at once, each with its own
view and its own keys. fux is driven from the keyboard: it has no mouse
actions of its own, by design, and passes the mouse only to a program that
asks for it (see [Terminal features](#terminal-features)).

fux is one binary for macOS and Linux, built with Rust 1.95 or later.

```sh
cargo install --locked fux        # or, in a clone: cargo install --locked --path .
fux                               # attach, starting a server if none runs
```

## Using it

`fux` alone runs `default-attach` (`opts attach`), starting a server in the
background if none answers. `fux opts str work in attach` attaches to workspace
`work`; `fux @2 attach` shows a tab's first pane in layout order, and
`fux %3 attach` focuses that pane. Explicit targets must exist.
`fux opts watch attach` only watches (keys do nothing but `C-b d`, which…
