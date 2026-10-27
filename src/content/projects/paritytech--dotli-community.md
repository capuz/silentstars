---
repo: "paritytech/dotli-community"
name: "dotli-community"
description: "A decentralized web browser that runs in your browser. Visit any Polkadot application with fully trustless, client-side resolution. "
readmeQualityOk: true
url: "https://github.com/paritytech/dotli-community"
homepage: "https://paseo.li"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["blockchain", "decentralized-applications", "decentralized-web", "dotli", "dotns", "light-client", "p2p", "polkadot", "polkadot-sdk", "smoldot"]
stars: 6
forks: 4
openIssues: 20
closedIssues: 66
watchers: 1
contributors: 39
recentReleases: 0
createdAt: "2026-06-04T16:53:37Z"
lastCommitAt: "2026-10-27T12:40:08Z"
lastReleaseAt: "2026-07-28T16:46:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 64
maintainers: ["johnthecat", "replghost", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ac7260f2e6a2c47928b571ccc069acf4532b443b14f5d3526dc062d5d91c287/paritytech/dotli-community"
---

> [!WARNING] The following is a prototype, reference implementation, and proof-of-concept. This open source code is
> provided for research, experimentation, and developer education only. This code has not been audited, is actively
> experimental, and may contain bugs, vulnerabilities, or incomplete features. Use at your own risk.

# dotli

A decentralized web browser that runs in your browser. Visit any Polkadot application with fully trustless, client-side
resolution, with no servers in the loop.

[Website](https://paseo.li) | [Report an Issue](https://github.com/paritytech/dotli-community/issues)

---

## How to access apps

dotli resolves apps by **subdomain**. The `.dot` name is the host:

| Format        | Example                            |
| ------------- | ---------------------------------- |
| **Subdomain** | `https://host-playground.paseo.li` |

### Landing page

When visiting the root (`paseo.li`), a landing page is shown with:

- A **search bar** where users type an app name (a `.dot` suffix label is shown next to the input) and navigate
- **Recently visited** apps shown as pill-shaped shortcuts (persisted in localStorage)
- A **login** button in the top-right corner…
