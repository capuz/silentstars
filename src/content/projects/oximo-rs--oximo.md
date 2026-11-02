---
repo: "oximo-rs/oximo"
name: "oximo"
description: "A Rust algebraic modeling library for solving optimization problems."
readmeQualityOk: true
url: "https://github.com/oximo-rs/oximo"
homepage: "https://oximo.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["math", "mathematical-programming", "modeling-language", "numerical-optimization", "optimization", "rust", "linear-programming", "mathematical-optimization", "mixed-integer-programming", "operations-research"]
stars: 108
forks: 11
openIssues: 14
closedIssues: 21
watchers: 2
contributors: 4
recentReleases: 2
createdAt: "2026-05-06T11:57:49Z"
lastCommitAt: "2026-11-02T15:17:13Z"
lastReleaseAt: "2026-09-23T21:20:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 91
undervaluedScore: 34
maintainers: ["GermanHeim"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1230868609/5034b8f0-f275-49ac-ba44-0d6ce457c6db"
discussionCount: 0
---

oximo is a Rust algebraic modeling library for mathematical optimization. See the
[webdocs](https://oximo.dev), [API documentation](https://docs.rs/oximo), and
[examples](https://github.com/oximo-rs/oximo/tree/main/crates/oximo/examples) for more.

```rust,ignore
use oximo::prelude::*;
use oximo::solvers::Highs;

let demand = [4.0, 6.0, 5.0];

let m = Model::new("production");
variable!(m, production[p in 0..2, t in 0..3] >= 0.0);
constraint!(m, meet[t in 0..3],
    sum!(production[p, t] for p in 0..2) >= demand[t]);
objective!(m, Min, sum!(production[p, t] for p in 0..2, t in 0..3));

let mut solver = Highs;
let result = solver.solve(&m, &HighsOptions::default())?;
println!("objective = {:?}", result.objective());
# Ok::<(), Box<dyn std::error::Error>>(())
```

## Problem types

The modeling layer supports a range of algebraic optimization problems. The available problem types depend on the solver backend:

- Linear programming (LP)
- Nonlinear programming (NLP)
- Mixed-integer linear programming (MILP)
- Mixed-integer nonlinear programming (MINLP)
- Quadratic programming and quadratically constrained programming (QP/QCP)
- Mixed-integer quadratic and quadratically constrained…
