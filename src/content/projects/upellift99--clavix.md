---
repo: "Upellift99/clavix"
name: "clavix"
description: "A modern desktop client for Vaultwarden: the features of Bitwarden with the simplicity of KeePassXC"
readmeQualityOk: true
url: "https://github.com/Upellift99/clavix"
homepage: "https://clavix.org"
language: "Rust"
languages: ["Rust", "Svelte"]
languagePcts: [52, 21]
topics: ["bitwarden", "desktop", "foss", "password-manager", "rust", "self-hosted", "svelte", "tauri", "vaultwarden"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 15
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-18T19:11:09Z"
lastCommitAt: "2026-09-22T08:45:17Z"
lastReleaseAt: "2026-05-19T08:59:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["Upellift99", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1214579669/7915cc0c-389f-4727-9478-6681d106f966"
---

# Clavix

🌐 **Website: [clavix.org](https://clavix.org)**

> ⚠️ **Alpha software.** Do not use with a real Vaultwarden vault yet.
> The cryptography has not been independently audited, no stable release
> has shipped, and a significant portion of the code was produced with
> AI assistance under human review. See [DISCLAIMER.md](https://github.com/Upellift99/clavix/blob/HEAD/DISCLAIMER.md)
> for the full picture before you clone.

**A modern desktop client for Vaultwarden and Bitwarden.**

Clavix is an alternative to the official Bitwarden client and Keyguard,
built for the self-hosted Vaultwarden community. The goal: finally
provide a comfortable tree-based vault with drag & drop, the way
KeePassXC has offered for years.

**Status: alpha, read+write** — item create/edit, full 2FA, an embedded
SSH agent, KeePassXC import and a security audit all work today.

## What Clavix can do today

Against a real Vaultwarden instance, Clavix:

- **signs you in** (email + master password, PBKDF2 and Argon2id
  KDFs), with full **2FA support**: TOTP, YubiKey OTP, and **WebAuthn
  / FIDO2** — Clavix drives the hardware key over CTAP2/HID itself
  so it works even though the desktop app doesn't…
