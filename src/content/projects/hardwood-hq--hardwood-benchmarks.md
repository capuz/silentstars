---
repo: "hardwood-hq/hardwood-benchmarks"
name: "hardwood-benchmarks"
description: "Performance benchmarks testing Hardwood and parquet-java on different workloads"
readmeQualityOk: true
url: "https://github.com/hardwood-hq/hardwood-benchmarks"
language: "Java"
languages: ["Java", "Python"]
languagePcts: [62, 21]
stars: 6
forks: 4
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-05T13:47:18Z"
lastCommitAt: "2026-11-21T13:30:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 51
maintainers: ["gunnarmorling", "iifawzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/7182fe9f3b471ab9a5a61d9983b5dcb6fd95c58503798d696efb5308cb9abb05/hardwood-hq/hardwood-benchmarks"
---

# hardwood-benchmarks

Benchmarks for [Hardwood](https://github.com/hardwood-hq/hardwood): Hardwood against
[parquet-java](https://github.com/apache/parquet-java) and other readers for published
results, and one Hardwood version against another for regressions. Depends only on
`hardwood-core` and the contenders' libraries as Maven artifacts.

## Quick start

Needs JDK 21 or newer (tested on 25); the Maven wrapper is bundled.

```sh
./run-flat.sh --help     # flags, the benchmark's recipe, its regression preset
./run-flat.sh --gate     # check every contender produces the same result, no timing
./run-flat.sh            # benchmark
```

Each benchmark acquires its data on first run and reuses it after. Data lives under
`target/`, which `./mvnw clean` wipes; `run-flat.sh --data-dir` and
`run-nested.sh --file` point at a persistent location instead.

`hardwood-core` resolves at `<hardwood.version>` in `pom.xml`, or at
`--hardwood-version`. Releases come from Maven Central; a `-SNAPSHOT` must be installed
from a Hardwood checkout first with `./mvnw -pl core -am install -Dquick`.
