---
repo: "WalletScrutiny/WalletScrutinyCom"
name: "WalletScrutinyCom"
description: "Mirror of https://gitlab.com/walletscrutiny/walletScrutinyCom"
readmeQualityOk: true
url: "https://github.com/WalletScrutiny/WalletScrutinyCom"
homepage: "https://walletscrutiny.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [75]
topics: ["bitcoin", "bitcoin-wallet", "blockchain-wallet", "btc", "cryptocurrency", "wallet", "nostr"]
stars: 15
forks: 6
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 37
recentReleases: 0
createdAt: "2022-11-27T01:38:31Z"
lastCommitAt: "2026-10-23T08:46:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 68
maintainers: ["ktecho", "xrviv", "Giszmo"]
openGraphImageUrl: "https://opengraph.githubassets.com/48eeb7509a259f21a48b02f0a5ebbc8aa19a0e1eca27335cd17d1d9340b2f3d0/WalletScrutiny/WalletScrutinyCom"
---

WalletScrutiny
===============

This is the repository backing [WalletScrutiny.com](https://walletscrutiny.com/).

Pull Requests are welcome.

## Nostr Events Specifications

We're using Nostr to decentralize the data of WalletScrutiny so this data can be used in other
applications. If you want to integrate this information into your own application, you can use
the following specifications: [Verifications](https://github.com/WalletScrutiny/WalletScrutinyCom/blob/HEAD/docs/verifications.md).

## Installing Required Dependencies

1. Clone the repository: `git clone https://gitlab.com/walletscrutiny/walletScrutinyCom; cd walletScrutinyCom`
1. Install global dependencies: `apt update; apt install nodejs npm ruby-dev ruby-bundler -y`
1. Install more global dependencies: `npm i --global npm@latest`
1. Install npm stuff: `npm install; npm install` (twice because ... the error I
   got the first time is gone the second time)
1. Install bundler: `gem install bundler:2.1.4`
1. Install bundler stuff: `bundler install`

* Note: when executing `gem install bundler:2.1.4` on a Debian/Ubuntu based system, you could
encounter an error which sounds something like you need to execute it using…
