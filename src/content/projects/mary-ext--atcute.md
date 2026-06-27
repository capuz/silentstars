---
repo: "mary-ext/atcute"
name: "atcute"
description: "a collection of lightweight TypeScript packages for AT Protocol, the protocol powering Bluesky."
url: "https://github.com/mary-ext/atcute"
homepage: "https://codeberg.org/mary-ext/atcute"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["atproto", "bluesky", "typescript", "dag-cbor", "ipld", "dasl", "whitewind"]
stars: 491
forks: 22
openIssues: 5
closedIssues: 44
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2024-09-01T03:00:52Z"
lastCommitAt: "2026-06-27T06:23:49Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 93
undervaluedScore: 37
maintainers: ["mary-ext", "cyyynthia"]
openGraphImageUrl: "https://opengraph.githubassets.com/be03cd1d16710f9326bc09a3ab16bf94f8f9e527b6e8742037562d2c0800e7f9/mary-ext/atcute"
fundingLinks: ["GITHUB:https://github.com/mary-ext", "KO_FI:https://ko-fi.com/maryext"]
---

# atcute

lightweight TypeScript packages for [AT Protocol](https://atproto.com), the protocol powering
Bluesky.

## quick start

```sh
npm install @atcute/client @atcute/bluesky
```

```ts
import { Client, simpleFetchHandler } from '@atcute/client';
import type {} from '@atcute/bluesky';

const client = new Client({
	handler: simpleFetchHandler({ service: 'https://public.api.bsky.app' }),
});

const { data } = await client.get('app.bsky.actor.getProfile', {
	params: { actor: 'bsky.app' },
});

console.log(data.displayName);
// -> Bluesky
```

for authenticated requests, see the [client docs](./packages/clients/client) or use the
[OAuth browser client](./packages/oauth/browser-client) for web apps.

## packages

| Packages                                                                                                    |
| ----------------------------------------------------------------------------------------------------------- |
| **Client packages**                                                                                         |
| [`cache`](./packages/clients/cache): normalized cache store                                                 |
|…
