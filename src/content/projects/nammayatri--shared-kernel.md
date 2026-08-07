---
repo: "nammayatri/shared-kernel"
name: "shared-kernel"
description: "See https://github.com/nammayatri/nammayatri"
readmeQualityOk: true
url: "https://github.com/nammayatri/shared-kernel"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [100]
stars: 23
forks: 11
openIssues: 21
closedIssues: 8
watchers: 9
contributors: 96
recentReleases: 0
createdAt: "2023-02-13T13:22:05Z"
lastCommitAt: "2026-08-07T05:16:17Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 55
maintainers: ["prakharritik", "hkmangla", "Harshit12c"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1e3e27f4e532630edb9a9f6d848f73f81992237168c4c998cc27a0225be44fb/nammayatri/shared-kernel"
---

# Shared Kernel Library

This is the core shared library component of the [Namma Yatri](https://github.com/nammayatri/nammayatri) project. It provides essential functionality, types, and interfaces that are used across various services in the Namma Yatri ecosystem.

## Core Purpose

The shared kernel library serves as the foundation for the Namma Yatri platform, providing:

1. **Database Layer** (`src/Kernel/Beam/`)
   - PostgreSQL connection management
   - Redis integration
   - Beam ORM utilities and types
   - Common database functions and queries

2. **External Service Integrations** (`src/Kernel/External/`)
   - Payment processing
   - Communication services (SMS, WhatsApp, Call)
   - Maps and location services
   - Verification services (Aadhaar, Background checks)
   - Multi-modal transportation integration
   - Incident reporting
   - Notification systems

3. **Core Utilities** (`src/Kernel/Utils/`)
   - Common data types and interfaces
   - Error handling and logging
   - Configuration management
   - Encryption utilities
   - Serviceability checks

4. **Internal APIs** (`src/Kernel/InternalAPI/`)
   - Shared API types and interfaces
   -…
