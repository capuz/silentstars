---
repo: "noraj/tls-map"
name: "tls-map"
description: "CLI & library for TLS cipher suites manipulation"
readmeQualityOk: true
url: "https://github.com/noraj/tls-map"
homepage: "https://noraj.github.io/tls-map/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["tls", "ssl", "openssl", "mapping", "iana", "nss", "gnutls", "cipher-algorithms", "cli", "pentest"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2021-05-26T13:04:27Z"
lastCommitAt: "2026-10-26T21:00:04Z"
lastReleaseAt: "2026-10-23T10:44:21Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 68
maintainers: ["dependabot[bot]", "noraj"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/371036452/8a3f2a17-b150-4541-9d9a-3a850d809a1a"
fundingLinks: ["GITHUB:https://github.com/noraj", "ISSUEHUNT:https://issuehunt.io/r/noraj", "KO_FI:https://ko-fi.com/noraj", "LIBERAPAY:https://liberapay.com/noraj"]
discussionCount: 0
---

# TLS map

> CLI & library for mapping TLS cipher algorithm names: IANA, OpenSSL, GnuTLS, NSS;
> get information and vulnerabilities about cipher suites;
> extract cipher suites from external tools: SSLyze, sslscan2, testssl.sh, ssllabs-scan, tlsx

**CLI**

**Library**

## Features

- CLI and library
- Search feature: hexadecimal codepoint and major TLS libraries cipher algorithm name: IANA, OpenSSL, GnuTLS, NSS
  - get extra info about a cipher
- Export to files: markdown table, expanded JSON, minified JSON, Ruby marshalized hash
- Extract ciphers from external tools file output (SSLyze, sslscan2, testssl.sh, ssllabs-scan, tlsx)
- Bulk search (file with one cipher per line)

## Installation

```plaintext
$ gem install tls-map
```

Check the [installation](https://noraj.github.io/tls-map/#/pages/install) page on the documentation to discover more methods.

## Documentation

Homepage / Documentation: https://noraj.github.io/tls-map/

## Author

Made by Alexandre ZANNI ([@noraj](https://pwn.by/noraj/)). Forked from [sec-it/tls-map](https://github.com/sec-it/tls-map).
