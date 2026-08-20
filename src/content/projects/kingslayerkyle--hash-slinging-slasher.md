---
repo: "KingslayerKyle/hash-slinging-slasher"
name: "hash-slinging-slasher"
description: "Finding the names for hashed assets in CoD games"
readmeQualityOk: true
url: "https://github.com/KingslayerKyle/hash-slinging-slasher"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [75, 23]
stars: 8
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-08-18T20:18:58Z"
lastCommitAt: "2026-08-20T04:08:37Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 60
maintainers: ["KingslayerKyle", "GoastcraftHD", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a527871afcc99257f995098957a01a65e012f57c5bfb26fdbdb64682344b898/KingslayerKyle/hash-slinging-slasher"
---

# hash-slinging-slasher

       alt="The Hash-Slinging Slasher" width="360">
</p>

Call of Duty stores most of its asset names as hashes rather than text. The name is gone; only
the number survives. This recovers them — and proves each one against the real game, so what
comes out is a fact rather than a guess.

Currently **Black Ops Cold War** and **Black Ops 4** — and it grinds both. Left alone it
alternates between them, because Black Ops 4 actually has *more* unnamed assets in the types that
matter (141,889 against 136,467) and far less of it has been recovered so far.

## You do not need the game

This is the part worth understanding, because it is why anyone can help.

Confirming a name asks one question: *is the hash of this string the id of an asset the game
holds?* The answer is a set of numbers, and those numbers have already been captured — 1.6
million of them for Cold War, 1.0 million for Black Ops 4, in a file of a few megabytes.

Those numbers are committed here, in `snapshots/`. Both games are finished and will never be
patched again, so the capture was a one-off: these files are final, not a cache that goes stale.

So you need **no game, no Cordycep, no Saluki, and…
