---
repo: "NIAID-Data-Ecosystem/nde-portal"
name: "nde-portal"
description: "Discovery platform to find NIAID-related datasets and tools"
readmeQualityOk: true
url: "https://github.com/NIAID-Data-Ecosystem/nde-portal"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 6
forks: 2
openIssues: 56
closedIssues: 251
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2021-09-14T19:42:03Z"
lastCommitAt: "2026-09-18T14:02:37Z"
lastReleaseAt: "2025-11-14T18:08:26Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 80
maintainers: ["candicecz", "leandrocollares"]
openGraphImageUrl: "https://opengraph.githubassets.com/8794f470f0495c27237529f7413a4073d3b5b2b3a06ad306838642e6fabf1a6d/NIAID-Data-Ecosystem/nde-portal"
---

# nde-portal

Discovery platform to find NIAID-related datasets and tools.

## Development

To run locally, clone the repo and run:

```sh
yarn install
yarn run dev
```

## Testing

Unit tests run with Jest:

```sh
yarn test
```

Accessibility end-to-end tests run with Playwright and axe:

```sh
yarn test:a11y
```

See [e2e/README.md](https://github.com/NIAID-Data-Ecosystem/nde-portal/blob/HEAD/e2e/README.md) for how to run the accessibility tests, add
new route coverage, and use a sample Claude/Codex prompt for creating tests.
