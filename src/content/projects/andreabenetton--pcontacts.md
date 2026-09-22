---
repo: "andreabenetton/pcontacts"
name: "pcontacts"
description: "A GPL-3.0 Android app that signs in to a Proton Mail account, decrypts the user's contacts client-side, and exposes them to ContactsContract so they appear in the system Contacts app (and any other app that reads contacts) the same way WhatsApp or Telegram surface their own contact directories."
readmeQualityOk: true
url: "https://github.com/andreabenetton/pcontacts"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 20
forks: 1
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 1
recentReleases: 3
createdAt: "2026-05-24T05:15:53Z"
lastCommitAt: "2026-09-22T08:45:14Z"
lastReleaseAt: "2026-07-28T16:27:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 50
maintainers: ["andreabenetton"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5d162b6b60e849a233f2b558d55f56c38ee6e0aad57e80fee0e6837cccf5e90/andreabenetton/pcontacts"
---

# pcontacts

**Proton Mail contacts → Android system address book.**

A GPL-3.0 Android app that signs in to a Proton Mail account, decrypts the user's contacts client-side, and exposes them to `ContactsContract` so they appear in the system Contacts app (and any other app that reads contacts) the same way WhatsApp or Telegram surface their own contact directories.

## Status

**v2.0.0 released.** **Validated against the live Proton production API** — full SRP handshake, token persistence, keyPassword derivation, multi-key contact decrypt (user + address keys), and logout all succeed. See [`docs/API_RESEARCH.md`](https://github.com/andreabenetton/pcontacts/blob/HEAD/docs/API_RESEARCH.md) for protocol details.

What works in code (verified by unit tests + live integration test):

- SRP login (Proton's custom go-srp variant, not standard SRP-6a) with TOTP 2FA. Modulus signature verification against pinned Proton SRP signing key (ADR-0014).
- Per-card decrypt: CLEAR_TEXT / SIGNED / ENCRYPTED / ENCRYPTED_AND_SIGNED dispatch via `:core:proton-contacts`, integrated end-to-end against real BouncyCastle in `ContactDecryptBootstrapTest`.
- Full vCard projection: FN / N pieces / multiple…
