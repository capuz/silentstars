---
repo: "sv-grid/sv-grid"
name: "sv-grid"
description: "Native Svelte 5 data grid. Headless-first engine + drop-in render component. Row + column virtualization (1M rows), Excel-style filters, inline editing, grouping, pivot, server-side data. MIT core (@svgrid/grid), MCP server for Claude / Cursor. https://svgrid.com"
readmeQualityOk: true
url: "https://github.com/sv-grid/sv-grid"
homepage: "https://svgrid.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["headless-table", "svelte-data-table", "svelte-grid", "svelte-table", "svelte-ui-components", "sveltekit-tailwindcss", "tanstack-table-alternative", "datatable", "filtering", "grid"]
stars: 177
forks: 8
openIssues: 11
closedIssues: 46
watchers: 3
contributors: 6
recentReleases: 10
createdAt: "2026-05-12T20:56:09Z"
lastCommitAt: "2026-09-09T08:19:35Z"
lastReleaseAt: "2026-08-12T23:16:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine", "community_hub"]
healthScore: 96
undervaluedScore: 34
maintainers: ["bmarkov", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1237064025/3b84684f-5257-4b0a-bef9-73e8afa46d6b"
fundingLinks: ["CUSTOM:https://svgrid.com/pricing/"]
discussionCount: 41
---

</p>

# SvGrid

> The Svelte 5 native data grid. **Headless-first. Render-ready.**

**SvGrid** is a Svelte 5 data grid and data table built from the first line for runes, not a React grid
wrapped in a Svelte shim. It does virtual scrolling over 100k+ rows, Excel-style filtering, inline
editing, row grouping, tree data, pivot, and server-side data, and it ships both a headless engine you
compose yourself and a drop-in `<SvGrid />` component. Open source under MIT, TypeScript-first, and
usable in SvelteKit with SSR.

</p>

**Quick links:** [Website](https://svgrid.com) · [Docs](https://svgrid.com/docs/) · [377 Demos](https://svgrid.com/demos/) · [Pricing](https://svgrid.com/pricing/) · [Roadmap](https://svgrid.com/roadmap/) · [Blog](https://svgrid.com/blog/) · [Releases](https://github.com/sv-grid/sv-grid/releases) · [npm](https://www.npmjs.com/package/@svgrid/grid)

Writing SvGrid with an AI assistant? It ships an MCP server that carries the real API surface and
**checks your agent's code against it** before you see it. [Details below](#ai-native).

---

## Install

Scaffold a working Vite + Svelte 5 app with SvGrid wired up in one command:

```bash
npm create @svgrid@latest
```…
