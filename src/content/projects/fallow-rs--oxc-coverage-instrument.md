---
repo: "fallow-rs/oxc-coverage-instrument"
name: "oxc-coverage-instrument"
description: "Istanbul-compatible JavaScript/TypeScript coverage instrumentation using the Oxc AST"
readmeQualityOk: true
url: "https://github.com/fallow-rs/oxc-coverage-instrument"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
topics: ["coverage", "istanbul", "javascript", "oxc", "rust", "testing", "typescript"]
stars: 27
forks: 1
openIssues: 5
closedIssues: 80
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-04-07T07:53:35Z"
lastCommitAt: "2026-10-21T17:31:16Z"
lastReleaseAt: "2026-04-09T13:30:44Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 42
maintainers: ["dependabot[bot]", "BartWaardenburg"]
openGraphImageUrl: "https://opengraph.githubassets.com/783d879364c8d97e1d2297581274df6e6852dc280ec71c205d5ae7808a47c4ff/fallow-rs/oxc-coverage-instrument"
fundingLinks: ["GITHUB:https://github.com/BartWaardenburg"]
---

# Oxc Coverage Instrument

Istanbul-compatible JavaScript and TypeScript coverage instrumentation built on
the [Oxc](https://oxc.rs) parser.

Instrumentation happens at the AST level through `oxc_traverse` and
`oxc_codegen`, and the output is checked against `istanbul-lib-instrument` on a
shared fixture corpus, both by count and byte for byte. The workspace also
provides the surrounding Istanbul-compatible pipeline: the data model,
source-map remapping, V8-to-Istanbul conversion, report summarization, and the
`text`, `text-summary`, `json-summary`, `lcov`, `cobertura`, and `html`
reporters. It does not claim to port every Istanbul package or reporter.

## Install

```toml
[dependencies]
oxc_coverage_instrument = "0.14"
```

```bash
npm install oxc-coverage-instrument
```

```bash
cargo install --git https://github.com/fallow-rs/oxc-coverage-instrument oxc_coverage_instrument_cli
```

## Usage

```rust
use oxc_coverage_instrument::{instrument, InstrumentOptions};

let source = "function add(a, b) { return a + b; }";
let result = instrument(source, "add.js", &InstrumentOptions::default()).unwrap();

assert_eq!(result.coverage_map.fn_map["0"].name, "add");
println!("{}",…
