---
repo: "usewhisk/whisk"
name: "whisk"
description: "Accept USDC from any chain. Open-source SDK for cross-chain stablecoin payments on Circle CCTP V2."
readmeQualityOk: true
url: "https://github.com/usewhisk/whisk"
homepage: "https://usewhisk.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["circle", "cctp-v2", "cross-chain", "payments", "react", "stablecoin", "typescript", "usdc", "web3", "arc"]
stars: 19
forks: 1
openIssues: 27
closedIssues: 27
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-04-30T06:11:36Z"
lastCommitAt: "2026-10-27T09:17:08Z"
lastReleaseAt: "2026-10-23T06:09:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 77
undervaluedScore: 36
maintainers: ["Signor1", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1182cede5e0e22e0b970428ee832e36f3fb44c5e63ed524e42a42671ca8b791c/usewhisk/whisk"
discussionCount: 1
---

# Whisk

**Embeddable React widget for USDC payments and cross-chain bridges. Built directly on CCTP V2.**

Drop-in React component: same-chain sends and cross-ecosystem bridges over CCTP V2 Fast Transfer. EVM, Solana, Stellar, and Starknet wallets. Multichain ENS resolution in the box. Mid-flight recovery if a burn lands but the mint doesn't. Theme with CSS variables, go headless with `useWhisk()`. MIT-licensed.

---

## What is Whisk?

Whisk is a drop-in React component for USDC payments. One React
component, four ecosystems, native CCTP V2 Fast Transfers under the
hood:

- **Send** USDC to any address on the same chain
- **Bridge** USDC across chains and ecosystems via CCTP V2
- Pay through **any wallet**: MetaMask, Phantom, Freighter,
  Argent X, and dozens more
- See a **transparent fee breakdown** before confirming
- Watch the transfer progress through every step (`approve` → `burn` → `fetchAttestation` → `mint`)

Whisk speaks CCTP V2 natively: no third-party SDKs, no adapter
layers to keep up to date. When Circle ships a new CCTP chain, we
add it in one file and everyone gets it.

```tsx
<WhiskProvider config={config}>
  <WhiskSend onSuccess={(r) => console.log("done:",…
