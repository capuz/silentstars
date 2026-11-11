---
repo: "gildrb/eukhe"
name: "eukhe"
description: "The harness for the AGI era: an agent core proven with Bend, plugged into any product through its SDK"
readmeQualityOk: true
url: "https://github.com/gildrb/eukhe"
homepage: "https://eukhe.com"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [73, 22]
topics: ["agent", "bend", "cli", "gateway", "multi-provider", "rlm", "rust", "terminal", "tui", "durable"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-31T15:44:29Z"
lastCommitAt: "2026-11-11T19:33:05Z"
lastReleaseAt: "2026-10-06T18:55:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["gildrb"]
openGraphImageUrl: "https://opengraph.githubassets.com/88a675374eab65beb797c8bc8fcd610a02315d332f5893f01040fff138934657/gildrb/eukhe"
---

# eukhe

Coding agent with a memory of all things. εὐχή: a wish, a prayer.

## Install

```sh
curl -fsSL https://eukhe.com/install | sh  # macOS (Apple Silicon), Linux (x64, arm64); rerun to update
eukhe kernel install                       # one time: the Python kernel (needs uv); until then sessions have no ipython tool
```

- Nix: `nix run github:gildrb/eukhe`
- Home Manager: `programs.eukhe.enable = true;` (module `inputs.eukhe.homeManagerModules.default`)
- Source: `cargo build --release --locked -p eukhe-cli`

## Use

```sh
cd /path/to/project
eukhe            # start; run /login at the first start
eukhe agents     # find and open sessions
eukhe gateway    # chat with the session from Signal on your phone
eukhe dashboard  # open the session in a browser
```

`eukhe --help` lists the commands. In a session, type `/` for the slash commands.

## Memory

> γραμμάτων τε συνθέσεις, μνήμην ἁπάντων, μουσομήτορ᾽ ἐργάνην.
> And the joining of letters: memory of all things, the Muses' mother, a worker. (Aeschylus, Prometheus Bound 460-461)

- Each session keeps an append-only log. Nothing is deleted.
- A turn sends the newest messages verbatim and a view of the older ones: one-line…
