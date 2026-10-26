---
repo: "metamath/set.mm"
name: "set.mm"
description: "Metamath source file for logic and set theory"
readmeQualityOk: true
url: "https://github.com/metamath/set.mm"
language: "HTML"
languages: ["HTML", "Objective-C++"]
languagePcts: [59, 36]
stars: 337
forks: 111
openIssues: 133
closedIssues: 321
watchers: 21
contributors: 67
recentReleases: 0
createdAt: "2015-05-12T12:48:55Z"
lastCommitAt: "2026-10-26T03:03:15Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 37
maintainers: ["jkingdon", "BTernaryTau", "benjub"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf15aa26859973654bda62dc3a098daa9715f809994df5da3f0171f486482574/metamath/set.mm"
---

# Metamath set.mm repository

This is a collection of rigorously verified [Metamath](https://us.metamath.org/)
databases that specify mathematical axioms and
formal proofs of theorems derived from those axioms.

## What is Metamath?

Metamath is a computer language and associated computer program for
archiving, verifying, and studying mathematical proofs.

Unlike some other systems, Metamath does not build a particular set
of axioms into the system. Instead, the Metamath language is simple and robust,
with an almost total absence of hard-wired syntax.
In Metamath you express the axioms, theorems, and their proofs in a database
(set of text files).
To prove a theorem, every proof step *must* be proven using an axiom or
a previously proven theorem; as a result, nothing is hidden.
We believe Metamath provides about the simplest possible framework that
allows essentially all of mathematics to be expressed with absolute rigor.

The resulting databases provide human-readable axioms and theorem statements.
We compress proofs in this repository, so their proofs take relatively
little space, but tools can easily decompress them to provide a human-readable
sequence of every proof step.…
