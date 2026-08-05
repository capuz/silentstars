---
repo: "douvy/blob-flow"
name: "blob-flow"
description: "Interactive analytics dashboard for Ethereum EIP-4844 blob data, visualizing transactions, costs, and L2 usage  patterns"
readmeQualityOk: true
url: "https://github.com/douvy/blob-flow"
homepage: "https://blobflow.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2025-04-28T14:53:20Z"
lastCommitAt: "2026-08-05T06:09:43Z"
lastReleaseAt: "2026-08-02T23:13:05Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 91
maintainers: ["a-thomas-22", "dependabot[bot]", "douvy"]
openGraphImageUrl: "https://opengraph.githubassets.com/346da4250f247c09e59b5ec6aae5de109a04bc05e0cb3a8f181f0e861dda393b/douvy/blob-flow"
---

# Blob Flow

An Ethereum EIP-4844 blob data analytics dashboard for visualizing and analyzing blob transactions, costs, and L2 usage patterns.

## Features

- Real-time blob metrics tracking (base fees, pending blobs, cost comparisons)
- Interactive data visualization with time-based filtering (24h, 7d, 30d, All)
- L2 attribution tracking (Arbitrum, Optimism, Base, zkSync)
- Latest blocks table with detailed blob information
- Top blob users analysis and detailed user metrics
- Network selection (Mainnet, Sepolia)
- Responsive design with mobile navigation
- Keyboard shortcuts for search (/)
- Interactive search modal with comprehensive filtering options

## Getting Started

1. Clone the repository
   ```
   git clone https://github.com/yourusername/blob-flow.git
   cd blob-flow
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run the development server
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing

This project uses Vitest with a CI-enforced 90% line coverage minimum for core logic.

- `npm run test` - run tests
- `npm run test-coverage` - run tests with coverage report
- `make test-coverage` - run…
