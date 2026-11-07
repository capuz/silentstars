---
repo: "marykdb/rocksdb-multiplatform"
name: "rocksdb-multiplatform"
description: "Kotlin Multiplatform RocksDB library"
readmeQualityOk: true
url: "https://github.com/marykdb/rocksdb-multiplatform"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 54
forks: 4
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-06-16T08:43:48Z"
lastCommitAt: "2026-11-07T09:30:01Z"
lastReleaseAt: "2025-10-10T12:10:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 44
maintainers: ["jurmous"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f7fc02bf51cd6616b899e2321a670f6b8c210ad197e3b1985ac0ed698632c21/marykdb/rocksdb-multiplatform"
---

# Kotlin Multiplatform bindings for RocksDB

This project provides Kotlin Multiplatform bindings for RocksDB, a high-performance embedded key-value store for
storage of data on disk. It uses the official native RocksDB
implementation and exposes it through a Kotlin API, with prebuilt native binaries for the supported targets. Those
native binaries are built separately in [build-rocksdb](https://github.com/marykdb/build-rocksdb).

The aim of this project is to make RocksDB usable from shared Kotlin code across JVM, Android, and native
Linux/macOS/iOS/tvOS/watchOS/Windows targets. On JVM and Android it bridges the RocksDB Java API. On Kotlin/Native
targets it calls the native RocksDB library through Kotlin/Native interop.

This project is useful for developers who want to build multiplatform applications that require high-performance disk-based
storage. Because the storage engine is still upstream RocksDB, performance should be close to RocksDB itself, apart from
the expected JNI or native interop overhead depending on the target and usage pattern.

## RocksDB API Support

The project supports the full RocksDB Java interfaces on the JVM and Android platforms.
The common Kotlin API…
