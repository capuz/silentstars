---
repo: "voidvec/fulla"
name: "fulla"
description: "High-performance open-source IAM core in C++17: production-grade OAuth2/OIDC authorization server + embeddable SDK. Formerly authforge."
readmeQualityOk: true
url: "https://github.com/voidvec/fulla"
homepage: "https://fulla.dev"
language: "C++"
languages: ["C++"]
languagePcts: [65]
topics: ["cpp", "drogon", "oauth2", "openid-connect", "self-hosted", "oidc", "authentication", "authorization-server", "cpp17", "iam"]
stars: 6
forks: 3
openIssues: 4
closedIssues: 114
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-01-16T04:22:21Z"
lastCommitAt: "2026-11-12T05:20:06Z"
lastReleaseAt: "2026-10-16T10:32:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 88
maintainers: ["voidvec"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdfc1c4c82286227167f7a8f8e29d8b819fd231ca3a427dfd88c681493cd0667/voidvec/fulla"
discussionCount: 0
---

# Fulla — High-Performance Open-Source IAM Core (C++17)

[中文文档](https://github.com/voidvec/fulla/blob/HEAD/README.zh-CN.md)

Fulla is a high-performance **open-source identity & access management (IAM) core** built in
C++17: a production-grade OAuth2.0/OIDC authorization server (RFC 6749/7662/7009/8414) with
full support for user authentication, MFA, WebAuthn, RBAC and multi-tenancy — usable as a
**ready-to-run product** (Docker/Helm) or as an **embeddable C++ SDK**
(`find_package(fulla-*)`). Includes admin console, user-facing frontend, and a comprehensive
test suite.

> **Roadmap — open core:** the open-source core is the base for optional commercial
> enhancement modules (enterprise integration & support offerings, planned). Everything
> needed to run a complete IAM is and stays open source under AGPL-3.0 — see
> [Commercial Licensing](https://fulla.dev/commercial) for the enterprise roadmap and
> our open-core commitments.

---

## Capability Map

What the product does, by domain. Deep-dive links go to the guides under `docs/`.

| Domain | Capabilities | Deep dive |
|--------|--------------|-----------|
| **Authentication** | Login/registration, email verification, password…
