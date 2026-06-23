---
repo: "bitwarden/sdk-internal"
name: "sdk-internal"
description: "Bitwarden internal SDK."
url: "https://github.com/bitwarden/sdk-internal"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["bitwarden", "rust", "sdk"]
stars: 103
forks: 36
openIssues: 2
closedIssues: 6
watchers: 16
contributors: 84
recentReleases: 1
createdAt: "2024-10-21T16:20:25Z"
lastCommitAt: "2026-06-23T23:29:42Z"
lastReleaseAt: "2026-05-13T19:07:57Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 48
maintainers: ["dani-garcia", "bw-ghapp[bot]", "coroiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f19ccfdd5eef5039b5f467a2b3624d81c205e46464dee2ecf1917a9887358a1/bitwarden/sdk-internal"
---

# Bitwarden Internal SDK

This repository houses the internal Bitwarden SDKs. We also provide a public
[Secrets Manager SDK](https://github.com/bitwarden/sdk-sm).

> [!WARNING]
>
> The password manager SDK is not intended for public use and is not supported by Bitwarden at this
> stage. It is solely intended to centralize the business logic and to provide a single source of
> truth for the internal applications. As the SDK evolves into a more stable and feature complete
> state we will re-evaluate the possibility of publishing stable bindings for the public. **The
> password manager interface is unstable and will change without warning.**

## Crates

The project is structured as a monorepo using cargo workspaces. Some of the more noteworthy crates
are:

- [`bitwarden-api-api`](./crates/bitwarden-api-api): Auto-generated API bindings for the API server.
- [`bitwarden-api-identity`](./crates/bitwarden-api-identity): Auto-generated API bindings for the
  Identity server.
- [`bitwarden-core`](./crates/bitwarden-core): The core functionality consumed by the other crates.
- [`bitwarden-crypto`](./crates/bitwarden-crypto): Crypto library.
-…
