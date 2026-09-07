---
repo: "Noelo-Lab/kuna"
name: "kuna"
description: "An agent-first decompiler designed to be refined by other agents. Kuna is written in Rust and was originally ported from Ghidra."
readmeQualityOk: true
url: "https://github.com/Noelo-Lab/kuna"
homepage: "https://kuna.noelo.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["binary-analysis", "decompilation", "autonomous-refinement"]
stars: 409
forks: 25
openIssues: 8
closedIssues: 32
watchers: 4
contributors: 7
recentReleases: 10
createdAt: "2026-06-07T18:01:35Z"
lastCommitAt: "2026-09-07T08:34:45Z"
lastReleaseAt: "2026-07-31T02:57:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 29
maintainers: ["mahaloz", "phix33", "TsingShui"]
openGraphImageUrl: "https://opengraph.githubassets.com/f31bc6fa2a435744274edba50c084806fc10f37587733e3a6255862fdc3a057f/Noelo-Lab/kuna"
---

# Kuna

</p>

An agent-first decompiler designed to be refined by other agents.
Kuna is written in Rust and was originally ported from [Ghidra](https://github.com/nationalsecurityagency/ghidra), but has since diverged on multiple features and pipeline designs.
This project is an _experiment_ to establish how far the autonomous refinement of decompilers can push research in the field.
Learn more about this approach in this [post](https://noelo.org/blog/kuna-release/).

**Questions? Join our Discord**:

## Install & Usage
Kuna is distributed as a single Rust binary and can be run on most systems.
It can be used either on the [CLI](#cli-usage), the [web browser](#web-browser-usage), or in the [Ghidra GUI](#ghidra-gui-usage) (as the decompiler backend).

### CLI Usage
If building from source, you can find the `kuna` binary in `decompiler/target/release/kuna`.
Otherwise, you can find it in the latest [release](https://github.com/Noelo-Lab/kuna/releases) for your OS (Linux, Windows, MacOS supported). 

```bash
kuna decompile ./a.out main
kuna decompile ./stripped.bin 0x401040 --addr
# decompiles a full binary, returning a .c, .h, and .asm file
kuna decompile-project ./a.out
# flip a…
