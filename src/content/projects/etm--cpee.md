---
repo: "etm/CPEE"
name: "CPEE"
description: "Cloud Process Execution Engine"
url: "https://github.com/etm/CPEE"
language: "JavaScript"
languages: ["JavaScript", "Ruby"]
languagePcts: [44, 29]
stars: 10
forks: 3
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2020-10-02T18:04:07Z"
lastCommitAt: "2026-06-23T23:30:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 73
maintainers: ["etm", "xenophile127"]
openGraphImageUrl: "https://opengraph.githubassets.com/2235153ff7b25278279b2eddbaba2bdbabd9b4da28033429be75709544ae26e1/etm/CPEE"
---

All code in this package is provided under the LGPL-3 license.
Please read the file COPYING in the main directory.

Tested for MRI 2.6, >= 2.7

Searching for mem-leaks:
  valgrind --num-callers=50 --error-limit=no --partial-loads-ok=yes --undef-value-errors=no ./server/server.rb -v start
