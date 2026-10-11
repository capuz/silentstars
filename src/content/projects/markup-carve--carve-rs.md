---
repo: "markup-carve/carve-rs"
name: "carve-rs"
description: "Rust implementation of Carve - a lightweight markup language for documents and the web: parser, HTML renderer, and carve CLI."
readmeQualityOk: true
url: "https://github.com/markup-carve/carve-rs"
homepage: "https://markup-carve.github.io/carve/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["carve", "djot", "html", "markup", "markup-language", "parser", "rust"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 624
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-05-13T21:15:38Z"
lastCommitAt: "2026-10-11T10:14:16Z"
lastReleaseAt: "2026-10-07T16:52:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 73
maintainers: ["dereuromark", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1af7a6a2d39c3b3fb31776b41a0b5c42493a6930585f29edcae5522f1df5c67/markup-carve/carve-rs"
---

# carve-rs

Rust parser and renderer for the
[Carve](https://github.com/markup-carve/carve) markup language. The crate
implements Carve spec 0.1 and renders HTML, Markdown, plain text, ANSI, and
canonical Carve source. The
[versioning contract](https://markup-carve.github.io/carve/versioning) says what
a release may change.

## Install

```bash
cargo add carve-lang
```

Install the CLI with `cargo install carve-lang`, or download a release archive.

The package name is `carve-lang`; Rust code imports it as `carve`, and the CLI
binary is named `carve`.

## Library use

```rust
let html = carve::to_html("# Hello\n\nThis is /italic/ and *bold*.");
```

Lower-level functions expose the typed AST:

```rust
let document = carve::parse(source);
let html = carve::render_html(&document)?;
```

Use fallible entry points for imported content and caller-built trees:

```rust
let document = carve::from_json(payload)?;
let serialized = carve::try_to_json(&document)?;
let source = carve::try_markdown_to_carve(markdown)?;
```

`AstJsonError::kind()` distinguishes syntax, depth, unknown-field, and other AST
refusals. `path()` identifies an unknown field; syntax errors expose `line()`,
`column()`,…
