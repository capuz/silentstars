---
repo: "dpejoh/specter"
name: "specter"
description: "Unified Play Integrity and root hiding stack for Android"
url: "https://github.com/dpejoh/specter"
homepage: "https://specter.dpejoh.com"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [48, 32]
stars: 351
forks: 26
openIssues: 3
closedIssues: 9
watchers: 5
contributors: 7
recentReleases: 10
createdAt: "2026-05-05T01:52:29Z"
lastCommitAt: "2026-06-28T01:46:45Z"
lastReleaseAt: "2026-05-26T20:50:50Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 30
maintainers: ["dpejoh", "mirvora", "bocho8"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f4c65f44da40a60f0f6cc0d3e6d5b183b25712de5c557fb4a035bbd3eb9ada2/dpejoh/specter"
---

# Specter

</p>

Getting strong integrity, TEESimulator management, detection solve. Clean, focused, no bloat.

[Download](https://github.com/dpejoh/specter/releases/latest)

## Background

Specter is a complete rewrite of what I originally built as Yurikey.

## Support

- Telegram: [Channel](https://t.me/dpejoh) · [Group](https://t.me/dpejoh0)
- Ko-fi: [ko-fi.com/dpejoh](https://ko-fi.com/dpejoh)
- BTC: bc1qfy4vfstns4aqhvck66x0r53n3hfkkzhwkt7zpw
- ETC: 0x895762C0Fd2BeF54EE3cD478Fc03212aeA673a68

## Quick start

1. Install [Tricky Store](https://github.com/5ec1cff/TrickyStore/releases/latest) or a fork
2. Install any PIF fork
3. Install Specter via Magisk / KernelSU / APatch
4. Reboot. First-boot runs backup, target, security patch, keybox.
5. Open the WebUI

## Features

- **Keybox**: multi-source catalog, custom keybox, Google revocation, backup/restore
- **Auto Target**: inotify + polling for new apps
- **App Targeting**: per-app states, TEE-aware suffixes, blacklist
- **Security Patch**: live fetch with offline fallback
- **TEE & Boot Hash**: TEE status/tier, vbmeta digest, boot hash
- **ROM Fingerprint**: cleans custom ROM props and prefixes
- **ADB Disabler**: dev options,…
