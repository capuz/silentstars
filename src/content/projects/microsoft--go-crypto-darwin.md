---
repo: "microsoft/go-crypto-darwin"
name: "go-crypto-darwin"
description: "macOS Crypto bindings for Go"
readmeQualityOk: true
url: "https://github.com/microsoft/go-crypto-darwin"
language: "Go"
languages: ["Go"]
languagePcts: [73]
stars: 11
forks: 4
openIssues: 2
closedIssues: 10
watchers: 7
contributors: 4254
recentReleases: 0
createdAt: "2024-12-05T12:07:27Z"
lastCommitAt: "2026-10-19T09:14:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 68
maintainers: ["dependabot[bot]", "gdams", "karianna"]
openGraphImageUrl: "https://opengraph.githubassets.com/a36ae0cd72a451f58a795bcd69aabfaea6ab1fd4ee892627cc16165cce53b0d5/microsoft/go-crypto-darwin"
---

# Go macOS Crypto bindings for FIPS compliance

The `xcrypto` package implements Go crypto primitives on macOS using [CommonCrypto](https://developer.apple.com/library/archive/documentation/System/Conceptual/ManPages_iPhoneOS/man3/Common%20Crypto.3cc.html) and [CryptoKit](https://developer.apple.com/documentation/cryptokit). When configured correctly, CommonCrypto can be executed in FIPS mode, making the `xcrypto` package FIPS compliant.

The package is designed to be used as a drop-in replacement for the [boring](https://pkg.go.dev/crypto/internal/borings) package in order to facilitate integrating commoncrypto inside a forked Go toolchain.

Visit the [FIPS documentation in the microsoft/go repository](https://github.com/microsoft/go/tree/microsoft/main/eng/doc/fips) for more information about FIPS, enabling FIPS mode, and writing a FIPS compliant Go application.

## Disclaimer

A program directly or indirectly using this package in FIPS mode can claim it is using a FIPS-certified cryptographic module (CommonCrypto), but it can't claim the program as a whole is FIPS certified without passing the certification process, nor claim it is FIPS compliant without ensuring all crypto…
