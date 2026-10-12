---
repo: "keycard-tech/status-keycard"
name: "status-keycard"
description: "Our Javacard Implementation for making secure transactions within Status and Ethereum"
readmeQualityOk: true
url: "https://github.com/keycard-tech/status-keycard"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 263
forks: 78
openIssues: 9
closedIssues: 66
watchers: 31
contributors: 12
recentReleases: 0
createdAt: "2017-09-21T10:09:08Z"
lastCommitAt: "2026-10-12T11:14:59Z"
lastReleaseAt: "2023-08-10T09:04:00Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 89
undervaluedScore: 27
maintainers: ["bitgamma", "mmlado", "guylouis"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf2ecdb3c589b197f252b3c208c1f68fd5f5b166265d0b973811e8404857763f/keycard-tech/status-keycard"
---

# What is Keycard?

Keycard is an implementation of a BIP-32 HD wallet running on Javacard 3.0.5 (see implementation notes)

It supports among others
- key generation, derivation and signing
- exporting keys defined in the context of EIP-1581 https://eips.ethereum.org/EIPS/eip-1581
- setting up a NFC NDEF tag

Communication with the Keycard happens through a simple APDU interface, together with a Secure Channel guaranteeing confidentiality, authentication and integrity of all commands. It supports both NFC and ISO7816 physical interfaces, meaning that it is compatible with any Android phone equipped with NFC, and all USB Smartcard readers.

The most obvious case for integration of Keycard is crypto wallets (ETH, BTC, etc), however it can be used in other systems where a BIP-32 key tree is used and/or you perform authentication/identification.

# Where to start?

A good place to start is our [documentation site](https://keycard.tech/docs/)

Keycard is a public good — contributions are welcome and highly encouraged!

You can also join the discussion about this project on our [discord channel](https://discord.gg/uJAXk7jFhZ)

Keycard is at the center of several projects, check the…
