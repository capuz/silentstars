---
repo: "tetogon/Palimpsest"
name: "Palimpsest"
description: "Encrypted notes, diary and to-dos for Android with deniable vaults"
readmeQualityOk: true
url: "https://github.com/tetogon/Palimpsest"
language: "Kotlin"
languages: ["Kotlin", "Rust"]
languagePcts: [71, 29]
topics: ["android", "deniable-encryption", "diary", "encryption", "jetpack-compose", "kotlin", "notes", "privacy", "rust"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-10-13T13:46:12Z"
lastCommitAt: "2026-11-12T11:38:42Z"
lastReleaseAt: "2026-10-25T17:11:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 35
maintainers: ["tetogon"]
openGraphImageUrl: "https://opengraph.githubassets.com/a047166878808fc68a102ea40ba193d78df942fd798d795c59acb2f0cb733a29/tetogon/Palimpsest"
---

# Palimpsest

An encrypted diary and notes app for Android with **deniable vaults**: one password field,
any number of vaults, and no way to tell from the file how many there are.

> **Experimental. Not audited.** Palimpsest protects against a curious partner, a thief and a
> quick border check. It does not protect against a forensic lab, spyware on the phone, or
> someone who will keep demanding passwords until they believe you. If an adversary gets the
> password of a decoy vault, even one copy of the file can give a hidden vault away by how
> much the file grew over its life; several copies from different moments do so more easily.
> Use the decoy more than the hidden vault. Details are in the
> [threat model](https://github.com/tetogon/Palimpsest/blob/HEAD/docs/threat-model.md) and the [T5 simulation](https://github.com/tetogon/Palimpsest/blob/HEAD/docs/t5-simulation.md).

## The idea

Every password opens its own vault. Type the decoy password and you get a believable diary;
type another and you get the real one. The app never knows which is which, and neither does
anyone holding the file:

- the container is a pile of 4096-byte blocks that all look like random bytes: no…
