---
repo: "netdata/netdata-ui"
name: "netdata-ui"
description: "netdata-uikit"
readmeQualityOk: true
url: "https://github.com/netdata/netdata-ui"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 42
forks: 16
openIssues: 0
closedIssues: 13
watchers: 15
contributors: 28
recentReleases: 0
createdAt: "2019-10-07T17:49:58Z"
lastCommitAt: "2026-09-18T08:26:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 44
maintainers: ["novykh", "kapantzak", "ktsaou"]
openGraphImageUrl: "https://opengraph.githubassets.com/c22497df02528bac87ff5cfc60dec2e2c422f110e447c8d3b6f9202b3da68266/netdata/netdata-ui"
---

# Netdata UI kit

## Development process

- `squash-merge` is a default PR merge strategy
- after any merge, NPM version should be published (in future to be moved to CI)
- versions are `major` (breaking changes, large refactors), `minor` (new component added), and `patch` (small changes)
- please add declaration of exported components to provide nice typings for users.
- To deploy on  gh-pages checkout to deploy/storybook branch, rebase with master and run deploy-storybook

```typescript
// BAD
export const MyComponent = (props: PropsT) => <>...</>

// GOOD
export const MyComponent: FC<PropsT> = (props: PropsT) => <>...</>
```

## Playground

You can find latest **master** storybook playground [here](https://netdata.github.io/netdata-ui/)

## Components

- [Theme and theme utils](https://github.com/netdata/netdata-ui/blob/master/src/theme)
- [Icon](https://github.com/netdata/netdata-ui/blob/master/src/components/icon)
- [Sidebar PortalSidebar](https://github.com/netdata/netdata-ui/blob/master/src/components/sidebar)
- [Checkbox](https://github.com/netdata/netdata-ui/tree/master/src/components/checkbox)
-…
