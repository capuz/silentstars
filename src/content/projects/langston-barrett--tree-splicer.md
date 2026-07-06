---
repo: "langston-barrett/tree-splicer"
name: "tree-splicer"
description: "Simple grammar-based test case generator"
readmeQualityOk: true
url: "https://github.com/langston-barrett/tree-splicer"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["black-box", "grammar-based-fuzzing", "grammar-based-testing", "test-case-generation", "tree-sitter", "fuzzer"]
stars: 45
forks: 10
openIssues: 4
closedIssues: 11
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-03-12T17:27:40Z"
lastCommitAt: "2026-07-06T07:04:10Z"
lastReleaseAt: "2025-11-26T16:08:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 43
maintainers: ["dependabot[bot]", "fenollp"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0d4fe779d503dcea345a4587c8ced0d4f63e75a90146dc4ffa74ef2d1c26c70/langston-barrett/tree-splicer"
---

# tree-splicer

tree-splicer is a simple grammar-based test case generator. It parses a number
of input files using [tree-sitter][tree-sitter] grammars, and produces new
files formed by splicing together their ASTs.

tree-splicer generates test cases in the [tree-crasher][tree-crasher] fuzzer
and in [icemaker][icemaker], though it can also be used as a standalone tool.

tree-sitter grammars are resistant to syntax errors. Therefore, tree-splicer
can even mutate syntactically-invalid inputs! You can also use tree-splicer
with an incomplete grammar.

## Example

Given this simple Rust program:

```rust
use std::env;

fn even(x: usize) -> bool {
    if x % 2 == 0 {
        return true;
    } else {
        return false;
    }
}

fn main() -> () {
    let argc = env::args().len();
    println!("Hello, world!");
    if even(argc) {
        println!("Even!");
    } else {
        println!("Odd!");
    }
    return ();
}
```

Here are a few candidates created by `tree-splicer-rust`:

```rust
use even::env;

fn even() -> bool {
    if even(argc) {
        println!("Even!");
    } else {
        println!("Odd!");
    }
}

fn std() -> () {
    return true;
}
```
```rust
use args::env;

fn…
