---
repo: "wasm-bindgen/ts-gen"
name: "ts-gen"
description: "Automated TypeScript Bindgen"
readmeQualityOk: true
url: "https://github.com/wasm-bindgen/ts-gen"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 21
forks: 6
openIssues: 13
closedIssues: 33
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-03-24T22:57:18Z"
lastCommitAt: "2026-10-24T08:08:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 46
maintainers: ["guybedford", "logan-gatlin", "wasm-bindgen-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78351d00caf8418d00320c2794d6da37e767a3cccc8022cfaf5a9962048f692e/wasm-bindgen/ts-gen"
---

# ts-gen

Generate [`wasm-bindgen`](https://github.com/wasm-bindgen/wasm-bindgen) Rust bindings from TypeScript `.d.ts` declaration files.

## Overview

`ts-gen` reads TypeScript `.d.ts` files and produces Rust source code containing `#[wasm_bindgen]` extern blocks, ready to compile against `wasm-bindgen`.

### Pipeline

```text
.d.ts files
  -> oxc_parser (AST)
  -> First Pass phase 1: collect all type names into TypeRegistry
  -> First Pass phase 2: populate full IR (resolve references, merge var+interface patterns)
  -> Assembly: group by ModuleContext, resolve inheritance chains, classify types
  -> Code Generation: IR -> syn::File -> prettyplease -> .rs files
```

## Installation

### CLI

```sh
cargo install ts-gen
```

### Library

```sh
cargo add ts-gen --no-default-features
```

The `cli` feature (enabled by default) pulls in `clap` and `walkdir` for the
binary. Disable it if you only need the library API.

## Usage

### CLI

```sh
ts-gen --input types.d.ts --output src/bindings.rs
```

Process a directory of declaration files:

```sh
ts-gen --input ./typings/ --output src/bindings.rs --lib-name my-js-lib
```

Map external types from other crates:

```sh
ts-gen --input…
