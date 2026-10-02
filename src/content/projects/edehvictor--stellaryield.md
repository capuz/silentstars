---
repo: "edehvictor/StellarYield"
name: "StellarYield"
description: "AI-powered DeFi aggregator and automated yield-routing vault built on the Stellar network with Soroban smart contracts."
readmeQualityOk: true
url: "https://github.com/edehvictor/StellarYield"
homepage: "https://stellaryield.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 5
forks: 199
openIssues: 21
closedIssues: 902
watchers: 0
contributors: 185
recentReleases: 0
createdAt: "2026-03-16T21:50:28Z"
lastCommitAt: "2026-10-02T10:00:10Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 78
maintainers: ["edehvictor", "EmmanuelOchaje", "Junman140"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ec2d4fdc1d2c383bf035ddc6ac2df10bc32a4de782dbbdd8f470e53995bc05c/edehvictor/StellarYield"
---

# StellarYield

> Notice: the original Vercel domain submitted during Drips Wave review was claimed by a squatter. The current live deployment is [stellaryield.vercel.app](https://stellaryield.vercel.app).

StellarYield is a Stellar-native DeFi dashboard and automated vault project. The repository includes a Vite frontend in `client/`, an Express backend in `server/`, and Soroban smart contracts in `contracts/`.

## Repository Layout

- `client/` - React + Vite frontend
- `server/` - Node.js + Express backend
- `contracts/` - Soroban smart contracts and Rust workspace
- `docs/` - contributor and release documentation
- `.github/workflows/ci.yml` - pull request validation workflow

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- Rust stable toolchain
- Soroban CLI for contract work

### Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_NAME/StellarYield.git
cd StellarYield
```

### Setup Doctor

After cloning (and again any time something feels off before running tests), run the setup doctor to check your toolchain and workspace in one pass:

```bash
node scripts/setup-doctor.js
# or
npm run setup:doctor
```

It checks Node.js, npm, Rust,…
