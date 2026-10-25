---
repo: "NomicFoundation/solx"
name: "solx"
description: "LLVM-based Solidity compiler."
readmeQualityOk: true
url: "https://github.com/NomicFoundation/solx"
language: "Solidity"
languages: ["Solidity", "Rust"]
languagePcts: [65, 25]
topics: ["team-compiler"]
stars: 190
forks: 22
openIssues: 12
closedIssues: 75
watchers: 7
contributors: 24
recentReleases: 0
createdAt: "2025-01-28T12:02:46Z"
lastCommitAt: "2026-10-24T21:11:56Z"
lastReleaseAt: "2026-07-18T07:22:20Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 41
maintainers: ["hedgar2017", "nebasuke", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/88708911684a3602efde86ab0b5642eeacd869ba1335d64fc7f4be6e73105e7c/NomicFoundation/solx"
---

# Optimizing Solidity Compiler

**Slang** is an optimizing Solidity compiler for EVM by [Nomic Foundation](https://nomic.foundation/). The [Slang front-end](https://github.com/NomicFoundation/slang) parses and binds the Solidity, this repository lowers it to MLIR, and an LLVM backend with an EVM target produces the bytecode.

> [!WARNING]  
> The project is in development and is not ready for production use.

The tester runs **Slang** against:

- [Semantic tests](https://github.com/NomicFoundation/solx/blob/HEAD/solidity/test/libsolidity/semanticTests/) from the **solc** repository
- [DeFi protocols](https://github.com/NomicFoundation/solx/blob/HEAD/tests/solidity/complex/defi): UniswapV2, UniswapV3, Mooniswap, StarkEx
- [Additional tests](https://github.com/NomicFoundation/solx/blob/HEAD/tests/solidity) written by the **Slang** team

Planned:

- [Hardhat projects](https://github.com/NomicFoundation/solx/blob/HEAD/solx-dev/hardhat-tests.toml)
- [Foundry projects](https://github.com/NomicFoundation/solx/blob/HEAD/solx-dev/foundry-tests.toml)

## Documentation

**Slang** documentation is powered by [GitHub Pages](https://nomicfoundation.github.io/solx/latest/) and provided as an…
