---
repo: "juanibiapina/deltoids"
name: "deltoids"
description: "Diff filter that expands every hunk to include the enclosing function or block via tree-sitter. Pager for git, gh, or lazygit; viewer for coding-agent edit traces."
readmeQualityOk: true
url: "https://github.com/juanibiapina/deltoids"
homepage: "https://deltoids.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["cli", "code-review", "coding-agents", "developer-tools", "diff", "git", "lazygit", "pager", "rust", "terminal"]
stars: 28
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-04-15T11:28:42Z"
lastCommitAt: "2026-08-31T09:51:45Z"
lastReleaseAt: "2026-06-23T17:43:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 40
maintainers: ["juanibiapina"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4d2dd1f5a0ab12810de5fb6dc7fe17066b87430f498108266cac572dea498ce/juanibiapina/deltoids"
---

# deltoids

> [!WARNING]
> This project is under active development. Diff output may still be broken. In case of doubt, verify changes with another pager.

Tools for reviewing code in the agentic era.

<table>
  <tr>
    <td valign="top"><img src="docs/images/delta.png" alt="Default: 3 lines of context"></td>
    <td valign="top"><img src="docs/images/deltoids.png" alt="deltoids: hunk expanded to enclosing function"></td>
  </tr>
  <tr>
    <td align="center"><em>git diff</em></td>
    <td align="center"><em>deltoids</em></td>
  </tr>
</table>

Hunks expand to show the enclosing function, so you always know where you are.

## Overview

Deltoids diffs have language-aware syntax highlighting and word-level highlighting within changed lines. They also expand to include relevant context, usually the enclosing function or struct up to 200 lines. This allows you to quickly view the entire context without having to switch to an editor.

Tools:

- `deltoids pager`: ANSI diff filter for `less` / `core.pager`
- `deltoids review`: review tool
- `deltoids edit`: file edit tool (used by coding agents)
- `deltoids write`: file write tool (used by coding agents)
- `deltoids traces`: trace…
