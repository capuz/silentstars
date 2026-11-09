---
repo: "duyet/koa-isbot"
name: "koa-isbot"
description: "Fast Middleware detect bot crawler for Koa (googlebot, bingbot, facebookbot,...)."
readmeQualityOk: true
url: "https://github.com/duyet/koa-isbot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["koa", "koa-isbot", "koa-middleware", "hacktoberfest"]
stars: 10
forks: 7
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2016-02-18T17:31:45Z"
lastCommitAt: "2026-11-09T00:54:26Z"
lastReleaseAt: "2019-12-07T18:39:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 77
undervaluedScore: 57
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cee8cfc6235b349c4ca3c7c0671339ecf0fb7bd0e1c64ab14aed90ec8601a8d/duyet/koa-isbot"
---

# koa-isbot

Modern Koa middleware for intelligent bot detection using the industry-standard [isbot](https://github.com/omrilotan/isbot) library. Detect search engines, crawlers, AI bots (ChatGPT, Claude, Perplexity), and thousands of other bots with TypeScript support and zero configuration.

## ✨ Features

- 🤖 **Comprehensive Bot Detection** - Detects thousands of bots including Google, Bing, ChatGPT, Claude, Perplexity, and more
- 📦 **Zero Config** - Works out of the box with sensible defaults
- 🎯 **TypeScript First** - Full type safety and IntelliSense support
- ⚡ **High Performance** - Built-in caching and optimizations
- 🔧 **Highly Customizable** - Extend detection with custom patterns
- 🛡️ **Security Hardened** - Input validation and DoS protection
- 📊 **Analytics Friendly** - Callbacks for tracking and logging
- 🌳 **Tree-shakeable** - ESM and CJS support with optimal bundling
- ✅ **Battle Tested** - 100% test coverage with Vitest

## 📥 Installation

```bash
npm install @duyetdev/koa-isbot
```

## 🚀 Quick Start

```typescript
import Koa from 'koa';
import { koaIsBot } from '@duyetdev/koa-isbot';

const app = new Koa();

// Add the middleware
app.use(koaIsBot());…
