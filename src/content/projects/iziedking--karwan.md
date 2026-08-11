---
repo: "Iziedking/Karwan"
name: "Karwan"
description: "Cross-border settlement for SME trade. Milestone escrow, portable reputation, agent matching."
readmeQualityOk: true
url: "https://github.com/Iziedking/Karwan"
homepage: "https://karwan.site"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["agent", "escrow", "paymet", "eip-8004", "eip-8183"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-12T15:09:08Z"
lastCommitAt: "2026-08-10T21:12:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["Iziedking"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5b1b40593021a8c20b62229a57d598fc0266b84d56dc323abc8638788d495a0/Iziedking/Karwan"
---

# Karwan

Karwan is an on-chain settlement and reputation workspace for person-to-person and business trade. Parties agree terms, fund USDC escrow on Arc, and release money as delivery is accepted.

The current build runs on Arc Testnet (chain `5042002`) and supports:

- Buyer and Seller desks for individual trade.
- Buyer Desk and Supply Desk for business trade.
- Direct deals and agent-assisted matching and negotiation.
- Milestone escrow, delivery review, cancellation, and dispute outcomes enforced by contracts.
- Reputation, staking, tier progression, and yield surfaces.
- Activity, wallet, bridge, profile, and business-account workspaces.
- Business registration and verification status workflows.

Karwan is testnet software. Do not use it for real funds or rely on it as a regulated financial, identity, or employment service.

## Start locally

```powershell
npm install
npm run dev --workspace=frontend
```

The frontend is served at `http://localhost:3000`.

For a production-like frontend:

```powershell
npm run build --workspace=frontend
npm run start --workspace=frontend -- -p 3000
```

See…
