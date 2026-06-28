---
repo: "yisding/sentencesplit"
name: "sentencesplit"
description: "sentencesplit is a Python rule-based sentence boundary detection that works out-of-the-box."
url: "https://github.com/yisding/sentencesplit"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 6
createdAt: "2026-02-19T16:24:59Z"
lastCommitAt: "2026-06-28T06:56:48Z"
lastReleaseAt: "2026-06-13T20:53:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 47
maintainers: ["yisding", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e69fe47a8ec54fe56e5c2d19adb531006baa5af29897c24843fb4dfe18daa44/yisding/sentencesplit"
---

# sentencesplit

Rule-based sentence boundary detection that works out-of-the-box for 24 languages. Pure Python, zero dependencies.

## Why sentencesplit

Most sentence splitters choke on abbreviations, numbered references, initials, and other ambiguous periods. sentencesplit uses a deep rule engine (derived from [pySBD](https://github.com/nipunsadvilkar/pySBD) / [Pragmatic Segmenter](https://github.com/diasks2/pragmatic_segmenter)) to handle these correctly:

```python
import sentencesplit

seg = sentencesplit.Segmenter(language="en")
seg.segment("My name is Jonas E. Smith. Please turn to p. 55.")
# ['My name is Jonas E. Smith. ', 'Please turn to p. 55.']
```

Naive `split(".")` or regex-based splitters would break on `E.`, `p.`, and `55.` above. sentencesplit gets these right across English, Chinese, Japanese, Spanish, and 20+ other languages.

**What it's good at:**

- Abbreviations, honorifics, and initials (`Dr.`, `U.S.`, `p. 55`)
- CJK sentence-ending punctuation (`。`, `！`, `？`) with quote/bracket awareness
- Mixed-language text via the built-in `en_es_zh` combined profile
- Streaming/incremental input: `should_wait_for_more()` tells you if the last boundary might change as…
