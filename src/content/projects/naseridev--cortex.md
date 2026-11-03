---
repo: "naseridev/cortex"
name: "cortex"
description: "A no-nonsense password manager"
readmeQualityOk: true
url: "https://github.com/naseridev/cortex"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["password-manager", "console"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-08-29T11:26:00Z"
lastCommitAt: "2026-11-03T12:47:57Z"
lastReleaseAt: "2025-11-01T14:30:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["naseridev"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6e6be99492b9da3613d8725a753ffe4dd447072ec5e3c49b3c49ea19748e093/naseridev/cortex"
---

# Cortex Password Manager

A hardware-backed password manager implemented in Rust, featuring military-grade encryption, hardware-bound key derivation, and session management for maximum security.

## Overview

Cortex is a command-line password manager that uses ChaCha20-Poly1305 authenticated encryption combined with hardware fingerprinting to create unique encryption keys. The system binds passwords to specific hardware configurations, making unauthorized access significantly more difficult even if the database is compromised.

## Features

### Core Security
- **Hardware-Bound Encryption**: Keys are derived using hardware characteristics (CPU brand, system components)
- **ChaCha20-Poly1305 AEAD**: Military-grade authenticated encryption with authentication tags
- **BLAKE3 Hashing**: High-performance cryptographic hashing for key derivation (600,000 iterations)
- **Secure Memory Handling**: Automatic memory zeroing using the `zeroize` crate
- **Session Management**: Encrypted session caching with configurable timeouts and machine binding

### Password Management
- **Tag-Based Organization**: Organize passwords with multiple tags (up to 20 per entry)
- **Advanced Search**: Search…
