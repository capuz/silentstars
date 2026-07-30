---
repo: "freckle/weeder-action"
name: "weeder-action"
description: "Run Weeder to uncover unused Haskell functions"
readmeQualityOk: true
url: "https://github.com/freckle/weeder-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["haskell", "actions", "ghvm-managed"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 4
watchers: 7
contributors: 15
recentReleases: 1
createdAt: "2021-11-16T14:18:05Z"
lastCommitAt: "2026-07-30T06:09:45Z"
lastReleaseAt: "2026-05-06T16:41:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 70
maintainers: ["renovate[bot]", "semantic-release-bot", "pbrisbin"]
openGraphImageUrl: "https://opengraph.githubassets.com/773a0797952b7f44f37e44a9a188c63ae4e562309c7b29a023dc2291d5e774b0/freckle/weeder-action"
---

# Weeder Action

GitHub Action to run Weeder to find any unused functions in a Haskell project
and annotate the Build with their locations.

## Prerequisites

See the [Weeder README][weeder] for project requirements.

[weeder]: https://github.com/ocharles/weeder#readme

You will need to run this step in the same Job as you compile your project, or
make the `.hie` files available some other way.

## Usage

```yaml
steps:
  - uses: actions/checkout@v4
  - id: stack
    uses: freckle/stack-action@v5
  - uses: freckle/weeder-action@v3
    with:
      ghc-version: ${{ steps.stack.outputs.compiler-version }}
```

## Inputs

| name                | description                                                               | required | default              |
| ------------------- | ------------------------------------------------------------------------- | -------- | -------------------- |
| `ghc-version`       | <p>Full version of GHC your project uses, to ensure HIE compatibility</p> | `true`   | `""`                 |
| `weeder-arguments`  | <p>Arguments to pass when invoking weeder</p>                             | `false`  | `--require-hs-files` |
| `working-directory` | <p>Change to…
