---
repo: "moeru-ai/eventa"
name: "eventa"
description: "🫵👂 Events are all you need. Truly type-safe event driven toolbox, define it everywhere, use it anywhere, best for Web Worker/WebSocket/Electron IPC/RPC"
readmeQualityOk: true
url: "https://github.com/moeru-ai/eventa"
homepage: "https://www.npmjs.com/package/@moeru/eventa"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["electron", "esm", "event-driven", "ipc", "javascript-library", "typescript-library", "web-worker", "eventa"]
stars: 43
forks: 10
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2025-07-26T19:26:51Z"
lastCommitAt: "2026-08-19T04:09:17Z"
lastReleaseAt: "2025-10-05T15:19:01Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 54
maintainers: ["nekomeowww", "renovate[bot]", "luoling8192"]
openGraphImageUrl: "https://opengraph.githubassets.com/043c5d36eac9d481836a12c1f8e1f60273e8d5bafc2ba3eca1cebe676fa41c6f/moeru-ai/eventa"
fundingLinks: ["GITHUB:https://github.com/luoling8192", "GITHUB:https://github.com/nekomeowww"]
---

# `eventa`

Transport-aware events powering ergonomic RPC and streaming flows.

> Heavily inspired by pragmatic RPC flows, but centred on pure events so transports stay swappable.

> [!WARNING]
> Eventa forwards whatever payload you emit. Validate data at the edges before sending it to untrusted peers.

## Installation

```sh
npm install @moeru/eventa
pnpm i @moeru/eventa
bun i @moeru/eventa
ni @moeru/eventa
yarn add @moeru/eventa
```

### Agent Skills

Install the [eventa skill](https://skills.sh) to your AI coding agent:

```sh
npx skills add moeru-ai/eventa
```

## Getting Started

### Event

It's very simple:

- `defineEventa`: all event should be defined with this util, it produces type safe constraints
- `context`: a channel bridges to peers (Electron, Worker, WebSocket Peer, you name it)
- `createContext`: to wrap any compatible event listener

If you need only events without RPC mechanism, then use with `context.emit(...)` and `context.on(...)`

```ts
import { createContext, defineEventa } from '@moeru/eventa'

const move = defineEventa<{ x: number, y: number }>()
const ctx = createContext()

ctx.emit(move, { x: 100, y: 200 })
ctx.on(move, ({ body }) => console.log(body.x,…
