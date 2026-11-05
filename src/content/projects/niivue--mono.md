---
repo: "niivue/mono"
name: "mono"
description: "The niivue mono repo"
readmeQualityOk: true
url: "https://github.com/niivue/mono"
homepage: "https://niivue.github.io/mono/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 31
forks: 15
openIssues: 33
closedIssues: 186
watchers: 4
contributors: 13
recentReleases: 0
createdAt: "2026-04-20T16:24:54Z"
lastCommitAt: "2026-11-05T14:05:16Z"
lastReleaseAt: "2026-04-27T11:41:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 48
maintainers: ["cdrake", "neurolabusc", "hanayik"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a4e2edfc29113ed5f553caec9c398c71a8fb9c9277a7b06fc2db50d58074427/niivue/mono"
---

# NiiVue Monorepo

Monorepo for the [NiiVue](https://github.com/niivue) ecosystem — browser-based medical image visualization.

## Packages

## Apps

## Getting Started

Use the hot-reloadable live demos for local development—they provide the fastest feedback loop while working on the project.

```bash
git clone git@github.com:niivue/mono.git
cd mono
bun install
bunx nx build niivue
git lfs install
git lfs pull
bun run dev
```

Core commands include

```bash
bun install                # Install all dependencies
bunx nx build <project>    # Build a single project (builds deps first)
bunx nx run-many -t build  # Build all projects
bunx nx run-many -t test   # Run all tests
```

See [CONTRIBUTING.md](https://github.com/niivue/mono/blob/HEAD/CONTRIBUTING.md) for detailed setup, tooling, and development instructions.

## Releasing and Publishing

Packages are versioned and published using [Nx Release](https://nx.dev/features/manage-releases) via the Release GitHub workflow:

- **Release candidates** are published automatically on every push to `main`. Each merged PR that contains releasable conventional commits produces new `x.y.z-rc.N` versions on the npm `next` dist-tag.
- **Stable…
