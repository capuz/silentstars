---
repo: "LR-POR/MorphoBr"
name: "MorphoBr"
description: "Resources for morphological analysis of Portuguese"
readmeQualityOk: true
url: "https://github.com/LR-POR/MorphoBr"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["morphology", "morphological-analyser", "morphological-analysis", "natural-language-processing", "syntactic-parsing", "brazilian-portuguese", "finite-state-transducer", "finite-state-transducers", "finite-state-automata", "finite-state-morphology"]
stars: 29
forks: 5
openIssues: 26
closedIssues: 82
watchers: 9
contributors: 7
recentReleases: 1
createdAt: "2018-03-16T19:28:44Z"
lastCommitAt: "2026-11-27T13:00:11Z"
lastReleaseAt: "2026-11-26T14:12:40Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 58
maintainers: ["arademaker", "dependabot[bot]", "analununes"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bab41f8f532d07595b675f84ce46831a7bde33dbfa64159983632b9b84def86/LR-POR/MorphoBr"
---

# MorphoBr

**Resources for the morphological analysis of Portuguese.** MorphoBr is a
large-coverage lexicon of Portuguese word forms and their analyses (lemma,
part of speech and inflectional features), which compiles into a single
finite-state transducer for morphological analysis and generation.

Authors: Leonel F. de Alencar, Alexandre Rademaker, Bruno Cuconato.

## Contents

| Class | Lemmas | Pairs (form, analysis) |
|---|---:|---:|
| Nouns | 83,703 | 537,578 |
| Adjectives | 55,468 | 543,778 |
| Verbs | 28,095 | 2,052,004 |
| Adverbs | 21,146 | 21,181 |
| Verbs with clitics | 14,274 | 7,731,365 |
| **Total** | | **10,885,906** |

Each entry pairs a form with an analysis:

```
casinhas      casa+N+DIM+F+PL
fique         ficar+V+SBJR+1+SG
comprei-o     comprar+V.ele.ACC.3.M.SG+PRF+1+SG
```

See [`TAGSET.org`](https://github.com/LR-POR/MorphoBr/blob/HEAD/TAGSET.org) for the tags.

## Quick start

```bash
FOMA=/path/to/foma ./compile.sh          # builds morphobr.bin (see Building)
echo "fortinho" | flookup -i morphobr.bin
```

```
fortinho	forte+N+DIM+M+SG
fortinho	forte+A+DIM+M+SG
```

`flookup -i` analyzes a form; `flookup` (without `-i`) generates the forms of
an analysis.
