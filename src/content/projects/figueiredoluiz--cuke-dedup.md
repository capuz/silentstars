---
repo: "figueiredoluiz/cuke-dedup"
name: "cuke-dedup"
description: "Fast static analysis for duplicate, ambiguous, and unused Cucumber step definitions."
readmeQualityOk: true
url: "https://github.com/figueiredoluiz/cuke-dedup"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [75, 21]
topics: ["cli", "cucumber", "duplicate-detection", "gherkin", "github-actions", "static-analysis"]
stars: 5
forks: 0
openIssues: 10
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-09-07T12:28:01Z"
lastCommitAt: "2026-10-21T08:49:13Z"
lastReleaseAt: "2026-09-24T01:36:25Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 85
undervaluedScore: 50
maintainers: ["figueiredoluiz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68f0ee8a62f52438c416e2cf3ac81b8da875656845f1a1187df5b56589d5f75a/figueiredoluiz/cuke-dedup"
fundingLinks: ["GITHUB:https://github.com/figueiredoluiz", "BUY_ME_A_COFFEE:https://buymeacoffee.com/figueiredoluiz"]
---

# CukeDedup

CukeDedup is a fast static analyzer for duplicate, ambiguous, reusable, and unused
Cucumber/Gherkin step definitions. It reads project configuration and test code without executing
either one.

It supports:

- JavaScript, JSX, TypeScript, and TSX step definitions; experimental, opt-in Cucumber-Ruby support.
- Cucumber.js, Playwright-BDD, Cypress Cucumber, Jest-Cucumber, and Vitest Cucumber Plugin projects.
- Classic `.feature` files and Gherkin Markdown `.feature.md` files.
- Terminal, JSON, JSON Lines, HTML, and SARIF reports.
- Thresholds, baselines, changed-file analysis, suppressions, and ignore files.

Ruby support is experimental. Select a single Ruby suite explicitly with `--definitions 'features/**/*.rb' --features 'features/**/*.feature'`, include its support files, and review findings before acting on them. See the [supported subset and known limitations](https://github.com/figueiredoluiz/cuke-dedup/blob/HEAD/docs/discovery-and-frameworks.md#cucumber-ruby).

## Install

With Cargo:

```sh
cargo install cuke-dedup
```

Or in a JavaScript project, using Node.js 24 LTS (recommended):

```sh
npm install --save-dev cuke-dedup
npx cuke-dedup .
```

Building from…
