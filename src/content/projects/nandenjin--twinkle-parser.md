---
repo: "nandenjin/twinkle-parser"
name: "twinkle-parser"
description: "Parse CSV from https://kdb.tsukuba.ac.jp to structured JSON."
readmeQualityOk: true
url: "https://github.com/nandenjin/twinkle-parser"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["imagine-the-future", "university-of-tsukuba", "cli"]
stars: 10
forks: 1
openIssues: 7
closedIssues: 14
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2019-04-12T14:01:46Z"
lastCommitAt: "2026-09-18T23:05:29Z"
lastReleaseAt: "2021-01-03T06:50:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 61
maintainers: ["renovate[bot]", "nandenjin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/181019443/de684d80-6b3f-11e9-9a03-e3052f05cf91"
discussionCount: 0
---

<h1>twinkle-parser</h1>
  <p>
  </p>
  <p>Parse CSV from https://kdb.tsukuba.ac.jp to structured JSON.</p>
</div>

## Usage

### From CLI

#### Quick use

```shell
npx twinkle-parser data_from_kdb.csv
```

#### Global Install

```shell
# Install with NPM
npm install -g twinkle-parser

# Then
twinkle-parser data_from_kdb.csv
```

#### Use inside repo

```shell
# * Inside repo directory
# Install dependencies
npm install

# Parse
npm run parse data_from_kdb.csv
```

### As API

```shell
# Install with NPM
npm install twinkle-parser
```

```js
const parse = require('twinkle-parser')
const data = parse('CSV string here') // -> KDBData
```

### CLI options

| Option                      |                                                                   |
| --------------------------- | ----------------------------------------------------------------- |
| `-o PATH` / `--output PATH` | Export result to a file at the `PATH` instead of to stdout.       |
| `-p` / `--pretty`           | Prettify json output.                                             |
| `--fields`                  | Fields to be included (comma-separated, specifing all if not set) |
| `-h` / `--help`             | Print…
