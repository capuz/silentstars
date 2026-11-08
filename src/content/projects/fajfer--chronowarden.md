---
repo: "fajfer/chronowarden"
name: "chronowarden"
description: "Monitor and track expiring secrets across your Vault infrastructure"
readmeQualityOk: true
url: "https://github.com/fajfer/chronowarden"
homepage: "https://frog03-20659.wykr.es/"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["monitoring", "observability", "openbao", "vault", "credentials", "secrets"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 38
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-02-20T01:09:45Z"
lastCommitAt: "2026-11-08T14:14:30Z"
lastReleaseAt: "2026-06-20T14:51:12Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 82
maintainers: ["fajfer", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/66bad1aaca9570e739d0bf8c13514607ab0d297f3d297b4c63fcf652c0cce8ee/fajfer/chronowarden"
---

# Chronowarden

**Monitor and track expiring secrets across your Vault infrastructure**

Chronowarden is a secret lifecycle observability service that syncs with your secret providers, tracking TTLs and rotation requirements through custom metadata. It provides a web UI and REST API to visualize secret health and alert on expiring credentials.

This is very early work being built with focus on compliance for financial institutions ([PCI DSS 4.0](https://www.pcisecuritystandards.org/document_library/), [DORA](https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en)) and best practices ([NIST SP 800-63B-4](https://csrc.nist.gov/pubs/sp/800/63/b/4/final)) regarding credential rotation.

> [!IMPORTANT]
> **Chronowarden needs an `auth` section in `config.yaml` to start** (since 0.9): log in through any OIDC provider
> (`mode: oidc`) or an authenticating reverse proxy such as oauth2-proxy (`mode: proxy`); pipelines use API tokens.
> `mode: none` turns login off and makes everyone an admin: use it only on a trusted network. See the
> [authentication guide](https://github.com/fajfer/chronowarden/blob/HEAD/docs/guides/authentication.md). Set `allowed_hosts` to the names you…
