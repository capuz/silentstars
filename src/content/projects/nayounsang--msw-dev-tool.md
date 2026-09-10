---
repo: "nayounsang/msw-dev-tool"
name: "msw-dev-tool"
description: "Dev tool to control mock logic, modify responses, and monitor API calls."
readmeQualityOk: true
url: "https://github.com/nayounsang/msw-dev-tool"
homepage: "https://msw-dev-tool-docs.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["dev-tools", "msw", "react", "mock", "nextjs", "testing", "zustand"]
stars: 16
forks: 0
openIssues: 7
closedIssues: 63
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-04T10:42:46Z"
lastCommitAt: "2026-09-10T08:20:27Z"
lastReleaseAt: "2025-04-14T13:26:00Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 68
maintainers: ["nayounsang", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/11f7f4303d81cc2623da5c1e543f36750f7ff522230b4db4bf229def67d77ce3/nayounsang/msw-dev-tool"
discussionCount: 0
---

# MSW Dev Tool

Inspect and control HTTP and WebSocket mock scenarios at runtime with MSW Dev Tool.

MSW Dev Tool connects to MSW handlers that define your API contracts and normal scenarios.

Use the browser UI to inspect requests and responses, switch a handler's runtime behavior,
disable a mock to exercise the real API, or create a temporary mock API without adding
exploratory handler code. CLI control is also available when automation is useful.

## Documentation

- [Getting Started](https://msw-dev-tool-docs.vercel.app/docs/get-started)
- [How to Use](https://msw-dev-tool-docs.vercel.app/docs/how-to-use)
- [HTTP Mocking Scenarios](https://msw-dev-tool-docs.vercel.app/docs/http)
- [WebSocket Mocking Scenarios](https://msw-dev-tool-docs.vercel.app/docs/websocket)
- [Node CLI](https://msw-dev-tool-docs.vercel.app/docs/node-cli)
- [Browser CLI](https://msw-dev-tool-docs.vercel.app/docs/browser-cli)

## Install

For a browser UI, install the modular packages:

```bash
pnpm add -D @msw-dev-tool/core @msw-dev-tool/react msw
```

```ts
import { setupDevToolWorker } from "@msw-dev-tool/core/browser";

export const worker = await setupDevToolWorker(...handlers);
```

```tsx
import {…
