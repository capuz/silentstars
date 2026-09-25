---
repo: "ether/ep_headings2"
name: "ep_headings2"
description: "Headings Plugin for Etherpad"
readmeQualityOk: true
url: "https://github.com/ether/ep_headings2"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [55, 36]
stars: 16
forks: 20
openIssues: 2
closedIssues: 27
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2014-12-26T17:42:57Z"
lastCommitAt: "2026-09-25T09:02:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 71
maintainers: ["JohnMcLear", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/194d97a6d3ee4a5a2cc504c7efa541654ff0f38fede96830e463d66aac316f32/ether/ep_headings2"
---

# Section headings for Etherpad

An Etherpad Plugin to apply h1 etc. headings to a pad.

## Features

- [x] Test coverage
- [x] Linted
- [x] i18n (translations)
- [x] Import/export support
- [x] Copy/paste support
- [x] Shows active Heading
- [x] Maintained by the Etherpad Foundation

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_headings2` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_headings2
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.

## Copyright and License

Copyright the ep_headings2 authors and contributors.

Licensed under the [Apache License, Version 2.0](https://github.com/ether/ep_headings2/blob/HEAD/LICENSE) (the "License"); you
may not use this file except in compliance with the License. You may obtain a
copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed…
