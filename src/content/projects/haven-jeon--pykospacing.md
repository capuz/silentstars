---
repo: "haven-jeon/PyKoSpacing"
name: "PyKoSpacing"
description: "Automatic Korean word spacing with Python "
readmeQualityOk: true
url: "https://github.com/haven-jeon/PyKoSpacing"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["korean-nlp", "nlp", "text-processing", "spacing"]
stars: 443
forks: 116
openIssues: 0
closedIssues: 42
watchers: 6
contributors: 13
recentReleases: 0
createdAt: "2018-04-19T09:41:22Z"
lastCommitAt: "2026-11-17T10:44:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 75
undervaluedScore: 29
maintainers: ["haven-jeon", "Mirochill"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/130193484/1b1987cc-bdc8-4962-a8c9-eb9a594f46bd"
---

PyKoSpacing 
---------------

Python package for automatic Korean word spacing.

R verson can be found [here](https://github.com/haven-jeon/KoSpacing).

> [!TIP]
> **New: KoSpacing v2.** An optional LLM-based backend, `Spacing(backend='v2')`, built on
> [kotag-0.8B](https://huggingface.co/gogamza/kotag-0.8b). It is more accurate than v1 on 3 of 4 test sets, fixes
> spacing that is already there, and gives per-character probabilities.
> **[See KoSpacing v1 and KoSpacing v2 →](#kospacing-v1-and-kospacing-v2)**

#### Introduction

Word spacing is one of the important parts of the preprocessing of Korean text analysis. Accurate spacing greatly affects the accuracy of subsequent text analysis. `PyKoSpacing` has fairly accurate automatic word spacing performance,especially good for online text originated from SNS or SMS.

For example.

"아버지가방에들어가신다." can be spaced both of below.

1. "아버지가 방에 들어가신다." means  "My father enters the room."
1. "아버지 가방에 들어가신다." means  "My father goes into the bag."

Common sense, the first is the right answer.

`PyKoSpacing` is based on Deep Learning model trained from large corpus(more than 100 million NEWS articles from [Chan-Yub…
