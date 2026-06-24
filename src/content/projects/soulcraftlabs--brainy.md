---
repo: "soulcraftlabs/brainy"
name: "brainy"
description: "🧠 Zero-Configuration AI Database with Triple Intelligence™"
url: "https://github.com/soulcraftlabs/brainy"
homepage: "https://soulcraft.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 6
forks: 1
openIssues: 1
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-08-26T19:38:17Z"
lastCommitAt: "2026-06-24T23:37:22Z"
lastReleaseAt: "2025-08-28T23:06:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 60
maintainers: ["dpsifr"]
openGraphImageUrl: "https://opengraph.githubassets.com/de4e521aa9433624e0945d631801ceff447fbedc97470c8f5e09401dffe7e5a5/soulcraftlabs/brainy"
---

# Brainy

</p>

**Three database paradigms. One API. Zero configuration.**

Built because we were tired of stitching together Pinecone + Neo4j + MongoDB and spending weeks on configuration before writing a single line of business logic. Brainy unifies vector search, graph traversal, and metadata filtering so you don't have to choose.

**New here?** → **[What is Brainy? — plain-language overview, no jargon](docs/eli5.md)**

---

## Install

```bash
npm install @soulcraft/brainy
```

## Quick Start

```javascript
import { Brainy, NounType, VerbType } from '@soulcraft/brainy'

const brain = new Brainy()
await brain.init()

// Add knowledge — text auto-embeds, metadata auto-indexes
const reactId = await brain.add({
  data: 'React is a JavaScript library for building user interfaces',
  type: NounType.Concept,
  metadata: { category: 'frontend', year: 2013 }
})

const nextId = await brain.add({
  data: 'Next.js framework for React with server-side rendering',
  type: NounType.Concept,
  metadata: { category: 'framework', year: 2016 }
})

// Create a relationship
await brain.relate({ from: nextId, to: reactId, type: VerbType.BuiltOn })

// Query all three paradigms at once
const results…
