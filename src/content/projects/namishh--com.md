---
repo: "namishh/com"
name: "com"
description: "blazingly mid personal website"
readmeQualityOk: true
url: "https://github.com/namishh/com"
homepage: "https://namishh.com"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [65, 26]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-03-01T17:09:09Z"
lastCommitAt: "2026-11-02T11:35:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 68
maintainers: ["namishh", "rv178"]
openGraphImageUrl: "https://opengraph.githubassets.com/774d72d78e6ff5fd15bd6b5e5b3d000ae8fd0efd889930cece92c28e84861dfd/namishh/com"
---

- https://actix.rs
- https://keats.github.io/tera/docs/
- https://docs.rs/imageproc/latest/imageproc/

## cmds to run is locally

$ npx @tailwindcss/cli -i ./static/input.css -o ./static/style.css --watch 

$ cargo watch -w src -w Cargo.toml -w templates -w content -w static/_priv -w static/images -x 'run --bin personal'

## cmds to export
$ cargo run --bin export
