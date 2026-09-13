---
repo: "ByteProject/Arcturus"
name: "Arcturus"
description: "New tricks for the Infocom Z-machine"
readmeQualityOk: true
url: "https://github.com/ByteProject/Arcturus"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 14
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-27T06:53:47Z"
lastCommitAt: "2026-09-13T08:30:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["ByteProject"]
openGraphImageUrl: "https://opengraph.githubassets.com/fba9ce5190d95c83cb07169d902fec00676492a355952dfbfdf8b15cabbd154c/ByteProject/Arcturus"
---

</p>

# Arcturus

**Arcturus is a programming language and compiler for the Infocom Z-machine.**

It is a high-level, readable language for writing interactive fiction: text
adventures in the tradition of *Zork* and the modern works that still run on the
Z-machine. You describe a world (rooms, things, verbs, and the behavior that
hangs off them) and the compiler produces a standard Z-machine story file that
plays on Frotz, Ozmoo, Eris, Vezza and other interpreters, old and new.

Arcturus is designed and written by **Stefan Vogt**. The compiler is written in
Python and depends only on the standard library, so it runs anywhere Python
does, with nothing to install. The standard library, **Cosmos**, is written in
Arcturus itself and ships as editable source rather than a black box.

Arcturus compiles to highly optimized Z-code that performs well on classic
8-bit hardware, and at the same time modernizes the platform's authoring.
Some of its comforts the platform otherwise knows only from modern systems
such as Dialog and Inform 7.

Arcturus games can carry **images** in z5 and z8 story files while staying
fully standard-compliant; how that works, and what plays them, is in the…
