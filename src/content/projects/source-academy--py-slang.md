---
repo: "source-academy/py-slang"
name: "py-slang"
description: "Implementations of sublanguages of Python for SICPy"
readmeQualityOk: true
url: "https://github.com/source-academy/py-slang"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 10
openIssues: 27
closedIssues: 169
watchers: 3
contributors: 48
recentReleases: 3
createdAt: "2023-01-17T14:59:49Z"
lastCommitAt: "2026-10-08T10:51:56Z"
lastReleaseAt: "2026-07-31T13:52:46Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 97
maintainers: ["martin-henz", "dependabot[bot]", "Akshay-2007-1"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ab21912b4c17d8b4387ec651d97c32c78b15da606003fd6f1204494752da144/source-academy/py-slang"
---

# Python variant for SICP

## What is py-slang?

`py-slang` is a Python implementation developed specifically for the Source Academy online learning environment. Unlike previous versions where Python was treated as a subset within [js-slang](https://github.com/source-academy/js-slang), py-slang now stands as an independent language implementation. It features its own parser, csemachine, and runtime, designed to process a tailored subset of Python for educational purposes.

It contains multiple [engines](https://github.com/source-academy/py-slang/tree/main/src/engines) including the CSE machine, a WASM compiler and a PVML compiler.

## Usage

To create a production build, run

```shell
# prompts for the evaluator to build
yarn build

# OR

# specifies the evaluator to build (list given below)
yarn build --evaluator PyCseEvaluator1

# OR

# builds all evaluators
yarn build --all
```

For development builds, run

```shell
yarn dev

# OR

yarn dev --evaluator PyCseEvaluator1

# OR

yarn dev --all
```

The difference between `yarn build` and `yarn dev` is that `yarn dev` enters [watch mode](https://rollupjs.org/command-line-interface/#w-watch) after building the initial changes. It…
