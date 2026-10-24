---
repo: "sosheskaz/swys"
name: "swys"
description: "SwYS: a sysadmin’s Swiss Army knife"
readmeQualityOk: true
url: "https://github.com/sosheskaz/swys"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-10-06T17:50:25Z"
lastCommitAt: "2026-10-24T00:15:34Z"
lastReleaseAt: "2026-10-22T04:24:34Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 47
maintainers: ["sosheskaz", "sosheskaz-renovate2[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c74c7bf7a51667e3a0209dbdbabed9a593a1e929969accfab126eb34e743a812/sosheskaz/swys"
---

# SwYS

**A sysadmin's Swiss Army knife.** SwYS brings networking, protocols, keys,
certificates, and cryptography into one Go CLI. Use it to inspect an endpoint,
resolve a name, exchange bytes, or prepare a local test identity.

| Task                                                                | Command family           |
| ------------------------------------------------------------------- | ------------------------ |
| Connect or listen over TCP, TLS, or UDP                             | `swys net`               |
| Resolve DNS, including DNS over TLS or HTTPS                        | `swys dns`               |
| Make HTTP requests or discover and call unary gRPC methods          | `swys http`, `swys grpc` |
| Inspect, create, and verify certificates; work with asymmetric keys | `swys cert`              |
| Encrypt/decrypt OpenPGP or Tink streams; manage AES keys            | `swys aes`               |
| Compute streaming checksums                                         | `swys hash`              |

## Install

[Release archives](https://github.com/sosheskaz/swys/releases/latest) are available
for macOS, Linux, Windows, and FreeBSD on arm64 and amd64. SwYS is pre-1.0;…
