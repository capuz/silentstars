---
repo: "oriolrius/pki-manager-web"
name: "pki-manager-web"
description: "Web-based PKI Manager - Secure X.509 certificate lifecycle management with Cosmian KMS integration"
readmeQualityOk: true
url: "https://github.com/oriolrius/pki-manager-web"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["certificate-authority", "certificate-management", "cosmian", "fastify", "kms", "pki", "react", "security", "trpc", "typescript"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-21T16:12:06Z"
lastCommitAt: "2026-07-07T06:37:33Z"
lastReleaseAt: "2026-02-06T09:50:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["oriolrius"]
openGraphImageUrl: "https://opengraph.githubassets.com/546f61b91b91f644cb3c9b9996fe75519e8c104d2e98cf2705c88b34cb8f2498/oriolrius/pki-manager-web"
---

# PKI Manager

> A modern, web-based Public Key Infrastructure management application for securely generating, issuing, managing, and revoking X.509 digital certificates.

## Overview

PKI Manager provides complete control over your Private Key Infrastructure without relying on external certificate authorities. Perfect for enterprises, home labs, and development environments that demand full control over their security infrastructure.

### Key Highlights

- **Self-Hosted PKI**: Create and manage your own root Certificate Authorities
- **Multi-Type Certificates**: Server (TLS/SSL), Client Auth, S/MIME Email, Code Signing
- **Secure Key Management**: Integration with Cosmian KMS — private keys never touch disk
- **Kubernetes-Native**: cert-manager external issuer that auto-signs & auto-approves cluster CSRs (one cluster token = one CA)
- **CRL Revocation**: CA-signed Certificate Revocation Lists served over HTTP, with CRL Distribution Points (CDP) embedded in issued certificates
- **SSH Certificate Authority**: Dual User+Host CA with principals, KRL revocation, and per-host user access blocks pushed to a host agent
- **Dual API**: Typed tRPC for the SPA *plus* a REST/OpenAPI surface…
