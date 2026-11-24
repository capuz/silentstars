---
repo: "cneckar/yakcc"
name: "yakcc"
description: "The most ambitious yak shave in the history of engineering"
readmeQualityOk: true
url: "https://github.com/cneckar/yakcc"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 6
forks: 0
openIssues: 11
closedIssues: 720
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-29T17:35:59Z"
lastCommitAt: "2026-11-24T01:26:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 89
undervaluedScore: 57
maintainers: ["claude", "cneckar"]
openGraphImageUrl: "https://opengraph.githubassets.com/9214501d850415196e4c51c7410332a8e0247c1a557c2923917928f11daef12e/cneckar/yakcc"
---

# Yakcc

## What is yakcc

**Shave once, reuse forever.** Yakcc is a content-addressed block registry for assembling programs from verified, reusable building blocks. Instead of writing the same parsing logic, data transformation, or utility function over and over, you shave it once into an atomic, tested block and store it in a local registry. The next time you need it — in any project, on any machine — the registry serves the exact same bytes, with proof that it works. The name is a yak-shave joke that is also a thesis; the double-c is a nod to the long lineage of terse compiler names.

## Get started in 60 seconds

```sh
# Install dependencies and build all packages
pnpm install && pnpm build

# Initialize yakcc in your project directory
# (creates .yakcc/, wires detected IDE hooks, and seeds bootstrap atoms)
yakcc init

# Assemble the parse-int-list demo to verify the full pipeline
yakcc compile examples/parse-int-list

# Run it
node examples/parse-int-list/dist/main.js
```

Expected output:
