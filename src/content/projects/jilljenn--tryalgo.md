---
repo: "jilljenn/tryalgo"
name: "tryalgo"
description: "Algorithms and data structures for preparing programming competitions: basic and advanced"
readmeQualityOk: true
url: "https://github.com/jilljenn/tryalgo"
homepage: "https://tryalgo.org"
language: "Python"
languages: ["Python", "Typst"]
languagePcts: [80, 20]
topics: ["algorithms", "algorithms-and-data-structures", "python", "acm-icpc", "interview-questions"]
stars: 385
forks: 111
openIssues: 9
closedIssues: 22
watchers: 24
contributors: 16
recentReleases: 0
createdAt: "2016-01-21T16:05:54Z"
lastCommitAt: "2026-11-02T17:57:52Z"
lastReleaseAt: "2024-03-01T15:19:13Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 25
maintainers: ["ijtcs-faw", "xtof-durr"]
openGraphImageUrl: "https://opengraph.githubassets.com/740ca8dcc8324e1d9f18311c35914546360e0e3788bb0c8f234ccda1155cbf11/jilljenn/tryalgo"
---

# Algorithmic Problem Solving

Algorithms and data structures for preparing programming competitions (e.g. ICPC, [see more](https://tryalgo.org/contests/)) and coding interviews.  
By Christoph Dürr and Jill-Jênn Vie.

[Our book](https://tryalgo.org/book) is available in French, English, Simplified and Traditional Chinese.

## Install

    pip install tryalgo

## Documentation

- [Documentation](http://jilljenn.github.io/tryalgo/) of tryalgo 1.4
- [Blog tryalgo.org](http://tryalgo.org) in French and English

## Demo: [TryAlgo in Paris](http://nbviewer.jupyter.org/github/jilljenn/tryalgo/blob/master/examples/TryAlgo%20Maps%20in%20Paris.ipynb)

Shortest paths on the graph of Paris.

To run it yourself:

    pip install -r examples/requirements.txt
	jupyter notebook  # Then go to examples folder

## Usage

**Dynamic programming** some example with coin change:

```python
from tryalgo import coin_change

print(coin_change([3, 5, 11], 29))  # True because 29 = 6 x 3 + 0 x 5 + 1 x 11
```

***Des chiffres et des lettres*** (that inspired *Countdown*)

```python
from tryalgo.arithm_expr_target import arithm_expr_target

arithm_expr_target([25, 50, 75, 100, 3, 6], 952)
```

Returns…
