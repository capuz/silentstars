---
repo: "sbb-design-systems/lyne-design-tokens"
name: "lyne-design-tokens"
description: "🧪 Manages and publishes Design Tokens for Lyne Design System"
url: "https://github.com/sbb-design-systems/lyne-design-tokens"
language: "TypeScript"
languages: ["TypeScript", "SCSS"]
languagePcts: [49, 49]
topics: ["design-system", "javascript", "web-components", "design-tokens", "style-dictionary", "lyne", "lyne-design-tokens"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 9
watchers: 11
contributors: 15
recentReleases: 0
createdAt: "2020-04-05T06:50:23Z"
lastCommitAt: "2026-06-26T23:29:57Z"
lastReleaseAt: "2024-05-28T11:10:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch"]
healthScore: 97
undervaluedScore: 72
maintainers: ["renovate[bot]", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eafa4c17c3c1772e4f41cbedd639983382f6e256a741d80f8d63392e4d3db315/sbb-design-systems/lyne-design-tokens"
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
