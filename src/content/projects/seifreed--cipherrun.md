---
repo: "seifreed/CipherRun"
name: "CipherRun"
description: "A Fast, Modular, and Scalable TLS/SSL Security Scanner Written in Rust"
url: "https://github.com/seifreed/CipherRun"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-14T21:03:23Z"
lastCommitAt: "2026-06-26T23:42:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["seifreed"]
openGraphImageUrl: "https://opengraph.githubassets.com/8045a4a2c1aa90a87226a5a46395548ffc8927efb58538ddd4db29179ce3bed9/seifreed/CipherRun"
---

</p>

<h1 align="center">CipherRun</h1>

  <strong>Fast, modular TLS/SSL security scanner and compliance engine built in Rust</strong>
</p>

</p>

</p>

---

## Overview

**CipherRun** is a comprehensive TLS/SSL security scanner written in Rust. It combines protocol and cipher analysis, vulnerability testing, compliance checks, and certificate transparency monitoring in a single high-performance CLI and API-ready engine.

### Key Features

| Feature | Description |
|---------|-------------|
| **Protocol Coverage** | SSLv2 to TLS 1.3 with full handshake analysis |
| **Vulnerability Tests** | 18+ major TLS CVEs (Heartbleed, ROBOT, POODLE, LOGJAM, etc.) |
| **Compliance Engine** | PCI-DSS, NIST, HIPAA, SOC 2, Mozilla, GDPR |
| **Fingerprinting** | JA3, JA3S, JARM with signature databases |
| **Certificate Analysis** | Chain validation, revocation, EV detection |
| **Monitoring** | 24/7 certificate monitoring with alerts |
| **CT Logs** | Real-time CT log streaming + Bloom deduplication |
| **Database Support** | PostgreSQL/SQLite analytics and history |

---

## Installation

### From Source

```bash
git clone https://github.com/seifreed/cipherrun.git
cd cipherrun
cargo build…
