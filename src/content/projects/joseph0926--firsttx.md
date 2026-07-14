---
repo: "joseph0926/firsttx"
name: "firsttx"
description: "FirstTx · Prepaint + Local-First + Tx toolkit for instant CSR revisits, offline durability, and atomic optimistic updates."
readmeQualityOk: true
url: "https://github.com/joseph0926/firsttx"
homepage: "https://www.firsttx.store"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["client-side-rendering", "indexeddb", "optimistic-ui", "pre-rendering", "react", "transaction", "undo-redo"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 16
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-04T00:01:34Z"
lastCommitAt: "2026-07-14T05:54:42Z"
lastReleaseAt: "2025-10-10T23:10:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 51
maintainers: ["joseph0926", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f40f2f514c1fa1de0c8b8f31e0b2c204a83269cc0b4c6ed4aa9619d155fec0b/joseph0926/firsttx"
discussionCount: 0
---

</p>

# FirstTx

[Docs](https://www.firsttx.store) | [Playground](https://firsttx-playground.vercel.app) | [DevTools](https://chromewebstore.google.com/detail/firsttx-devtools/onpdifkipmmkajdhodmpphmlpbnopkdd)

> 한국어 버전은 [docs/README.ko.md](https://github.com/joseph0926/firsttx/blob/HEAD/docs/README.ko.md)를 확인해주세요.

**Reduce blank time on CSR revisits by replaying the last visual state**

## TL;DR

FirstTx combines three client-side layers for CSR revisits:

- **Prepaint**: Replay a sanitized visual snapshot before the app bundle starts
- **Local-First**: Persist React model snapshots in IndexedDB and revalidate them from the server
- **Tx**: Run optimistic steps with retry and reverse-order compensating rollback

## Demo

<table>
<tr>
<td align="center">Before</td>
<td align="center">After</td>
</tr>
<tr>
<td><img src="https://res.cloudinary.com/dx25hswix/image/upload/v1760316819/firsttx-01_vi2svy.gif" /></td>
<td><img src="https://res.cloudinary.com/dx25hswix/image/upload/v1760316819/firsttx-02_tfmsy7.gif" /></td>
</tr>
<tr>
<td align="center"><sub>Slow 4G: Blank screen</sub></td>
<td align="center"><sub>Slow 4G: Snapshot replay</sub></td>
</tr>
</table>

> See all demos in…
