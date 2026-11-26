---
repo: "OXtal/oxtalign"
name: "oxtalign"
description: "Fast, open RMSD_n crystal-packing similarity for molecular crystals (OXtalign)"
readmeQualityOk: true
url: "https://github.com/OXtal/oxtalign"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 24
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-09-18T08:31:16Z"
lastCommitAt: "2026-11-26T23:32:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 8
maintainers: ["pchliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3c3e6481fc47d887895d31ecb82eb3c7363877f332efdfb387244bb793fee52/OXtal/oxtalign"
---

# OXtalign

**Fast, open RMSD_n packing comparisons for crystals.**

**Try it in your browser:** <https://oxtal.github.io/oxtalign/>. Compare two structures or score a batch of
predictions without installing anything; files stay on your device.

## What it does

RMSD_n is the standard similarity metric in crystal structure prediction (CSP), as implemented in CCDC's
COMPACK (Chisholm & Motherwell, *J. Appl. Cryst.* **38**, 228–231, 2005): take a molecule in crystal A with
its *n* − 1 nearest neighbours, and search for a rigid motion that superimposes that shell onto crystal B.
The comparison yields two numbers: **how many of the *n* molecules land within 1 Å of a counterpart**, and
**RMSD_n**, the root-mean-square atomic deviation over the molecules that do.

OXtalign is a fast, open Python implementation (gemmi + numpy + scipy) from the team behind
[OXtal](https://github.com/OXtal/OXtal). Why use it:
