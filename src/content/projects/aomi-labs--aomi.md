---
repo: "aomi-labs/aomi"
name: "aomi"
description: "The best blockchain harness for agentic AI - on-chain execution with runtime, skills, and component library."
readmeQualityOk: true
url: "https://github.com/aomi-labs/aomi"
homepage: "https://aomi.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["agent-framework", "agents", "ai", "blockchain", "crypto", "ethereum", "llm", "on-chain", "web3", "account-abstraction"]
stars: 14
forks: 4
openIssues: 13
closedIssues: 17
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-10-15T17:19:09Z"
lastCommitAt: "2026-10-14T08:58:17Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 66
maintainers: ["arixoneth", "CeciliaZ030", "h4n0"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a1d7cbb80bf4568123185ea55d81e3b2f9861a7de1e1fe885d681ea33874bc0/aomi-labs/aomi"
---

# Aomi

Aomi provides a React chat widget, a headless React runtime, a TypeScript SDK
and a terminal client for conversations and wallet actions.

| Package | Purpose |
| --- | --- |
| `@aomi-labs/widget` | Chat UI and browser wallet integration |
| `@aomi-labs/react` | Headless conversation runtime |
| `@aomi-labs/client` | Browser and Node transport, accounts and Pipeline SDK |
| `@aomi-labs/cli` | The `aomi` terminal command |

## Widget

```sh
npm install @aomi-labs/widget react react-dom
```

```tsx
import { AomiWidget } from "@aomi-labs/widget";
import "@aomi-labs/widget/styles.css";

export function Assistant() {
  return <AomiWidget applicationId="2937810" />;
}
```

The default API origin is `https://chat.aomi.dev`; pass `apiUrl` for another
Portal/BFF. Browser wallets are the default authentication mode. Optional
Privy and Para integrations load when selected and require their SDK packages.
The widget scopes its styles, overlays and preferences to each instance.

Advanced hosts compose the compiled `@aomi-labs/widget/frame` entry and supply
an explicit `backendUrl`. `@aomi-labs/widget-lib` remains a deprecated
compatibility package during the migration window, including…
