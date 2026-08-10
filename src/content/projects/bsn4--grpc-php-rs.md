---
repo: "BSN4/grpc-php-rs"
name: "grpc-php-rs"
description: "A Rust-based gRPC extension for PHP — drop-in replacement for ext-grpc. ZTS-safe, uses rustls instead of OpenSSL."
readmeQualityOk: true
url: "https://github.com/BSN4/grpc-php-rs"
homepage: "https://packagist.org/packages/bsn4/grpc"
language: "Rust"
languages: ["Rust", "PHP"]
languagePcts: [55, 35]
topics: ["frankenphp", "grpc", "php", "php-extension", "rust", "rustls", "tonic", "zts"]
stars: 41
forks: 5
openIssues: 1
closedIssues: 8
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-03-04T18:22:55Z"
lastCommitAt: "2026-08-10T05:07:25Z"
lastReleaseAt: "2026-03-27T08:48:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 22
maintainers: ["BSN4", "imhmdb", "jumper423"]
openGraphImageUrl: "https://opengraph.githubassets.com/682f3e7905e8c0738994499e5569e9660950147191fb0f2c17adfcd90477ca30/BSN4/grpc-php-rs"
fundingLinks: ["GITHUB:https://github.com/BSN4"]
---

# grpc-php-rs

A Rust-based gRPC extension for PHP — **drop-in replacement** for the official `ext-grpc`.

## Why?

The official C-based `grpc` extension has long-standing issues:

- **ZTS/TSRM crashes** — segfaults under FrankenPHP, Swoole, and other threaded SAPIs
- **OpenSSL/BoringSSL conflicts** — the bundled BoringSSL collides with PHP's OpenSSL, breaking `ext-curl` and other extensions

grpc-php-rs solves both by using a pure Rust stack: [tonic](https://github.com/hyperium/tonic) for gRPC, [rustls](https://github.com/rustls/rustls) for TLS (no OpenSSL), and [ext-php-rs](https://github.com/davidcole1340/ext-php-rs) for PHP bindings.

## Install

### Docker (recommended)

One line in your Dockerfile — no build tools needed:

```dockerfile
FROM php:8.5-cli

COPY --from=ghcr.io/bsn4/grpc-php-rs:latest-php8.5 /usr/local/ /usr/local/
```

For ZTS (FrankenPHP, Swoole, etc.):

```dockerfile
COPY --from=ghcr.io/bsn4/grpc-php-rs:latest-php8.5-zts /usr/local/ /usr/local/
```

For Alpine:

```dockerfile
FROM php:8.5-alpine
COPY --from=ghcr.io/bsn4/grpc-php-rs:latest-php8.5-alpine /usr/local/ /usr/local/
```

Available tags: `latest-php{8.2,8.3,8.4,8.5}` for Debian, append `-alpine` for…
