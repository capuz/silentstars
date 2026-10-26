---
repo: "jhg/scanf-rs"
name: "scanf-rs"
description: "Macros to parse simple text inputs"
readmeQualityOk: true
url: "https://github.com/jhg/scanf-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 11
forks: 1
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-11-28T16:09:49Z"
lastCommitAt: "2026-10-26T18:06:44Z"
lastReleaseAt: "2021-12-02T09:15:53Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 71
undervaluedScore: 44
maintainers: ["jhg", "Copilot", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d951ab9af159361d3261d69be210618f5a705f16b7386734ff16d2c3e4f407e2/jhg/scanf-rs"
fundingLinks: ["GITHUB:https://github.com/jhg"]
---

# Scanf

If you know it from C, same functionality but with memory safety, plus new enhanced features!

## Usage

Like Rust's `format!` macro, scanf supports automatic variable capture:

```no_run
use scanf::scanf;

let mut number: u32 = 0;
let mut name: String = String::new();
if scanf!("{number},{name}").is_ok() {
    println!("Input is: {} and {}", number, name);
}
```

```rust
use scanf::sscanf;

let input = "5,something";
let mut number: u32 = 0;
let mut name: String = String::new();

sscanf!(input, "{number},{name}").unwrap();
assert_eq!(number, 5);
assert_eq!(name, "something");
```

### Returning the values

If you don't pass any arguments, `{}` placeholders are returned instead of written into
variables. You don't have to create the variables first, and the types come from your
annotations:

```rust
use scanf::sscanf;

let age: u32 = sscanf!("age=30", "age={}").unwrap();
assert_eq!(age, 30);

// Several values come back as a tuple
let (name, score): (String, f64) = sscanf!("Ana: 9.5", "{}: {}").unwrap();
assert_eq!(name, "Ana");
assert_eq!(score, 9.5);
```

It's all or nothing: either every `{}` gets a `&mut` argument, or none does.
Named placeholders like `{x}` still…
