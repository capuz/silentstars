---
repo: "sisyphuslabs/doriface"
name: "doriface"
description: "Doriface: a fast, end-to-end encrypted interface for herdr. React web/PWA + Electron client, Hono gateway that passes herdr-core RPC straight through, libghostty terminals, and a Cloudflare relay."
readmeQualityOk: true
url: "https://github.com/sisyphuslabs/doriface"
homepage: "https://relay-doriface.omo.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "bun", "cloudflare-workers", "e2ee", "electron", "ghostty", "herdr", "hono", "libghostty", "pwa"]
stars: 10
forks: 0
openIssues: 23
closedIssues: 183
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-11-03T00:45:22Z"
lastCommitAt: "2026-11-05T11:24:55Z"
lastReleaseAt: "2026-11-05T08:09:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 57
maintainers: ["code-yeongyu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2839ddf3af36359ffc7a59e26cdaa9ba6e5bf939ec6896bf81e80997a61a3c1/sisyphuslabs/doriface"
---

# doriface

An end-to-end encrypted web, PWA and desktop face for [herdr-core](https://github.com/herdrdev/herdr-core).

doriface runs a small host gateway next to `hc` and passes herdr-core's own JSON-RPC and framed terminal protocol straight through to your browser or desktop app, byte for byte, so every `hc` method works without a translation layer. Traffic between your devices and the host is end-to-end encrypted with Noise and, by default, carried through a public Cloudflare relay at `relay-doriface.omo.dev` that only ever sees ciphertext. Terminals render with [libghostty](https://ghostty.org), built from Ghostty's own source.

| Workspace (night, 1440)                                             | Workspace (day, 1440)                                           |
| ------------------------------------------------------------------- | --------------------------------------------------------------- |
|  |  |

## Status

| Piece                                        | State…
