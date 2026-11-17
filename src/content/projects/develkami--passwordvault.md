---
repo: "DevElkami/PasswordVault"
name: "PasswordVault"
description: "Password vault (AES encryption)"
readmeQualityOk: true
url: "https://github.com/DevElkami/PasswordVault"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["aes", "aes-encryption", "cryptography", "password-manager", "password-vault", "security", "vault", "maui", "maui-app", "maui-apps"]
stars: 19
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-03-24T17:22:02Z"
lastCommitAt: "2026-11-17T14:44:13Z"
lastReleaseAt: "2023-05-07T10:28:01Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 37
maintainers: ["DevElkami"]
openGraphImageUrl: "https://opengraph.githubassets.com/50e02dd1cd05675b85ac91883d9fdd4cfc09bb229f602ebba419efceec3a486f/DevElkami/PasswordVault"
discussionCount: 1
---

# Vault :ice_cube:
Personal password vault with browser password import. This vault uses Advanced Encryption Standard (AES) encryption.

* AES-256-GCM encryption, key derived from your master password with PBKDF2-HMAC-SHA256 (600 000 iterations, random salt) :key:
* Import your passwords from Firefox, Chrome, Edge or Bitwarden (CSV), or from a vault of version 3.x :earth_americas:
* Search for duplicate or similar entries
* Light and dark themes
* Multilang support (:clipperton_island:, :us:)
* Compatible Android and Windows

# Apps (v4.0+)

One .NET MAUI app (`VaultGui`) for **Windows and Android**: create/unlock the vault, search,
add/edit/delete entries, copy with automatic clipboard clearing (30 s, kept out of
Windows clipboard history, flagged sensitive on Android 13+), CSV import (Firefox, Chrome, Edge, Bitwarden),
import of a 3.x vault, duplicate search, light/dark theme, auto-lock in the background, change master password,
send the vault file to your server (Windows) or update it from an HTTPS URL.

# What's new

- **Header (Windows):** no more header band. The title bar holds the actions as icons: *Send* and *Update* (when set up),
  *Duplicates*, *Lock*, *Settings*. They…
