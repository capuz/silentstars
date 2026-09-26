---
repo: "tempoxyz/mpp-specs"
name: "mpp-specs"
description: "Specifications for the Machine Payments Protocol - powered by the \"Payment\" HTTP authentication scheme"
readmeQualityOk: true
url: "https://github.com/tempoxyz/mpp-specs"
homepage: "https://paymentauth.org"
language: "Python"
languages: ["Python"]
languagePcts: [68]
topics: ["http", "machine-payments", "mpp", "payment-authentication", "payments", "protocol"]
stars: 93
forks: 67
openIssues: 14
closedIssues: 20
watchers: 4
contributors: 46
recentReleases: 9
createdAt: "2026-01-05T22:26:21Z"
lastCommitAt: "2026-09-26T08:46:00Z"
lastReleaseAt: "2026-09-09T16:31:20Z"
status: "thriving"
tags: ["release_machine", "fork_magnet"]
healthScore: 88
undervaluedScore: 48
maintainers: ["dependabot[bot]", "brendanjryan", "sds"]
openGraphImageUrl: "https://opengraph.githubassets.com/fefb27ff552a7761ba2067b2adff3a28bae1493cbf029acb13d1a1c1a93eb0fc/tempoxyz/mpp-specs"
---

# Machine Payments Protocol (MPP)

The open protocol for machine-to-machine payments.

* **[IETF Draft](https://datatracker.ietf.org/doc/draft-ryan-httpauth-payment/)**: the core specification
* **[Full Rendered Spec](https://paymentauth.org/)**: all specs including methods and extensions
* **[Learn more](https://mpp.dev)**

## What is MPP?

The [Machine Payments Protocol (MPP)](https://mpp.dev/) is an open standard for machine-to-machine payments, co-authored by [Tempo](https://tempo.xyz/) and [Stripe](https://stripe.com/). Paying for an internet resource, such as an API call, a dataset, or a unit of compute, still typically requires an account, API key, or billing relationship set up in advance. MPP lets any client pay as part of the HTTP exchange using the native `402 Payment Required` status code.

Primary use cases include agentic payments, such as an AI agent paying per API call, machine-to-machine commerce, and usage-based billing without pre-provisioned accounts.

MPP lets businesses offer services to agents, apps, and humans via a standard HTTP control flow. The protocol defines a payment-method agnostic core alongside extensions for specific payment method flows,…
