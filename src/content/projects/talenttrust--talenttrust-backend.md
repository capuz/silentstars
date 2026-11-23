---
repo: "Talenttrust/Talenttrust-Backend"
name: "Talenttrust-Backend"
description: "TalentTrust REST API (Express on Vercel) for milestone escrow on Stellar - Swagger docs at /docs"
readmeQualityOk: true
url: "https://github.com/Talenttrust/Talenttrust-Backend"
homepage: "https://talenttrust-backend.vercel.app/docs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 417
openIssues: 41
closedIssues: 930
watchers: 0
contributors: 327
recentReleases: 0
createdAt: "2026-03-15T04:09:01Z"
lastCommitAt: "2026-11-23T10:27:10Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 81
maintainers: ["mikewheeleer", "Real-Ola", "Peolite1"]
openGraphImageUrl: "https://opengraph.githubassets.com/83d4f05f3205c899e229aa6e026b81e16cc1fb836ce44dad1cac8269329759c2/Talenttrust/Talenttrust-Backend"
---

# TalentTrust Backend

## Live

- Website: https://talenttrust-frontend.vercel.app
- Docs: https://talenttrust-frontend.vercel.app/docs
- API: https://talenttrust-backend.vercel.app
- API docs (Swagger UI): https://talenttrust-backend.vercel.app/docs
- Contract (Stellar testnet): [`CCZMIVUBMG5SBC47SDTC32RWLBJ2HW2DCFVWJEOKCH2IFJBZGBKTXK5W`](https://stellar.expert/explorer/testnet/contract/CCZMIVUBMG5SBC47SDTC32RWLBJ2HW2DCFVWJEOKCH2IFJBZGBKTXK5W)

Express + TypeScript API for TalentTrust, a milestone-based freelancer escrow protocol on Stellar.
The API mirrors the state machine of the Soroban escrow contract
([Talenttrust-Contracts](https://github.com/Talenttrust/Talenttrust-Contracts)) so clients and
freelancers can create engagements, fund escrow, release milestones, raise disputes and build reputation.

Storage is in-memory (seeded with demo data), so no database is required. On serverless hosting the
data is per-instance and resets on redeploy.
