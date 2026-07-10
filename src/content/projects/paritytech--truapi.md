---
repo: "paritytech/truapi"
name: "truapi"
description: "Interactive reference documentation for the TrUAPI Protocol — explore methods, data types, and usage examples for host-product communication."
readmeQualityOk: true
url: "https://github.com/paritytech/truapi"
homepage: "https://paritytech.github.io/truapi/"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 5
forks: 0
openIssues: 28
closedIssues: 48
watchers: 0
contributors: 196
recentReleases: 4
createdAt: "2026-03-13T02:53:17Z"
lastCommitAt: "2026-07-10T06:56:33Z"
lastReleaseAt: "2026-06-26T16:21:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 62
maintainers: ["pgherveou", "filvecchiato", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c58f077616a680e5d27606bccfb4de1de4efb51370a5df16d830f80d53528e12/paritytech/truapi"
discussionCount: 0
---

# TrUAPI

> The following is a prototype, reference implementation, and proof-of-concept. This open source code is provided for research, experimentation, and developer education only. This code has not been audited, is actively experimental, and may contain bugs, vulnerabilities, or incomplete features. Use at your own risk.

*The protocol that lets product webviews talk to their Polkadot host.*

</div>

TrUAPI (Triangle User-Agent Programming Interface) is the API surface that hosts like the Polkadot Desktop Browser expose to the products that run inside them. One Rust crate defines the contract, a code generator produces a typed TypeScript client, and hosts and products implement against the same shared types.

## Try it

Browse the published Rust API docs at [paritytech.github.io/truapi](https://paritytech.github.io/truapi).

The interactive playground lets you browse every method, edit request payloads, and call or subscribe to them live against a connected host. It also drives an end-to-end **Diagnosis** that produces a per-host pass/fail report ([playground/README.md → Diagnosis](https://github.com/paritytech/truapi/blob/HEAD/playground/README.md#diagnosis)). The explorer…
