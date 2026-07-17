---
repo: "Deln0r/ygo"
name: "ygo"
description: "Officially listed, pure-Go port of the Yjs CRDT, byte-for-byte V1/V2 wire-compatible with yjs@13.6.31 (cross-language fixtures, both directions). UndoManager, snapshots, subdocuments, cursors, GC. yserve: single-binary Hocuspocus-compatible server with SQLite persistence and document versioning. iOS/Android via gomobile. No CGO."
readmeQualityOk: true
url: "https://github.com/Deln0r/ygo"
homepage: "https://ygo.deln0r.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["android", "collaborative-editing", "crdt", "go", "golang", "gomobile", "hocuspocus", "ios", "local-first", "local-first-software"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-05-15T08:53:03Z"
lastCommitAt: "2026-07-17T05:58:38Z"
lastReleaseAt: "2026-06-17T07:49:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 53
maintainers: ["Deln0r", "dependabot[bot]", "prpc-io"]
openGraphImageUrl: "https://opengraph.githubassets.com/846e3e095466763f012c51c134bf7dc12b37c8e1899f3e9302a96802f446d246/Deln0r/ygo"
discussionCount: 0
---

# Ygo

Pure-Go port of [Yjs](https://github.com/yjs/yjs), the CRDT framework for collaborative applications, [officially listed](https://docs.yjs.dev/ecosystem/ports-to-other-languages) in the Yjs documentation's ports page.

Ygo speaks the **Yjs V1 and V2 wire formats byte-for-byte**. JavaScript clients running `yjs@13.x` synchronize directly with Go servers and vice versa, with both directions verified through **158 cross-language fixture scenarios** generated from `yjs@13.6.31`. The bundled WebSocket server is Hocuspocus-compatible. No CGO; `gomobile bind` produces an iOS xcframework and Android AAR (manually verified, not run in CI).

## Highlights

- **Byte-for-byte wire compatibility, verified in both directions.** 158 cross-language fixture scenarios (generated from `yjs@13.6.31`) cover the V1 and V2 update formats, snapshots, subdocuments, undo, relative positions, GC, awareness, and the sync protocol, JS to Go and Go to JS, plus 56 lib0 primitive vectors. The suite runs in CI on every push, so a regression in either direction fails the build.
- **Pure Go, no CGO — mobile included.** Builds for any Go target, compiles to WASM, and cross-compiles freely. `gomobile bind`…
