---
repo: "lenzo-ka/ipakit"
name: "ipakit"
description: "Computing over the International Phonetic Alphabet (IPA)"
readmeQualityOk: true
url: "https://github.com/lenzo-ka/ipakit"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 57
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-07-03T10:02:42Z"
lastCommitAt: "2026-09-29T08:10:57Z"
lastReleaseAt: "2026-09-24T02:59:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 67
maintainers: ["lenzo-ka"]
openGraphImageUrl: "https://opengraph.githubassets.com/830c3556086331d6492a20f3ac6023a0c918fd2e884f69f9617d54cd98672076/lenzo-ka/ipakit"
---

# ipakit

ipakit is a framework for computing over structured symbolic phonetic
representations, and for reconciling the systems that describe speech. IPA is
its first vocabulary in that representation.

At the center is a timed, structured tier graph whose vocabulary and relations
come from declarations. IPA text, machine notations, feature databases,
dictionary pronunciations, aligner output, rewrite layers, and rendering views
meet there as distinct layers. Each bridge states what it
can preserve in each direction, carries provenance forward, and keeps competing
accounts as data. If two sources give a word different forms, the disagreement
remains available to query.

One grammar does the recognizing and the rewriting. A query is a rule without
the arrow, so the engine that answers “where does this match?” is the engine
that decides “what does this become?” Agreement variables, optional elements,
and bounded spans belong to that shared grammar.

Rules also have a calculus. Derivations retain enough evidence to replay;
optional rules enumerate their variants under an explicit cap; `derives()`
returns a witness, an exhaustive refusal, or a refusal qualified by work left…
