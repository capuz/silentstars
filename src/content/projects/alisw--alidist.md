---
repo: "alisw/alidist"
name: "alidist"
description: "Recipes to build ALICE software"
readmeQualityOk: true
url: "https://github.com/alisw/alidist"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
topics: ["alice-experiment", "hep", "cern", "physics"]
stars: 31
forks: 184
openIssues: 13
closedIssues: 346
watchers: 17
contributors: 121
recentReleases: 0
createdAt: "2015-06-24T09:09:42Z"
lastCommitAt: "2026-07-12T06:15:44Z"
lastReleaseAt: "2020-02-06T06:44:40Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 65
maintainers: ["alibuild", "ktf", "vkucera"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2ad86b5bf645cecc18be60f78ce8aad201997018248e5a291c34df560d72cae/alisw/alidist"
discussionCount: 3
---

# alidist
Recipes to build ALICE SW

# Stability guarantees of the various branches and tags
1. Tags are immutable. Under no circumstances tags should be moved. If it happens, this should be explicitly documented and possibly rolled back.
2. The master branch is supposed to always be able to build O2, O2Physics and the O2DPG packages using the `o2` and `o2-epn` defaults. The goal of the master branch is to allow the wider possible audience to use it for development and eventually tagging, when deemed necessary. In particular it should always build on the ALICE production platform, Alma Linux 9.
3. Changes should always be discussed and agreed with the stakeholders. The only case in which a stakeholder approval can be bypassed is if some external force (OS updates breaking things for many people, data taking fixes) breaks the requirement in 2 and an urgent patch is needed to allow many people to be back in business.
4. While there should not be any deliberate attempt to break things, there is no guarantee that the master branch is validated for physics production, please follow up in the appropriate forum whether or not a given tag / commit is good for production.
5. If something…
