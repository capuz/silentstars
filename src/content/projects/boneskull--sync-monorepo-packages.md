---
repo: "boneskull/sync-monorepo-packages"
name: "sync-monorepo-packages"
description: "Synchronizes one or more fields between package.json files in a monorepo"
readmeQualityOk: true
url: "https://github.com/boneskull/sync-monorepo-packages"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["lerna", "monorepo", "packages", "package-json", "sync", "synchronize", "metadata", "manifest", "workflow", "copy"]
stars: 12
forks: 0
openIssues: 3
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2019-10-21T21:40:51Z"
lastCommitAt: "2026-10-04T10:00:56Z"
lastReleaseAt: "2026-05-26T18:18:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 64
maintainers: ["renovate[bot]", "boneskull", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dd905ddd966ef531366c38522b5f4f4834a20184b0a4bddf0994e879b1a55ec/boneskull/sync-monorepo-packages"
---

# sync-monorepo-packages

> Synchronizes `package.json` fields and arbitrary files in a monorepo

## Features

- Auto-discovery of packages via `package.json` workspaces and/or `lerna.json`
- Optional manual control of destination packages
- Helpful defaults
- Detailed "dry run" mode
- Summary of operations
- Sync arbitrary files (e.g. `README.md`)

## Install

**Requires Node.js `>=22.5.1`**

```shell
npm install sync-monorepo-packages --save-dev
```

or

```shell
npx sync-monorepo-packages --help
```

## Usage

### CLI

```plain
sync-monorepo-packages v2.0.0
  Synchronize files and metadata across packages in a monorepo

USAGE
  $ sync-monorepo-packages [options]

OPTIONS
  -D, --dry-run          Do not sync; print what would have changed (implies --verbose)  [boolean]
  -f, --fields, --field  Fields in source package.json to sync  [string[]] default: ["keywords","author","repository","license","engines","publishConfig"]
      --force            Overwrite destination file(s)  [boolean]
  -l, --lerna            Path to lerna.json, if any  [string]
      --no-package-json  Sync package.json  [boolean] default: true
  -p, --packages         Dirs/globs containing destination…
