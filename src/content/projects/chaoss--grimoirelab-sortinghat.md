---
repo: "chaoss/grimoirelab-sortinghat"
name: "grimoirelab-sortinghat"
description: "A tool to manage identities"
readmeQualityOk: true
url: "https://github.com/chaoss/grimoirelab-sortinghat"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 58
forks: 89
openIssues: 20
closedIssues: 346
watchers: 12
contributors: 33
recentReleases: 0
createdAt: "2014-10-01T12:12:30Z"
lastCommitAt: "2026-09-21T09:14:48Z"
lastReleaseAt: "2022-09-23T09:35:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 53
maintainers: ["sduenas", "dependabot[bot]", "jjmerchante"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc015678d1ce17f4300afdf3d1046bf67c4fdf0aecadd1bab7f61ffdb74ab9e2/chaoss/grimoirelab-sortinghat"
---

# Sorting Hat [](https://github.com/chaoss/grimoirelab-sortinghat/actions?query=workflow:tests+branch:main+event:push) [](https://badge.fury.io/py/sortinghat)

## Description

A tool to manage identities.

Sorting Hat maintains an SQL database of unique identities of communities members across (potentially) many different sources. Identities corresponding to the same real person can be merged in the same `individual`, with a unique uuid. For each individual, a profile can be defined, with the name and other data shown for the corresponding person by default.

In addition, each individual can be related to one or more affiliations, for different time periods. This will usually correspond to different organizations in which the person was employed during those time periods.

Sorting Hat is a part of the [GrimoireLab toolset](https://grimoirelab.github.io), which provides Python modules and scripts to analyze data sources with information about software development, and allows the production of interactive dashboards to visualize that information.

In the context of GrimoireLab, Sorting Hat is usually run after data is retrieved with…
