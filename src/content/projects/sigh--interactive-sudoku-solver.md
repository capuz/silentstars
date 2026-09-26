---
repo: "sigh/Interactive-Sudoku-Solver"
name: "Interactive-Sudoku-Solver"
description: "Very fast web-based Sudoku solver. Features many grid sizes and variants, with customization and scripting support."
readmeQualityOk: true
url: "https://github.com/sigh/Interactive-Sudoku-Solver"
homepage: "https://sigh.github.io/Interactive-Sudoku-Solver/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["sudoku-solver", "killer-sudoku", "jigsaw-sudoku", "sudoku"]
stars: 53
forks: 15
openIssues: 0
closedIssues: 12
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2020-07-20T00:55:01Z"
lastCommitAt: "2026-09-26T08:46:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 58
maintainers: ["sigh"]
openGraphImageUrl: "https://opengraph.githubassets.com/bac591525a2d22848dc3a7156d39c236cf3eaec439380d5958c08da9fda2cf7d/sigh/Interactive-Sudoku-Solver"
---

# Interactive Sudoku Solver (ISS)

A fast web-based solver for Sudoku puzzles and variants. It prioritizes
raw speed over human-style solving techniques to allow exploration of complex
solution spaces.

It is hosted at <http://sigh.github.io/Interactive-Sudoku-Solver>

## Features

- **Sudoku Variants**: Supports a large number of constraints natively, and
  the ability to define custom constraints.
- **Non-Standard Grids**: Supports any grid size up to 16x16, including
  non-square grids.
- **Explore Solution Spaces**: Verifies uniqueness and provides solution
  counts, including estimates for large solution counts.
- **Scripting**: Provides a JavaScript Sandbox for programmatic puzzle
  generation and solving.

See the [help page](http://sigh.github.io/Interactive-Sudoku-Solver/help) for
more extensive documentation.

## Running locally

Run locally using [Jekyll](https://jekyllrb.com/), e.g.

```bash
jekyll serve --port=8080
```

## Tests

```bash
npm test
```

## Docs

For the main app and solver docs, see [js/README.md](https://github.com/sigh/Interactive-Sudoku-Solver/blob/HEAD/js/README.md),…
