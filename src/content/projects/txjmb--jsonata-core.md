---
repo: "txjmb/jsonata-core"
name: "jsonata-core"
description: "Python Jsonata implementation with Rust backend"
readmeQualityOk: true
url: "https://github.com/txjmb/jsonata-core"
homepage: "https://txjmb.github.io/jsonatapy/"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 7
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-01-19T13:42:54Z"
lastCommitAt: "2026-07-04T23:13:23Z"
lastReleaseAt: "2026-07-04T22:00:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 32
maintainers: ["github-actions[bot]", "txjmb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cafe712ea68082e0edb68fa84c7486c31c15190aab350df56b70fc1d0dc95a86/txjmb/jsonata-core"
---

# jsonata-core + jsonatapy

High-performance [JSONata](https://jsonata.org/) implementation in Rust, with Python bindings.

> Much of this project was built with human guidance using Claude Code. There was no performant
> JSONata implementation in Python, so the goal was to port JSONata to Rust (with a PyO3 wrapper
> for Python) and see how fast it could go. The answer: faster than V8 for most expression
> workloads, and faster than the next pure-Rust implementation.

---

## Two packages, one implementation

| | **jsonata-core** | **jsonatapy** |
|---|---|---|
| Language | Rust | Python |
| Published on | [crates.io](https://crates.io/crates/jsonata-core) | [PyPI](https://pypi.org/project/jsonatapy/) |
| Install | `cargo add jsonata-core` | `pip install jsonatapy` |
| Use when | You're writing Rust | You're writing Python |

`jsonatapy` is a thin PyO3 wrapper around `jsonata-core`. Both live in this repo.

---

## Rust quick start

```rust
use jsonata_core::evaluator::Evaluator;
use jsonata_core::parser;
use jsonata_core::value::JValue;

let ast = parser::parse("orders[price > 100].product")?;
let data = JValue::from_json_str(r#"{"orders":[
    {"product":"Laptop","price":1200},…
