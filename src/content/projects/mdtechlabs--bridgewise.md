---
repo: "MDTechLabs/BridgeWise"
name: "BridgeWise"
description: "BridgeWise is an open-source UI aggregator for multi-chain transfers. It provides developers with embeddable React components to compare fees and speeds across Stellar and EVM bridges. BridgeWise simplifies the cross-chain UX, allowing users to bridge assets without leaving your dApp."
url: "https://github.com/MDTechLabs/BridgeWise"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 12
forks: 103
openIssues: 58
closedIssues: 361
watchers: 0
contributors: 94
recentReleases: 0
createdAt: "2026-01-16T22:38:09Z"
lastCommitAt: "2026-06-26T21:30:51Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 61
maintainers: ["mijinummi", "RUKAYAT-CODER", "yusuftomilola"]
openGraphImageUrl: "https://opengraph.githubassets.com/c03e0fff62b3fbf89c9a276b51a7ecfd05f23c50c9ca7df1f634bcb08500dc3a/MDTechLabs/BridgeWise"
---

</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Transaction History

BridgeWise UI SDK includes a multi-chain transaction history system for Stellar and EVM bridge flows.

Usage example:

```tsx
import { useTransactionHistory, BridgeHistory } from '@bridgewise/ui-components';

function HistoryPanel({ account }: { account: string }) {
  const transactions = useTransactionHistory(account, {
    filter: { status: 'confirmed' },
    sortOrder: 'desc',
  }).transactions;

  return (
    <>
      <BridgeHistory account={account} />
    </>
  );
}
```

You can configure local-only storage (default) or optional backend tracking via `TransactionProvider`.

## Multi-Bridge Liquidity Monitoring

BridgeWise UI SDK includes liquidity monitoring across bridges for route viability checks.

```tsx
import { useBridgeLiquidity } from…
