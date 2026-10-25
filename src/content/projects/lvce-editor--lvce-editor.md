---
repo: "lvce-editor/lvce-editor"
name: "lvce-editor"
description: "VS Code inspired text editor that mostly runs in a webworker"
readmeQualityOk: true
url: "https://github.com/lvce-editor/lvce-editor"
homepage: "https://lvce-editor.github.io/lvce-editor"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 38]
topics: ["editor", "electron", "javascript"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2022-06-16T20:48:52Z"
lastCommitAt: "2026-10-25T22:11:50Z"
lastReleaseAt: "2022-06-24T16:18:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 76
maintainers: ["lvce-editor-helper-bot[bot]", "levivilet"]
openGraphImageUrl: "https://opengraph.githubassets.com/e226aa403e9a1ec496def63cbc662f463880411c7fb28a443d20dd5fe4543cc5/lvce-editor/lvce-editor"
---

# LVCE Editor

VS Code inspired text editor that mostly runs in a webworker.

## Contributing

```sh
git clone git@github.com:lvce-editor/lvce-editor.git &&
cd lvce-editor &&
npm ci &&
npm test
```

Package repository hosting is graciously provided by [Cloudsmith](https://cloudsmith.com).
Cloudsmith is the only fully hosted, cloud-native, universal package management solution, that
enables your organization to create, store and share packages in any format, to any place, with total
confidence.

### Developing with the native TypeScript server

For `typescript.useTs7`, prepare the development checkout with `node packages/build/scripts/prepare-typescript-language-server.ts`. Packaged desktop applications include the pinned server for their target OS and architecture. Generic npm server packages remain platform-neutral; native mode requires a prepared native host. The TypeScript extension archive contains no native executable.
