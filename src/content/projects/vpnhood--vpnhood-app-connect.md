---
repo: "vpnhood/Vpnhood.App.Connect"
name: "Vpnhood.App.Connect"
description: "Document & Release for VpnHood Connect"
readmeQualityOk: true
url: "https://github.com/vpnhood/Vpnhood.App.Connect"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 40
forks: 4
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-05-01T03:25:16Z"
lastCommitAt: "2026-07-07T06:25:33Z"
lastReleaseAt: "2025-04-27T01:36:01Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 47
maintainers: ["trudyhood", "petervhood"]
openGraphImageUrl: "https://opengraph.githubassets.com/636e7901a7fa6fd2a4f8dbf0b0f338c1027337912a27abe35cc872ed7c429fe1/vpnhood/Vpnhood.App.Connect"
---

This repo keeps releases of VpnHood! CONNECT

For source code, see: https://github.com/vpnhood/VpnHood

## Publishing (runs on GitHub Actions — never locally)

All builds and all Fastlane publishing for Connect run on **GitHub Actions**. Do **not** build the
`.ipa`/AAB/MSI or run Fastlane from a developer machine — the runners hold the signing keys, the
Xcode/.NET toolchain, and the store credentials.

- **App builds + store uploads** — `connect_publish.yml`. Builds Linux/Windows/Android/iOS from the
  monorepo (`vpnhood/VpnHood`), uploads the AAB to Google Play and the `.ipa` to **TestFlight**, and
  creates the GitHub release here. Dispatched by `Pub/Connect/PublishByGithub.ps1` in the monorepo
  (which bumps the version first). Connect iOS is **TestFlight-only** pending App Store review policy.
- **App Store listing** (metadata text + screenshots, no binary) — `publish_appstore_metadata.yml`.
  Runs Fastlane `deliver` (the `ios upload_metadata` lane) against `com.vpnhood.connect.ios`. Assets
  live in `fastlane/metadata/ios/**` + `fastlane/screenshots/ios/**`. For a brand-new app's FIRST
  version, dispatch it twice (once `skip_metadata=true`, once `skip_screenshots=true`) —…
