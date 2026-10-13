---
repo: "ancwrd1/p12-keystore"
name: "p12-keystore"
description: "Rust library to read and write PFX (PKCS#12) files"
readmeQualityOk: true
url: "https://github.com/ancwrd1/p12-keystore"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 23
forks: 10
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2024-03-19T12:25:30Z"
lastCommitAt: "2026-10-13T10:57:45Z"
status: "thriving"
tags: ["funded"]
healthScore: 88
undervaluedScore: 46
maintainers: ["ancwrd1", "domenkozar", "christianhoelzl"]
openGraphImageUrl: "https://opengraph.githubassets.com/c37e16698d567d9f1da4f9136292d58a6228d6ec2929e8a6a4dee169ade17a98/ancwrd1/p12-keystore"
fundingLinks: ["GITHUB:https://github.com/ancwrd1"]
---

# PKCS#12 library written in pure Rust

## Overview

This project contains a simple to use high-level library to work with PKCS#12/PFX keystores, written in pure Rust,
modeled after Java KeyStore API.

Features:

* Single- and multi-keychain PKCS#12
* Support for 'truststores' with only CA root certificates
* Modern and legacy encryption schemes
* Able to read and write Java-compatible keystores
* Support for secret keys and generation of secret keys compatible to Java

Limitations:

* MD5-based encryption schemes are not supported
* Single password is used to encrypt both private keys and certificate data in one store
* Non-encrypted stores are not supported

[Documentation](https://docs.rs/p12-keystore)

For applications that need to validate every certificate bag before chain
construction, `Pkcs12Archive::from_pkcs12` exposes decoded private keys,
certificates, and secrets before import policies are applied. The collections
retain duplicates and friendly-name collisions. This API verifies a MAC when
present and decrypts supported bags; certificate validation is left to callers.

`KeyStore::from_pkcs12` retains colliding aliases using `#2`, `#3`, etc. suffixes
instead of…
