---
repo: "WFCD/warframe-status"
name: "warframe-status"
description: ":cloud: Simple express app that parses worldState.php"
url: "https://github.com/WFCD/warframe-status"
homepage: "https://docs.warframestat.us"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["api", "api-server"]
stars: 61
forks: 13
openIssues: 2
closedIssues: 47
watchers: 5
contributors: 22
recentReleases: 0
createdAt: "2017-02-07T22:05:47Z"
lastCommitAt: "2026-06-27T00:36:54Z"
lastReleaseAt: "2022-05-09T18:45:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 55
maintainers: ["dependabot[bot]", "semantic-release-bot", "TobiTenno"]
openGraphImageUrl: "https://opengraph.githubassets.com/8697a2d443b28ae3a745fa7416ab1f4ac842db002e6a22a40e14ad54a764d5aa/WFCD/warframe-status"
---

# warframe-status

Warframe WorldState API built with NestJS

## Access

### REST-ish:

- `http://$host:$port/$platform`
- `http://$host:$port/$platform/$child-item`
- `http://$host:$port/$a-bunch-of-static-data`

### Sockets:

`ws://$host:$port/socket`
(or for the secure socket)
`wss://$host:$port/socket`

Requests taken as json strings in the socket packet.

Consumers will need to parse responses and stringify requests yourself, as ws doesn't provide a way to automatically parse them.

```json
{ "event": "ws:req", "packet": { "platform": "$platform", "language": "$language" } }
```

```json
{ "event": "twitter" }
```

```json
{ "event": "rss" }
```

connecting automatically subscribes the connection to events structured as:

```json5
{
  event: 'twitter',
  packet: '[]', // tweets
}
```

```json5
{
  event: 'ws:update',
  packet: '{}', // entire updated worldstate
}
```

```json5
{
  event: '', // worldstate key,
  packet: '', // worldstate key data
}
```

probably several others that can take some experimenting

---

## Quick Start

```bash
# Install dependencies
npm install

# Development mode (hot reload)
npm run dev

# Build for production
npm run build

# Production mode…
