---
repo: "MylesBorins/node-osc"
name: "node-osc"
description: "Open Sound Control protocol library for Node.js"
url: "https://github.com/MylesBorins/node-osc"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 459
forks: 75
openIssues: 0
closedIssues: 45
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2012-03-21T00:53:50Z"
lastCommitAt: "2026-06-24T00:19:56Z"
lastReleaseAt: "2021-08-18T21:16:03Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 37
maintainers: ["dependabot[bot]", "MylesBorins", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a32e52d4fab150453d1a954dbbf190c357126f70bc50585b22047bb940965f5c/MylesBorins/node-osc"
---

# node-osc

A no frills [Open Sound Control](http://opensoundcontrol.org) client and server.
Heavily inspired by [pyOSC](https://trac.v2.nl/wiki/pyOSC).

## Installation

Install using npm

```bash
npm install node-osc
```

## Features

- 🚀 Simple and intuitive API
- 🔄 Both callback and async/await support
- 📦 Send and receive OSC messages and bundles
- 🌐 Works with both ESM and CommonJS
- 📘 TypeScript type definitions included (generated from JSDoc)
- 📝 Comprehensive documentation and examples
- ✅ Well tested and actively maintained

## Quick Start

### Sending Messages

```js
import { Client } from 'node-osc';

const client = new Client('127.0.0.1', 3333);
await client.send('/oscAddress', 200);
await client.close();
```

### Receiving Messages

```js
import { Server } from 'node-osc';

const server = new Server(3333, '0.0.0.0');

server.on('message', (msg) => {
  console.log(`Message: ${msg}`);
});
```

## Documentation

- 📂 **[Documentation Hub](./docs/)** - Complete documentation with navigation guide
- 📚 **[API Reference](./docs/API.md)** - Complete API reference generated from source code
- 📘 **[Usage Guide](./docs/GUIDE.md)** - Best practices, error handling, and…
