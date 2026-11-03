---
repo: "hewigovens/jayjay"
name: "jayjay"
description: "A native macOS GUI for Jujutsu (jj) — DAG graph, side-by-side diffs, interdiff, conflict resolution. Built with Rust + SwiftUI."
readmeQualityOk: true
url: "https://github.com/hewigovens/jayjay"
homepage: "https://jayjay.hewig.dev"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [63, 25]
topics: ["jj", "rust", "dag", "developer-tools", "gui", "jj-vcs", "jujutsu", "macos", "macos-app", "swiftui"]
stars: 197
forks: 15
openIssues: 6
closedIssues: 116
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2026-03-19T12:13:36Z"
lastCommitAt: "2026-11-03T11:15:19Z"
lastReleaseAt: "2026-04-11T00:37:35Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 33
maintainers: ["hewigovens", "dependabot[bot]", "a15355447898a"]
openGraphImageUrl: "https://opengraph.githubassets.com/34d726e4e35c352876cbb5e9ca0b5b73f0c651408fdb99cb85be90fcecf0854c/hewigovens/jayjay"
fundingLinks: ["GITHUB:https://github.com/hewigovens"]
---

# JayJay

**JayJay is a native GUI for [Jujutsu](https://github.com/jj-vcs/jj) on macOS and Linux, with a Windows beta and reusable Rust libraries for diff and review tooling.**

- **macOS:** native SwiftUI app.
- **Linux:** GPUI app. Its macOS build is for development.
- **Windows:** GPUI beta, available from the Microsoft Store or as a portable ZIP.
- **Rust libraries:** diffing, review state, repository operations, and app bindings.

## JayJay App

JayJay is a fast, keyboard-friendly GUI for people who use jj every day.

### Highlights

- **History:** a DAG of changes with bookmarks, tags, conflicts, divergent changes, and other workspaces' working copies; a revset bar with completion and presets; drag a change or a whole selection to rebase it, or drag bookmarks and `@` to move them.
- **Diffs:** unified and side-by-side with syntax highlighting, word-level changes, expandable context, and rename detection; rich previews for images, SVG, Markdown, HTML, notebooks, CSV/TSV, SARIF, and property lists; edit working-copy files in place.
- **Review:** file and per-hunk review marks that survive edits and rebases, line-anchored review notes, and a `jayjay review` CLI that lets…
