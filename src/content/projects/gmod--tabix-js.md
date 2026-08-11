---
repo: "GMOD/tabix-js"
name: "tabix-js"
description: "Read Tabix-indexed files, either with .tbi or .csi indexes, in node or the browser"
readmeQualityOk: true
url: "https://github.com/GMOD/tabix-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 14
forks: 4
openIssues: 2
closedIssues: 42
watchers: 12
contributors: 28
recentReleases: 0
createdAt: "2018-08-26T01:50:31Z"
lastCommitAt: "2026-08-11T04:49:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 64
maintainers: ["cmdcolin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7e3ec21fa85536b17c6c87a1be49df82c49990ab10b580e2577bc3cdd00c899/GMOD/tabix-js"
---

# @gmod/tabix

Read Tabix-indexed files using either .tbi or .csi indexes.

## Install

```bash
npm install @gmod/tabix
```

## Usage

```typescript
import { TabixIndexedFile } from '@gmod/tabix'

// Local file — TBI index assumed at path + '.tbi'
const file = new TabixIndexedFile({ path: 'file.vcf.gz' })

// CSI index
const csi = new TabixIndexedFile({
  path: 'file.vcf.gz',
  csiPath: 'file.vcf.gz.csi',
})

// Remote files
const remote = new TabixIndexedFile({
  url: 'https://example.com/file.vcf.gz',
  tbiUrl: 'https://example.com/file.vcf.gz.tbi',
})

// Or with a filehandle from generic-filehandle2
import { RemoteFile } from 'generic-filehandle2'

const custom = new TabixIndexedFile({
  filehandle: new RemoteFile('https://example.com/file.vcf.gz'),
  tbiFilehandle: new RemoteFile('https://example.com/file.vcf.gz.tbi'),
})
```

### getLines

Fetches lines overlapping a region. `start`/`end` are 0-based half-open
coordinates (unlike the tabix CLI which uses 1-based closed).

```typescript
const lines: string[] = []
await file.getLines('chr1', 200, 300, line => lines.push(line))
```

The callback also receives the virtual file offset and parsed coordinates for
the line:…
