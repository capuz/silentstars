---
repo: "medialane-io/medialane-backend"
name: "medialane-backend"
description: "Medialane backend"
readmeQualityOk: true
url: "https://github.com/medialane-io/medialane-backend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["api", "backend", "blockchain", "ethereum", "ip", "launchpad", "marketplace", "medialane", "nft", "services"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-25T20:42:13Z"
lastCommitAt: "2026-10-05T10:47:27Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 50
maintainers: ["salvadorcamino", "medialaneio"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1166992679/03c2193f-2a17-41fb-a410-000de8d22b79"
---

# Medialane Backend

**Starknet Indexer + Marketplace API for Medialane**

The backend service that powers [Medialane.io](https://medialane.io), a programmable IP marketplace on Starknet. It continuously indexes on-chain events, resolves token metadata from IPFS, and exposes a REST API for dApps and SDK consumers.

---

## Architecture

```
Starknet RPC ──► Mirror (Indexer) ──► PostgreSQL ◄── Orchestrator (jobs)
                                           │
                                      Hono REST API ◄── dApps / @medialane/sdk
```

Mirror + Orchestrator run together in the `src/worker.ts` process (Railway service
`medialane-worker`); the REST API runs separately in `src/index.ts` (Railway service
`medialane-backend`) — see **Deployment** below. Locally, run `bun dev` for the API and
`bun run dev:worker` in a second terminal if you need indexing/background jobs too.

### Mirror (Indexer)
Polls the ERC-721 and ERC-1155 marketplace contracts every 6 seconds in batches of 500 blocks. Each tick:
1. Fetches `OrderCreated`, `OrderFulfilled`, `OrderCancelled` (both contracts) and ERC-721 `Transfer` events
2. Parses felt data (including Cairo ByteArray token URIs)
3. Writes to…
