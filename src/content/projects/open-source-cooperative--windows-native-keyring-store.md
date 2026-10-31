---
repo: "open-source-cooperative/windows-native-keyring-store"
name: "windows-native-keyring-store"
description: "A keyring-compatible credential store based on the Windows Credential Manager"
readmeQualityOk: true
url: "https://github.com/open-source-cooperative/windows-native-keyring-store"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 7
forks: 7
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-05-28T21:39:07Z"
lastCommitAt: "2026-10-31T19:01:10Z"
lastReleaseAt: "2026-05-24T20:14:09Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 69
undervaluedScore: 84
maintainers: ["brotskydotcom", "LucaCappelletti94", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e2a3b3586afed9ded38b0cc8320452f3fecc6b77a89042a300e4efef894758e/open-source-cooperative/windows-native-keyring-store"
---

# Windows Native Keyring Store

This library provides a credential store for use with the [keyring ecosystem](https://github.com/open-source-cooperative/keyring-rs/wiki/Keyring) that uses the Windows native credential store.

## Usage

To use this keychain-compatible credential store provider, you must take a dependency on the [keyring-core crate](https://crates.io/crates/keyring-core) and on [this crate](https://crates.io/crates/windows-native-keyring-store). Then you can instantiate a credential store and set it as your default credential store as shown in the [sample program](https://github.com/open-source-cooperative/windows-native-keyring-store/blob/HEAD/examples/example.rs) in this crate.

## Features

This crate has one feature, `search`, that is enabled by default. This feature requires the `regex` crate, which has a large footprint (typically over 1MB). If you care about library size and don't need to do credential searches, you can disable default features to shed the `regex` dependency. 

## Warning

Windows Credential Manager loses updates when credentials, even different ones, are written and deleted concurrently. This crate uses a named mutex keyed by the effective…
