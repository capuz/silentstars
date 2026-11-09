---
repo: "scadoshi/portfolio"
name: "portfolio"
description: "scottyfermo.com, my portfolio site, written in Rust"
readmeQualityOk: true
url: "https://github.com/scadoshi/portfolio"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["dioxus", "portfolio", "rust", "static-site-generator", "webassembly"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-09T23:20:46Z"
lastCommitAt: "2026-11-09T03:30:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["scadoshi"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a3125be847d94a8aecb39955361c98e0e38bf1ea8357e69ab028dd8810afff8/scadoshi/portfolio"
---

# scottyfermo.com

My portfolio site. What it says about the projects lives on the site itself, so this file stays out of that business (and out of the business of going stale).

## Stack

- [Dioxus](https://dioxuslabs.com/) 0.7.10, Rust compiled to WASM, prerendered to static HTML so crawlers and link unfurlers get real markup
- Shared UI (panels, nav, themes, banners) from [orangui](https://github.com/scadoshi/orangui), a git dependency pinned in `Cargo.lock`
- GitHub Pages on a custom domain, deployed by GitHub Actions on push to `main`

## Build

```
cargo install dioxus-cli --locked
dx serve                                       # dev server
dx build --release --ssg --force-sequential    # what CI runs
```

`--force-sequential` is required: without it the parallel client build finishes last and overwrites the prerendered `index.html` with a bare shell.

## Layout

- `src/data.rs` is the content; every project is a const in there, on one of four sections
- `public/` is copied verbatim to the site root, so the OG card, `sitemap.xml`, and `robots.txt` keep un-hashed URLs
- `index.html` is a custom dx shell, kept only to set `lang="en"`
- `context/rules/` holds the commit and CI…
