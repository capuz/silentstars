---
repo: "lmmx/polars-genson"
name: "polars-genson"
description: "A Polars plugin for JSON schema inference from string columns using genson-rs."
readmeQualityOk: true
url: "https://github.com/lmmx/polars-genson"
homepage: "https://polars-genson.vercel.app"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [74, 22]
topics: ["genson", "json-schema", "polars-dataframe", "polars-extensions", "schema-inference"]
stars: 15
forks: 1
openIssues: 22
closedIssues: 50
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-08-17T22:43:15Z"
lastCommitAt: "2026-10-21T08:49:10Z"
lastReleaseAt: "2025-09-06T14:14:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 92
undervaluedScore: 67
maintainers: ["lmmx"]
openGraphImageUrl: "https://opengraph.githubassets.com/19f98caeafdd5602ef2f598f90ad663e9cd6e4ac91ef2c7cfd4e63698965745e/lmmx/polars-genson"
---

# Polars Genson

Fast JSON schema inference with support for Polars DataFrames.

## Project Structure

This workspace contains multiple interconnected crates, most people will probably want the Python
package:

### Python Package
- **[polars-genson-py/](https://github.com/lmmx/polars-genson/blob/master/polars-genson-py)** - Python bindings and Polars plugin

#### Quick Start

```bash
pip install polars-genson[polars]
```

```python
import polars as pl
import polars_genson

df = pl.DataFrame({
    "json_data": [
        '{"name": "Alice", "age": 30, "scores": [95, 87]}',
        '{"name": "Bob", "age": 25, "city": "NYC", "active": true}'
    ]
})

json_schema = df.genson.infer_json_schema("json_data")
polars_schema = df.genson.infer_polars_schema("json_data")
```

### Rust Libraries

- **[genson-core/](https://github.com/lmmx/polars-genson/blob/master/genson-core)** - Core JSON schema inference library
- **[polars-jsonschema-bridge/](https://github.com/lmmx/polars-genson/blob/master/polars-jsonschema-bridge)** - JSON Schema ↔ Polars type conversion
- **[genson-cli/](https://github.com/lmmx/polars-genson/blob/master/genson-cli)** - Command-line schema inference tool

## Features

-…
