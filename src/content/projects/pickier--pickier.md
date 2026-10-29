---
repo: "pickier/pickier"
name: "pickier"
description: "Fast linting and formatting. Minimal defaults. Extensible. Built for speed."
readmeQualityOk: true
url: "https://github.com/pickier/pickier"
homepage: "https://pickier.netlify.app"
language: "TypeScript"
languages: ["TypeScript", "Zig"]
languagePcts: [76, 24]
topics: ["formatter", "javascript", "json", "jsonc", "linter", "performant", "typescript", "yaml", "yml", "stx"]
stars: 8
forks: 0
openIssues: 4
closedIssues: 17
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-07-07T15:02:43Z"
lastCommitAt: "2026-10-29T10:20:39Z"
lastReleaseAt: "2026-02-08T21:48:51Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 92
undervaluedScore: 77
maintainers: ["chrisbbreuer", "glennmichael123", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/16074a12f0e04069b8925e0701852f58b2c1e12d502d2192d4544274cad7ed20/pickier/pickier"
fundingLinks: ["GITHUB:https://github.com/chrisbbreuer", "OPEN_COLLECTIVE:https://opencollective.com/stacksjs"]
---

# Pickier

> Fast linting and formatting. Minimal defaults. Extensible. Built for speed.

## Features

- Fast CLI with instant feedback
- Lint and format in one tool
- Zero-config defaults; simple, typed `pickier.config.ts` when you need it
- Import organization: splits type/value imports, sorts modules/specifiers, removes unused named imports
- JSON and config sorting for common files (e.g. `package.json`, `tsconfig.json`)
- Tailwind CSS class ordering — enforces canonical class order across HTML/JSX/TSX/Vue/Svelte/STX files with auto-fix
- Markdown linting for documentation quality (headings, lists, links, code blocks, tables, etc.) with auto-fix support
- Shell script linting & formatting — 21 rules for `.sh`, `.bash`, and `.zsh` files covering error prevention, style, and best practices with auto-fix support and indentation normalization
- Optional spell checking — 234K-word dictionary with 150+ common misspelling corrections, powered by [ts-spell-check](https://github.com/stacksjs/ts-spell-check)
- Flexible formatting: `indent`, `indentStyle` (tabs or spaces), `quotes`, `semi`, `trimTrailingWhitespace`, `maxConsecutiveBlankLines`, `finalNewline`
- Smart whitespace cleanup
-…
