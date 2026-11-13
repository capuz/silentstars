---
repo: "dandxy89/lp_parser_rs"
name: "lp_parser_rs"
description: "Rust LP File Parser and Diff tool"
readmeQualityOk: true
url: "https://github.com/dandxy89/lp_parser_rs"
homepage: "https://dandxy89.github.io/lp_parser_rs/"
language: "Mathematical Programming System"
languages: ["Mathematical Programming System", "Linear Programming", "Rust"]
languagePcts: [49, 26, 24]
topics: ["linear-programming", "rust", "parser", "lpfile", "diff", "integer-programming", "lp", "nom"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 14
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-11-10T19:13:01Z"
lastCommitAt: "2026-11-13T11:28:33Z"
lastReleaseAt: "2024-01-24T00:22:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 87
maintainers: ["dandxy89", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/717191067/9aedb86e-3c25-4902-b34e-ef766dde71f6"
---

# Rust LP File Parser, Writer, and Diff Tool

A Rust library and CLI for parsing, analysing, modifying and writing Linear Programming (LP) and MPS files. The LP reader uses a [Logos](https://github.com/maciejhirsz/logos) lexer and a [LALRPOP](https://github.com/lalrpop/lalrpop) grammar ([`lp.lalrpop`](https://github.com/dandxy89/lp_parser_rs/blob/main/rust/src/lp.lalrpop)).

Supported specifications: [IBM CPLEX v22.1.1](https://www.ibm.com/docs/en/icos/22.1.1?topic=cplex-lp-file-format-algebraic-representation), [FICO Xpress](https://www.fico.com/fico-xpress-optimization/docs/dms2020-03/solver/optimizer/HTML/chapter10_sec_section102.html), [Gurobi](https://www.gurobi.com/documentation/current/refman/lp_format.html), Mosek.

## Features

- Parsing and writing: read LP or MPS, write LP ([`writer`](https://docs.rs/lp_parser_rs/latest/lp_parser_rs/writer/index.html)) or MPS ([`mps::writer`](https://docs.rs/lp_parser_rs/latest/lp_parser_rs/mps/writer/index.html)), so a problem read in one format can be written in either. Parse, modify, write and parse again gives back the modified model.
- Modification: rename, update or remove objectives, constraints, variables, coefficients and RHS…
