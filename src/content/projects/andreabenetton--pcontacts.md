---
repo: "andreabenetton/pcontacts"
name: "pcontacts"
description: "A GPL-3.0 Android app that signs in to a Proton Mail account, decrypts the user's contacts client-side, and exposes them to ContactsContract so they appear in the system Contacts app (and any other app that reads contacts) the same way WhatsApp or Telegram surface their own contact directories."
readmeQualityOk: true
url: "https://github.com/andreabenetton/pcontacts"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 39
forks: 2
openIssues: 3
closedIssues: 6
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-05-24T05:15:53Z"
lastCommitAt: "2026-11-17T14:47:01Z"
lastReleaseAt: "2026-07-28T16:27:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 35
maintainers: ["andreabenetton", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9a56c1cecb8533534dbceb8696d4e5fc694529bb17f0543fd18cb32a7a71b2f/andreabenetton/pcontacts"
---

# pcontacts

**Proton Mail contacts ↔ Android system address book.**

pcontacts is a GPL-3.0 Android app that connects your Proton Mail contacts to Android's system address book, so they appear in the Contacts app and in every other app that uses Android contacts. It talks to the same API as Proton's web client and does all the cryptography on the phone.

## Features

- **Two-way sync** between Proton Mail and Android: contacts appear as ordinary Android contacts, and changes made on the phone go back to Proton.
- Names, several email addresses and phone numbers, addresses, organisation, notes, birthday and anniversary, nickname, website and photo; Proton's contact groups become Android groups.
- **On-device encryption and decryption**: decrypted contacts never leave the phone through pcontacts.
- Proton sign-in with **two-factor authentication** (authenticator code or recovery code) and Proton's human verification.
- Automatic sync at an interval you choose (1, 3, 6, 12 or 24 hours, or off), and a Sync now button.
- **Conflicts** — the same contact changed on both sides — are merged when they touch different fields and otherwise left to you to settle.
- **Safe deletions**: a…
