---
repo: "alexylon/ferrocrypt"
name: "ferrocrypt"
description: "FerroCrypt is a pure Rust library, CLI, and desktop application for encrypting and decrypting files and folders using password-based or key-pair-based encryption."
readmeQualityOk: true
url: "https://github.com/alexylon/ferrocrypt"
homepage: "https://ferrocrypt.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["decryption", "encryption", "cryptography", "cli", "file-encryption", "gui", "hybrid-encryption", "rust", "rust-lang", "rustlang"]
stars: 23
forks: 1
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 3
createdAt: "2022-07-07T15:56:41Z"
lastCommitAt: "2026-11-23T12:22:13Z"
lastReleaseAt: "2026-11-07T15:50:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 63
maintainers: ["alexylon"]
openGraphImageUrl: "https://opengraph.githubassets.com/67f95ff6bb44d52001a0dfec57511e0107ae463d6112604413811ff0727f9e48/alexylon/ferrocrypt"
---

FerroCrypt encrypts files and folders into a single `.fcr` file. It is available
as a desktop app, a command-line tool, and a Rust library for Linux, macOS, and
Windows.

Choose how to protect your data:

- **Password:** use the same password to encrypt and decrypt. The command line
  and library call this a *passphrase*.
- **Key pair:** encrypt with a recipient's public key. Decryption requires the
  matching private key and its password. The command line and library can
  encrypt one file for several recipients; any one of them can decrypt it.

Encryption leaves the original files in place. File contents are processed in
chunks, so an entire file does not need to fit in memory. Password processing
uses 1 GiB of memory by default, including when creating or unlocking a private
key.

## Contents

- [Installation](#installation)
- [Command-line usage](#command-line-usage)
- [Desktop app](#desktop-app)
- [Files and folders](#files-and-folders)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [Compatibility](#compatibility)
- [Build from source](#build-from-source)
- [Technical reference](#technical-reference)
- [License and credits](#license-and-credits)
