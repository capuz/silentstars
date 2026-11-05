---
repo: "objectionary/phino"
name: "phino"
description: "Command-Line Normalizer, Rewriter, and Dataizer of 𝜑-Calculus Expressions"
readmeQualityOk: true
url: "https://github.com/objectionary/phino"
homepage: "https://hackage.haskell.org/package/phino"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [100]
topics: ["code-analysis", "command-line-tool", "eolang", "formalization", "haskell", "normalization", "phi-calculus"]
stars: 19
forks: 17
openIssues: 58
closedIssues: 922
watchers: 2
contributors: 33
recentReleases: 0
createdAt: "2025-05-05T09:34:09Z"
lastCommitAt: "2026-11-05T08:04:57Z"
lastReleaseAt: "2025-06-25T12:34:37Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 98
undervaluedScore: 78
maintainers: ["yegor256", "macoladik", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/480fab0e0f2915e8b7f8f10ff5baa296a1765000972335b696075fc3141dca5e/objectionary/phino"
---

# Command-Line Manipulator of 𝜑-Calculus Expressions

This is a command-line normalizer, rewriter, and dataizer
of [𝜑-calculus](https://www.eolang.org) expressions.

First, you write a simple [𝜑-calculus](https://www.eolang.org) expression
in the `hello.phi` file:

```text
⟦ φ ↦ ⟦ Δ ⤍ 68-65-6C-6C-6F ⟧, t ↦ ξ.k, k ↦ ⟦⟧ ⟧
```

## Installation

Then you can install `phino` in two ways:

Install [Cabal][cabal] first and then:

```bash
cabal update
cabal install --overwrite-policy=always phino-0.0.160
phino --version
```

Or download binary from the internet using [curl](https://curl.se/) or
[wget](https://en.wikipedia.org/wiki/Wget):

```bash
sudo curl -o /usr/local/bin/phino http://phino.objectionary.com/releases/macos-15/phino-latest
sudo chmod +x /usr/local/bin/phino
phino --version
```

Download paths are:

* Ubuntu 22.04: <http://phino.objectionary.com/releases/ubuntu-22.04/phino-latest>
* Ubuntu 24.04: <http://phino.objectionary.com/releases/ubuntu-24.04/phino-latest>
* MacOS (ARM): <http://phino.objectionary.com/releases/macos-15/phino-latest>
* MacOS (Intel): <http://phino.objectionary.com/releases/macos-14-large/phino-latest>
* Windows:…
