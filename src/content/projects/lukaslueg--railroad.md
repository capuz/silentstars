---
repo: "lukaslueg/railroad"
name: "railroad"
description: "A library to produce syntax diagrams as Scalable Vector Graphics"
readmeQualityOk: true
url: "https://github.com/lukaslueg/railroad"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 187
forks: 10
openIssues: 5
closedIssues: 11
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2018-08-12T14:35:51Z"
lastCommitAt: "2026-11-07T13:54:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 33
maintainers: ["lukaslueg"]
openGraphImageUrl: "https://opengraph.githubassets.com/79dfefb8728b512939bac9e0ded32914c38470491feb705c626b1d21d40a7f8e/lukaslueg/railroad"
---

### A library to create syntax ("railroad") diagrams as Scalable Vector Graphics (SVG).

**[Live demo](https://lukaslueg.github.io/macro_railroad_wasm_demo/)** ([code](https://github.com/lukaslueg/macro_railroad_wasm))
**[Some examples](https://htmlpreview.github.io/?https://github.com/lukaslueg/railroad_dsl/blob/master/examples/example_diagrams.html)** using a small [DSL of its own](https://github.com/lukaslueg/railroad_dsl).

Railroad diagrams represent grammar rules as paths from a start point to an end point. Each path describes a sequence accepted by the rule.

Build diagrams by combining nodes such as `Terminal`, `Sequence`, and `Choice`. All built-in nodes are available at the crate root.

```rust
use railroad::*;

let mut seq: Sequence<Box<dyn Node>> = Sequence::default();
seq.push(Box::new(Start))
   .push(Box::new(Terminal::new("BEGIN".to_owned())))
   .push(Box::new(NonTerminal::new("syntax".to_owned())))
   .push(Box::new(End));

let dia = Diagram::new_with_stylesheet(seq, &Stylesheet::Light);
println!("{}", dia);
```

## Visual vocabulary

Follow a path from start to end. Read literal tokens along the path, expand named rules, and follow the arrows around branches and…
