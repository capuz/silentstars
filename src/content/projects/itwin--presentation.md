---
repo: "iTwin/presentation"
name: "presentation"
description: "Monorepo for iTwin.js Presentation Library"
readmeQualityOk: true
url: "https://github.com/iTwin/presentation"
homepage: "https://www.itwinjs.org/presentation/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 6
forks: 2
openIssues: 51
closedIssues: 370
watchers: 22
contributors: 34
recentReleases: 0
createdAt: "2022-11-18T15:15:53Z"
lastCommitAt: "2026-11-05T11:25:02Z"
lastReleaseAt: "2023-11-10T11:11:27Z"
status: "watched"
tags: ["needs_contributors", "community_watch"]
healthScore: 97
undervaluedScore: 66
maintainers: ["grigasp", "saskliutas", "JonasDov"]
openGraphImageUrl: "https://opengraph.githubassets.com/60a19030487dcc67e76907cff9dc06b9ffbce8ec808a224da403f5a5663453bd/iTwin/presentation"
discussionCount: 0
---

# Presentation

Presentation packages are part of the [iTwin.js library](https://www.itwinjs.org/). The packages' responsibility is to help application developers bring non-graphical [iModels'](https://www.itwinjs.org/learning/imodels/) data to users, by solving the following problems:

- Format property values according to user's preferences (language, locale, unit system, etc.).
- Calculate display labels for instances of different [ECClasses](https://www.itwinjs.org/bis/ec/ec-class/).
- Gather associated data from different areas of an iModel and return it in a way that's easy to present to users.
- Create hierarchies from [iModel](https://www.itwinjs.org/learning/imodels/) (and not only) data.
- Provide components to present non-graphical iModel data to users. This includes tree, table, property grid and some other components and their building blocks, including headless components for use with any UI components library.

## The packages

Initially, all presentation packages were part of the [itwinjs-core](https://github.com/iTwin/itwinjs-core) repository, releasing in lock-step with the core packages. At some point, some of the packages
were moved to this repository, which…
