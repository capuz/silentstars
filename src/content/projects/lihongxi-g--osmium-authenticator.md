---
repo: "lihongxi-g/osmium-authenticator"
name: "osmium-authenticator"
description: "Osmium — A privacy-first TOTP authenticator that works mostly offline and supports backups."
readmeQualityOk: true
url: "https://github.com/lihongxi-g/osmium-authenticator"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-08-13T13:09:36Z"
lastCommitAt: "2026-08-17T04:20:11Z"
lastReleaseAt: "2026-08-16T15:09:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 57
maintainers: ["lihongxi-g"]
openGraphImageUrl: "https://opengraph.githubassets.com/499ef7d4a76f5d28508cc8041dd764454417b9e69933334780b8f04a4c5e3012/lihongxi-g/osmium-authenticator"
---

# Osmium

Osmium is a privacy-first TOTP authenticator for Android. Every secret is encrypted with a non-exportable Android Keystore key before it touches disk. The app creates no account and sends no telemetry — codes are computed entirely on device. The INTERNET permission exists solely for the optional WebDAV backup feature: the app connects exclusively to the server address you configure yourself (typically a NAS on your local network) and to nothing else.

## Features

- **TOTP and HOTP** — SHA-1 / SHA-256 / SHA-512, 6 or 8 digits, periods from 1 to 600 seconds
- **Google Authenticator migration** — scan the "Transfer accounts" QR code from Google Authenticator and import all accounts in one step
- **Encrypted backup** — export to a password-protected, PIN-bound encrypted file; restore on any device
- **WebDAV backup** — upload the same encrypted export to a WebDAV server on your local network (NAS, PC, another phone) and restore from it; the server only ever stores ciphertext
- **Automatic backup** — scheduled unattended backups to WebDAV or the phone's Download/Osmium folder; pick an interval in days, a time of day and how many backups to keep (1–10, default 5); next run…
