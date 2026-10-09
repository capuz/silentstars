---
repo: "shenxianpeng/keelhaven"
name: "keelhaven"
description: "Privacy-first backups for your Mac, to storage you own."
readmeQualityOk: true
url: "https://github.com/shenxianpeng/keelhaven"
homepage: "https://keelhaven.app"
language: "Swift"
languages: ["Swift"]
languagePcts: [76]
topics: ["backup", "macos", "menubar-app", "restic", "swiftui", "macos-app", "security-by-default", "backup-tool", "encryption", "restic-gui"]
stars: 23
forks: 3
openIssues: 4
closedIssues: 16
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-26T01:51:13Z"
lastCommitAt: "2026-10-09T10:51:08Z"
lastReleaseAt: "2026-09-11T07:37:02Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 51
maintainers: ["shenxianpeng", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1346798098/31bab95c-c904-465c-87e1-b6872bc1a090"
fundingLinks: ["GITHUB:https://github.com/shenxianpeng"]
---

A free menu bar app that encrypts your folders on your Mac, then backs them up on a schedule to your own drive, bucket or server.

## Why Keelhaven

| Encrypted on your Mac | Stored where you choose | Quiet until it matters |
|---|---|---|
| Only you hold the key. | No Keelhaven server in the path. | It speaks up only when something needs you. |

       alt="Where your files go: the folders you pick on your Mac go to Keelhaven in the menu bar, which encrypts them with a password kept in your Keychain, stores only what changed, runs on your schedule and verifies the repository; only encrypted data goes on to storage you own — an external or network drive, an S3-compatible bucket, SFTP to a server or NAS, or a restic REST server. Not in the path: a Keelhaven server, an account, telemetry.">

       alt="A half-minute walk through Keelhaven: the New Backup Plan window asking where the encrypted backup should go; the menu bar panel running a backup of Documents, from a spinner to a progress bar to a green dot and a Backup complete notification; and the Restore Backup window listing snapshots by date.">

## Install

```bash
brew install --cask shenxianpeng/tap/keelhaven
```

Or…
