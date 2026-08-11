---
repo: "lokesh-sg/cert-automator"
name: "cert-automator"
description: "The Centralized \"Vault\" that Solves the Pain of Certificate Renewals."
readmeQualityOk: true
url: "https://github.com/lokesh-sg/cert-automator"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [50, 45]
stars: 20
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-01-07T04:39:06Z"
lastCommitAt: "2026-08-11T04:49:39Z"
lastReleaseAt: "2026-08-11T04:02:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 17
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/914e0f4d1d002fd44f2cecc456cdb4ae74e1c86cc53cc00136ea2a243ae5cc8c/lokesh-sg/cert-automator"
---

# CertAutomator - v1.2.1
> Enterprise-grade Certificate Management Solution

**The Centralized Vault for Automated SSL Certificate Management.**

> [!NOTE]
> **Project Status**: This is a free, open-source hobby project designed to eliminate the manual toil of managing certificates across homelabs and small networks.

---

## What is CertAutomator?
**CertAutomator** is a secure, self-hosted web application that acts as a single source of truth for your SSL certificates. Instead of manually logging into Proxmox, TrueNAS, Portainer, and OPNsense to update expiring certificates, you upload them **once** to CertAutomator. It then automatically handles the distribution, format conversion (PEM/PFX), and service restarts for you.

## Key Features

### Secure by Design
- **Dual-Envelope Encryption**: Private keys and vault configurations are encrypted with a 256-bit Master Vault Key (`MVK`), wrapped in dual password and recovery envelopes.
- **Zero-Data-Loss Recovery**: Reset forgotten Master Passwords using your 32-character Emergency Recovery Key without wiping target service configs or SSL private keys.
- **Hardened Execution**: Runs as non-root (UID 1000), includes global CSRF…
