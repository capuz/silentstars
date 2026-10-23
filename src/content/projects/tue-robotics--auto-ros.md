---
repo: "tue-robotics/auto-ros"
name: "auto-ros"
description: "Wrapper of ROSLIB.Ros which automatically reconnects"
readmeQualityOk: true
url: "https://github.com/tue-robotics/auto-ros"
homepage: "https://tue-robotics.github.io/auto-ros/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2020-12-05T13:43:23Z"
lastCommitAt: "2026-10-23T09:32:43Z"
lastReleaseAt: "2026-01-15T07:06:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 70
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/083034c5a97cbd5a559c13627e18085a576e266df5c8b62461031addd804b851/tue-robotics/auto-ros"
---

# auto-ros

Wrapper of ROSLIB.Ros which automatically reconnects

[gh-actions-image]: https://github.com/tue-robotics/auto-ros/actions/workflows/main.yml/badge.svg
[gh-actions-url]: https://github.com/tue-robotics/auto-ros/actions/workflows/main.yml

[npm-version-image]: https://img.shields.io/npm/v/auto-ros.svg
[npm-version-url]: https://www.npmjs.com/package/auto-ros

## Features

- 🔄 Automatic reconnection to rosbridge websocket
- 📘 Full TypeScript support with type definitions
- 🎯 Modern ES2022+ module
- 🔔 Event-based status updates
- ⚡ Zero configuration required

## Installation

```bash
npm install auto-ros
```

## Usage

### JavaScript

```js
import AutoRos from 'auto-ros'

const autoRos = new AutoRos()

autoRos.connect()
```

### TypeScript

```typescript
import AutoRos, { type ConnectionStatus } from 'auto-ros'

const autoRos = new AutoRos({
  reconnectTimeOut: 5000,
  rosOptions: {
    // transportFactory can be provided if you need a custom transport
  }
})

autoRos.on('status', (status: ConnectionStatus) => {
  console.log('Connection status:', status)
})

autoRos.connect('ws://localhost:9090')
```

## API

### Constructor

```typescript
new AutoRos(options?:…
