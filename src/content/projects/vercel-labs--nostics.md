---
repo: "vercel-labs/nostics"
name: "nostics"
description: "🩺 Errors that are worth reading"
readmeQualityOk: true
url: "https://github.com/vercel-labs/nostics"
homepage: "https://nostics.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["agents", "dev", "errors"]
stars: 232
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-04-02T01:37:10Z"
lastCommitAt: "2026-09-21T09:13:51Z"
lastReleaseAt: "2026-06-15T10:52:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 15
maintainers: ["posva", "antfu", "atinux"]
openGraphImageUrl: "https://opengraph.githubassets.com/78a74b82f42aebf7e0efe69913ca93cce6179a85f11f3bef18e6a4e89e49e475/vercel-labs/nostics"
---

</p>

# nostics

Errors worth reading.

`nostics` helps you replace ad hoc error strings with stable diagnostic codes, actionable fixes, source locations, and docs links.

```txt
[NUXT_B2011] Plugin `./runtime/analytics.server.ts` is server-only but was registered with mode `client`.
├▶ fix: Rename the file or register it with mode `server`.
├▶ sources: modules/analytics.ts:18:5
╰▶ see: https://nuxt.com/e/b2011
```

## Install

```bash
pnpm add nostics
```

## Quick start

```ts
import { createConsoleReporter, defineDiagnostics } from 'nostics'

export const diagnostics = defineDiagnostics({
  docsBase: code => `https://nuxt.com/e/${code.replace('NUXT_', '').toLowerCase()}`,
  reporters: [createConsoleReporter()],
  codes: {
    NUXT_B2011: {
      why: (p: { src: string, mode: 'client' | 'server' }) => {
        const expected = p.mode === 'client' ? 'server' : 'client'
        return `Plugin "${p.src}" is ${expected}-only but was registered with mode "${p.mode}".`
      },
      fix: (p: { mode: 'client' | 'server' }) => {
        const expected = p.mode === 'client' ? 'server' : 'client'
        return `Rename the file or register it with mode "${expected}".`
      },
    },…
