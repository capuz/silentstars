---
repo: "nvim-contrib/neotest-ginkgo"
name: "neotest-ginkgo"
description: "Neotest adapter for Ginkgo v2 — run, debug, and navigate Go BDD tests in Neovim"
url: "https://github.com/nvim-contrib/neotest-ginkgo"
language: "Lua"
languages: ["Lua"]
languagePcts: [96]
topics: ["bdd", "ginkgo", "lua", "neotest", "neovim", "neovim-plugin", "nix", "testing", "neotest-adapter", "dap"]
stars: 11
forks: 7
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2023-05-27T13:49:02Z"
lastCommitAt: "2026-06-24T00:23:33Z"
lastReleaseAt: "2026-05-05T05:12:55Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 88
maintainers: ["iamralch", "github-actions[bot]", "ralch[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/025a2d1d4235142a45bd0afcd89b60e01404d9b087a5a0519581a94280b3d216/nvim-contrib/neotest-ginkgo"
---

# neotest-ginkgo

> [Neotest](https://github.com/nvim-neotest/neotest) adapter for running [Ginkgo v2](https://github.com/onsi/ginkgo) tests in Neovim. Run, debug, and inspect your Go BDD specs directly from the editor — with full support for nested `Describe`/`Context`/`When`/`It` hierarchies, `DescribeTable`/`Entry`, and DAP debugging via [nvim-dap-go](https://github.com/leoluz/nvim-dap-go).

## Features

- Run individual specs, describe blocks, or entire suites
- Full Ginkgo v2 support: `Describe`, `Context`, `It`, `When`, `Specify`, `DescribeTable`, `DescribeTableSubtree`, and `Entry`
- Focus (`FDescribe`, `FIt`) and pending (`PDescribe`, `PIt`, `XIt`) variants
- Nested test hierarchy displayed in the Neotest summary tree
- DAP integration for step-through debugging of individual specs
- Structured output panel with color-coded test results
- Works with `lazy.nvim`, `packer.nvim`, and any other plugin manager

## Requirements

- Neovim >= 0.9
- [neotest](https://github.com/nvim-neotest/neotest)
- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) with the `go` parser installed
- [nvim-nio](https://github.com/nvim-neotest/nvim-nio)
- [Ginkgo…
