---
repo: "privkeyio/keep-android"
name: "keep-android"
description: "Android app for FROST threshold signing with NIP-55 support"
readmeQualityOk: true
url: "https://github.com/privkeyio/keep-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["nostr", "frost", "android", "bitcoin", "kotlin", "nip-46", "nip-55"]
stars: 11
forks: 2
openIssues: 3
closedIssues: 151
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-01-24T22:21:13Z"
lastCommitAt: "2026-11-07T13:54:10Z"
lastReleaseAt: "2026-03-05T14:39:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 61
maintainers: ["kwsantiago", "wksantiago", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f9d2a19131662e2f53c05a4973057ae6e1d61a0279c8ea60d0d592774183dd1/privkeyio/keep-android"
---

# Keep: FROST threshold signer for Android

[Keep](https://github.com/privkeyio/keep-android) is a [FROST](https://github.com/privkeyio/keep-android/blob/HEAD/docs/README.md) (Flexible Round-Optimized Schnorr Threshold Signatures) threshold signing app and dedicated Nostr event signer for Android. It allows users to hold FROST key shares on their phone and sign Nostr events without any single device ever holding the full private key. Keep implements the [NIP-55](https://github.com/nostr-protocol/nips/blob/master/55.md) Android Signer protocol and [NIP-46](https://github.com/nostr-protocol/nips/blob/master/46.md) remote signing, so any compatible Nostr client can request signatures directly.

Keep serves as a dedicated Nostr event signer that keeps private key material segregated from client apps, implementing NIP-55 and NIP-46 with per-app permissions, background signing, and multiple account support. Keep goes further by splitting keys into FROST threshold shares (2-of-3, 3-of-5, etc.) so that no single device ever holds the complete private key.

# Features

- FROST threshold signing (2-of-3, 3-of-5, etc.)
- NIP-55 Android Signer protocol (intents + content provider)
- NIP-46…
