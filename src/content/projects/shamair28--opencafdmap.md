---
repo: "shamair28/OpenCAFDMap"
name: "OpenCAFDMap"
description: "Readable coding names in E-Sys again: community name list + launcher that labels trimmed CAFDs from your own psdzdata, plus a BimmerCode backup editor"
readmeQualityOk: true
url: "https://github.com/shamair28/OpenCAFDMap"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [68, 29]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-11-09T23:32:42Z"
lastCommitAt: "2026-11-13T18:35:36Z"
lastReleaseAt: "2026-11-13T18:36:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 47
maintainers: ["shamair28", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1125d9dda4314622657226a3e6acab8b15bd7331538fa88da42ab8da51c60a0/shamair28/OpenCAFDMap"
---

# Open CAFD Map

Readable coding names in E-Sys again, built from your own psdzdata and a shared, community-maintained list of names.

Current psdzdata ships CAFDs with every FDL name trimmed to `.`. E-Sys then shows a tree of dots. Open CAFD Map rebuilds what it can on your own machine:

- **Value labels from BMW's own coding rules.** Every value still carries the rule that selects it, and it's turned into readable text. For example `wert_02 [SA5AC]` means "value 2, coded when option 5AC is fitted". `[n/a here]` means the rule never applies to your reference vehicle class.
- **Names from the community.** `names\*.tsv` holds group, function and value names people have found: BimmerCode, screenshots, coding tables, backup diffs. Each name is keyed by CAFD id + datagroup + byte + mask, so it applies to every software version that has that function.
- **Contributed definition XMLs and cheat sheets.** `definitions\` holds definition files and cheat sheets people have shared, including the public community cheat sheets (GPL-3.0). `names\cheatsheet\` adds BMW names from a cheat sheet whose file can't be shipped. Their names are merged in the same way. A contributed definition is also…
