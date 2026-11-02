---
repo: "developmentseed/cql2-rs"
name: "cql2-rs"
description: "Rust library and Python bindings for parsing the OGC CQL2 filter language"
readmeQualityOk: true
url: "https://github.com/developmentseed/cql2-rs"
homepage: "http://developmentseed.org/cql2-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 23
forks: 4
openIssues: 8
closedIssues: 36
watchers: 4
contributors: 36
recentReleases: 0
createdAt: "2024-07-15T14:18:59Z"
lastCommitAt: "2026-11-02T13:38:08Z"
lastReleaseAt: "2025-03-27T21:35:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 59
maintainers: ["dependabot[bot]", "gadomski", "ds-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0de3125018534e4afd39f3d65c43a6fdb3319305d495d7b7b3df963330e27cfe/developmentseed/cql2-rs"
---

# cql2-rs

Parse, validate, and convert [Common Query Language (CQL2)](https://www.ogc.org/standard/cql2/) text and JSON.

## Usage

### API

```toml
[dependencies]
cql2 = "*"
```

Then:

```rust
use cql2::Expr;

let expr: Expr = "landsat:scene_id = 'LC82030282019133LGN00'".parse().unwrap();
assert!(expr.is_valid());
println!("{}", expr.to_json().unwrap());
```

See [the documentation](https://docs.rs/cql2) for more.

## CLI

See [the cql2-cli README](https://github.com/developmentseed/cql2-rs/blob/HEAD/cli/README.md) for details.

## Responses

Responses may not match the input.

### cql2-text differences

- Identifiers in output are quoted only where the cql2-text grammar requires it
- The position of "NOT" keywords is standardized to be before the expression (ie "... NOT LIKE ..." will become "NOT ... LIKE ..."
- The negative operator on anything besides a literal number becomes "* -1"
- Parentheses are added only where grouping requires them, so the output re-parses to the same expression

## Development

Get [uv](https://docs.astral.sh/uv/getting-started/installation/) and [Rust](https://rustup.rs/).
Then:

```shell
git clone git@github.com:developmentseed/cql2-rs.git
cd…
