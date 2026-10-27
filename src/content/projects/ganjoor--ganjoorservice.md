---
repo: "ganjoor/GanjoorService"
name: "GanjoorService"
description: "Web service and website of Ganjoor"
originalDescription: "وب سرویس و سایت گنجور"
descriptionLang: "fa"
readmeQualityOk: true
url: "https://github.com/ganjoor/GanjoorService"
language: "C#"
languages: ["C#"]
languagePcts: [69]
topics: ["ganjoor", "museum", "manuscripts", "persian-literature"]
stars: 237
forks: 27
openIssues: 1
closedIssues: 487
watchers: 6
contributors: 10
recentReleases: 0
createdAt: "2020-08-14T16:52:19Z"
lastCommitAt: "2026-10-27T09:15:01Z"
lastReleaseAt: "2021-06-17T15:28:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 40
maintainers: ["hrmoh"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b8945473636899af34560bae54fce119a1d39e5bb72d9c8080b3b618cb53e46/ganjoor/GanjoorService"
discussionCount: 0
---

# GanjoorService
Ganjoor museum and ganjoor.net own backend (ASP.NET Core Web API) and frontend (Razor Pages) code

This code is the web service of [Ganjoor Museum](https://museum.ganjoor.net) and [Ganjoor](https://ganjoor.net), as well as the code of the Ganjoor website.

[List of available functions](https://api.ganjoor.net)

## Running it locally

New to this codebase and want to run your own copy? See **[RUNNING_LOCALLY.md](https://github.com/ganjoor/GanjoorService/blob/HEAD/RUNNING_LOCALLY.md)** for a full step-by-step guide — cloning, database setup, and Visual Studio configuration.

The one thing that guide covers in more depth but is worth knowing up front: **the production database is never published**, since it contains private/user-linked data. What *is* published is a git repository of the poetry content itself (poets, categories, poems — allowlisted, no user data): **[github.com/ganjoor/ganjoor-data](https://github.com/ganjoor/ganjoor-data)**. A fresh local install can pull real content from there via **Admin → Finance & Site → Import public data** (also reachable automatically the first time you run the site against an empty database) instead of starting from…
