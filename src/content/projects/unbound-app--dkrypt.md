---
repo: "unbound-app/dkrypt"
name: "dkrypt"
description: "ipa decryption service and api"
readmeQualityOk: true
url: "https://github.com/unbound-app/dkrypt"
homepage: "https://ipa.dylib.dev"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [73, 20]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-07-14T21:03:03Z"
lastCommitAt: "2026-09-27T09:28:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 42
maintainers: ["castdrian"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee161ec29d919265714a933603d95bc8aaf2d91f55c71218c3bf13f26ff01a3e/unbound-app/dkrypt"
fundingLinks: ["GITHUB:https://github.com/castdrian", "KO_FI:https://ko-fi.com/castdrian"]
---

# dkrypt

Self-hosted App Store and TestFlight decryption for jailbroken iPhone and iPad devices.

dkrypt provides an authenticated dashboard and API for decrypting releases, retaining IPA artifacts, scheduling watches, dispatching updates, managing devices, and administering billing.

## Quick start

1. Clone the repository and copy `.env.example` to `.env`.
2. Set `API_KEY`, `SESSION_SIGNING_SECRET`, and `ADMIN_PASSWORD` to long random values.
3. Connect the iPhone or iPad over USB, unlock it, and accept the trust prompt.
4. Start dkrypt:

   ```sh
   docker compose up -d --build
   ```

5. Open `http://localhost:8080`, sign in, open **Settings → Devices**, select the discovered device, and choose **Set up**.

The setup flow pairs the device, verifies iOS and the jailbreak, checks ElleKit and autoinstall, and stores the device record. A device does not need an `.ipadecrypt` directory or a setup CLI command to be recognized.

## Requirements

- Docker Engine with Compose v2
- Linux host access to `/dev/bus/usb` for USB devices
- A rootless jailbreak with ElleKit
- The dkrypt autoinstall package installed on the device
- An App Store Apple ID; TestFlight jobs also need TestFlight…
