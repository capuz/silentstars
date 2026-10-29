---
repo: "lanteanio/svelte-realtime"
name: "svelte-realtime"
description: "Native WebSocket RPC and reactive subscriptions for SvelteKit"
readmeQualityOk: true
url: "https://github.com/lanteanio/svelte-realtime"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["live-data", "pub-sub", "realtime", "rpc", "server-sent-events", "svelte", "svelte-adapter", "sveltekit", "uwebsockets", "uwebsocketsjs"]
stars: 151
forks: 3
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-14T01:47:02Z"
lastCommitAt: "2026-10-29T21:22:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 24
maintainers: ["MeredithRodneyMcKay"]
openGraphImageUrl: "https://opengraph.githubassets.com/91a3f69d2ac3244cb2e97b3d9d256c767f3b66fc95c30265e46af485cabdf539/lanteanio/svelte-realtime"
---

Realtime RPC and reactive subscriptions for SvelteKit, built on <a href="https://github.com/lanteanio/svelte-adapter-uws">svelte-adapter-uws</a>.

---

Write server functions. Import them in components. Call them over WebSocket. No boilerplate, no manual pub/sub wiring, no protocol design.

**Upgrading from 0.4.x?** See the [migration guide](https://github.com/lanteanio/svelte-realtime/blob/HEAD/MIGRATION.md) for every breaking change between 0.4.x and 0.5.x.

---

## Quick start

```bash
npx svelte-realtime my-app
cd my-app
npm run dev
```

This creates a SvelteKit project with svelte-realtime fully wired: adapter, vite plugins, WebSocket hooks, and a working counter example you can open in your browser right away.

---

## Version compatibility

The three ecosystem packages move together. Bump them as a group:

| `svelte-adapter-uws` | `svelte-realtime` | `svelte-adapter-uws-extensions` | Notes |
|---|---|---|---|
| `^0.4.x` | `^0.4.x` | `^0.4.x` | Legacy stable |
| `^0.5.11` | `^0.5.14` | `^0.5.10` | Current. SvelteKit 2 or 3. Node 22+; Kit 3 requires Node 22.17+ and Svelte 5.57.1+. |

Mixed-version installs are rejected at install time with a peer-dep warning.

---

## Manual…
