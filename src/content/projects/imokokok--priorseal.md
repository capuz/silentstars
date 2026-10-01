---
repo: "imokokok/PriorSeal"
name: "PriorSeal"
description: "Explicit authorization linked to observed EVM execution through portable, independently verifiable evidence."
readmeQualityOk: true
url: "https://github.com/imokokok/PriorSeal"
homepage: "https://priorseal.xyz"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [72, 24]
topics: ["ai-agents", "authorization", "eip-712", "evm", "execution-evidence", "typescript", "web3"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-09-04T05:46:11Z"
lastCommitAt: "2026-10-01T10:23:58Z"
lastReleaseAt: "2026-09-21T10:03:33Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 61
maintainers: ["imokokok"]
openGraphImageUrl: "https://opengraph.githubassets.com/567d8befb6b30dcb6f60fc3d78430b18fa52cd8e7bcdeba1afaf6a95f940f618/imokokok/PriorSeal"
discussionCount: 2
---

# PriorSeal

**Connect explicit authorization to observed EVM execution with independently verifiable evidence.**

[Live console](https://priorseal.xyz/app) · [TypeScript SDK](https://www.npmjs.com/package/priorseal-sdk) · [API specification](https://priorseal.xyz/openapi/v1.json) · [Pilot collaboration](https://github.com/imokokok/PriorSeal/blob/HEAD/COLLABORATING.md)

An agent can propose and execute a transaction, but a transaction hash alone cannot show **who authorized the action, what they approved, or whether the observed execution matched it**. PriorSeal connects a principal-signed, time-bounded authorization to an identified EVM execution in a portable receipt that another party can verify independently. Its core is the relationship between **what was authorized before action** and **what was observed afterward**.

```text
Bounded intent → Principal signature → Acceptance + time evidence
               → EVM observation → Signed receipt → Independent review
```

PriorSeal is for teams building EVM agents, treasury automation, wallets, and transaction infrastructure. It sits beside the system that constructs, signs, and submits transactions; it does not hold wallet keys or…
