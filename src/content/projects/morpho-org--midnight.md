---
repo: "morpho-org/midnight"
name: "midnight"
description: "Morpho's fixed rate markets protocol"
readmeQualityOk: true
url: "https://github.com/morpho-org/midnight"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [95]
stars: 115
forks: 52
openIssues: 4
closedIssues: 208
watchers: 5
contributors: 28
recentReleases: 5
createdAt: "2025-01-22T10:22:17Z"
lastCommitAt: "2026-09-17T08:51:54Z"
lastReleaseAt: "2026-07-31T13:42:22Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["claude", "MathisGD", "jochencertora"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ef87fd245af9cdb6a42f466a301e8286354291cc0708234282062c01fdce90e/morpho-org/midnight"
---

# Morpho Midnight

Morpho Midnight is a non-custodial fixed-rate lending protocol implemented for the Ethereum Virtual Machine.
It is organized around isolated, immutable, permissionlessly created markets with fixed-maturity.
Lending and borrowing are implemented through the trading of credit and debt units, whose payoff structure is analogous to that of zero-coupon obligations, settling at the market's maturity.
Participants trade by posting or consuming offers that do not lock capital and source liquidity only at settlement, allowing makers to quote across multiple markets at once.
Markets can range from single to multi-collateral configurations, and gates can be used to implement access-control policies.

## Whitepaper

The protocol is described in detail in the [Midnight Whitepaper](https://morpho.org/whitepapers/midnight-whitepaper.pdf).

## Developers

Compilation, testing and formatting are done with [forge](https://book.getfoundry.sh/getting-started/installation).
If of interest, [BaseTest.sol](https://github.com/morpho-org/midnight/blob/main/test/BaseTest.sol) contains a re-usable testing setup and useful helpers.
Optional helper contracts and libraries for interacting…
