---
repo: "woodser/monero-java"
name: "monero-java"
description: "Java library for using Monero"
readmeQualityOk: true
url: "https://github.com/woodser/monero-java"
homepage: "https://woodser.github.io/monero-java/javadocs/"
language: "Java"
languages: ["Java"]
languagePcts: [92]
topics: ["monero", "java", "jni", "rpc"]
stars: 112
forks: 45
openIssues: 5
closedIssues: 36
watchers: 8
contributors: 9
recentReleases: 0
createdAt: "2017-04-11T04:55:17Z"
lastCommitAt: "2026-07-04T23:14:38Z"
lastReleaseAt: "2019-12-20T16:28:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 81
undervaluedScore: 40
maintainers: ["woodser"]
openGraphImageUrl: "https://opengraph.githubassets.com/98140a2ca250494924ce571d7c4ef940ed261d416b53b7e9e6e002d46d45b317/woodser/monero-java"
---

# Monero Java Library

A Java library for creating Monero applications using RPC or JNI bindings to [monero v0.18.5.0 'Fluorine Fermi'](https://github.com/monero-project/monero/tree/v0.18.5.0).

* Supports wallet and daemon RPC clients.
* Supports client-side wallets using JNI bindings.
* Supports multisig, view-only, and offline wallets.
* Wallet types are interchangeable by conforming to a [common interface](https://woodser.github.io/monero-java/javadocs/monero/wallet/MoneroWallet.html).
* Uses a clearly defined [data model and API specification](https://woodser.github.io/monero-java/monero-spec.pdf) intended to be intuitive and robust.
* Query wallet transactions, transfers, and outputs by their properties.
* Fetch and process binary data from the daemon (e.g. raw blocks).
* Receive notifications when blocks are added to the chain or when wallets sync, send, or receive.
* Over 300 passing JUnit tests.

## Architecture

	<i>Build Java applications using RPC or JNI bindings to <a href="https://github.com/monero-project/monero">monero-project/monero</a>.  Wallet implementations are interchangeable by conforming to a common interface, <a…
