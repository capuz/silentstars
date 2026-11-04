---
repo: "Nikkei/nid-webauthn-emulator"
name: "nid-webauthn-emulator"
description: "Passkey WebAuthn Emulator"
readmeQualityOk: true
url: "https://github.com/Nikkei/nid-webauthn-emulator"
homepage: "https://www.npmjs.com/package/nid-webauthn-emulator"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 23
forks: 5
openIssues: 0
closedIssues: 17
watchers: 31
contributors: 9
recentReleases: 0
createdAt: "2024-06-10T00:06:18Z"
lastCommitAt: "2026-11-04T02:55:27Z"
lastReleaseAt: "2025-04-15T01:59:03Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 96
undervaluedScore: 58
maintainers: ["phwinx", "dependabot[bot]", "bschick"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/1000731?s=400&v=4"
---

# NID WebAuthn Emulator

[English](https://github.com/Nikkei/nid-webauthn-emulator/blob/HEAD/README.md) | [日本語](https://github.com/Nikkei/nid-webauthn-emulator/blob/HEAD/README.ja.md)

`NID WebAuthn Emulator` is a library that provides both a [FIDO2/CTAP Authenticator emulator](https://github.com/Nikkei/nid-webauthn-emulator/blob/HEAD/src/authenticator/authenticator-emulator.ts) and a [WebAuthn API emulator](https://github.com/Nikkei/nid-webauthn-emulator/blob/HEAD/src/webauthn/webauthn-emulator.ts) built on top of it. Each component is implemented according to the WebAuthn API and CTAP specifications respectively. This module runs on Node.js and is designed for local integration testing of Passkeys.

For detailed specifications of each emulator, please refer to the following:

- [FIDO2/CTAP Authenticator Emulator Detailed Specification for Developers](https://github.com/Nikkei/nid-webauthn-emulator/blob/HEAD/docs/authenticator-emulator.en.md)
- [WebAuthn API Emulator Detailed Specification for Developers](https://github.com/Nikkei/nid-webauthn-emulator/blob/HEAD/docs/webauthn-emulator.en.md)

## Usage

```bash
npm install nid-webauthn-emulator
```

Basic usage involves creating a…
