---
repo: "cemsbv/pelt"
name: "pelt"
description: "Changepoint detection with Pruned Exact Linear Time "
readmeQualityOk: true
url: "https://github.com/cemsbv/pelt"
homepage: "https://pelt.readthedocs.io/en/latest/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["changepoint-detection", "pelt", "statistics", "change-point-detection", "python", "rust"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-12-10T05:12:43Z"
lastCommitAt: "2026-07-10T07:02:00Z"
lastReleaseAt: "2026-07-10T03:44:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 15
maintainers: ["tversteeg", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e565e45e58c847ac9666e54b5e505744d903c3127e658b76b679861c6ccd859/cemsbv/pelt"
---

[ci]: https://img.shields.io/crates/v/pelt.svg
[cl]: https://crates.io/crates/pelt/
[pi]: https://badge.fury.io/py/pelt.svg
[pl]: https://pypi.org/project/pelt
[li]: https://img.shields.io/crates/l/pelt.svg?maxAge=2592000
[di]: https://docs.rs/pelt/badge.svg
[dl]: https://docs.rs/pelt/
[bci]: https://github.com/cemsbv/pelt/workflows/ci/badge.svg

Changepoint detection with Pruned Exact Linear Time. 

## Usage

### Python

```python
from pelt import predict

predict(signal, penalty=20, segment_cost_function="l1", jump=10, minimum_segment_length=2)
```

### Rust

```rust
use std::num::NonZero;
use pelt::{Pelt, SegmentCostFunction};

// Setup the structure for calculating changepoints
let pelt = Pelt::new()
  .with_jump(NonZero::new(5).expect("Invalid number"))
  .with_minimum_segment_length(NonZero::new(2).expect("Invalid number"))
  .with_segment_cost_function(SegmentCostFunction::L1);

// Do the calculation on a data set
let penalty = 10.0;
let result = pelt.predict(&signal[..], penalty)?;
```

## Run locally

```sh
# Install maturin inside a Python environment
python3 -m venv .env
source .env/bin/activate
pip install maturin numpy

# Create a Python package from the Rust code…
