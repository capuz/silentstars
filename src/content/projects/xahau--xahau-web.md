---
repo: "Xahau/xahau-web"
name: "xahau-web"
description: "Xahau website"
readmeQualityOk: true
url: "https://github.com/Xahau/xahau-web"
homepage: "https://xahau.network"
language: "MDX"
languages: ["MDX"]
languagePcts: [91]
stars: 6
forks: 11
openIssues: 14
closedIssues: 22
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2025-06-27T12:27:35Z"
lastCommitAt: "2026-08-15T04:05:19Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 86
undervaluedScore: 91
maintainers: ["Ekiserrepe", "tequdev", "rosseti"]
openGraphImageUrl: "https://opengraph.githubassets.com/180ac718de2081a04e161559e62ce7af5f1aa0087b1d63a4c8dbf30fedd1985d/Xahau/xahau-web"
discussionCount: 0
---

# Xahau Website

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [React](https://react.dev). Editorial pages use a hand-coded component system; documentation lives under `src/content/docs/` and is powered by [Starlight](https://starlight.astro.build).

---

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build production site to `./dist/`            |
| `npm run preview` | Preview production build locally              |
| `npm run check`   | Auto-fix formatting with Biome                |
| `npm run ci`      | Biome lint check (CI — no auto-fix)           |

---

## Pre-commit Hooks

The project uses [Lefthook](https://github.com/evilmartians/lefthook) to run pre-commit hooks. The hooks are defined in the `.lefthook.yml` file.

To install the hooks, use the following command (npm install is required):

```bash
npx lefthook install
```

To run the hooks manually, use the following…
