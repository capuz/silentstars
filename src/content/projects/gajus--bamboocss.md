---
repo: "gajus/bamboocss"
name: "bamboocss"
description: "Build-time, type-safe, zero-runtime CSS-in-JS"
readmeQualityOk: true
url: "https://github.com/gajus/bamboocss"
homepage: "https://bamboocss.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["css"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 170
recentReleases: 10
createdAt: "2026-05-20T15:18:23Z"
lastCommitAt: "2026-08-27T14:29:00Z"
lastReleaseAt: "2026-08-05T05:23:06Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["gajus", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1244765454/5ac3a20e-4736-4983-b7bb-5e3c0d213708"
fundingLinks: ["PATREON:https://patreon.com/segunadebayo", "OPEN_COLLECTIVE:https://opencollective.com/bamboocss"]
---

Bamboo is build-time, type-safe, zero-runtime CSS-in-JS
</p>

## Why Bamboo?

Bamboo [compiles](https://bamboocss.com/docs/guides/source-transformation) each call into shared atomic classes:

```tsx
// you write
const title = cva({ variants: { weight: { bold: { fontWeight: 'bold' }, normal: { fontWeight: 'normal' } } } })

// the bundle gets
```

The Vite compiler rejects style calls it cannot analyze, so nothing imports the styling engine and zero-runtime styling
is enforced rather than optional. Dynamic `cx()` remains a tiny string join; Bamboo only guarantees semantic style
composition when its arguments are statically analyzable.

Bamboo [fails](https://bamboocss.com/docs/concepts/build-diagnostics) the build when a call names a pattern or token
that does not exist:

```
ERR_BAMBOO_DEAD_IMPORT: 12 call(s) name a binding that does not exist:

`stack` is not a pattern — `../styled-system/patterns` does not export it.
  12 file(s): src/modal.tsx, src/drawer.tsx, src/sheet.tsx, … and 9 more
```

Bamboo [prunes](https://bamboocss.com/docs/references/config#prune) tokens, keyframes and reset rules that your
application does not use. On the example apps here that is 36–78% of…
