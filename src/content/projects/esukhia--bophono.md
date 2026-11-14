---
repo: "Esukhia/bophono"
name: "bophono"
description: "Tibetan phonetics engine in Python"
readmeQualityOk: true
url: "https://github.com/Esukhia/bophono"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ipa", "tibetan-nlp", "tibetan-language", "tibetan-phonetics-engine"]
stars: 25
forks: 7
openIssues: 12
closedIssues: 2
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2018-02-03T18:38:40Z"
lastCommitAt: "2026-11-14T10:43:28Z"
lastReleaseAt: "2023-06-18T07:03:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 59
undervaluedScore: 28
maintainers: ["eroux", "bit-mis"]
openGraphImageUrl: "https://opengraph.githubassets.com/3025ebb29ac0474482d9bc66a7144338cd875832dc65e7c36eb60ef24f7a3788/Esukhia/bophono"
---

# Tibetan Phonetics Engine

## Description

The goal of this code is to provide a library to:

- implement the conversion of a Tibetan Unicode word into IPA, according to different schemes / dialects
- implement some conversions between IPA and phonetics readable by people with various language backgrounds (Chinese, English, etc.)

The primary focus of this library is litterary pronounciation, ideally representing how an umze would pronounce a traditional text, but contributions for other uses are welcome. Use the `IAST` scheme to transliterate Sanskrit in Tibetan script. The `LKT` scheme also supports a plain-Latin Sanskrit fallback.

Note that this library integrates no segmenter and needs to be applied on each word separately. You can use it in combination with [pybo](https://github.com/Esukhia/pybo/) to get the phonetics of full sentences.

## Phonetics methods

We currently provide the following phonetics schemes:

#### Manual of Standard Tibetan (by Tournadre)

- `MST` / `MST_phonetics`: IPA phonetics (`MST_phonetics` is an alias of `MST`)
- `MST_phonology`: the intermediate phonological representation, with tone marked on the vowel as in Tournadre (macron `ā` for high tone,…
