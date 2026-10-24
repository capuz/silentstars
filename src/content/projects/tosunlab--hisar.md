---
repo: "tosunlab/hisar"
name: "hisar"
description: "End-to-end encrypted password, SSH-key and secrets manager for developers."
readmeQualityOk: true
url: "https://github.com/tosunlab/hisar"
homepage: "https://tryhisar.com"
language: "Go"
languages: ["Go"]
languagePcts: [50]
stars: 5
forks: 0
openIssues: 5
closedIssues: 26
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-13T22:17:40Z"
lastCommitAt: "2026-10-24T08:19:58Z"
lastReleaseAt: "2026-10-18T22:48:51Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 65
maintainers: ["alperb", "bilgehanertan", "emrebdr"]
openGraphImageUrl: "https://opengraph.githubassets.com/90aaceed52a85ae13930c175e1bcbcefb328a63582604e0a714ed33dfff4adbc/tosunlab/hisar"
---

---

Hisar keeps your passwords, passkeys, SSH keys, one-time codes and API secrets in vaults that only your devices can read. The server, hosted at `api.tryhisar.com` or [run by you](https://github.com/tosunlab/hisar/blob/HEAD/docs/docs/self-hosting.md), stores encrypted vault payloads alongside plaintext account, sharing and operational metadata: every key is derived on your devices from your master password and a **Secret Key**, so neither a copy of the database nor a network attacker can read your items. A compromised live server has different limits, especially through the admin and share-link pages it serves ([threat model and metadata](https://github.com/tosunlab/hisar/blob/HEAD/docs/docs/design.md#2-threat-model)). The cryptography, the sync protocol and every product decision are written down in [Design](https://github.com/tosunlab/hisar/blob/HEAD/docs/docs/design.md).

Hisar is one Go implementation of the crypto shared by a Mac and Linux app, a browser extension, an iPhone app, an Android app and a command-line tool. It is built for people who live in a terminal: the app is an SSH agent, `hisar run` hands secrets to commands and masks them in their output, and `hisar…
