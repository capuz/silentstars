---
repo: "metantesan/mitsuzo"
name: "mitsuzo"
description: "Zero-knowledge encrypted pastebin for private text and file sharing"
readmeQualityOk: true
url: "https://github.com/metantesan/mitsuzo"
homepage: "https://mitsuzo.metantesan.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["argon2", "chacha20-poly1305", "cli", "dioxus", "e2ee", "encryption", "pastebin", "rust", "wasm", "zero-knowledge"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-18T08:45:33Z"
lastCommitAt: "2026-09-27T09:29:44Z"
lastReleaseAt: "2026-07-21T23:14:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 55
maintainers: ["metantesan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dedfe052a6725641645484191b7c9843c50feec370bde37a7122c1b59fc50278/metantesan/mitsuzo"
---

# Mitsuzo

**Share secrets and files privately. The server never sees your plaintext.**

Mitsuzo is a zero-knowledge, self-hostable encrypted pastebin for sending
passwords, snippets, documents, and other short-lived files. Encryption happens
in the browser or CLI before anything is uploaded.

[Live demo](https://mitsuzo.metantesan.com) · [Documentation](https://mitsuzo.metantesan.com/docs) · [Releases](https://github.com/metantesan/mitsuzo/releases)

## Why Mitsuzo?

Regular pastebins and chat messages are convenient, but the service can often
read, retain, or index what you send. Mitsuzo keeps the plaintext and password
on your device. The server stores encrypted data, delivery metadata, and the
minimum state needed to enforce expiry and access limits.

## Highlights

- Client-side ChaCha20Poly1305 encryption with Argon2id key derivation
- Envelope encryption, so changing a password does not re-encrypt the content
- Chunked encryption and upload for files up to 1 GB
- TTL expiry, try-count limits, and cryptographic burn-after-reading receipts
- Optional zero-knowledge accounts based on a BIP39 seed phrase and X25519
- Encrypted paste delivery to another account
- Browser UI,…
