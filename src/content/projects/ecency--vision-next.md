---
repo: "ecency/vision-next"
name: "vision-next"
description: "Ecency.com - Immutable, decentralized, uncensored, rewarding communities built, owned and operated by its users"
url: "https://github.com/ecency/vision-next"
homepage: "https://ecency.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["blockchain", "communities", "ecency", "hive", "social-network", "tokens", "web3", "apt", "atom", "btc"]
stars: 6
forks: 7
openIssues: 12
closedIssues: 128
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2024-08-24T08:04:24Z"
lastCommitAt: "2026-06-29T07:23:59Z"
lastReleaseAt: "2025-10-15T06:39:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 96
maintainers: ["feruzm", "github-actions[bot]", "sentry[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e64fc590d51b5f649b25732d0001a51eca4a48fa900b2e084dbcaa0b79be96ce/ecency/vision-next"
---

# [Ecency vision][ecency_vision] – Ecency Web client

Immutable, decentralized, uncensored, rewarding communities powered by Hive.

Fast, simple and clean source code with Reactjs + Typescript.

## Website

- [Production version][ecency_vision] - master branch
- [Alpha version][ecency_alpha] - development branch

***

## Developers

Feel free to test it out and submit improvements and pull requests.

***

## Data Fetching and Broadcasting

### Data Fetching (Web + SDK)

The web app uses `@ecency/sdk` for data fetching. Requests are built with query option helpers and
sent to `CONFIG.privateApiHost`.

In the web app, `CONFIG.privateApiHost` is set to `""` in `apps/web/src/core/sdk-init.ts`, so
private API calls go to the current origin:

- `POST /private-api/*`
- `POST /search-api/*`

If you run the app against a different backend, update `NEXT_PUBLIC_APP_BASE` or override the SDK
host in `apps/web/src/core/sdk-init.ts`.

### Broadcasting (Web + SDK)

Broadcasting in the SDK is platform-agnostic. The SDK can:

- Sign transactions directly with private keys (built-in ECDSA secp256k1 transaction engine).
- Use a Hivesigner access token.
- Defer to an injected broadcaster for…
