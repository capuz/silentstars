---
repo: "Toyz/fkit"
name: "fkit"
description: "A content-addressed version control system and forge — chunked Merkle trees, packed segments, inclusion proofs."
readmeQualityOk: true
url: "https://github.com/Toyz/fkit"
homepage: "https://fkit.work/helba/fkit"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [63, 35]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-28T04:49:51Z"
lastCommitAt: "2026-08-30T09:24:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["Toyz"]
openGraphImageUrl: "https://opengraph.githubassets.com/c489005a4a6613f48d31224de793d2a8579467246240a08b6bbe93a18bce8cbd/Toyz/fkit"
---

# fkit

A content-addressed store with git-shaped commands on top, for the repositories
git handles badly: the ones with large files in them.

Change one byte of a 12 MB file and it writes **4 objects, 18.5 KiB** — because
a file is a Merkle tree over content-defined chunks, not one opaque blob. Point
it at a 154 GiB tree of build output and disk images and it stores **1.2 GB**,
128× smaller, almost entirely from noticing the same bytes twice.

For ordinary source history git is smaller, by 3.7×, because it deltas versions
against each other and this does not. That is a [deliberate
trade](#not-done-yet) with the arithmetic written out, not an oversight.

```
fkit init                 fkit commit -m "..."      fkit push
fkit status               fkit log                  fkit pull
fkit switch <branch>      fkit merkle <hash>        fkit clone ws://host/repo
fkit submodule add <url> <path>                     fkit gc
```

## What makes it different from git

Git is *almost* content-addressed: objects are named by hash, but a file is
stored as one whole blob. Change one byte of a 400 MB file and git writes a new
400 MB object, clawing the space back later with delta compression…
