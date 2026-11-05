---
repo: "kudanilll/kupass"
name: "kupass"
description: "Kupass, Open source password manager application"
readmeQualityOk: true
url: "https://github.com/kudanilll/kupass"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["password-manager", "android", "kotlin", "jetpack-compose"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-10-26T20:28:08Z"
lastCommitAt: "2026-11-05T14:04:48Z"
lastReleaseAt: "2024-02-11T15:35:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 69
maintainers: ["kudanilll", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/710500197/7ea5f298-67d1-462e-8a2f-7ff78d70119d"
---

# Kupass

Kupass is an offline, open-source password manager for Android. Your vault stays on your phone: Kupass has no account or cloud sync, and it doesn't collect analytics or crash reports.

## Features

- Every field of every entry (site name, username, password, URL, and notes) is encrypted with AES-GCM, using a key kept in the Android Keystore.
- Opening a saved account asks for your fingerprint, face, or screen lock. Other accounts then open without another prompt until Kupass has been in the background longer than the timeout you choose in Settings.
- Backups are `.kupass` files protected by a password you choose (PBKDF2-HMAC-SHA256 and AES-256-GCM), so you can restore them on a new phone or after reinstalling. Each export asks you to authenticate first.
- You can import a Kupass backup, an older Kupass JSON backup, or a Google Password Manager CSV export.
- Copied passwords are cleared from the clipboard after 45 seconds.
- Kupass blocks screenshots and screen recording, and Android cloud backup and device-to-device transfer skip the vault.
- The app comes in English and Indonesian, with light and dark themes and Material You dynamic color.

## Privacy

Kupass makes…
