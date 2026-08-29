---
repo: "thomasleplus/ethereum"
name: "ethereum"
description: "Musings with Ethereum"
readmeQualityOk: true
url: "https://github.com/thomasleplus/ethereum"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [84]
topics: ["ethereum", "ethereum-contract", "ethereum-blockchain", "blockchain", "blockchain-technology", "smart-contracts", "smart-contract", "solidity", "cryptocurrency", "crypto"]
stars: 5
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-09-01T21:12:46Z"
lastCommitAt: "2026-08-29T17:28:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 92
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b281832758a509d44c394a2421f5f10da1964f9f33cc18f0339c125c906fa3b/thomasleplus/ethereum"
---

# Ethereum

Musings with Ethereum smart contracts.

> [!WARNING]
> The code in this repo was written for educational purposes only. It
> is not fit for any purpose and if you choose to use it in any way,
> you are doing so at your own risk and sole responsibility.

## [Gift Card](https://github.com/thomasleplus/ethereum/blob/HEAD/samples/contracts/GiftCard.sol)

A simple contract emulating a gift card. The properties of the gift
card are different from those of a typical physical gift card:

- The gift card is registered: the receiver of the gift card is set by
  the giver once and for all and cannot be changed (whereas physical
  gift cards are typically considered owned by whomever is the bearer
  at any given moment, like cash).
- The gift card can be rescinded partially or in full by the giver:
  both the receiver and the giver can withdraw money from the contract
  at any time (up to the card's current balance of course).

The above properties made for a more interesting coding exercise but
are unlikely to be the desired behavior for a practical gift card use
case (especially the fact that the giver can withdraw from the card
after it has been given). So please do not use…
