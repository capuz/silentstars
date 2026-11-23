---
repo: "bilalgursen/liquid-glass"
name: "liquid-glass"
description: "Open-source glass controls for React: every button, switch and slider is a refracting WebGL lens with spring physics."
readmeQualityOk: true
url: "https://github.com/bilalgursen/liquid-glass"
homepage: "https://liquid-glass-interface.pages.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["liquid-glass", "react", "three", "ui-components", "webgl"]
stars: 149
forks: 9
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-10-29T23:55:02Z"
lastCommitAt: "2026-11-23T13:12:43Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 32
maintainers: ["bilalgursen", "muhammedeminakalan"]
openGraphImageUrl: "https://opengraph.githubassets.com/744bd9c5f7232b3cba1aa23ad6ef4bc99546333081d0d9ee28efc8afc0201485/bilalgursen/liquid-glass"
---

# Liquid Glass UI

**Docs:** https://liquid-glass-interface.pages.dev · [Türkçe](https://liquid-glass-interface.pages.dev/tr) · **For AI:** [llms.txt](https://liquid-glass-interface.pages.dev/llms.txt)

Glass components for React, drawn by one WebGL2 shader, with behaviour from UI SDK. Each is named for the one thing it does: **press**, **merge**, **travel**, **flow**, **drag**, **hold**. Copy a file, get exactly what the demo shows. MIT.

## Install

```sh
npx shadcn@latest add https://liquid-glass-interface.pages.dev/r/liquid-glass.json
```

or copy `src/components/liquid-glass/` into your project as `components/liquid-glass/`. Requirements: React 19, Tailwind CSS v4, an `@/` alias.

```tsx
import { GlassButton } from '@/components/liquid-glass'

<GlassButton>Get started</GlassButton>
<GlassButton material="tinted" className="bg-sky-500 text-white">Save</GlassButton>
<GlassButton asChild><Link href="/docs">Read the docs</Link></GlassButton>
```

## The set

One verb each. Nothing overlaps, so picking one takes a second.
