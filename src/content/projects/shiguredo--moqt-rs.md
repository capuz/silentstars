---
repo: "shiguredo/moqt-rs"
name: "moqt-rs"
description: "Sans-I/O Rust library for Media over QUIC Transport (MOQT)"
originalDescription: "Sans-I/O Rust library for Media over QUIC Transport (MOQT)"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/shiguredo/moqt-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["moqt", "no-std", "rust", "sans-io"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-03T14:28:50Z"
lastCommitAt: "2026-10-25T08:40:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["voluntas", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8019c3e8ab2081cc67be2edad07acaf001f969f434f25dc0818f6aa592fe9dfc/shiguredo/moqt-rs"
---

# moqt-rs

> [!NOTE]
> A MOQT implementation that runs in the browser is published at [shiguredo/moqt-js](https://github.com/shiguredo/moqt-js).

> [!WARNING]
> This library is under development, and its specification may change significantly.

## About Shiguredo's Open Source Software

We will not respond to PRs or issues that have not been discussed on Discord. Also, Discord is only available in Japanese.

Please read <https://github.com/shiguredo/oss> before use.

## About Shiguredo's Open Source Software

Please read <https://github.com/shiguredo/oss> before use.

## Overview

This is a library for using Media over QUIC Transport (MOQT) in Rust. MOQT is a protocol for publishing and subscribing that runs on top of QUIC and WebTransport.

It can be used when implementing MOQT clients or servers.

## Features

- Implemented as Sans I/O, so it does not handle the network, timers, or threads
- Supports no_std and works with only `alloc`
- Dependencies are limited to `hashbrown` / `noflate` / `nojson` / `base64ct`
- Incremental decoder
  - You can decode messages or objects one at a time while adding data to the receive buffer
- Differential-compression encoder for FETCH responses…
