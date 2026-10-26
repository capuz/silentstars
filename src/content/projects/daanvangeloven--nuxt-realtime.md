---
repo: "daanvangeloven/nuxt-realtime"
name: "nuxt-realtime"
description: "Websocket integration for Nuxt"
readmeQualityOk: true
url: "https://github.com/daanvangeloven/nuxt-realtime"
homepage: "https://nuxtrealtime.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["composable", "nuxt", "nuxt-module", "socketio", "unstorage", "websockets", "rtc"]
stars: 32
forks: 2
openIssues: 5
closedIssues: 22
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2025-12-09T13:16:40Z"
lastCommitAt: "2026-10-26T09:17:08Z"
lastReleaseAt: "2026-08-05T08:35:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 52
maintainers: ["daanvangeloven", "Vincentdevreede", "hass-nation"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0392d2884e1ad514cca98b1deb619d532b91842511ac6b34b35b24da33d8a2e/daanvangeloven/nuxt-realtime"
discussionCount: 2
---

# Nuxt Realtime

Drop-in realtime state sync for Nuxt. Implement `useRealtimeState()` and it works across all connected clients.

## Features

- 🔄 &nbsp;Real-time state synchronization across all connected clients
- 📡 &nbsp;Event pub/sub with wildcard channel subscriptions
- 🎯 &nbsp;Three sync strategies: `immediate`, `debounced`, and `manual`
- 🔌 &nbsp;Built on Socket.IO for reliable WebSocket connections
- 🎨 &nbsp;Works just like `useState`
- 🔐 &nbsp;Auth hooks via a Nitro plugin
- 🏗️ &nbsp;Redis adapter for cross-server state sync in multi-instance deployments
- 🪶 &nbsp;Zero boilerplate

## Quick Setup

[Full documentation](https://nuxtrealtime.com)

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-realtime
```

Then enable WebSockets in your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['nuxt-realtime'],
  nitro: {
    experimental: { websocket: true },
  },
})
```

## Usage

### State sync

`useRealtimeState` works like `useState` but syncs across every connected client:

```vue
<script setup>
const counter = useRealtimeState('counter', 0)
</script>

<template>
  <div>
    <p>Count: {{…
