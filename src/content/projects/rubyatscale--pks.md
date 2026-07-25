---
repo: "rubyatscale/pks"
name: "pks"
description: "A 100% Rust implementation of packwerk, a gradual modularization platform for Ruby."
readmeQualityOk: true
url: "https://github.com/rubyatscale/pks"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 3
closedIssues: 2
watchers: 2
contributors: 17
recentReleases: 0
createdAt: "2024-07-27T20:04:44Z"
lastCommitAt: "2026-07-25T06:02:05Z"
lastReleaseAt: "2024-12-18T18:42:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 62
undervaluedScore: 35
maintainers: ["dduugg", "martinemde", "technicalpickles"]
openGraphImageUrl: "https://opengraph.githubassets.com/c19c035ca65c0ba4ec4046a23472299cbaf583890a693b4eb9d87256c8c760ec/rubyatscale/pks"
---

# pks

A 100% Rust implementation of [packwerk](https://github.com/Shopify/packwerk) and [packwerk-extensions](https://github.com/rubyatscale/packwerk-extensions), a gradual modularization platform for Ruby.

Currently, it ships the following checkers to help improve the boundaries between packages. These checkers are:
- A `dependency` checker requires that a pack specifies packs on which it depends. Cyclic dependencies are not allowed. See [packwerk](https://github.com/Shopify/packwerk)
- A `privacy` checker that ensures other packages are using your package's public API
- A `visibility` checker that allows packages to be private except to an explicit group of other packages.
- A `folder_privacy` checker that allows packages to be private to their sibling packs and parent pack (to be used in an application that uses folder packs)
- A `layer` (formerly `architecture`) checker that allows packages to specify their "layer" and requires that each layer only communicate with layers below it.

See [Checkers](https://github.com/rubyatscale/pks/blob/HEAD/CHECKERS.md) for detailed descriptions.

## Automatic Gitignore Support
- Automatically respects `.gitignore` files (both local and…
