---
repo: "johnsoncodehk/typescript-native-bridge"
name: "typescript-native-bridge"
description: "A typescript-shaped drop-in backed by typescript-go (tsgo) over an in-process cgo NAPI/FFI bridge — no IPC."
readmeQualityOk: true
url: "https://github.com/johnsoncodehk/typescript-native-bridge"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [54, 37]
stars: 172
forks: 1
openIssues: 2
closedIssues: 18
watchers: 2
contributors: 2
recentReleases: 3
createdAt: "2026-06-27T05:30:06Z"
lastCommitAt: "2026-07-23T06:14:18Z"
lastReleaseAt: "2026-07-23T01:16:43Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 32
maintainers: ["johnsoncodehk"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b4b7cb37684c9de10d8179bfc2ebed39a04810812faf0eb4df698ab6f9d4b64/johnsoncodehk/typescript-native-bridge"
---

# typescript-native-bridge (TNB)

> Published on npm as [`typescript-native-bridge`](https://www.npmjs.com/package/typescript-native-bridge).

**A drop-in `typescript` replacement that type-checks on Go.** Swap the `typescript`
package for this fork and keep using `tsc`, `vue-tsc`, `svelte-check`, `astro-check`,
`glint`, ESLint, and your editor exactly as before — the checker runs on **tsgo**
(Microsoft's Go TypeScript compiler) in-process instead of JavaScript. No new CLI, no
new LSP, no per-tool config, no code changes.

---

## Why not just use TypeScript 7 (tsgo)?

`typescript@7` is Microsoft's Go-native rewrite — but it doesn't drop into the tools you
actually use:

- **`vue-tsc` / `astro-check` / `svelte-check` / `glint`** are built on the **classic**
  `typescript` programmatic API (`createProgram`, Volar hooks, custom hosts). v7's
  programmatic surface is the new tsgo API — not a drop-in replacement for the classic
  one, so those tools can't just move to it.
- **ESLint (typescript-eslint)** imports the classic `typescript` API and calls
  `getTypeChecker()` — same API mismatch.
- **Editors** run `tsserver` + Language Service Plugins (`@vue/typescript-plugin` for…
