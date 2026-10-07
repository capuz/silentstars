---
repo: "Soneso/stellar-php-sdk"
name: "stellar-php-sdk"
description: "The Soneso open source Stellar SDK for PHP provides APIs to build and sign transactions, connect and query Horizon."
readmeQualityOk: true
url: "https://github.com/Soneso/stellar-php-sdk"
language: "PHP"
languages: ["PHP"]
languagePcts: [91]
topics: ["blockchain", "stellar"]
stars: 42
forks: 21
openIssues: 0
closedIssues: 63
watchers: 12
contributors: 8
recentReleases: 0
createdAt: "2021-08-15T12:19:59Z"
lastCommitAt: "2026-10-07T10:31:20Z"
lastReleaseAt: "2022-05-29T20:09:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 58
maintainers: ["christian-rogobete", "ngybnc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b433cf51cedce4bb659ba7b6542aedef88a06c972661c28e61096cf13cced7b/Soneso/stellar-php-sdk"
discussionCount: 2
---

# [Stellar SDK for PHP](https://github.com/Soneso/stellar-php-sdk)

Build and sign Stellar transactions, query [Horizon](https://developers.stellar.org/docs/data/apis/horizon), and interact with [Soroban](https://developers.stellar.org/docs/build/smart-contracts/overview) smart contracts via RPC. Communicate with anchors and external services using built-in support for 23 SEPs.

## Installation

```bash
composer require soneso/stellar-php-sdk
```

Requires PHP 8.0+.

## Quick examples

### Send a payment

Transfer XLM between accounts:

```php
$payment = (new PaymentOperationBuilder($receiverId, Asset::native(), '100'))->build();
$tx = (new TransactionBuilder($account))->addOperation($payment)->build();
$tx->sign($senderKeyPair, Network::testnet());
$sdk->submitTransaction($tx);
```

### Trust an asset

Enable your account to receive a token (like USDC):

```php
$asset = Asset::createNonNativeAsset('USDC', $issuerAccountId);
$trustOp = (new ChangeTrustOperationBuilder($asset))->build();
$tx = (new TransactionBuilder($account))->addOperation($trustOp)->build();
$tx->sign($accountKeyPair, Network::testnet());
$sdk->submitTransaction($tx);
```

### Call a smart contract

Invoke a…
