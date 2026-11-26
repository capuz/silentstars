---
repo: "cashubtc/cdk-payment-processors"
name: "cdk-payment-processors"
description: "Cashu Development Kit - Payment Processors"
readmeQualityOk: true
url: "https://github.com/cashubtc/cdk-payment-processors"
homepage: "https://cashudevkit.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 5
forks: 6
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2026-07-26T18:08:55Z"
lastCommitAt: "2026-11-26T13:01:22Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 73
undervaluedScore: 56
maintainers: ["prusnak", "thesimplekid", "a1denvalu3"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b0bdd9f76deb9a09dfe85f3e9d579126735afd5c59402898cc879d788a8ad86/cashubtc/cdk-payment-processors"
---

# CDK Payment Processors

A collection of self-contained Cargo projects implementing CDK Payment
Processors (`MintPayment` interface over gRPC).

See [CONTRIBUTING.md](https://github.com/cashubtc/cdk-payment-processors/blob/HEAD/CONTRIBUTING.md) for repository-wide development and
contribution guidelines.

## Support tiers

Payment processors are grouped by their level of support.

### Tier 1: maintained by the CDK team

| Processor | Backend |
| --- | --- |
| [Bark](https://github.com/cashubtc/cdk-payment-processors/blob/HEAD/crates/bark/README.md) | Bark wallet |
| [Spark](https://github.com/cashubtc/cdk-payment-processors/blob/HEAD/crates/spark/README.md) | Spark wallet |
| [LDK Server](https://github.com/cashubtc/cdk-payment-processors/blob/HEAD/crates/ldk-server/README.md) | LDK Server node |

### Tier 2: experimental, supported by external contributors only

| Processor | Backend |
| --- | --- |
| [LNbits](https://github.com/cashubtc/cdk-payment-processors/blob/HEAD/crates/lnbits/README.md) | LNbits wallet |

**Treat Tier 2 processors with caution: they are experimental and carry
additional risk.** Carefully review and test them before using them with real
funds.
