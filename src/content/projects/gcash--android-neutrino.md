---
repo: "gcash/android-neutrino"
name: "android-neutrino"
description: "Android mobile wallet using the bchwallet/neutrino backend"
readmeQualityOk: true
url: "https://github.com/gcash/android-neutrino"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 9
forks: 7
openIssues: 0
closedIssues: 34
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2019-02-05T23:46:44Z"
lastCommitAt: "2026-11-09T04:36:19Z"
lastReleaseAt: "2019-04-08T14:40:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 80
maintainers: ["zquestz"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fe1cf73b15418ca6e8963f245084e6489d2d153f466e82f175b60a9f0918f34/gcash/android-neutrino"
---

# android-neutrino

Android mobile wallet using the bchwallet/neutrino backend

## Installing

Neutrino isn't on Google Play. It needs Android 9 or newer; download the APK for your phone from
the [releases](https://github.com/gcash/android-neutrino/releases):

- `arm64-v8a` for almost every phone from the last several years
- `armeabi-v7a` for older 32-bit phones
- `x86_64` for emulators and x86 Chromebooks
- `universal` if you aren't sure, which works on all of them at about twice the size

Android asks you to allow installs from the app you open the APK with, such as your browser. You
can check the download against the release's `SHA256SUMS`, and its signature against the
certificate fingerprint in the release notes:

```bash
sha256sum --check --ignore-missing SHA256SUMS
apksigner verify --print-certs neutrino-*.apk
```

The Neutrino that was on Google Play was signed with a different key, so Android won't install
this one over it. Write down its recovery phrase, uninstall it, install this one and restore the
wallet from the phrase.

## Testnet4

Settings → Network switches the app to testnet4, the Bitcoin Cash network for testing, whose coins
have no value. Each network has a…
