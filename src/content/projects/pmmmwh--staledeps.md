---
repo: "pmmmwh/staledeps"
name: "staledeps"
description: "Find stale dependencies in the package.json file(s)."
readmeQualityOk: true
url: "https://github.com/pmmmwh/staledeps"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 9
forks: 1
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-01-11T08:24:55Z"
lastCommitAt: "2026-08-31T10:00:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 59
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/632997b112c0ba238a426fa9586c4d4c3ab9122a88500ca3f1f62c2b55c540fa/pmmmwh/staledeps"
---

# staledeps

[license:badge]: https://img.shields.io/github/license/pmmmwh/staledeps
[npm:latest]: https://www.npmjs.com/package/staledeps/v/latest
[npm:latest:badge]: https://img.shields.io/npm/v/staledeps/latest

Find stale dependencies in the package.json file(s).

## Installation

```
npm install -g staledeps
```

Or simply using [npx](https://docs.npmjs.com/cli/v8/commands/npx), the package runner bundled with `npm`:

```
$ npx staledeps
```

_Note:_ `staledeps` requires Node.js >= 18.

## Usage

```
Usage: staledeps <path(s)> [options]

Options:
      --version    Show version number                                 [boolean]
  -h, --help       Show help                                           [boolean]
  -d, --sort-dir   Direction to sort data
                                       [choices: "asc", "desc"] [default: "asc"]
  -f, --full       Show full report (including non-stale dependencies)
                                                      [boolean] [default: false]
  -o, --output     Format to output data
                                   [choices: "json", "table"] [default: "table"]
  -r, --registry   URL of registry to check against…
