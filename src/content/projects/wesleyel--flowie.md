---
repo: "wesleyel/flowie"
name: "flowie"
description: "A fast, keyboard-first outliner for Mac/Windows: zoom, links, mirrors, LaTeX math and MCP — all stored locally."
readmeQualityOk: true
url: "https://github.com/wesleyel/flowie"
homepage: "https://wesleyel.github.io/flowie/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["gpui", "keyboard-first", "latex", "macos", "mcp", "note-taking", "outliner", "rust"]
stars: 6
forks: 2
openIssues: 2
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-11-18T07:12:27Z"
lastCommitAt: "2026-11-26T13:02:47Z"
lastReleaseAt: "2026-11-26T09:34:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 68
maintainers: ["wesleyel"]
openGraphImageUrl: "https://opengraph.githubassets.com/84293983a7322df623a66c0eecd8557338630937efa0b3b2f5340b7baebe18c7/wesleyel/flowie"
fundingLinks: ["CUSTOM:https://apps.apple.com/app/id6835913837"]
discussionCount: 1
---

Zoom into any bullet, link and mirror ideas, write math, and search your outline. Your notes are stored on your device.</p>

## Fast with big outlines

Measured on an Apple M4 with Bike's *Moby-Dick* outline imported five times, 13,505 bullets
([benchmark](https://github.com/wesleyel/flowie/blob/HEAD/crates/flowie-core/benches/large_outline.rs): `scripts/fetch-bench-data.sh`, then
`cargo bench -p flowie-core --bench large_outline`):

| | |
|---|---:|
| Import all 13,505 bullets | 42 ms |
| Lay out the whole outline, everything expanded | 1.3 ms |
| Save it to the database (in the background) | 99 ms |
| The outline in memory | 9.6 MB |
| Undo for the entire import | 0.4 MB |
| Read a 6.4 MB Markdown file | 6 ms |

Flowie is native Rust drawn on the GPU with [GPUI](https://gpui.rs). It draws only the rows on
screen, and works out every other row's height from its text, so the scrollbar is right before
you scroll.
