---
repo: "darlinghq/darling-security"
name: "darling-security"
description: "Apple's Security framework"
readmeQualityOk: true
url: "https://github.com/darlinghq/darling-security"
homepage: "http://www.darlinghq.org"
language: "C"
languages: ["C", "Objective-C", "C++"]
languagePcts: [48, 26, 20]
stars: 17
forks: 22
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2016-02-23T20:18:27Z"
lastCommitAt: "2026-11-27T16:28:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 74
maintainers: ["LubosD", "cristim", "IntinteDAO"]
openGraphImageUrl: "https://opengraph.githubassets.com/624e01740632a6617b3290cc9187689d874e3668123f5a4f3678faad42b34383/darlinghq/darling-security"
---

# darling-security

## Upstream URL

https://github.com/apple-oss-distributions/Security/tree/Security-59754.140.13

## Optional Secret Service backend

`securityd` can store generic and internet password items in the host's
freedesktop Secret Service (GNOME Keyring, KWallet, KeePassXC, ...) instead of
the keychain database in the prefix. It is **off by default**; with the setting
off nothing changes, and no D-Bus connection is made.

Switch it on in the prefix with

```sh
sudo defaults write /Library/Preferences/org.darlinghq.security SecretServiceBackend -bool YES
```
