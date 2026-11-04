---
repo: "bolivian-peru/proxy-reseller-kit"
name: "proxy-reseller-kit"
description: "Open-source reseller toolkit for the Proxies.sx Pool Gateway — SDK, drop-in React component, and Next.js storefront template"
readmeQualityOk: true
url: "https://github.com/bolivian-peru/proxy-reseller-kit"
homepage: "https://agents.proxies.sx/build/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["mobile-proxy", "nextjs", "proxy", "reseller", "stripe", "typescript", "ai-agents", "claude", "mit-license", "proxies-sx"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-04-24T18:56:45Z"
lastCommitAt: "2026-11-04T11:26:03Z"
lastReleaseAt: "2026-11-03T21:22:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 20
maintainers: ["bolivian-peru", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e048cb89488e946998107c25894fbe80fe9a7a7f462537dc46b82b8daa0408cb/bolivian-peru/proxy-reseller-kit"
---

# proxy-reseller-kit

**Explicitly choose `pool`; do not rely on the SDK mobile-pool default.**
URL builders default to `mbl`; choose `peer` for the shared SDK network,
`peer` plus `ipType: 'residential'` for residential-only routing, or `any` only
when mixed pools are intended. A `qualityTier: 'safe'` PAK forces `mbl`.
Keep discovery and generated connections on the same chosen pool.
See [pool selection](https://github.com/bolivian-peru/proxy-reseller-kit/blob/HEAD/docs/USERNAME-DSL.md#choose-the-pool-explicitly) before copying examples.

**Release status:** exact binding reads, conditional release, durable operation lookup
and conditional resume below are candidates until the [release table](https://github.com/bolivian-peru/proxy-reseller-kit/blob/HEAD/docs/SHARED-POOL-CONTRACT.md)
confirms deployment and package publication. Client code alone does not release
a provider contract.

**Open-source reseller toolkit for the Proxies.sx Pool Gateway.**
**Ship a branded mobile-proxy business in an afternoon — or embed mobile proxies into any app, in any language.**

[**Skill (AI agents)**](#for-ai-agents-and-code-builders) · [**Pick a path**](#pick-an-integration-path) ·…
