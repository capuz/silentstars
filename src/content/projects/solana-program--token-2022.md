---
repo: "solana-program/token-2022"
name: "token-2022"
description: "The SPL Token 2022 program and its clients"
readmeQualityOk: true
url: "https://github.com/solana-program/token-2022"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [54, 45]
stars: 223
forks: 227
openIssues: 21
closedIssues: 82
watchers: 4
contributors: 97
recentReleases: 0
createdAt: "2024-05-09T11:24:35Z"
lastCommitAt: "2026-10-19T09:15:56Z"
lastReleaseAt: "2025-01-22T13:24:08Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 95
undervaluedScore: 47
maintainers: ["dependabot[bot]", "samkim-crypto", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/36a1648e3e770a5a48be881b5f809a9dcda8736a7ee102fb2026998636f7dc04/solana-program/token-2022"
---

# Token 2022

## Programs

The token-2022 repo contains two on-chain programs, the token-2022 program in
`program`, which you can build / test / format using the following commands:

```sh
make build-sbf-program
make test-program
make format-check-program
make clippy-program
```

There's also the ElGamal pubkey registry program in `confidential/elgamal-registry`,
which you can build and test with the following commands:

```sh
make build-sbf-confidential-elgamal-registry
make test-confidential-elgamal-registry
make format-check-confidential-elgamal-registry
make clippy-confidential-elgamal-registry
```

## IDL

The token-2022 program has the following
[IDL](https://github.com/solana-program/token-2022/blob/main/idl.json).

## Generating clients

Once your program's IDL has been generated, you can generate clients for them
using the following commands.

```sh
pnpm install # only need to run this once
make generate-clients
```

## Managing clients

The following clients are available. You may use the following links to learn
more about each client:

- [JS client (auto-generated with Kit)](https://github.com/solana-program/token-2022/blob/HEAD/clients/js)
- [JS-legacy client (using…
