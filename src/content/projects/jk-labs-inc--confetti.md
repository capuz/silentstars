---
repo: "jk-labs-inc/confetti"
name: "confetti"
description: "Vote. Rally. Earn."
url: "https://github.com/jk-labs-inc/confetti"
homepage: "https://confetti.win"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [91]
topics: ["ethereum", "solidity"]
stars: 106
forks: 65
openIssues: 50
closedIssues: 1412
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2022-02-25T20:48:34Z"
lastCommitAt: "2026-06-28T01:45:05Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 54
maintainers: ["renovate[bot]", "nakedfool", "siobh9"]
openGraphImageUrl: "https://opengraph.githubassets.com/5feb1f545f0ef49bb81213cf73db7a5d3562eaa446e706b994fb1d84e3069d55/jk-labs-inc/confetti"
---

# confetti • [](https://github.com/jk-labs-inc/confetti/actions/workflows/forge_tests.yml)

Check out the live site at [confetti.win](https://confetti.win/)!

## Pre-requisites

- `yarn` installed
- `node` version >= `22.0.0`
- Have an Ethereum wallet (like MetaMask for instance)

## Before you start

- Install dependencies with `yarn install`
- Create a `.env` file in `packages/react-app-revamp` (the frontend package) and paste the following values:

Required

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=
NEXT_PUBLIC_QUICKNODE_SLUG=
NEXT_PUBLIC_QUICKNODE_KEY=
NEXT_PUBLIC_APP_ENVIRONMENT=
```

Optional

```
NEXT_PUBLIC_ALCHEMY_KEY=
NEXT_PUBLIC_R2_ACCOUNT_ID=
NEXT_PUBLIC_R2_ACCESS_KEY_ID=
NEXT_PUBLIC_R2_SECRET_ACCESS_KEY=
NEXT_PUBLIC_IMAGE_UPLOAD_BUCKET=
NEXT_PUBLIC_PARA_API_KEY=
NEXT_PUBLIC_BREVO_API_KEY=
```

## Getting Started

First, navigate to the top directory of this repo and run the development server with

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development Notes

### Updating bytecode

Whenever you make a change to smart contracts or really…
