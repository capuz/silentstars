---
repo: "humanspeak/svelte-motion"
name: "svelte-motion"
description: "Framer Motion for Svelte 5. Declarative motion.<tag> components with AnimatePresence exit animations, gestures (hover, tap, drag, focus, in-view), variants, FLIP layout animations, shared-layout transitions, spring physics, and scroll-linked motion values. The drop-in Framer Motion alternative for Svelte and SvelteKit."
url: "https://github.com/humanspeak/svelte-motion"
homepage: "https://motion.svelte.page"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [68, 31]
topics: ["animation", "framer-motion", "gestures", "motion", "svelte", "sveltekit", "layout-animations", "animation-library", "drag", "framer-motion-alternative"]
stars: 74
forks: 2
openIssues: 21
closedIssues: 52
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-21T02:38:20Z"
lastCommitAt: "2026-07-03T12:40:55Z"
lastReleaseAt: "2025-09-16T21:28:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 93
undervaluedScore: 49
maintainers: ["jaysin586"]
openGraphImageUrl: "https://opengraph.githubassets.com/daac054323d7ecb3da2f4e9f7ccbe4c60882622c657f60ddea024907ac22a103/humanspeak/svelte-motion"
fundingLinks: ["GITHUB:https://github.com/humanspeak"]
---

# Svelte Motion — Framer Motion API for Svelte 5

Svelte Motion brings a Framer Motion-style API to Svelte 5 with `motion.<tag>` components, gestures, variants, exit animations, layout animation, and utility hooks.

For the latest documentation and examples, visit [motion.svelte.page](https://motion.svelte.page).

## Install

```bash
npm install @humanspeak/svelte-motion
```

```svelte
<script lang="ts">
    import { motion } from '@humanspeak/svelte-motion'
</script>

<motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileTap={{ scale: 0.97 }}>
    Hello motion
</motion.button>
```

## Framer Motion API Parity

Goal: Framer Motion API parity for Svelte where common React examples can be translated with minimal changes.

| Capability                                                             | Status                                     |
| ---------------------------------------------------------------------- | ------------------------------------------ |
| `initial` / `animate` / `transition`                                   | Supported                                  |
| `variants` (string keys + inheritance, function-form `custom`)         | Supported…
