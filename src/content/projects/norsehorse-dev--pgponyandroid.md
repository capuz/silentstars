---
repo: "norsehorse-dev/PGPonyAndroid"
name: "PGPonyAndroid"
description: "Private OpenPGP for Android. Hardware security keys, password-store, no tracking. Open source."
readmeQualityOk: true
url: "https://github.com/norsehorse-dev/PGPonyAndroid"
homepage: "https://pgpony.app"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["android", "encryption", "fdroid", "jetpack-compose", "kotlin", "nfc", "openpgp", "password-store", "pgp", "privacy"]
stars: 130
forks: 13
openIssues: 32
closedIssues: 67
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-06-20T01:41:22Z"
lastCommitAt: "2026-11-05T00:22:03Z"
lastReleaseAt: "2026-07-25T23:32:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 30
maintainers: ["norsehorse-dev", "Sung-Kim0430"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bc9e3ad200558a79b534c7c26b9a3c610cd2cc91750c42cef1447cb8cca0f96/norsehorse-dev/PGPonyAndroid"
discussionCount: 2
---

# PGPony for Android

OpenPGP for Android. Encrypt, decrypt, sign, and verify messages and files,
manage your keyring, and use a hardware security key over NFC or USB, all on
device.

PGPony has no accounts, no ads, no analytics, and no tracking. The `foss`
build contains no Google services and runs fully on de-Googled devices.

## Features

- Encrypt, decrypt, sign, and verify text and files
- Modern key generation, including RFC 9580 (OpenPGP v6) Ed25519 and X25519,
  with Argon2id passphrase protection
- Hardware security keys over NFC and USB (YubiKey 5 NFC, Token2): on-card
  key generation, moving an existing key onto the card (since 4.7.0),
  decrypt, sign, PIN management, and factory reset. USB has
  worked since 4.1.0. The Nitrokey 3 works over USB since 4.6.4 for decrypt
  and sign; its firmware turns OpenPGP off over NFC, so it does not work there
- Read-only password-store (pass) support, including hardware-key entries
- Key discovery via WKD and the keys.openpgp.org verifying keyserver
- Optional contacts integration, QR import and scanning
- Biometric lock and secure-screen protection

## Coming from OpenKeychain

- Keys: export them in OpenKeychain and import the…
