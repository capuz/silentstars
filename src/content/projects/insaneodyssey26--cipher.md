---
repo: "insaneodyssey26/Cipher"
name: "Cipher"
description: "Private, local-first personal finance. Automatic and entirely on-device."
readmeQualityOk: true
url: "https://github.com/insaneodyssey26/Cipher"
homepage: "https://play.google.com/store/apps/details?id=com.masum.cipher"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2025-12-23T15:55:19Z"
lastCommitAt: "2026-08-19T04:08:53Z"
lastReleaseAt: "2026-07-22T12:19:33Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 77
undervaluedScore: 62
maintainers: ["insaneodyssey26"]
openGraphImageUrl: "https://opengraph.githubassets.com/3277905e56bed2bae9332d80b568162ba8400598fb8ad25393984760108f4690/insaneodyssey26/Cipher"
fundingLinks: ["GITHUB:https://github.com/insaneodyssey26", "KO_FI:https://ko-fi.com/insane_odyssey"]
---

# cipher

A local-first, privacy-focused personal finance app for Android. cipher reads your bank SMS alerts and app notifications, turning them into a clean, searchable transaction ledger — entirely on-device, with zero cloud dependency.

---

## Screenshots

| Onboarding | Permission | Dashboard |
|:-----------:|:---------:|:---------:|
|  |  |  |

| Insights | Insights | Settings | Settings |
|:--------:|:--------:|:--------:|:--------:|
|  |  |  |  |

---

## How it works

```
Bank sends SMS alert           App sends Notification
        │                                │
        ▼                                ▼
  SmsReceiver                 TransactionNotificationService
        │  raw message body
        ▼
    SmsParser
   ┌────────────────────────────────┐
   │  1. Regex: amount + direction  │
   │  2. Brand dict: merchant name  │
   │  3. Currency extraction (INR)  │
   └────────────────────────────────┘
        │  ParsedTransaction
        ▼
  CategorizerEngine
   assigns category (Food, Travel, UPI…)
        │
        ▼
  TransactionRepository
        │  TransactionEntity
        ▼
  Room + SQLCipher (AES-256 encrypted DB)
        │
        ▼
  DashboardViewModel ──►…
