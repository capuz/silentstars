---
repo: "paycrest/noblocks"
name: "noblocks"
description: "A dApp for seamless crypto-to-fiat conversion."
readmeQualityOk: true
url: "https://github.com/paycrest/noblocks"
homepage: "https://noblocks.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["noblocks", "paycrest"]
stars: 24
forks: 53
openIssues: 13
closedIssues: 153
watchers: 3
contributors: 25
recentReleases: 0
createdAt: "2024-09-30T14:20:41Z"
lastCommitAt: "2026-07-28T14:59:37Z"
lastReleaseAt: "2026-04-11T04:33:00Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 76
maintainers: ["Dprof-in-tech", "chibie", "sundayonah"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee28151d58cf2ff9e81308584ebb0498be370874f2709c528d79a08ae454efdf/paycrest/noblocks"
---

# 

> **Additional documentation is available in the [`docs/`](https://github.com/paycrest/noblocks/blob/HEAD/docs/) directory.**

Noblocks simplifies cryptocurrency-to-local currency conversion using a decentralized liquidity protocol. Send crypto once, receive local currency via bank transfer or mobile money—all powered by [Paycrest Protocol](https://paycrest.io/).

Visit the live site at [noblocks.xyz](https://noblocks.xyz).

## Running Locally

### Prerequisites

- Node.js 20+ installed (use `nvm` or version manager)
- pnpm installed globally: `npm install -g pnpm`
- Git

### Setup Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/paycrest/noblocks.git
   cd noblocks
   ```

2. Configure environment variables:

   - Copy the [`.env.example`](https://github.com/paycrest/noblocks/blob/HEAD/.env.example) file to `.env.local`:

     ```bash
     cp .env.example .env.local
     ```

   - Required variables to set:
     - `NEXT_PUBLIC_PRIVY_APP_ID` – Your Privy app ID ([sign up here](https://www.privy.io/))
     - `SUPABASE_URL` and `SUPABASE_SECRET_KEY` – From Supabase Dashboard → Project Settings → API
     - `INTERNAL_API_KEY` – Generate with `openssl…
