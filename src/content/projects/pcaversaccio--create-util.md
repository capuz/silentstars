---
repo: "pcaversaccio/create-util"
name: "create-util"
description: "Helper smart contract to make easier and safer usage of the `CREATE` EVM opcode."
readmeQualityOk: true
url: "https://github.com/pcaversaccio/create-util"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ethereum", "create", "smart-contracts", "deployment", "solidity"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-11-02T15:42:35Z"
lastCommitAt: "2026-10-20T08:49:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 49
maintainers: ["pcaversaccio", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29e145714ae50ae6f194a261f1985949fee2211248fcd6fcfa1ab9278c1d9499/pcaversaccio/create-util"
discussionCount: 0
---

# `CREATE` Factory

Helper smart contract [`Create`](https://github.com/pcaversaccio/create-util/blob/HEAD/contracts/Create.sol) to make easier and safer usage of the [`CREATE`](https://www.evm.codes/#f0) Ethereum Virtual Machine (EVM) opcode. `CREATE`, in a way, does a built-in call. What actually happens is that the data passed to that call isn't the contract bytecode, it's the **init bytecode** (a.k.a. creation bytecode).

When the `CREATE` opcode is executed, the EVM creates a call frame in the context of the new contract (e.g. `address(this)` is the new contract's address). This executes the data passed to `CREATE` as the code, which in higher level languages is basically the constructor. At the end of this init stuff, it returns the actual code of the contract that is stored in the state trie.

The easiest way to think about it, which is also fairly accurate, is that the Solidity compiler takes all the executional code of the contract, compiles it to bytecode, and adds it as a return statement at the end of the constructor.

The smart contract [`Create`](https://github.com/pcaversaccio/create-util/blob/HEAD/contracts/Create.sol) also provides a function `computeAddress` that…
