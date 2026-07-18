---
repo: "millionco/openstory"
name: "openstory"
description: "Storybook for Agents"
readmeQualityOk: true
url: "https://github.com/millionco/openstory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 16
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-05-20T21:25:47Z"
lastCommitAt: "2026-07-18T05:47:06Z"
lastReleaseAt: "2026-07-18T05:48:28Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 36
maintainers: ["aidenybai", "cursoragent", "ben-million"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a286157799da8047704789c0f714f2bf78fdea63a669417420de83fbf7ccbc6/millionco/openstory"
---

# Openstory

Storybook for Agents.

Openstory is a drop-in replacement for Storybook. Your existing stories work as-is.

> Openstory is in alpha (`0.0.x`). Any patch may break the public API.

## Install

Install Openstory, Vite, and the Vite plugin for your framework:

```bash
# React
pnpm add -D openstory vite @vitejs/plugin-react

# Solid
pnpm add -D openstory vite vite-plugin-solid

# Vue
pnpm add -D openstory vite @vitejs/plugin-vue

# Svelte
pnpm add -D openstory vite @sveltejs/vite-plugin-svelte
```

Then start the dev server:

```bash
pnpm exec openstory dev
```

No `vite.config.ts` required — Openstory configures Vite in-memory and picks up `tsconfig.json` path aliases automatically. If you'd rather drive Vite yourself, drop the plugin into your own config:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { openstory } from "openstory/plugin";

export default defineConfig({
  plugins: [react(), openstory({ framework: "react" })],
});
```

(Optional) Add a `preview.tsx` next to your stories for global decorators, parameters, or providers:

```tsx
import type { Preview } from "openstory/react";

const preview: Preview = {…
