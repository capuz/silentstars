---
repo: "unchainedshop/unchained"
name: "unchained"
description: "High-Performance Headless Node.js ESM E-Commerce Framework"
readmeQualityOk: true
url: "https://github.com/unchainedshop/unchained"
homepage: "https://unchained.shop"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["e-commerce", "graphql", "marketplace", "headless", "docker", "shopping-cart", "node-js", "open-source", "digital-commerce", "cart"]
stars: 205
forks: 24
openIssues: 42
closedIssues: 339
watchers: 3
contributors: 14
recentReleases: 1
createdAt: "2018-12-07T08:46:05Z"
lastCommitAt: "2026-10-05T10:47:26Z"
lastReleaseAt: "2026-08-27T08:02:12Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 44
maintainers: ["pozylon", "Mikearaya"]
openGraphImageUrl: "https://opengraph.githubassets.com/75b6aec647cbfb35b8b5a4ffb1393e773c3adc949679646d8ee9f3fa10a2fca7/unchainedshop/unchained"
discussionCount: 11
---

# Unchained Engine

Licensed under the EUPL 1.2

Unchained Engine is a modular, API-first e-commerce platform built as a monorepo with npm workspaces. It provides a complete solution for building custom e-commerce applications with GraphQL APIs, extensible plugin architecture, and support for modern use cases like subscriptions, quotations, and tokenized products.

### **[View Documentation](https://docs.unchained.shop)**

## Quickstart

### Prerequisites

- Node.js >=26 (see [.nvmrc](https://github.com/unchainedshop/unchained/blob/HEAD/.nvmrc) for the development version)
- MongoDB 4.4+ (or use MongoDB Memory Server for development)

### Create a New Project

```bash
npm init @unchainedshop
```

Then navigate to http://localhost:4010/ to open the Admin UI and set up your administrator account on first run.

### Run Local AI for Copilot

Hardware requirements depend on the model, quantization, and context size. For an OpenAI-compatible local server, see the [Copilot configuration guide](https://github.com/unchainedshop/unchained/blob/HEAD/docs/docs/platform-configuration/enable-copilot.md).

```bash
llama-server -hf ggml-org/gpt-oss-20b-GGUF --ctx-size 0 --jinja -ub 2048 -b 2048…
