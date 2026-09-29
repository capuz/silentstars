---
repo: "anza-xyz/kit-plugins"
name: "kit-plugins"
description: "Plugins and presets to extend your Kit clients."
readmeQualityOk: true
url: "https://github.com/anza-xyz/kit-plugins"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 22
forks: 16
openIssues: 6
closedIssues: 11
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2025-12-17T12:38:04Z"
lastCommitAt: "2026-09-29T08:10:30Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 56
maintainers: ["dependabot[bot]", "mcintyre94", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0f1b019ccf16f839d114da4f125d7fb757072d77a4253187fa32a01b237653b/anza-xyz/kit-plugins"
---

# Kit Plugins

[ci-image]: https://img.shields.io/github/actions/workflow/status/anza-xyz/kit-plugins/main.yml?logo=GitHub
[ci-url]: https://github.com/anza-xyz/kit-plugins/actions/workflows/main.yml

A library for [Solana Kit](https://github.com/anza-xyz/kit) that helps you **build composable Solana clients** with a modular plugin system.

## Features

- ✨ **All-in-one bundle plugins** for production, local development, and local testing.
- ✨ **Modular plugin system** to compose custom clients by combining granular plugins.
- ✨ Default **transaction planning and execution** logic built-in, just call `client.sendTransaction(myInstructions)`.
- ✨ Various **useful plugins** for RPC connectivity, payer management, SOL airdrops, LiteSVM support and more.

## Quick Start

### Production

Use the `solanaRpc` bundle plugin to set up a full Solana RPC client with transaction planning and execution.

```sh
pnpm install @solana/kit @solana/kit-plugin-rpc @solana/kit-plugin-signer
```

```ts
import { createClient } from '@solana/kit';
import { solanaRpc } from '@solana/kit-plugin-rpc';
import { payer } from '@solana/kit-plugin-signer';

const client = createClient()…
