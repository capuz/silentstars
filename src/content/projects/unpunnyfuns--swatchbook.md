---
repo: "unpunnyfuns/swatchbook"
name: "swatchbook"
description: "Storybook Addon for DTCG design tokens"
readmeQualityOk: true
url: "https://github.com/unpunnyfuns/swatchbook"
homepage: "https://unpunnyfuns.github.io/swatchbook/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["design-system", "design-tokens", "storybook", "storybook-addon"]
stars: 20
forks: 1
openIssues: 7
closedIssues: 660
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-17T08:09:33Z"
lastCommitAt: "2026-07-20T06:32:53Z"
lastReleaseAt: "2026-04-19T04:13:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 48
maintainers: ["unpunnyfuns", "swatchbook-release-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/14b70cd7b84ab87993499a20bbcde1024339d4aecf6d88db2d1da8ecce644617/unpunnyfuns/swatchbook"
discussionCount: 3
---

# swatchbook

A Storybook addon and MDX doc blocks for visualising [DTCG design tokens](https://www.designtokens.org/TR/2025.10/).

Built on [Terrazzo](https://terrazzo.app/)'s parser. Your production build runs Terrazzo's CLI against the same DTCG source; swatchbook reads it too, inside Storybook.

If your stories already style with swatchbook's token CSS variables, they pick up the toolbar's axis flips automatically.

**Documentation** · [unpunnyfuns.github.io/swatchbook](https://unpunnyfuns.github.io/swatchbook/)
**Live Storybook** · [/storybook](https://unpunnyfuns.github.io/swatchbook/storybook/)

## Install

```sh
npm install -D @unpunnyfuns/swatchbook-addon
```

One package pulls the whole React surface: toolbar, preview decorator, MDX doc blocks, `ThemeSwitcher`, `useToken()`. See the [Quickstart](https://unpunnyfuns.github.io/swatchbook/quickstart) for configuration.

## Packages

| Package | Purpose |
| --- | --- |
| [`@unpunnyfuns/swatchbook-addon`](https://github.com/unpunnyfuns/swatchbook/blob/HEAD/packages/addon) | Storybook 10 addon. Re-exports the blocks + switcher React surface. |
|…
