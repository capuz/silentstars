---
repo: "KingslayerKyle/hash-slinging-slasher"
name: "hash-slinging-slasher"
description: "Finding the names for hashed assets in CoD games"
readmeQualityOk: true
url: "https://github.com/KingslayerKyle/hash-slinging-slasher"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [70, 29]
stars: 11
forks: 20
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 20
recentReleases: 0
createdAt: "2026-08-18T20:18:58Z"
lastCommitAt: "2026-08-29T17:26:40Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 57
maintainers: ["KingslayerKyle", "github-actions[bot]", "Hexeption"]
openGraphImageUrl: "https://opengraph.githubassets.com/87511d78c8725ff56ffc54e9f48cde7dc3c98dd3cfd8545b82ad532cb6801d56/KingslayerKyle/hash-slinging-slasher"
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
