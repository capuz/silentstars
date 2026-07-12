---
repo: "elliotBraem/better-near-auth"
name: "better-near-auth"
description: "Sign in with NEAR (SIWN) plugin for Better Auth"
readmeQualityOk: true
url: "https://github.com/elliotBraem/better-near-auth"
homepage: "https://auth.everything.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["auth", "better-auth", "near", "web3"]
stars: 10
forks: 5
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-08-16T06:26:40Z"
lastCommitAt: "2026-07-12T06:17:27Z"
lastReleaseAt: "2025-10-29T21:01:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 78
maintainers: ["elliotBraem", "github-actions[bot]", "itexpert120"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e8b263fde59d928858b2b4d311d841a424060ea5053f59300b5571872d94b75/elliotBraem/better-near-auth"
---

<h1 style="font-size: 2.5rem; font-weight: bold;">better-near-auth</h1>

  <p>
    <strong>Sign in with NEAR + gasless relay plugin for Better Auth</strong>
  </p>

</div>

This [Better Auth](https://better-auth.com) plugin enables secure authentication via NEAR wallets following [NEP-413](https://github.com/near/NEPs/blob/master/neps/nep-0413.md) and adds a built-in [NEP-366](https://github.com/near/NEPs/blob/master/neps/nep-0366.md) delegate action relayer so authenticated users can call on-chain contracts gaslessly. It uses [near-kit](https://github.com/elliotBraem/near-kit) for RPC queries and transaction broadcasting, and [@hot-labs/near-connect](https://github.com/azbang/near-connect) for wallet connection.

## Features

- **SIWN authentication** — wallet-based sign-in with automatic single-step/two-step flow detection
- **Gasless relay** — server relays signed delegate actions on-chain, paying gas from a relayer account
- **Ephemeral relayer keypair** — auto-generated ED25519 keypair on first startup, private key encrypted with AES-256-GCM in the database, persists across restarts
- **Profile integration** — near-kit profile lookup primary, NEAR Social fallback

##…
