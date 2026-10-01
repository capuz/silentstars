---
repo: "tempoxyz/mpp-rs"
name: "mpp-rs"
description: "Rust SDK for the Machine Payments Protocol"
readmeQualityOk: true
url: "https://github.com/tempoxyz/mpp-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["machine-payments", "machine-payments-protocol", "mpp", "payments", "tempo", "rust", "sdk"]
stars: 91
forks: 40
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 45
recentReleases: 0
createdAt: "2026-01-24T20:14:47Z"
lastCommitAt: "2026-10-01T10:24:30Z"
lastReleaseAt: "2026-04-08T23:25:44Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 42
maintainers: ["mattsse", "sds", "brendanjryan"]
openGraphImageUrl: "https://opengraph.githubassets.com/e74e804e5e5d7681d103448b2e242278f70f2d6988d6294c6a3452e71d974acc/tempoxyz/mpp-rs"
---

<br>
<br>

    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tempoxyz/mpp/refs/heads/main/public/lockup-light.svg">
    </picture>
  </a>
</p>

<br>
<br>

# mpp

Rust SDK for the [**Machine Payments Protocol**](https://mpp.dev)

[MPP](https://mpp.dev/) (the Machine Payments Protocol) is an open standard for machine-to-machine payments, co-authored by [Tempo](https://tempo.xyz/) and [Stripe](https://stripe.com/). Paying for a resource over HTTP typically requires API keys, billing accounts, or checkout flows set up ahead of time. MPP lets any client, including an AI agent, an app, or a person, pay as part of the HTTP exchange using the native [`402 Payment Required` response](https://mpp.dev/protocol/http-402).

This crate is the [Rust SDK](https://mpp.dev/sdk/rust) for MPP. It supports developers building either side of a paid HTTP exchange: servers that charge for access with Tempo or Stripe, and clients that automatically handle 402 payment challenges. Typical scenarios include gating an API behind per-call payments or building an agent that pays for tools or data as it works. See the…
