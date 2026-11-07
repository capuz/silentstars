---
repo: "DokaDev/datarig"
name: "datarig"
description: "A full-featured database client that lives in your terminal: light, fast, and safe by default."
readmeQualityOk: true
url: "https://github.com/DokaDev/datarig"
homepage: "https://dokadev.github.io/datarig/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cli", "database", "database-client", "postgresql", "ratatui", "rust", "sql", "ssh-tunnel", "terminal", "tui"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-29T14:49:17Z"
lastCommitAt: "2026-11-07T13:54:26Z"
lastReleaseAt: "2026-10-06T03:08:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["DokaDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4c578eee26976fae0577ba3699ce42fa514afda59408b5606b9c16ba2369295/DokaDev/datarig"
discussionCount: 0
---

# datarig

A full-featured database client that lives in your terminal: light, fast, and safe by default.

```sh
brew install dokadev/tap/datarig
# or from source, with Rust 1.93 and libclang:
git clone https://github.com/DokaDev/datarig && cd datarig && cargo install --locked --path crates/tui
```

Archives for macOS, Linux and Windows are on
[GitHub Releases](https://github.com/DokaDev/datarig/releases); details in
[Install](https://dokadev.github.io/datarig/install.html). **Documentation: <https://dokadev.github.io/datarig/>**

## Why datarig

- **Safe by default.** Changes made in the grid stay pending until you have read the exact
  statements they run. Dangerous statements ask first. A read-only profile refuses writes before
  anything is sent, and on PostgreSQL the server enforces it too.
- **Full-featured.** PostgreSQL and MySQL, several connections side by side with their own tabs,
  a schema explorer, a SQL editor with vim keys and completion, a results grid with search,
  editing, export and charts, query plans in several views, SSH tunnels, TLS and poolers.
- **Light and fast.** One native binary. Results are paged explicitly instead of loaded whole,
  and paging…
