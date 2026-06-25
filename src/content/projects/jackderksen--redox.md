---
repo: "JackDerksen/redox"
name: "redox"
description: "A terminal-based text editor that's tasteful by default."
url: "https://github.com/JackDerksen/redox"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-01-10T01:28:18Z"
lastCommitAt: "2026-06-25T02:00:49Z"
lastReleaseAt: "2026-04-29T04:16:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 53
maintainers: ["JackDerksen"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd039ed006472d496b71b41d566a44e99777060330d65ab1523a8d47f508b7a5/JackDerksen/redox"
---

</p>

<h1 align="center">
    A terminal-based text editor that's tasteful by default.
</h1>

</p>

    Redox is a terminal-based, Vim-like text editor written in Rust. It was originally made for my university capstone project, but development is ongoing!
    <br><br>
    <strong>PLEASE NOTE</strong>: This editor is in no way associated with
</p>

</p>

## Project structure

Redox is a Cargo workspace with a small core crate and a MinUI frontend. The core crate owns editor logic that should stay UI-agnostic, while the TUI crate owns input mapping, app state, rendering, popups, syntax highlighting, and terminal interaction.

```text
redox/
├── Cargo.toml                  # Workspace manifest and published redox binary wrapper
├── src/main.rs                 # Thin entrypoint that calls redox-tui
└── crates/
    ├── redox-core/
    │   └── src/
    │       ├── buffer/         # Rope-backed text buffer, selections, edits, text objects
    │       ├── fuzzy.rs        # Fuzzy matching and path ranking helpers
    │       ├── io.rs           # File read/write helpers
    │       ├── logic/          # Shared editor logic helpers
    │       ├── motion.rs       # Vim-style motion logic…
