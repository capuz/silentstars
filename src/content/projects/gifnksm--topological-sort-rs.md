---
repo: "gifnksm/topological-sort-rs"
name: "topological-sort-rs"
description: "Performs topological sorting."
readmeQualityOk: true
url: "https://github.com/gifnksm/topological-sort-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["algorithms", "dag", "dependencies", "dependency-graph", "graph", "graph-algorithms", "rust", "rust-library", "topological-sort", "toposort"]
stars: 18
forks: 7
openIssues: 3
closedIssues: 6
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2015-01-06T11:00:52Z"
lastCommitAt: "2026-10-06T10:41:27Z"
lastReleaseAt: "2022-07-19T10:30:22Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 66
maintainers: ["gifnksm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/90383fcd9824537c5062e7508bfa448ed48fe37c61c4efc331b2d1a5dd7e2aea/gifnksm/topological-sort-rs"
---

# topological-sort

A data structure for topological sorting.

## Examples

### Modeling Makefile-style dependencies

This example reproduces a small `Makefile`. Each call to [`TopologicalSort::pop_batch`]
returns the next batch of files that can be built in parallel.

````Makefile
hello_world: hello_world.o libhello.so
        gcc -o hello_world hello_world.o -lhello

hello_world.o: hello_world.c hello.h
        gcc -c -o hello_world.o hello_world.c
````

````rust
use topological_sort::TopologicalSort;

let mut ts = TopologicalSort::<&str>::new();

ts.add_dependency("hello_world.o", "hello_world");
ts.add_dependency("libhello.so", "hello_world");
ts.add_dependency("hello_world.c", "hello_world.o");
ts.add_dependency("hello.h", "hello_world.o");

// Source inputs with no remaining dependencies are ready first.
let mut first_group = ts.pop_batch::<Vec<_>>();
first_group.sort();
assert_eq!(first_group, ["hello.h", "hello_world.c", "libhello.so"]);

// Building those inputs makes the object file ready.
let mut second_group = ts.pop_batch::<Vec<_>>();
second_group.sort();
assert_eq!(second_group, ["hello_world.o"]);

// Finally, the executable itself becomes ready.
let mut third_group…
