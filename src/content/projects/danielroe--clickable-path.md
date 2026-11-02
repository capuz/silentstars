---
repo: "danielroe/clickable-path"
name: "clickable-path"
description: "Zero-dependency package to print paths as OSC 8 hyperlinks."
readmeQualityOk: true
url: "https://github.com/danielroe/clickable-path"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["cli", "osc8"]
stars: 22
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-07-26T15:25:56Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-09-03T18:54:32Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 76
undervaluedScore: 34
maintainers: ["renovate[bot]", "danielroe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/danielroe/clickable-path"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# clickable-path

> Make the file paths your CLI prints ctrl/cmd-clickable

CLIs print paths, but making them open can be tricky.

Thankfully, [OSC 8 hyperlinks](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda) exist. They point at an invisible absolute `file://` URL.

`clickable-path` is a zero-dependency package to print paths as OSC 8 hyperlinks if your terminal supports them, falling back to a plain label if not.

## Usage

```sh
npm install clickable-path
```

> [!NOTE]
> Requires Node 22.1 or newer, which is where `pathToFileURL` gained the `windows` option used to convert Windows-shaped paths on any platform.

```js
import { link } from 'clickable-path'

console.log(`Building ${link('/home/me/project/nuxt.config.ts')}`)
// -> label `nuxt.config.ts`, linking file:///home/me/project/nuxt.config.ts

console.log(link('src/index.ts', { line: 12 }))
// -> label `src/index.ts:12`, linking file:///home/me/project/src/index.ts#L12
```

### API

#### `link(path, options?)`

Wraps `path` in an OSC 8 hyperlink pointing at it on disk, labelled with the `cwd`-relative form (plus `:<line>:<column>` if given) or with whatever `options.formatter` returns. Relative input…
