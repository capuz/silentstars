---
repo: "open-source-cooperative/apple-native-keyring-store"
name: "apple-native-keyring-store"
description: "A keyring credential store provider for macOS/iOS"
readmeQualityOk: true
url: "https://github.com/open-source-cooperative/apple-native-keyring-store"
homepage: "https://github.com/open-source-cooperative/keyring-rs/wiki/Keyring"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 7
forks: 8
openIssues: 3
closedIssues: 6
watchers: 2
contributors: 5
recentReleases: 1
createdAt: "2025-05-28T21:36:47Z"
lastCommitAt: "2026-10-31T19:01:53Z"
lastReleaseAt: "2026-08-06T15:43:27Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 91
maintainers: ["brotskydotcom", "LucaCappelletti94", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/966f9ae97829a6701dd4d97cbf3dd64e29689948f7865236856c5815e937790e/open-source-cooperative/apple-native-keyring-store"
---

# Apple-native Keyring Store

This is a [keyring credential store provider](https://github.com/open-source-cooperative/keyring-rs/wiki/Keyring) that stores credentials in the native macOS and iOS secure stores. It’s compatible with [keyring-core](https://crates.io/crates/keyring-core) v0.7 and later.

If you are writing client apps that are _not_ code-signed by a provisioning profile (e.g., command-line apps), then you should use the `keychain` module of this store, which accesses the macOS keychain. (This is the module which is most compatible with [keyring v3](https://crates.io/crates/keyring/3.6.3) and earlier.) Specify the `keychain` feature when you build.

If you are writing client apps that _are_ code-signed by a provisioning profile, then you should use the `protected` module of this store, which accesses the Apple Protected Data store. This module supports synchronizing credentials across devices via iCloud. It also supports requiring biometric authentication for credential access (although such credentials can be not be sync’d across devices). Specify the `protected` feature when you build.

If you are writing an iOS app, then you have no choice but to use the protected…
