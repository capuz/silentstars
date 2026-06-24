---
repo: "GhostTypes/ff-5mp-api-ts"
name: "ff-5mp-api-ts"
description: "Cross Platform FlashForge API in TypeScript"
url: "https://github.com/GhostTypes/ff-5mp-api-ts"
homepage: "https://flashforge.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 6
forks: 4
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-04-06T23:30:53Z"
lastCommitAt: "2026-06-24T00:19:55Z"
lastReleaseAt: "2026-05-08T20:20:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 59
maintainers: ["GhostTypes"]
openGraphImageUrl: "https://opengraph.githubassets.com/01ca96145e359d60fedc59afd5536582c0ab09735226a65c5220d9b7883bda6d/GhostTypes/ff-5mp-api-ts"
---

# FlashForge TypeScript API

TypeScript and Node.js library for controlling FlashForge 3D printers over the modern HTTP API and the legacy TCP protocol.

## Supported Printers

| Printer | Support |
| --- | --- |
| Adventurer 5M | Full |
| Adventurer 5M Pro | Full |
| AD5X | Full |
| Adventurer 3 / 4 | Dedicated TCP clients |

## Installation

```bash
npm install @ghosttypes/ff-api
```

## Quick Start

### Modern Printers

Use `FiveMClient` for Adventurer 5M, 5M Pro, and AD5X.

```typescript
import { FiveMClient } from '@ghosttypes/ff-api';

async function main() {
  const client = new FiveMClient('192.168.1.100', 'SERIAL_NUMBER', 'CHECK_CODE');

  if (!(await client.initialize())) {
    return;
  }

  await client.initControl();

  console.log(`Printer: ${client.printerName}`);
  console.log(`Firmware: ${client.firmwareVersion}`);

  const status = await client.info.get();
  console.log(`State: ${status?.Status}`);

  await client.control.homeAxes();
  await client.dispose();
}

main();
```

### Legacy TCP Printers

Use `FlashForgeA4Client` or `FlashForgeA3Client` for documented legacy TCP control. `FlashForgeClient` remains available as a generic fallback.

```typescript
import…
