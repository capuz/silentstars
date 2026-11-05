---
repo: "SimonSiefke/vscode-memory-leak-finder"
name: "vscode-memory-leak-finder"
description: "Find memory leaks in VS Code"
readmeQualityOk: true
url: "https://github.com/SimonSiefke/vscode-memory-leak-finder"
homepage: "https://simonsiefke.github.io/vscode-memory-leak-finder/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["memory-leak", "vscode"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-04-18T06:58:27Z"
lastCommitAt: "2026-11-05T00:21:27Z"
lastReleaseAt: "2023-08-12T15:28:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 68
maintainers: ["SimonSiefke"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ab6b967822540b1efbe4b352a4b4dff8a618dc8eed24a5df208b17e0b4a9f3e/SimonSiefke/vscode-memory-leak-finder"
---

# VSCode Memory Leak Finder

Find memory leaks in vscode to improve robustness and performance.

### Large Performance Measure

See the [`large-benchmark` package documentation](https://github.com/SimonSiefke/vscode-memory-leak-finder/blob/HEAD/packages/large-benchmark/README.md)
for workflow usage, benchmark coverage, requirements, and local examples.

## Quickstart

```sh
git clone git@github.com:SimonSiefke/vscode-memory-leak-finder.git &&
cd vscode-memory-leak-finder &&
npm ci &&
npm run e2e
```

## Electron e2e tests

Measure a standalone Electron app's main process, with a cached runtime and workspace:

```sh
npm run e2e:electron -- --only window-open-close --measure named-function-count3 --runs 5 --check-leaks
```

See [Electron e2e documentation](https://github.com/SimonSiefke/vscode-memory-leak-finder/blob/HEAD/packages/electron-e2e/README.md) for cache behavior,
process verification, results, and adding scenarios.

## Language-server processes

On Linux, `--inspect-process` can measure a Node child of the VS Code instance under test, including its JSON language server:

```sh
node packages/cli/bin/test.js --only json-hover --run-skipped-tests-anyway --inspect-process…
