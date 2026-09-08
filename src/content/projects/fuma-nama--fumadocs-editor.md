---
repo: "fuma-nama/fumadocs-editor"
name: "fumadocs-editor"
description: "Experimental editor project for Fumadocs"
readmeQualityOk: true
url: "https://github.com/fuma-nama/fumadocs-editor"
homepage: "https://editor.fumadocs.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 8
createdAt: "2026-08-30T09:07:50Z"
lastCommitAt: "2026-09-08T08:15:53Z"
lastReleaseAt: "2026-09-08T08:16:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["fuma-nama", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/411b9dcbfd77bb63413a2b6124e86028e4f318391dca8e7faaa9c90969428e7e/fuma-nama/fumadocs-editor"
---

# fumadocs-editor

A WYSIWYG editor for Fumadocs MDX.

> [!WARNING]
> **Experimental.** This project is still in early stage, breaking changes expected for future v1 release.

| Package                                  |                                   |
| ---------------------------------------- | --------------------------------- |
| [`@fumadocs-editor/ui`](https://github.com/fuma-nama/fumadocs-editor/blob/HEAD/packages/ui)     | React editor                      |
| [`@fumadocs-editor/core`](https://github.com/fuma-nama/fumadocs-editor/blob/HEAD/packages/core) | parse, serialize, component specs |

Docs: https://editor.fumadocs.dev.

## Development

```bash
pnpm install
pnpm dev          # playground with the FS mirror on docs/
pnpm test
pnpm build        # includes the playground size-budget assertions
```

## License

MIT
