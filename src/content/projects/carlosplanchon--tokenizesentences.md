---
repo: "carlosplanchon/tokenizesentences"
name: "tokenizesentences"
description: "Tiny, dependency-free English sentence tokenizer."
readmeQualityOk: true
url: "https://github.com/carlosplanchon/tokenizesentences"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["tokenize", "sentences", "python", "opensource", "carlosplanchon"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-04-22T19:44:28Z"
lastCommitAt: "2026-08-17T04:20:16Z"
lastReleaseAt: "2026-02-06T04:48:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 38
maintainers: ["carlosplanchon"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d04225dde8306c5132ccbc11f74e1ff2f48b1c94316c780a8fd6385a878da0b/carlosplanchon/tokenizesentences"
---

# tokenizesentences

*Tiny, dependency-free English sentence tokenizer.*

## installation
```
uv add tokenizesentences
```
or
```
pip install tokenizesentences
```

## usage
```python
In [1]: from tokenizesentences import tokenize

In [2]: tokenize(
    "Mr. John Johnson Jr. was born in the U.S.A but earned his Ph.D. in Israel before joining Nike Inc. as an engineer. He also worked at craigslist.org as a business analyst."
    )

Out[2]:
[
    'Mr. John Johnson Jr. was born in the U.S.A but earned his Ph.D. in Israel before joining Nike Inc. as an engineer.',
    'He also worked at craigslist.org as a business analyst.'
]
```

Sentence offsets are available too. Every span is a half-open
`[start, end)` slice of the input, so `text[start:end]` is the sentence,
verbatim:
```python
In [3]: from tokenizesentences import tokenize_spans

In [4]: tokenize_spans("It works. Try it!")
Out[4]: [(0, 9), (10, 17)]
```

## notes
Deterministic, rule-based and English-only: an index-based scanner
inspired by [the answer of D Greenberg in StackOverflow](https://stackoverflow.com/questions/4576077/python-split-text-on-sentences),
with no models and no dependencies.

Sentences are literal substrings…
