---
repo: "bubon-ik/SingItAI"
name: "SingItAI"
description: "An AI agent that buys things for you, where every payment needs a human to approve it on a second device. ETHOnline 2026 Continuity entry."
readmeQualityOk: true
url: "https://github.com/bubon-ik/SingItAI"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-06T10:17:53Z"
lastCommitAt: "2026-10-25T09:00:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["bubon-ik", "cursoragent", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ec3b59ca9bb60446f62f2ff2f2acbe933ae9d3a687681a97e60da03e996e93f/bubon-ik/SingItAI"
---

# SingIt

**Your agent spends. Your wallet keeps the money.**

SingIt is an AI agent that buys things for you — gift cards, eSIMs, mobile
top-ups, live data, paid AI answers — and pays for them in USDC over
[x402](https://www.x402.org/). You give it a budget instead of your wallet: two
limits and one approval. Your USDC stays in your own wallet on Base or Solana,
and the agent takes only what each purchase needs, inside those limits.

[Website](https://singitai.app) · [Open the app](https://app.singitai.app/app/) · [Documentation](https://github.com/bubon-ik/SingItAI/blob/HEAD/docs/README.md)

## How it works

Three steps, about a minute, then the agent just buys.

```mermaid
flowchart LR
    A["1. Sign in<br/>with your wallet,<br/>or email / Google / Apple"] --> B["2. Set limits<br/>daily and per purchase"]
    B --> C["3. Approve once<br/>one signature in your wallet"]
    C --> D["Ask in your own words<br/>the agent finds and buys<br/>inside your limits"]
    D -.->|"revoke any time:<br/>one more signature"| C
```

1. **Sign in.** Connect the wallet you already use — Rabby, MetaMask, Phantom,
   Solflare, or any mobile wallet through WalletConnect — or sign in with email,…
