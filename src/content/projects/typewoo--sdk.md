---
repo: "typewoo/sdk"
name: "sdk"
description: "TypeScript-first SDK for integrating with the WooCommerce Store API & REST API"
readmeQualityOk: true
url: "https://github.com/typewoo/sdk"
homepage: "https://typewoo.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [74]
topics: ["sdk", "store-api", "typescript", "woocommerce", "rest-api"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-25T16:23:26Z"
lastCommitAt: "2026-09-28T10:05:47Z"
lastReleaseAt: "2025-07-27T21:43:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 73
maintainers: ["kmakris23", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0eca4a3882983fc57fa8b349f5206017e334933589a4abf22355567dbe3d0fbb/typewoo/sdk"
discussionCount: 0
---

# @typewoo/sdk

A modern, TypeScript-first SDK for integrating with the **WooCommerce Store API**. Build headless or decoupled WooCommerce storefronts with full type safety.

## 📚 Documentation

For full documentation, guides, and API reference, visit **[typewoo.dev](https://typewoo.dev)**.

## ✨ Features

- 📦 Easy-to-use API for WooCommerce Store endpoints (products, cart, checkout, orders)
- 🔐 Supports both guest and authenticated users
- 🔄 Built-in interceptors for nonce, cart token, and JWT authentication
- 🛠️ Fully typed responses powered by TypeScript
- ⚡ Event-driven core with custom EventBus
- 🔌 Custom endpoints with full type inference
- ⚙️ Built with modern tooling (Nx, Vitest, Pure ESM)

## 📦 Installation

```bash
npm install @typewoo/sdk axios qs zod
```

## 🚀 Quick Start

```typescript
import { createTypewoo } from '@typewoo/sdk';

// Create your SDK instance
const sdk = createTypewoo({
  baseUrl: 'https://your-store.com',
});

// Access store services
const { data: products } = await sdk.store.products.list();
const { data: cart } = await sdk.store.cart.get();
```

## 📖 Learn More

- [Getting Started](https://typewoo.dev/getting-started)
-…
