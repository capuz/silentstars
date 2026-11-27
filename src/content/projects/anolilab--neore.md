---
repo: "anolilab/neore"
name: "neore"
description: "A modern, feature-rich AI chat application built with React, TanStack Start, and a Lunora backend on Cloudflare Workers. Chat with multiple AI models, manage conversations with advanced tools, and enjoy a seamless real-time experience."
readmeQualityOk: true
url: "https://github.com/anolilab/neore"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai", "chat", "browser-extension", "cloudflare-workers", "durable-objects", "hono", "llm", "react", "rust", "tanstack-start"]
stars: 14
forks: 3
openIssues: 33
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-08T18:54:04Z"
lastCommitAt: "2026-11-27T15:13:24Z"
status: "thriving"
tags: ["solo_builder", "funded", "under_pressure"]
healthScore: 85
undervaluedScore: 62
maintainers: ["prisis"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a82198e4899c77a777a1dbf9b5640da9fcfc556ed457f6507d67c79306c4690/anolilab/neore"
fundingLinks: ["GITHUB:https://github.com/prisis"]
discussionCount: 0
---

# Neore Chat

An AI chat application: multi-model conversations, tools, document and image
handling, and a browser extension. Built with TanStack Start (React), a Lunora
backend on Cloudflare Workers, and a set of Hono and Rust Workers for media and
document processing.

> **License:** [FSL-1.1-ALv2](https://github.com/anolilab/neore/blob/HEAD/LICENSE.md) (Functional Source License). This is
> source-available, not open source under the OSI definition.

Daniel Bannert's work is supported by the community on
[GitHub Sponsors](https://github.com/sponsors/prisis).

## Prerequisites

- **Node.js** 22.22 (see `.nvmrc`)
- **pnpm** 12 (pinned via `packageManager` in `package.json`)
- **Rust toolchain**, needed to start the backend the first time, because the
  `document-parser` Worker is built from Rust:

  ```bash
  rustup target add wasm32-unknown-unknown
  cargo install worker-build --version 0.8.7 --locked
  ```

  Skip this if `services/document-parser/build/` already exists.
- At least one AI provider key (for example an OpenRouter key) to get replies.
