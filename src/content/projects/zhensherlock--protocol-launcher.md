---
repo: "zhensherlock/protocol-launcher"
name: "protocol-launcher"
description: "Type-safe deep link generator for protocol-based apps, enabling one-click launch, install, and configuration for tools like Cursor and Cherry Studio."
readmeQualityOk: true
url: "https://github.com/zhensherlock/protocol-launcher"
homepage: "https://protocol-launcher.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["deep-link", "deeplink", "esm", "protocol", "quick-launcher", "typescript", "url-scheme", "protocol-launcher", "one-click", "deeplinks"]
stars: 126
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-15T02:49:27Z"
lastCommitAt: "2026-07-23T06:16:23Z"
lastReleaseAt: "2026-01-13T02:47:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 61
undervaluedScore: 26
maintainers: ["zhensherlock"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1116536262/096c617b-b937-43e2-b359-405543f9a90b"
discussionCount: 1
---

</a>
</p>

# Protocol Launcher

One-click launch URL generator for protocol-based apps.

`protocol-launcher` helps you generate typed deep links and URL scheme links for desktop, mobile, productivity, AI, and developer tools. Use it to open apps, jump to files or projects, install MCP servers, import provider settings, and create safe one-click launch links for websites, docs, CLIs, and automation flows.

## Why Protocol Launcher?

- Type-safe builders for supported protocol payloads.
- On-demand imports such as `protocol-launcher/vscode` and `protocol-launcher/cherry-studio`.
- Safe query-string and base64 payload encoding, including Unicode payloads.
- Broad protocol coverage across AI tools, editors, productivity apps, native macOS apps, and utilities.
- ESM-first output for Node.js and modern bundlers.
- Zero third-party runtime dependencies.

## Installation

```bash
pnpm add protocol-launcher
```

```bash
npm install protocol-launcher
```

```bash
yarn add protocol-launcher
```

```bash
bun add protocol-launcher
```

## Usage

### On-Demand Import

Use direct subpath imports when you only need one app integration.

```ts
import { installMCP } from 'protocol-launcher/cursor'…
