---
repo: "jeroenjanssens/rush"
name: "rush"
description: "R One-Liners from the Shell"
readmeQualityOk: true
url: "https://github.com/jeroenjanssens/rush"
homepage: "http://jeroenjanssens.github.io/rush"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["r", "cli", "plot", "packages", "shell", "one-liner"]
stars: 68
forks: 2
openIssues: 2
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2015-06-02T09:25:50Z"
lastCommitAt: "2026-07-29T06:14:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 48
maintainers: ["jeroenjanssens"]
openGraphImageUrl: "https://opengraph.githubassets.com/fde517651139b972393d58f61ac122bcccbd78293ee8a10cce1a6f7f125369d2/jeroenjanssens/rush"
---

# rush

**`rush` brings R to the command line.** Run an R expression, wrangle a CSV,
query a Parquet file with SQL, or draw a plot right in your terminal — all
without opening an R session or writing a script.

```sh
rush run 'penguins |> dplyr::filter(body_mass_g > 5000) |> head()'
```

R has a wonderful ecosystem for working with data, but reaching for it usually
means launching R, loading packages, and reading files by hand. `rush` collapses
that into a single command you can pipe, redirect, and drop into any shell
pipeline — so R becomes just another Unix tool, at home next to `grep`, `awk`,
and `jq`.

## Highlights

- **One-liners, not scripts.** Evaluate any R expression straight from the shell.
- **Pipeline-native.** Reads from standard input and writes to standard output.
- **Reads what you have.** CSV, Parquet, JSON, Excel, Arrow, DuckDB, SPSS/Stata/SAS, SQLite, YAML, TOML, XML, and more.
- **Converts between formats.** The `convert` command handles it in one step.
- **Query with SQL.** Run DuckDB queries directly against your files.
- **Plots in your terminal.** Render ggplot2 graphics as ASCII art, or save to PNG/PDF.
- **Zero dependency management.** Packages are…
