---
repo: "vibe-motion/create-vibe-motion"
name: "create-vibe-motion"
description: "Vibe Motion scaffolding monorepo"
readmeQualityOk: true
url: "https://github.com/vibe-motion/create-vibe-motion"
homepage: "https://www.npmjs.com/package/create-vibe-motion"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["vibe-coding", "vibe-motion"]
stars: 78
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-03-28T22:53:12Z"
lastCommitAt: "2026-07-06T07:04:06Z"
lastReleaseAt: "2026-06-20T14:22:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 25
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/00e8d56e2abc42b649c8242e5ae50054567ce2fc869e4db11c3ee42b21fc65da/vibe-motion/create-vibe-motion"
---

# create-vibe-motion

Scaffold a production-ready Remotion starter for procedural animation and programmatic video creation.

`create-vibe-motion` helps you bootstrap a ready-to-run Remotion project in seconds, so you can focus on building scenes instead of wiring tooling.

It is designed for creators and developers who want **procedural animation** workflows and want to **make video or motion graphics or animation programmatically**.

Use it when you need a practical starter for code-driven video production, animation templates, and iterative content generation.

## Usage

```bash
npm create vibe-motion@latest my-app
cd my-app
pnpm dev
```

To make the initial scaffold package download also use a mirror:

```bash
npm_config_registry=https://registry.npmmirror.com npx create-vibe-motion@latest my-app
```

Dependencies are installed automatically after scaffolding with pnpm only.

If pnpm is missing, the scaffold first tries to install pnpm via npm, then continues with pnpm.

By default, dependency installation uses `https://registry.npmmirror.com`.
You can override it with `--registry=<url>` or `npm_config_registry`.

If no directory is provided, it creates `./vibe-motion-app` by…
