---
repo: "pipXBT/Vanaddy"
name: "Vanaddy"
description: "Multi-chain vanity wallet address generator for Solana & HyperEVM — with BIP-39 seed phrase output"
readmeQualityOk: true
url: "https://github.com/pipXBT/Vanaddy"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-01-28T07:41:49Z"
lastCommitAt: "2026-10-19T09:14:11Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 68
maintainers: ["pipXBT"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b3077bb08594226215b507368a7d1851e7a2c09ace155024f9a692c47ec09fb/pipXBT/Vanaddy"
---

# Vanaddy

Vanity addresses for Solana, EVM, Bitcoin, TON, and Monero. One binary, a terminal UI, local key generation. The seed or private key it prints imports into the wallet named below.

EVM addresses are not tied to one network. The same key works on Ethereum, Base, Arbitrum, Optimism, Polygon, BSC, Avalanche, and any other EVM chain.

## Chains

| Chain | Address | Seed | Path | Imports into |
|-------|---------|------|------|----------------|
| Solana | Base58 | BIP-39, 12 words | SLIP-0010 `m/44'/501'/0'/0'` | Phantom, Solflare |
| EVM | `0x` + hex | BIP-39, 12 words | BIP-44 `m/44'/60'/0'/0/0` | MetaMask, Rabby, any EVM wallet |
| Bitcoin | `bc1q…` | BIP-39, 12 words | BIP-84 `m/84'/0'/0'/0/0` | Sparrow, Electrum, any BIP-84 wallet |
| TON | `UQ…`, 48 chars | TON native, 24 words | wallet-v5r1 (W5) | Tonkeeper, MyTonWallet |
| Monero | `4…`, 95 chars | 25-word Electrum | spend key random; view key = Keccak(spend) | `monero-wallet-cli --restore-deterministic-wallet`, Cake, Feather |

Bitcoin vanity starts after `bc1q`. TON starts after `UQ`. Monero starts after `4`. Solana and EVM start at the first character.

Match the start, the end, or both. Case-sensitive EVM uses…
