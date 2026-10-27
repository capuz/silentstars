---
repo: "noctalia-dev/noctalia-docs"
name: "noctalia-docs"
description: "Noctalia's documentation"
readmeQualityOk: true
url: "https://github.com/noctalia-dev/noctalia-docs"
homepage: "https://docs.noctalia.dev"
language: "MDX"
languages: ["MDX"]
languagePcts: [93]
stars: 44
forks: 87
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 87
recentReleases: 0
createdAt: "2025-08-21T01:47:48Z"
lastCommitAt: "2026-10-27T12:39:43Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 63
maintainers: ["ItsLemmy"]
openGraphImageUrl: "https://opengraph.githubassets.com/0adf87731ab48676fc7074339fa0c9a64fad6db94f82f5d6c537118e31b63988/noctalia-dev/noctalia-docs"
---

## Documentation source

All documentation in this repository is synchronized from the relevant external Noctalia repositories. This repository is used as the published documentation mirror, so pull requests and issues are disabled here. To propose a documentation change, update the corresponding source repository instead.

## Dependency maintenance

Use Node.js 22.12.0 or newer and `npm ci` to install the dependency versions recorded in `package-lock.json`. Run `npm audit` after dependency updates and `npm run build` to verify the documentation build.

The scoped `postcss-selector-parser` override in `package.json` keeps Expressive Code's `postcss-nested` dependency on a version patched for [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf). Remove the override once the upstream dependency resolves to version 7.1.6 or newer without it. Avoid `npm audit fix --force`: its proposed Starlight downgrade is not a compatible security upgrade.

Commit and push dependency updates to this repository's `main` branch before deployment. The deployment and content-sync scripts reset the checkout to `origin/main`, discarding uncommitted changes.

## 🧞 Commands

All…
