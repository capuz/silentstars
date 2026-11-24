---
repo: "framefilter/keyroost"
name: "keyroost"
description: "Vendor Neutral, Rust-Based Management UI and CLI for U2F/FIDO2 and other hardware security keys "
readmeQualityOk: true
url: "https://github.com/framefilter/keyroost"
homepage: "https://framefilter.github.io/keyroost/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["cross-platform", "fido2", "hotp", "totp", "rust", "rust-crate", "ctap2", "piv"]
stars: 85
forks: 14
openIssues: 9
closedIssues: 54
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2026-05-21T22:19:59Z"
lastCommitAt: "2026-11-24T01:58:41Z"
lastReleaseAt: "2026-07-07T00:18:44Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 36
maintainers: ["framefilter", "Snrat", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1246115486/54f9d939-3c6c-4ee6-a8ae-5c6b8feb0adf"
discussionCount: 5
---

# keyroost

An independent, vendor-neutral app for managing all your hardware security keys
in one place.

## What it is

keyroost is an open-source Rust toolchain for hardware security keys, working
across vendors over PC/SC and USB HID. It speaks FIDO2/CTAP2, OATH (TOTP/HOTP),
and the OpenPGP and PIV card protocols, manages on-device OTP on Token2 FIDO keys,
and also programs the Token2 Molto2 / Molto2v2 TOTP token. Ships a Rust library,
a CLI (`keyroostctl`), and a desktop GUI (`keyroost`) with a dark and light
theme — implemented from public standards, with no vendor SDKs, no Python, and
no Qt.
