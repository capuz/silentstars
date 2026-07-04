---
repo: "Zuplu/postfix-tlspol"
name: "postfix-tlspol"
description: "Lightweight MTA-STS + DANE/TLSA resolver and TLS policy server for Postfix, prioritizing DANE."
readmeQualityOk: true
url: "https://github.com/Zuplu/postfix-tlspol"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["dane", "mta-sts", "policy", "postfix", "socketmap", "tls", "tlsa", "mta-sts-resolver"]
stars: 43
forks: 6
openIssues: 4
closedIssues: 52
watchers: 7
contributors: 2
recentReleases: 0
createdAt: "2024-09-02T18:44:09Z"
lastCommitAt: "2026-07-04T22:20:06Z"
lastReleaseAt: "2025-02-10T19:57:03Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 54
maintainers: ["DragonWork", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9002c87b486a91bd53594b151d87db564223859e2d6ba87d9ed2d8ef50ac4567/Zuplu/postfix-tlspol"
fundingLinks: ["GITHUB:https://github.com/DragonWork", "CUSTOM:https://www.paypal.me/drgnwrk"]
discussionCount: 3
---

# postfix-tlspol

[<img src="https://zuplu.com/mascot.svg" width="140em" align="right" alt="Gopher Mascot" />](#)

A lightweight and highly performant MTA-STS + DANE/TLSA resolver and TLS policy socketmap server for Postfix that complies to the standards and prioritizes DANE where possible.

## New: Prometheus Metrics & Grafana Dashboard

[<img src="https://zuplu.com/dashboard.png" width="140em" align="right" alt="Grafana Dashboard" />](#)

The socketmap listener auto-detects HTTP and exposes `/metrics` on the same Unix/TCP socket, including Go runtime metrics and counters for `dane`, `dane-only`, and `secure` (MTA-STS) results. You can also set `server.metrics-address` for a separate HTTP-only metrics endpoint that does not expose the socketmap protocol.

<br/><br/><br/><br/>

# Logic

- Simultaneously checks for MTA-STS and DANE for a queried domain.

- **For DANE:**
  - Check each MX record (all servers in parallel), if one supports DANE. The DNS responses must be authorized (`ad` flag set).
  - Verify TLSA records for correctness and supported parameters, only then the `dane-only` policy (Mandatory DANE) will be returned.
  - In case of unsupported parameters or malformed TLSA…
