---
repo: "rok-lang/rok"
name: "rok"
description: "A compiled language that tells you what to write. The Rust implementation: compiler, runtime, standard library, and tools."
readmeQualityOk: true
url: "https://github.com/rok-lang/rok"
homepage: "https://rok-lang.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["compiler", "llvm", "programming-language", "rok", "systems-programming"]
stars: 18
forks: 1
openIssues: 16
closedIssues: 246
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-10-25T11:02:13Z"
lastCommitAt: "2026-11-02T17:36:38Z"
lastReleaseAt: "2026-10-31T21:19:51Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 55
maintainers: ["miniex"]
openGraphImageUrl: "https://opengraph.githubassets.com/7470234c90556002b40f142b007ade8fb1a30496465e6f860cabf9df169b97ec/rok-lang/rok"
discussionCount: 0
---

# Rok

The implementation of the Rok language: the compiler `rokc`, the package / build
front end `rok`, the language server `rokls`, the runtime `librokr.a`, and the
standard library (`library/{core,std,bare}`).

- Site: https://rok-lang.org
- Docs (guide, reference, standard library API): https://docs.rok-lang.org
- Language specification: https://github.com/rok-lang/spec

## Install

macOS and Linux:

```sh
curl -fsSL https://rok-lang.org/install.sh | sh
```

Windows, in PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -c "irm https://rok-lang.org/install.ps1 | iex"
```

The installer puts `~/.rok/bin` on `PATH` the way rustup does: `install.sh` writes
`~/.rok/env` and sources it from `~/.profile`, `~/.bashrc`, `~/.bash_profile` and
`~/.zshenv` (and fish's `conf.d/rok.fish`), and `install.ps1` sets the user `PATH`. It
also installs shell completion for `rok` and `rokc` (`rok completions <shell>` prints
the script). Open a new shell afterwards. To leave your shell files alone, pass
`--no-modify-path` (`curl -fsSL https://rok-lang.org/install.sh | sh -s -- --no-modify-path`)
or `-NoModifyPath`, or set `ROK_NO_MODIFY_PATH=1`.

Nix:

```sh
nix profile install…
