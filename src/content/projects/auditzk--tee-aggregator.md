---
repo: "AuditZK/tee-aggregator"
name: "tee-aggregator"
description: "Secure performance aggregator running in AMD SEV-SNP enclave. Aggregates portfolio metrics from multiple exchanges while maintaining zero-knowledge privacy guarantees through hardware-encrypted memory and cryptographic attestation."
readmeQualityOk: true
url: "https://github.com/AuditZK/tee-aggregator"
homepage: "https://www.auditzk.com/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-29T15:07:51Z"
lastCommitAt: "2026-08-28T14:32:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 54
maintainers: ["Jimmy7892"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cc834670bf74592065c78267f4381c1ea039541ab34503997f64dde439f6f1c/AuditZK/tee-aggregator"
---

# Track Record Enclave Worker (Go)

**Trusted Computing Base for Confidential Trading Data Aggregation**

## Overview

This repository contains the **Go implementation** of the Track Record platform's Enclave Worker — the **Trusted Computing Base (TCB)** responsible for confidential trading data aggregation within an AMD SEV-SNP hardware-isolated enclave.

This is a full rewrite of the [TypeScript enclave](https://github.com/AuditZK/zero-knowledge-aggregator) in Go, with native exchange connectors replacing CCXT, lower memory footprint, and improved performance.

**This repository serves two purposes:**

1. **Primary Development Repository**: Active development of the Go Enclave Worker.
2. **Public Audit & Verification**: Published for independent security audits and reproducible build verification.

## Table of Contents

- [Security Model](#security-model)
- [Architecture](#architecture)
- [Trusted Computing Base](#trusted-computing-base)
- [Threat Model](#threat-model)
- [Audit Process](#audit-process)
- [Reproducible Builds](#reproducible-builds)
- [API Specification](#api-specification)

## Security Model

### Trust Assumptions

1. **Hardware Root of Trust**: AMD SEV-SNP…
