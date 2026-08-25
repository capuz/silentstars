---
repo: "voidzero-dev/oxc-angular-compiler"
name: "oxc-angular-compiler"
description: "Experimental Angular Compiler based Oxc"
readmeQualityOk: true
url: "https://github.com/voidzero-dev/oxc-angular-compiler"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 226
forks: 19
openIssues: 7
closedIssues: 56
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2025-12-25T12:31:46Z"
lastCommitAt: "2026-08-25T04:08:39Z"
lastReleaseAt: "2026-03-25T09:33:04Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 31
maintainers: ["renovate[bot]", "Brooooooklyn", "ashley-hunter"]
openGraphImageUrl: "https://opengraph.githubassets.com/5384870045f127541f74a0f733f2332461729b441120345fcf4baf91d3669612/voidzero-dev/oxc-angular-compiler"
---

# OXC Angular Compiler

> [!WARNING]
> This project is in an experimental stage and is actively seeking maintainers.

A high-performance Angular template compiler written in Rust, leveraging the [Oxc](https://github.com/oxc-project/oxc) infrastructure for blazing-fast compilation.

## Features

- **Rust-Powered Performance** - Native compilation via NAPI-RS for maximum speed
- **Vite Integration** - First-class Vite plugin with full HMR support
- **Drop-in Compatible** - API compatible with `@angular/compiler-cli`
- **Full Angular Support** - Components, directives, pipes, injectables, and NgModules
- **Hot Module Replacement** - Fast refresh for templates and styles during development
- **Style Encapsulation** - ViewEncapsulation.Emulated, None, and ShadowDom support
- **i18n Ready** - Message extraction with XLIFF 1.2/2.0, XMB, and XTB formats
- **Build Optimizations** - Constant folding, pure function extraction, unused code removal

## Installation

```bash
npm install @oxc-angular/vite
# or
pnpm add @oxc-angular/vite
# or
yarn add @oxc-angular/vite
```

## Quick Start

### Vite Plugin

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { angular } from…
