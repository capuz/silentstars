---
repo: "4xmen/rustavel"
name: "rustavel"
description: "A Rust migration bridge for Laravel/PHP developers, inspired by Laravel"
readmeQualityOk: true
url: "https://github.com/4xmen/rustavel"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["laravel", "rust"]
stars: 48
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-01-30T14:41:22Z"
lastCommitAt: "2026-08-27T14:27:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 18
maintainers: ["A1Gard"]
openGraphImageUrl: "https://opengraph.githubassets.com/f394daddf3a6c717138a762b7f70271c992a21a4441b8365c7962f690dfb04f9/4xmen/rustavel"
---

# Rustavel

**Rustavel** is an experimental, Rust-first backend toolkit inspired by the *developer experience* of Laravel —  
not its runtime model, not its magic, and not its ORM assumptions.

This project explores two simple question:

> Can we offer a familiar, productive DX for backend developers  
> while staying idiomatic, explicit, and safe in Rust?
> What if Laravel's developer experience was redesigned under Rust's rules?

Rustavel is **not** a Laravel port.  
It is **not** an ORM.  
It is **not** a framework that hides SQL or system boundaries.

It is a growing collection of **opt-in tools** designed to feel comfortable for developers coming from Laravel / PHP,
while respecting the values of the Rust ecosystem: correctness, clarity, and performance.

---

## Quick Example / Code Samples

### Some artisan commands sample
```bash
cargo artisan make model User -m -c # model + migration + controller
cargo artisan make migration CreateTodos  -t todos # migration
cargo artisan make migrate # do migrate / may rollback
cargo artisan serv # run app
cargo artisan key-generate # key generate
```

### Routing sample

```rust

route.group(|r| {
    r.name("api")…
