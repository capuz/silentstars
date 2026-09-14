---
repo: "agntcy/oidc-gateway"
name: "oidc-gateway"
description: "Policy-based OIDC gateway for Envoy"
readmeQualityOk: true
url: "https://github.com/agntcy/oidc-gateway"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 5
forks: 2
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 27
recentReleases: 3
createdAt: "2026-04-20T10:06:57Z"
lastCommitAt: "2026-09-14T09:12:52Z"
lastReleaseAt: "2026-08-17T12:25:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["agntcy-automation[bot]", "tkircsi", "csirmazbendeguz"]
openGraphImageUrl: "https://opengraph.githubassets.com/672f84a22080b5de4c261bc0b5cfbf5966525e174b9a76bb0063fc80a64378db/agntcy/oidc-gateway"
discussionCount: 5
---

# OIDC Gateway

`oidc-gateway` is an Envoy-based authentication and authorization gateway for
services that need to accept human, machine, CI/CD, and SPIFFE workload
identities through one consistent backend contract.

The gateway validates credentials at the edge, normalizes the caller into a
canonical principal, evaluates route-level authorization with Casbin, and
forwards only a minimal identity header to the upstream service. This lets
backends avoid auth mechanism-specific code and rely on a single principal
format.

## What It Does

- Accepts OIDC bearer JWTs, SPIFFE JWT-SVIDs, and SPIFFE X.509-SVID client
  certificates.
- Prefers verified SPIFFE X.509-SVID identity when present and ignores bearer
  tokens in that case.
- Falls back to bearer JWT authentication when no X.509-SVID identity is
  available.
- Allows configured public paths such as `/healthz` and gRPC reflection without
  credentials.
- Denies non-public requests when no supported credential is present.
- Extracts canonical principals such as `oidc:dex:alice`,
  `oidc:github:repo:org/repo:workflow:deploy.yml:ref:refs/heads/main`, and
  `spiffe:spiffe://example.org/ns/default/sa/backend`.
- Authorizes those…
