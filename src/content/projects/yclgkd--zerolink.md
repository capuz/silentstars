---
repo: "yclgkd/zerolink"
name: "zerolink"
description: "ZeroLink — End-to-end encrypted, zero-knowledge secret sharing with WebAuthn-based control and TOFU-safe design."
readmeQualityOk: true
url: "https://github.com/yclgkd/zerolink"
homepage: "https://zerolink.dev"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [80, 20]
topics: ["cloudflare-workers", "cryptography", "privacy", "security", "webauthn", "zero-knowledge", "e2ee", "password-sharing", "secret-sharing"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 53
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-23T12:16:25Z"
lastCommitAt: "2026-09-05T07:47:52Z"
lastReleaseAt: "2026-07-28T13:51:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 38
maintainers: ["yclgkd", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/36c67528bbe73a25c1088d5d807c487596f55135d55a825ad3a554e993188c52/yclgkd/zerolink"
discussionCount: 1
---

> **Language**: English | [中文](https://github.com/yclgkd/zerolink/blob/HEAD/README.zh.md)

# ZeroLink

> Zero-knowledge secure delivery: no accounts, end-to-end encrypted, sender-managed but never decryptable by the server.
> Share passwords, API tokens, recovery codes, private messages, or any sensitive content — securely.

**🌟 Live Demo**: [zerolink.dev](https://zerolink.dev)

## Overview

ZeroLink is a security-first secret sharing tool with the following features:

- **Zero-Knowledge Architecture**: The server never stores plaintext or any private keys
- **End-to-End Encryption**: Only the receiver can decrypt the content
- **Dual Creation Modes**: Quick Share (password) / Secure Share (Passkey)
- **WebAuthn Management**: Secure Share uses system/hardware keys for non-exportable management authority
- **TOFU Protection**: URL Fragment + Lock Challenge prevents race-condition lock hijacking
- **Ciphertext Length Protection**: Padding reduces length-based information leakage
- **Current Product Modes**: Quick Share / Secure Share only

## Core Flow

```
1. Sender → Create (Quick Share password mode / Secure Share Passkey mode)
          → Share link:…
