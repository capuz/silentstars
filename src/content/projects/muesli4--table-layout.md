---
repo: "muesli4/table-layout"
name: "table-layout"
description: "Layout data in grids and pretty tables. Provides a lot of tools to get the cell formatting right (positional alignment, alignment on specific characters and limiting of cell width).."
readmeQualityOk: true
url: "https://github.com/muesli4/table-layout"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [100]
stars: 42
forks: 14
openIssues: 7
closedIssues: 19
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2016-04-26T02:29:33Z"
lastCommitAt: "2026-11-07T13:54:13Z"
lastReleaseAt: "2023-11-17T02:22:32Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 31
maintainers: ["muesli4"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddb23864d28c0b7a7b6fcec1c2f8dc3023dc0e1fcf7b9c3f3fad2471179d63d8/muesli4/table-layout"
---

# table-layout [](https://hackage.haskell.org/package/table-layout)

This package can be used to render character-based table layouts which should be displayed with monospace fonts.

## Purpose

The focus of this library lies on rendering cells with different styles per column:
* Columns can be fixed in size or expanding to make content fit.
* Whenever content has to be cut, it is possible to indicate this with special strings, which are called cut marks.
* Columns can be positionally aligned as `left`, `right` or `center`.
* Columns may also be aligned at certain character occurence with respect to the other cells of that column. One such purpose is to display floating point numbers.

Those specifications are then applied to a list of rows. A row is simply a list of a cell. A cell is a type that implements the `Cell` type class.

Typically cells are rendered as a grid, but it is also possible to render tables with simulated lines, including styling support. Such tables can use optional headers and multiple lines per cell. Multi-line content can be aligned vertically, with respect to the other horizontally adjacent cells, and text can be rendered justified.

## Tutorial

### Grids…
