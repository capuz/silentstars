---
repo: "unpunnyfuns/swatchbook"
name: "swatchbook"
description: "Storybook Addon for DTCG design tokens"
url: "https://github.com/unpunnyfuns/swatchbook"
homepage: "https://unpunnyfuns.github.io/swatchbook/"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [71, 23]
topics: ["design-system", "design-tokens", "storybook", "storybook-addon"]
stars: 19
forks: 1
openIssues: 5
closedIssues: 616
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-17T08:09:33Z"
lastCommitAt: "2026-07-04T19:19:46Z"
lastReleaseAt: "2026-04-19T04:13:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 55
maintainers: ["unpunnyfuns", "swatchbook-release-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a5500796db3f6310aed6d6bf3085c3492e2192aa337f405422f395cdd9499dc/unpunnyfuns/swatchbook"
discussionCount: 1
---

# swatchbook

A Storybook addon and MDX doc blocks for visualising [DTCG design tokens](https://www.designtokens.org/TR/2025.10/).

Built on [Terrazzo](https://terrazzo.app/)'s parser. Your production build runs Terrazzo's CLI against the same DTCG source; swatchbook reads it too, inside Storybook.

If your stories already style with CSS variables, they pick up the toolbar's axis flips automatically. That's mostly what the tool does.

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
| [`@unpunnyfuns/swatchbook-addon`](./packages/addon) | Storybook 10 addon. Re-exports the blocks + switcher React surface. |
| [`@unpunnyfuns/swatchbook-core`](./packages/core) | Framework-free DTCG loader. |
|…
