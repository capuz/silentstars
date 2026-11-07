---
repo: "Aster-Privacy/Aster-Mail"
name: "Aster-Mail"
description: "Cross-platform encrypted email client for Aster"
readmeQualityOk: true
url: "https://github.com/Aster-Privacy/Aster-Mail"
homepage: "https://astermail.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["email", "encryption", "end-to-end-encryption", "privacy", "cryptography"]
stars: 101
forks: 9
openIssues: 28
closedIssues: 259
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-01-25T21:47:51Z"
lastCommitAt: "2026-11-07T16:11:33Z"
lastReleaseAt: "2026-06-17T20:39:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 41
maintainers: ["findleyl"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc96f79b62485ac026a3c588c0b82a6abd9293913cce1ea998cc936c7ab71e22/Aster-Privacy/Aster-Mail"
---

Aster Mail is a free, open-source, end-to-end encrypted mail service. Every message, subject line, and attachment between Aster users is encrypted locally on your device, and mail to an outside address is encrypted on your device whenever the recipient publishes an OpenPGP key. This means we have no way to read that email and we never will.

You can sign up at [astermail.org](https://astermail.org). A phone number and recovery email are not required.

## How it works

All Aster-to-Aster messages are end-to-end encrypted with post-quantum encryption (ML-KEM-768 and P-256 ECDH) inside an X3DH and Double Ratchet protocol, which protects against store-now-decrypt-later attacks. Subject lines are also encrypted. This means that we cannot read your subject lines, unlike other providers. Mail you send outside Aster uses standard OpenPGP (Ed25519 and Curve25519).

Your keys are yours, and they are fully portable. You can export them and use them with GPG or any OpenPGP client. Encryption between Aster users needs no setup. To let people outside Aster find your public key, turn on WKD or keyserver publishing in **Settings** > **Encryption**. Both are off by default.

Aster runs on a…
