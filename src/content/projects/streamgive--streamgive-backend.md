---
repo: "StreamGive/streamgive-backend"
name: "streamgive-backend"
description: "REST API and Stellar event indexer for StreamGive. Built with Fastify, Prisma and Postgres."
readmeQualityOk: true
url: "https://github.com/StreamGive/streamgive-backend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 6
forks: 68
openIssues: 36
closedIssues: 114
watchers: 0
contributors: 39
recentReleases: 0
createdAt: "2026-09-05T09:26:00Z"
lastCommitAt: "2026-10-03T22:03:37Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 67
maintainers: ["Ashborne267", "eischideraa-unn", "Yinklekay"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8ba6b8de8df258bccba84e583c5bcd81d8f4277e19205c23b25e60accd91b65/StreamGive/streamgive-backend"
---

# StreamGive — Backend

Indexer and API for StreamGive, a recurring/streaming donation platform for
verified NGOs on Stellar. Watches the on-chain contracts for events and
serves the data that powers the frontend.

## Stack

- TypeScript, Node.js
- Fastify (API server)
- PostgreSQL

## API

Every HTTP API route is mounted under `/v1`, including health and admin routes.
For example: `GET /v1/health`, `GET /v1/ngos`, `GET /v1/streams`, and
`GET /v1/indexer/status`.

## NGO Verification Model

An NGO's verified status consists of two distinct steps kept deliberately separate:

1. **Off-Chain Application Review (`NgoApplication.status`)**: An NGO submits an off-chain application containing organization details and verification documents. Admins review and update the application status (e.g., `APPROVED` or `REJECTED`) within the database.
2. **On-Chain Contract Approval (`Ngo.verified`)**: Once an application is reviewed off-chain, an admin executes an on-chain transaction (`approve_ngo`) to grant the NGO verified status on the Stellar smart contract. The indexer listens for on-chain events (`ngo_approved` / `ngo_revoked`) and updates the `Ngo.verified` field accordingly.

Keeping…
