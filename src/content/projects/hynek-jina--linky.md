---
repo: "hynek-jina/linky"
name: "linky"
description: "PWA for managing Lightning and Nostr contacts"
readmeQualityOk: true
url: "https://github.com/hynek-jina/linky"
homepage: "https://linky.fit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 11
forks: 5
openIssues: 6
closedIssues: 37
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-01-02T14:52:45Z"
lastCommitAt: "2026-07-13T06:37:33Z"
lastReleaseAt: "2026-05-31T18:34:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 66
maintainers: ["hynek-jina", "gorrdy"]
openGraphImageUrl: "https://opengraph.githubassets.com/c88edf045b475bcd6a63ef04bfc82840bc03d1395862ec380d75b40933574179/hynek-jina/linky"
---

# Linky

> ⚠️ Hobby tool without guarantees. Use at your own risk.

Linky is a mobile-first PWA for contacts, Nostr messaging, and Lightning/Cashu payments.
It is local-first: data is stored in Evolu (SQLite) and syncs between devices.

The repo also contains a separate public website in `apps/site/` intended for `linky.fit`, while the product app remains a distinct deployment on `app.linky.fit`.

## Protocols and stack

- Nostr (chat, profile, auth-related flows)
- Evolu (local-first DB + sync)
- Cashu + mints (Lightning wallet flow)
- npub.cash (LN address + mint preference sync)

## Authentication model

- Login supports either:
  - `nsec`, or
  - one 20-word **SLIP-39** share
- With SLIP-39 login:
  - Nostr keypair is derived at `m/44'/1237'/0'/0/0`
  - deterministic Evolu owner lanes are derived for:
    - contacts (`contacts-n`)
    - cashu (`cashu-n`)
    - messages (`messages-n`)
    - owner metadata (`ownerMeta`)
- If user pastes custom `nsec` during a SLIP-39 session, app switches to pasted key locally without immediate Evolu restore/write; choosing Derive switches back to seed-derived key.

## Owner rotation and limits

- Contacts/cashu/messages owner lanes auto-rotate…
