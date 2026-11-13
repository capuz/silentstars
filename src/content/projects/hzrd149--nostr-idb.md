---
repo: "hzrd149/nostr-idb"
name: "nostr-idb"
description: "A collection of helper methods for storing nostr events in an IndexedDB"
readmeQualityOk: true
url: "https://github.com/hzrd149/nostr-idb"
homepage: "https://hzrd149.github.io/nostr-idb/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-01-03T17:07:42Z"
lastCommitAt: "2026-11-13T18:33:50Z"
lastReleaseAt: "2026-10-26T02:09:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 65
maintainers: ["hzrd149"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c41e47eff7ef5528410c5c00935325c8eedc0800446f1b4ab084330c91a269e/hzrd149/nostr-idb"
---

# nostr-idb

A TypeScript library for storing and querying Nostr events locally in the browser
with IndexedDB. It provides a NIP-DB-compatible API, in-memory caching, batched
writes, live subscriptions, NIP-91 AND-tag filters, and app-defined event sidecar metadata.

## Install

```sh
pnpm add nostr-idb
```

## Usage

JavaScript-style pseudocode (`event` comes from your app or a relay):

```javascript
import { NostrIDB } from "nostr-idb";

const db = new NostrIDB();

await db.add(event);
const notes = await db.query({ kinds: [1], limit: 20 });
const savedEvent = await db.event(event.id);

// Stream stored and newly added notes; break when finished.
for await (const note of db.subscribe({ kinds: [1] })) {
  display(note);
  if (done) break;
}

await db.stop();
```

## API overview

### Diagnostics

```ts
import { configureDiagnostics } from "nostr-idb";

configureDiagnostics({ debug: true, timing: true });
configureDiagnostics({ timing: false }); // Leave debug logging enabled
```

Both flags default to `false` and apply to all instances in this loaded copy of
the library, including standalone helpers. The same function and its
`DiagnosticsOptions` type are exported from…
