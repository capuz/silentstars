---
repo: "stx-labs/clarity-wasm"
name: "clarity-wasm"
description: "`clar2wasm` is a compiler for generating WebAssembly from Clarity."
readmeQualityOk: true
url: "https://github.com/stx-labs/clarity-wasm"
language: "Rust"
languages: ["Rust", "Clarity"]
languagePcts: [64, 31]
topics: ["clarity", "stacks", "wasm", "webassembly"]
stars: 26
forks: 24
openIssues: 41
closedIssues: 367
watchers: 10
contributors: 26
recentReleases: 0
createdAt: "2023-07-21T21:53:35Z"
lastCommitAt: "2026-08-27T13:27:35Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 67
maintainers: ["melcar-stacks", "Acaccia-stacks", "brice-stacks"]
openGraphImageUrl: "https://opengraph.githubassets.com/37a1955aabcdc9604dda49f56d7f8b8f195e1f36809a5b6e3d8b468b1947169c/stx-labs/clarity-wasm"
---

/ / /     ▶ clarity-wasm
      | | |        Compile Clarity to Wasm.
       \ \ \       Generate WebAssembly from your Clarity code for fast and portable execution.

</div>

---

## Introduction

`clar2wasm` is a compiler for generating [WebAssembly](https://webassembly.org/) from [Clarity](https://github.com/clarity-lang/reference).

## Features

## Quick-start

### Clone the repository

This repository includes the stacks-blockchain as a submodule, to keep in sync with the proper version of the clarity crate defined there. To clone this repo and its submodule, use:

```sh
git clone --recurse-submodules https://github.com/stacks-network/clarity-wasm.git
```

If you have cloned this repository without the `--recurse-submodules` flag, you can use:

```sh
git submodule update --init --recursive
```

### Command line tool

Install the command line tool, `clar2wasm` with:

```sh
cargo install --path clar2wasm
```

Once installed, try compiling one of our examples:

```sh
clar2wasm tests/contracts/define-read-only-0.clar
```

This will generate a wasm file, `tests/contracts/define-read-only-0.wasm`, from the Clarity source code.

You can view the text format of the generated Wasm by…
