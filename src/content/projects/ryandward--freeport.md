---
repo: "ryandward/freeport"
name: "freeport"
description: "Strip age verification infrastructure from Linux packages. Arch first, distro agnostic by design."
readmeQualityOk: true
url: "https://github.com/ryandward/freeport"
homepage: "https://ryandward.github.io/freeport/"
language: "Shell"
languages: ["Shell", "Rust"]
languagePcts: [79, 21]
topics: ["age-verification", "arch-linux", "foss", "freedom", "linux", "pacman", "privacy", "surveillance", "systemd", "ab-1043"]
stars: 13
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-21T06:48:16Z"
lastCommitAt: "2026-09-06T08:03:08Z"
lastReleaseAt: "2026-03-25T16:11:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 39
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/2c7075583335cec99f3590d319ce97edcd024b9ffc910c36cb20cf2794865934/ryandward/freeport"
discussionCount: 0
---

</p>

# freeport

**[https://ryandward.github.io/freeport](https://ryandward.github.io/freeport/)**

Linux is not a person. It does not have a birthday.

Asking your operating system to store a birth date is like asking a
bridge to carry a passport. Linux runs server farms, HPC clusters,
containers, CI pipelines, embedded controllers, and network
appliances. Somebody decided that all of these machines need a
`birthDate` field in their system packages. We remove it.

## The problem

Legislation in multiple US states and Brazil requires operating
systems to collect user birth dates and expose age brackets through
a real time API. In response, `birthDate` fields, D-Bus interfaces,
and installer prompts are being added to core open source packages
like systemd, accountsservice, and xdg-desktop-portal.

| State | Bill | Status |
|-------|------|--------|
| California | AB 1043 | Enacted, effective Jan 1, 2027 |
| Colorado | SB 26-051 | Passed Senate, in House committee |
| Louisiana | HB 570 | Enacted, effective July 1, 2026 |
| Utah | SB 142 | Enacted |
| New York | S8102A | Pending |
| Illinois | HB 3304, HB 4140, SB 2037 | Pending |
| Federal | KOSA, ASAA | Pending |
| Brazil | Lei…
