---
repo: "projectwallace/stylelint-plugin"
name: "stylelint-plugin"
description: "A stylelint plugin pack that checks the complexity of your CSS."
readmeQualityOk: true
url: "https://github.com/projectwallace/stylelint-plugin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 14
forks: 0
openIssues: 5
closedIssues: 85
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-12-08T20:25:33Z"
lastCommitAt: "2026-11-07T13:54:56Z"
lastReleaseAt: "2026-03-25T19:28:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 65
maintainers: ["bartveneman", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/729290363/7389c659-33eb-4539-a6a0-3ebb4d226b0d"
---

# @projectwallace/stylelint-plugin

A stylelint plugin that checks the complexity, design tokens, maintainability and correctness of your CSS.

- 📏 Over 50 rules to keep your CSS in check
- ⚙️ 5 configuration presets for different concerns
- 🌲 Fully tree-shakeable — only pay for what you use
- ⚡ Powered by `@projectwallace/css-parser` for fast parsing of selectors, values and at-rule preludes
- 🔬 Same battle-tested analysis engine as `@projectwallace/css-analyzer`
- 🚀 Zero config to get started — one `extends` line covers you with sensible defaults
- 🗂️ Whole-stylesheet analysis — reasons about ratios, averages and uniqueness counts across the entire file, not just node-by-node
- ✅ Compatible with Stylelint 16, 17 and 18

> [!TIP]
> For the most accurate results, lint your **shipped CSS bundle(s)** rather than source files. Rules that measure file size, uniqueness counts, and ratios mostly make sense against the CSS your users actually receive. See [Holistic linting](#holistic-linting) for setup examples.

## Installation

```sh
npm install --save-dev @projectwallace/stylelint-plugin
```

## Usage

### Using a preset config (recommended)

The easiest way to get started is by…
