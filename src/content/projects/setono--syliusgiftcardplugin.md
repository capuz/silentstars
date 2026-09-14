---
repo: "Setono/SyliusGiftCardPlugin"
name: "SyliusGiftCardPlugin"
description: "Sell gift cards on your Sylius store and let users use them in the checkout process"
readmeQualityOk: true
url: "https://github.com/Setono/SyliusGiftCardPlugin"
language: "PHP"
languages: ["PHP"]
languagePcts: [83]
topics: ["symfony", "sylius", "sylius-plugin", "php"]
stars: 53
forks: 42
openIssues: 57
closedIssues: 96
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2018-09-02T13:44:30Z"
lastCommitAt: "2026-09-14T09:11:43Z"
lastReleaseAt: "2020-01-09T12:06:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 56
maintainers: ["loevgaard"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0378d4348b3fc64179fa31d7c836eadf5ebbe5f51736f018cbe812205f23de6/Setono/SyliusGiftCardPlugin"
---

# Sylius Gift Card Plugin

Add gift card functionality to your Sylius store:

- **Buy gift cards** — customers choose the amount, a design and an optional message, and pick whether the gift card is **virtual** (delivered by email as a PDF) or **physical** (shipped like a normal product).
- **Redeem gift cards** — customers apply a gift card code in the cart, and it becomes a **real payment** against the order rather than a discount on it.
- **Admin management** — a gift card grid, gift card designs, a one-click "create gift card product" scaffold, manual balance adjustments (with an audit ledger), and an outstanding-balance dashboard.

> This is the `1.x` line, for **Sylius 1.13 and up**. It is a ground-up rewrite of the `0.12.x` plugin. There is **no API layer** in 1.x — see [`UPGRADE-1.0.md`](https://github.com/Setono/SyliusGiftCardPlugin/blob/HEAD/UPGRADE-1.0.md) if you are coming from `0.12.x`.

## Table of contents

- [How it works](#how-it-works)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Customization](#customization)
- [Development](#development)
- [License](#license)

## How it works

### Virtual vs physical…
