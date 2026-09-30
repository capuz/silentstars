---
repo: "nvie/decoders"
name: "decoders"
description: "Elegant validation library for type-safe input data for TypeScript"
readmeQualityOk: true
url: "https://github.com/nvie/decoders"
homepage: "https://decoders.cc"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["typescript", "browser", "bun", "nodejs", "schema-validation", "javascript", "cloudflare-workers"]
stars: 447
forks: 30
openIssues: 4
closedIssues: 53
watchers: 4
contributors: 19
recentReleases: 0
createdAt: "2017-10-04T19:40:11Z"
lastCommitAt: "2026-09-30T09:57:10Z"
lastReleaseAt: "2018-05-28T08:55:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 85
undervaluedScore: 38
maintainers: ["nvie", "github-actions[bot]", "otnc"]
openGraphImageUrl: "https://opengraph.githubassets.com/44e46566c263883ed78a14be1a7a78e05c18e1ad91e9c47003489f9be62d4cb9/nvie/decoders"
fundingLinks: ["GITHUB:https://github.com/nvie"]
---

Elegant and battle-tested validation library for type-safe input data for TypeScript.

## Basic example

```typescript
import { array, isoDate, number, object, optional, string } from 'decoders';

// Incoming data at runtime, e.g. the request body
// The point is that this data is untrusted and its type unknown
const externalData = {
  id: 123,
  name: 'Alison Roberts',
  createdAt: '2026-01-11T12:26:37.024Z',
  tags: ['foo', 'bar'],
};

// Write the decoder (= what you expect the data to look like)
const userDecoder = object({
  id: number,
  name: string,
  createdAt: optional(isoDate),
  tags: array(string),
});

// Call .verify() on the incoming data
const user = userDecoder.verify(externalData);
//    ^^^^
//    TypeScript will infer this type as:
//    {
//      id: number;
//      name: string;
//      createdAt?: Date;
//      tags: string[];
//    }
```

## Installation

```bash
npm install decoders
```

## Requirements

You must set `strict: true` in your `tsconfig.json` in order for type inference to work
correctly!

```js
// tsconfig.json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## Documentation

Documentation can be found on…
