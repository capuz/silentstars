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
forks: 3
openIssues: 10
closedIssues: 1119
watchers: 1
contributors: 1
recentReleases: 8
createdAt: "2026-05-13T21:15:38Z"
lastCommitAt: "2026-11-02T11:35:50Z"
lastReleaseAt: "2026-10-14T15:05:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 76
maintainers: ["dereuromark"]
openGraphImageUrl: "https://opengraph.githubassets.com/f13873c5c5b9b1e9dc8f7670f3f0e68378993c85337795a2ba7c3f6bade63321/markup-carve/carve-rs"
---

# carve-rs

carve-rs parses and renders Carve in Rust. It implements Carve spec 0.1.
Read the [Carve documentation](https://markup-carve.github.io/carve/) for the language.

## Install

```sh
cargo add carve-lang
```

## Usage

```rust
let document = carve::parse("# Hello /Carve/");
let html = carve::render_html(&document)?;
```

CLI basics:

```sh
carve README.crv > README.html
carve lint README.crv
carve fmt README.crv
carve migrate --from html page.html
```

## Documentation

- [Carve documentation](https://markup-carve.github.io/carve/)
- [Playground](https://markup-carve.github.io/carve/playground)
- [Engine guides](https://github.com/markup-carve/carve-rs/blob/HEAD/docs/README.md)
- [Security for untrusted input](https://github.com/markup-carve/carve-rs/blob/HEAD/docs/security.md)
- [Development and contributing](https://github.com/markup-carve/carve-rs/blob/HEAD/docs/development.md)
