---
repo: "bsommerfeld/pathetic"
name: "pathetic"
description: "The Java pathfinder that ended the era of “good enough”"
readmeQualityOk: true
url: "https://github.com/bsommerfeld/pathetic"
homepage: "https://docs.pathetic.site/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["astar", "java", "3d", "pathfinder", "grid"]
stars: 391
forks: 27
openIssues: 0
closedIssues: 18
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2022-01-13T19:17:19Z"
lastCommitAt: "2026-09-21T09:15:24Z"
lastReleaseAt: "2023-06-07T16:58:12Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 29
maintainers: ["bsommerfeld", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a32764f98ea826b56f1b65fee4744f59820210effcb86eeab22eae4668ac7140/bsommerfeld/pathetic"
fundingLinks: ["GITHUB:https://github.com/bsommerfeld"]
discussionCount: 1
---

# Pathetic 🥀

**The pathfinding library that's too good for this pathetic world.**

> “I used to use library X… then I tried Pathetic and suddenly my server stopped crying.” <br>
> — every future user, probably

### Listen up, peasants

**It exists for one simple reason:** The rest of the Java pathfinding world collectively shits itself above a few hundred concurrent requests.

| Scenario                 | Pathetic                | The "competition"            | Your tears                    |
| ------------------------ |-------------------------| ---------------------------- | ----------------------------- |
| 10k concurrent paths     | ~7 ms                   | ~300 ms +                    | Priceless                     |
| One 20k distance path    | ~43 ms                  | Minutes, timeout, or suicide | We measured twice             |
| One 40k distance path    | ~62 ms                  | Heat death of the universe   | Linear scaling, btw           |
| CPU when the world burns | <2% on 16 cores         | 20–100% or instant OOM       | Eco-mode                      |
| Memory                   | Spark shows a flat line | Hundreds of MB of GC tears   | Spark thinks nothing…
