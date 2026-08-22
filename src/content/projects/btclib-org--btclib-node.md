---
repo: "btclib-org/btclib-node"
name: "btclib-node"
description: "A bitcoin node written in python"
readmeQualityOk: true
url: "https://github.com/btclib-org/btclib-node"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 33
closedIssues: 21
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2020-11-21T17:22:41Z"
lastCommitAt: "2026-08-22T04:06:23Z"
lastReleaseAt: "2023-09-15T18:01:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 59
maintainers: ["fametrano", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/97c903b21155cefffa2c769f9515ed5ecae3e3af23f9b890a503a368ed22e3dc/btclib-org/btclib-node"
---

# btclib_node

[btclib_node](https://github.com/btclib-org/btclib_node) is a bitcoin node
with its consensus and network code written in python, using the
[btclib](https://github.com/btclib-org/btclib) bitcoin library.

**btclib_node** succeeded in downloading and validating the entire bitcoin
blockchain, starting from version 0.1.0 and, as far as I can tell, is the
first python implementation that was able to do so

## Test, develop, and contribute

The project uses [uv](https://docs.astral.sh/uv/), which fetches the
interpreter and every dependency group itself.

LevelDB is the one thing it cannot fetch. `plyvel`, the binding this node
stores its blocks and chainstate through, publishes no wheel for macOS at
all and none past CPython 3.12 elsewhere, so it is built from source here
and needs LevelDB's headers and library present first:

```shell
brew install leveldb                     # macOS
sudo apt-get install libleveldb-dev      # Debian, Ubuntu
```

On macOS they land under Homebrew's prefix rather than in the compiler's
default search path, so that build needs to be pointed at them:

```shell
export CPATH="$(brew --prefix leveldb)/include"
export LIBRARY_PATH="$(brew…
