---
repo: "finom/check-imports"
name: "check-imports"
description: "Finds missing, unused and misplaced dependencies by reading the imports of a JavaScript or TypeScript project, monorepos included"
readmeQualityOk: true
url: "https://github.com/finom/check-imports"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [65, 35]
topics: ["cli", "dependencies", "imports", "missing-dependencies", "monorepo", "nodejs", "npm", "package-json", "typescript", "unused-dependencies"]
stars: 29
forks: 4
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2019-08-28T09:45:56Z"
lastCommitAt: "2026-10-17T07:59:01Z"
lastReleaseAt: "2026-10-16T19:43:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 41
maintainers: ["finom", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6659547f8dcaa12e780410648a1fc029a4144a34680f23aa08417fa710cd8559/finom/check-imports"
---

# check-imports [](https://www.npmjs.com/package/check-imports) [](https://github.com/finom/check-imports/actions/workflows/ci.yml)

Reads the imports of a JavaScript or TypeScript project and reports, for each `package.json`:

- packages that files import but no section of the closest `package.json` lists;
- dependencies listed in `"dependencies"` that no file imports;
- packages that runtime code imports but only `"devDependencies"` lists.

With `--update` it fixes `package.json`: adds the missing packages at their latest version, removes the unused ones and moves the misplaced ones to `"dependencies"`.

It works with any number of `package.json` files, so a monorepo is checked in one run.

## TL;DR

```sh
npx check-imports
```

Requires Node.js 22.12 or later.

## How it works

1. **Finds the files.** The `.js`, `.jsx`, `.ts`, `.tsx`, `.mjs`, `.cjs`, `.mts` and `.cts` files in the directory (the current one, or `-d`). In a git repository the list comes from git, so what `.gitignore` lists is skipped: build output, caches, generated code. Outside a repository every file is read except `node_modules`. When a checked file imports an ignored file (a generated client, for example)…
