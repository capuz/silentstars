---
repo: "holepunchto/compact-encoding"
name: "compact-encoding"
description: "A series of compact encoding schemes for building small and fast parsers and serializers"
readmeQualityOk: true
url: "https://github.com/holepunchto/compact-encoding"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 30
forks: 14
openIssues: 5
closedIssues: 8
watchers: 1
contributors: 18
recentReleases: 6
createdAt: "2021-02-19T22:22:07Z"
lastCommitAt: "2026-10-28T09:57:33Z"
lastReleaseAt: "2026-09-23T21:34:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "release_machine"]
healthScore: 84
undervaluedScore: 63
maintainers: ["bavulapati", "lejeunerenard", "mafintosh"]
openGraphImageUrl: "https://opengraph.githubassets.com/34dc474b2c38cd81528362913c0fe0da425d9649143cc2619259b27ab55d44a8/holepunchto/compact-encoding"
---

# compact-encoding

A series of compact encoding schemes for building small and fast parsers and serializers

```
npm install compact-encoding
```

## Usage

```js
const cenc = require('compact-encoding')

const state = cenc.state()

// use preencode to figure out how big a buffer is needed
cenc.uint.preencode(state, 42)
cenc.string.preencode(state, 'hi')

console.log(state) // { start: 0, end: 4, buffer: null }

state.buffer = Buffer.allocUnsafe(state.end)

// then use encode to actually encode it to the buffer
cenc.uint.encode(state, 42)
cenc.string.encode(state, 'hi')

// to decode it simply use decode instead

state.start = 0
cenc.uint.decode(state) // 42
cenc.string.decode(state) // 'hi'
```

## Encoder API

#### `state`

Should be an object that looks like this `{ start, end, buffer }`.

You can also get a blank state object using `cenc.state()`.

- `start` is the byte offset to start encoding/decoding at.
- `end` is the byte offset indicating the end of the buffer.
- `buffer` should be either a Node.js Buffer or Uint8Array.

#### `enc.preencode(state, val)`

Does a fast preencode dry-run that only sets state.end.
Use this to figure out how big of a buffer you need.

####…
