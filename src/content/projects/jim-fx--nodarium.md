---
repo: "jim-fx/nodarium"
name: "nodarium"
description: "this is only a mirror"
readmeQualityOk: true
url: "https://github.com/jim-fx/nodarium"
homepage: "https://nodes.max-richter.dev"
language: "TypeScript"
languages: ["TypeScript", "Rust", "Svelte"]
languagePcts: [44, 27, 26]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-04-23T23:53:19Z"
lastCommitAt: "2026-11-05T11:25:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 73
maintainers: ["jim-fx"]
openGraphImageUrl: "https://opengraph.githubassets.com/b648a3af2b654b1c5e8fd81855078646373149e08115883ae093e31b5fb02f1f/jim-fx/nodarium"
---

Nodarium

    Nodarium is a WebAssembly based visual programming language.

Currently this visual programming language is used to develop <https://nodes.max-richter.dev>, a procedural modelling tool for 3d-plants.

# Table of contents

- [Architecture](https://github.com/jim-fx/nodarium/blob/HEAD/docs/ARCHITECTURE.md)
- [Developing](#developing)
- [Roadmap](#roadmap)

# Developing

### Install prerequisites

- [Node.js](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation)
- [rust](https://www.rust-lang.org/tools/install)
- wasm-pack

### Install dependencies

```bash
pnpm i
```

### Build the Nodes

```bash
pnpm build:nodes
```

### Start the dev server

```bash
cd app
pnpm dev
```

### [Now you can create your first node 🤓](https://github.com/jim-fx/nodarium/blob/HEAD/docs/DEVELOPING_NODES.md)

# Releasing

## Creating a Release

1. **Create an annotated tag** with your release notes:

```bash
git tag -a v1.0.0 -m "Release notes for this version"
git push origin v1.0.0
```

2. **The CI workflow will:**
   - Run lint, format check, and type check
   - Build the project
   - Update all `package.json` versions to match the tag
   - Generate/update `CHANGELOG.md`…
