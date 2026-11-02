---
repo: "danielroe/uppt"
name: "uppt"
description: "A composite GitHub Action that turns conventional commits into a draft release PR, tags the PR on merge, and stages publishing to npm via OIDC trusted publishing."
readmeQualityOk: true
url: "https://github.com/danielroe/uppt"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["github-action", "npm", "npmjs", "oidc", "trusted-publishing", "staged-publish"]
stars: 185
forks: 8
openIssues: 4
closedIssues: 16
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-08-26T15:35:38Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-06-15T09:30:08Z"
status: "thriving"
tags: ["funded"]
healthScore: 93
undervaluedScore: 40
maintainers: ["danielroe", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/danielroe/uppt"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# uppt

> A composite GitHub Action that turns conventional commits into a draft release PR, tags the PR on merge, and stages publishing to npm via OIDC trusted publishing.

The aim of **uppt** is a simple, secure release workflow that doesn't require tokens or trusting a third-party GitHub App. It was extracted from scripts used in [nuxt/nuxt](https://github.com/nuxt/nuxt).

## Getting started

1. **Set up trusted publishing on npmjs.com.** Visit `https://npmjs.com/package/<package-name>/access` and add a trusted publisher pointing at your repo and the `release.yml` workflow, with the `npm stage publish` permission chip and 'Environment name' set to `npm`. In a monorepo, repeat once per published package.

   The package must already exist on npm; for a brand-new package, `npx setup-trusted-publishing` ([docs](https://github.com/ThisIsMissEm/setup-trusted-publishing)) publishes a `0.0.0` stub you can attach the entry to.

> [!NOTE]
> [Staged publishing](https://docs.npmjs.com/staged-publishing/) means you approve each publish (with 2FA) before it goes live. It's also recommended to set "Require two-factor authentication and disallow tokens."

   

2. **Create a [GitHub…
