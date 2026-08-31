---
repo: "marc0x71/ratiform"
name: "ratiform"
description: "A small, composable, stateful form widget for Ratatui."
readmeQualityOk: true
url: "https://github.com/marc0x71/ratiform"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ratatui", "ratatui-rs", "rust", "rust-lang"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-22T15:55:55Z"
lastCommitAt: "2026-08-31T09:56:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 43
maintainers: ["marc0x71"]
openGraphImageUrl: "https://opengraph.githubassets.com/e02e2251bee6bef48ceee0e48aeffb7b192e2d8884517de041299c807b379e44/marc0x71/ratiform"
---

# ratiform

**A small, composable, stateful form widget for [Ratatui](https://ratatui.rs/), with typed field identifiers and application-owned data.**

```rust
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
enum Field {
    Name,
    Email,
    Country,
    Terms,
}

let mut state = FormBuilder::new()
    .single_line(Field::Name, "Name")
    .single_line(Field::Email, "Email")
    .select(Field::Country, "Country")
    .values_ref(&[("IT", "Italy"), ("FR", "France"), ("DE", "Germany")])
    .checkbox(Field::Terms, "I accept the terms")
    .build().unwrap();
```

The field identity is a real Rust type — `state.value(&Field::Email)`, not `state.value("email")`. No string keys, no JSON round-trip, no form-specific data model.

> **⚠️ Work in progress**
>
> `ratiform` is currently under active development. Breaking changes are still possible before a stable release, so pin a specific commit if you depend on it.

The project is dual-licensed under the **MIT License** and the **Apache License 2.0** (see [License](#license) below).

## Why ratiform?

I started this while building a different TUI application that needed a couple of text inputs. At first I wrote them the…
