---
repo: "nfcim/flutter_nfc_kit"
name: "flutter_nfc_kit"
description: "Flutter plugin to provide NFC functionality on Android and iOS, including reading metadata, read & write NDEF records, and transceive layer 3 & 4 data with NFC tags / cards"
readmeQualityOk: true
url: "https://github.com/nfcim/flutter_nfc_kit"
homepage: "https://pub.dev/packages/flutter_nfc_kit"
language: "Dart"
languages: ["Dart", "Kotlin", "Swift"]
languagePcts: [46, 27, 25]
topics: ["flutter", "flutter-plugin", "nfc", "nfc-tag", "android", "ios", "kotlin", "swift", "ndef"]
stars: 242
forks: 164
openIssues: 11
closedIssues: 166
watchers: 11
contributors: 24
recentReleases: 0
createdAt: "2020-01-15T13:40:08Z"
lastCommitAt: "2026-10-11T10:14:09Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 36
maintainers: ["Harry-Chen", "LasseLegarth", "ayanparvaiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4c2592765ff73979540f5f0fb0b55d8ab403089b5c4ae7ba6f29c2833f06898/nfcim/flutter_nfc_kit"
---

# Flutter NFC Kit

Yet another plugin to provide NFC functionality on Android, iOS and browsers (by WebUSB, see below).

This plugin's functionalities include:

* read metadata and read & write NDEF records of tags / cards complying with:
  * ISO 14443 Type A & Type B (NFC-A / NFC-B / MIFARE Classic / MIFARE Plus / MIFARE Ultralight / MIFARE DESFire)
  * ISO 18092 (NFC-F / FeliCa)
  * ISO 15693 (NFC-V)
* R/W block / page / sector level data of tags complying with:
  * MIFARE Classic / Ultralight (Android only, MIFARE Classic Read & Write block for iOS)
  * ISO 15693 (iOS only)
* transceive raw commands with tags / cards complying with:
  * ISO 7816 Smart Cards (layer 4, in APDUs)
  * other device-supported technologies (layer 3, in raw commands, see documentation for platform-specific supportability)

Note that due to API limitations, not all operations are supported on all platforms.
**You are welcome to submit PRs to add support for any standard-specific operations.**

This library uses [ndef](https://pub.dev/packages/ndef) for NDEF record encoding & decoding.

## Contributing

Please refer to…
