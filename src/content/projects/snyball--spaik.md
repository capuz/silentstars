---
repo: "snyball/spaik"
name: "spaik"
description: "The SPAIK LISP Programming Language"
readmeQualityOk: true
url: "https://github.com/snyball/spaik"
language: "Rust"
languages: ["Rust", "Common Lisp"]
languagePcts: [61, 38]
stars: 40
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-01-26T15:53:40Z"
lastCommitAt: "2026-09-19T02:47:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 41
maintainers: ["snyball"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dee6e86a2dbe45326957ad2e662286e4fc4831528b8618e8ccd9e8495704b2b/snyball/spaik"
---

The SPAIK LISP Programming Language
===================================

SPAIK is a dynamic extension language for Rust. It implements macros, garbage
collection, iterators, continuations, async/await and wraps it up in a
(hopefully) easy to use high-level Rust API.

This README contains many shorts snippets showing how SPAIK is used, while you
can find complete examples in the [examples](https://github.com/snyball/spaik/blob/HEAD/examples) directory, and the more
detailed API docs can be found at [docs.rs](https://docs.rs/spaik/latest/spaik/).

[You can also try SPAIK directly in your
browser!](https://snyball.github.io/spaik-site/)

### Basic usage

For basic usage, all you need are the `eval` and `exec` methods (`exec` is just
`eval` but it throws away the result to aid type-inference.)

``` rust
let mut vm = Spaik::new();
vm.exec(r#"(println "Hello, World!")"#)?;

vm.set("f", |x: i32| x + 2); // Functions are first-class at the API boundary!
assert_eq!(vm.eval("(f 2)"), Ok(4));

// Optional linear-algebra types from glam
vm.exec("(defun funky (x y) (* x (vec3 1 y 3)))")?;
assert_eq!(vm.call("funky", (2, 4)), Ok(glam::vec3(2.0, 8.0, 6.0))); // Call a spaik function

// Define…
