---
repo: "noctalia-dev/noctalia-docs"
name: "noctalia-docs"
description: "Noctalia's documentation"
readmeQualityOk: true
url: "https://github.com/noctalia-dev/noctalia-docs"
homepage: "https://docs.noctalia.dev"
language: "MDX"
languages: ["MDX"]
languagePcts: [90]
stars: 30
forks: 92
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 86
recentReleases: 0
createdAt: "2025-08-21T01:47:48Z"
lastCommitAt: "2026-08-30T00:43:54Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 66
maintainers: ["ItsLemmy", "Ly-sec", "NickHastings"]
openGraphImageUrl: "https://opengraph.githubassets.com/51d219d5eb08ac659e9f98e6044374a4de23270b81e110207efcc2c9a8526e16/noctalia-dev/noctalia-docs"
---

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded…
