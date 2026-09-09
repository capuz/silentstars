---
repo: "atree4728/cuintet"
name: "cuintet"
description: "A RISC-V CPU written in Clash."
readmeQualityOk: true
url: "https://github.com/atree4728/cuintet"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [89]
stars: 5
forks: 0
openIssues: 6
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T13:22:37Z"
lastCommitAt: "2026-09-09T08:07:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 50
maintainers: ["atree4728"]
openGraphImageUrl: "https://opengraph.githubassets.com/82dc814e92aca1a580a19aee48446f8a2c2450cd97aaa6f029848ed8e517163b/atree4728/cuintet"
---

# Cuintet

*Cuintet* is a *5*-stage pipelined RISC-V CPU written in *Clash*, which implements `RV64IM_Zicsr`.

## Building and testing

To build the project, use:

```sh
cabal build
```

To run the tests defined in `tests/` and `bench/`, use:

```bash
cabal run unittests
cabal run doctests
cabal run bench
```

To open the REPL, use:

```
cabal run clashi
```

To see the document, use:

```
cabal haddock --open
```

To log the core as Kanata format, use:

```sh
just konata IMAGE.elf
```

To diff a linked ELF's retire trace against spike's, use:

```sh
just tracediff IMAGE.elf
```

## Synthesis

Each top entity lives in its own module under `Cuintet.Top`. To compile one to
SystemVerilog, run:

```bash
cabal run clash -- Cuintet.Top.TangNano9k --systemverilog
```

You can find the SystemVerilog files in `systemverilog/`.

Synthesising for the Tang Nano 9K needs [just](https://github.com/casey/just) and
[oss-cad-suite](https://github.com/YosysHQ/oss-cad-suite-build) on `PATH`:

```bash
just prog   # build the bitstream and load it into SRAM
just flash  # build the bitstream and write it to the on-board flash
```
