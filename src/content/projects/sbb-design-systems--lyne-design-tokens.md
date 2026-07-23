---
repo: "sbb-design-systems/lyne-design-tokens"
name: "lyne-design-tokens"
description: "🧪 Manages and publishes Design Tokens for Lyne Design System"
readmeQualityOk: true
url: "https://github.com/sbb-design-systems/lyne-design-tokens"
language: "TypeScript"
languages: ["TypeScript", "SCSS"]
languagePcts: [49, 49]
topics: ["design-system", "javascript", "web-components", "design-tokens", "style-dictionary", "lyne", "lyne-design-tokens"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 8
watchers: 11
contributors: 14
recentReleases: 0
createdAt: "2020-04-05T06:50:23Z"
lastCommitAt: "2026-07-23T00:35:14Z"
lastReleaseAt: "2024-05-28T11:10:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch"]
healthScore: 97
undervaluedScore: 72
maintainers: ["renovate[bot]", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/94ecff2626cbcf2782650b86e442f85f80365565f317e9594f200f62bfb161f6/sbb-design-systems/lyne-design-tokens"
---

# Lyne Design Tokens

Automatically generate cross-platform Design Tokens for the Lyne Design System based json properties files
and publish them as `@sbb-esta/lyne-design-tokens` npm package.

## Installation

Install the Lyne Design Tokens with the following command:

```bash
npm install --save-dev @sbb-esta/lyne-design-tokens
```

## What's included

```
lyne-design-tokens/
├── composed-variables/                             # Composed CSS variables like responsive tokens
├── designTokens/                                   # Token source files
└── dist/                                           # These files get built through the build task and get published via npm — are part of the npm package
    ├── css/
    │    ├── sbb-variables.css                      # `sbb-` prefixed CSS variables with :root selector
    ├── js/
    │    ├── sbb-tokens-raw.json                    # `sbb-` prefixed nested .json file
    │    ├── sbb-tokens.js                          # `Sbb` prefixed flat esm file
    │    ├── sbb-tokens.d.ts                        # `Sbb` prefixed flat type declaration
    │    └── sbb-tokens.json                        # `sbb-` prefixed flat .json file
    └── scss/…
