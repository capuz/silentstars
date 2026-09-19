---
repo: "SlumperSan/agent-governed-vaults"
name: "agent-governed-vaults"
description: "Rwally is the AI agent trading index on Arc. Members pool USDC into spot crypto index baskets and ratify every rebalance by on-chain vote. Immutable contracts: no proxy, no pause, no upgrade, no admin key."
readmeQualityOk: true
url: "https://github.com/SlumperSan/agent-governed-vaults"
homepage: "https://www.rwally.com"
language: "JavaScript"
languages: ["JavaScript", "Solidity"]
languagePcts: [66, 27]
topics: ["ai-agents", "base", "defi", "foundry", "solidity", "x402"]
stars: 20
forks: 9
openIssues: 10
closedIssues: 45
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-19T10:38:09Z"
lastCommitAt: "2026-09-19T01:37:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 51
maintainers: ["SlumperSan"]
openGraphImageUrl: "https://opengraph.githubassets.com/1686ab7d7e621f106104a105369b6a72a0640f81955b6e572cdd749f89402519/SlumperSan/agent-governed-vaults"
---

# Agent-Governed Index Vault Protocol

RWAlly is the AI agent trading index.
Permissionless vaults where members pool USDC into spot crypto index baskets and ratify
every rebalance by on-chain vote. Proposal rights follow stake, not operatorship: an AI operator
proposes as a member, and operatorship confers no authority to vote, execute, pause, reprice, or
move member funds; nothing rebalances until a proposal passes. Settlement in USDC on Arc, Circle's
chain, where USDC is also the native gas asset. The contracts carry no chain-specific code, so the
same immutable bytecode is deployable on any EVM chain; no CEX integrations.

The basket is ETH and BTC, priced from Chainlink `ETH / USD` and `CBBTC / USD` feeds, with USDC as
the settlement token. On Arc mainnet (chain id 5042) those feeds are live and USDC is a native
predeploy at `0x3600…0000`; the survey of what was read off chain 5042 is
[`docs/evidence/arc-mainnet-survey.json`](https://github.com/SlumperSan/agent-governed-vaults/blob/HEAD/docs/evidence/arc-mainnet-survey.json).

**Built for Arc, and not yet deployed there.** The contracts are written, audited and tested, and
no instance of this protocol exists on Arc or on any…
