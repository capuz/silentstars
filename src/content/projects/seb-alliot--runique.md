---
repo: "seb-alliot/runique"
name: "runique"
description: "A framework web base on Django/python"
readmeQualityOk: true
url: "https://github.com/seb-alliot/runique"
homepage: "https://runique.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["asynchrone", "axum", "orm", "tera", "tokio", "web-framework", "rust", "rust-lang", "sea-orm", "sea-orm-migrations"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-26T13:41:28Z"
lastCommitAt: "2026-11-07T22:50:44Z"
lastReleaseAt: "2026-01-03T20:07:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 63
maintainers: ["seb-alliot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1a4125439c621856f7d33b6bc5a630b9c89f71070d5b5fc33d437aafcf14bbf/seb-alliot/runique"
discussionCount: 0
---

# Runique — the Django developer experience, in type-safe Rust

Declare a model once, and you get the database table, the migration, a type-safe form, and a full admin panel — no extra wiring. Runique brings Django's productivity to Rust without asking you to give up Rust's safety or performance. It's built on Axum, SeaORM and Tera, and it stays out of your way once the boilerplate is gone.

> **Status, plainly:** active development. The framework crate (`runique`) is the source of truth; `demo-app` is a real application exercised against it, not a toy. The admin panel is in **beta**. Nothing below is dressed up — see the [known limits](https://runique.io/docs/en/limites) for the unfiltered version.

🌍 **Languages**: English | [Français](https://runique.io/readme/fr)

---

## Declarative macros, not boilerplate

```rust
model! {
    Article,
    table: "articles",
    pk: id => Pk,
    enums: { Status: [Draft="Draft", Published="Published"], },
    {
        title:  text [required],
        slug:   text [unique],
        body:   richtext [required],
        status: choice [enum(Status), default: "Draft"],
        views:  int [default: 0],
    }
}
```

`model!` generates the…
