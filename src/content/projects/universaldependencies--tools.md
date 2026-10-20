---
repo: "UniversalDependencies/tools"
name: "tools"
description: "Various utilities for processing the data."
readmeQualityOk: true
url: "https://github.com/UniversalDependencies/tools"
language: "Perl"
languages: ["Perl", "Python"]
languagePcts: [60, 38]
stars: 222
forks: 53
openIssues: 6
closedIssues: 91
watchers: 142
contributors: 105
recentReleases: 0
createdAt: "2014-05-16T08:46:56Z"
lastCommitAt: "2026-10-20T08:48:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 38
maintainers: ["dan-zeman"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd70b964bf9b8670b2ba2599049941981a7c59022846e0255a8c5f1a33653b42/UniversalDependencies/tools"
---

# UD Tools

This repository contains various scripts in Perl and Python that can be used as tools for Universal Dependencies.

## [validate.py](https://github.com/UniversalDependencies/tools/blob/master/validate.py)

The validator is described in a separate [README of Python tools](https://github.com/UniversalDependencies/tools/blob/master/udtools/README.md).

## [eval.py](https://github.com/UniversalDependencies/tools/blob/master/eval.py)

The official parsing scorer is described in a separate [README of Python tools](https://github.com/UniversalDependencies/tools/blob/master/udtools/README.md).

## [check_sentence_ids.pl](https://github.com/UniversalDependencies/tools/blob/master/check_sentence_ids.pl)

Reads CoNLL-U files from STDIN and verifies that every sentence has a unique id in the sent_id
comment. All files of one treebank (repository) must be supplied at once in order to test
treebank-wide id uniqueness.

```
cat *.conllu | perl check_sentence_ids.pl
```

## [normalize_unicode.pl](https://github.com/UniversalDependencies/tools/blob/master/normalize_unicode.pl)

Converts Unicode to the NFC normalized form. Can be applied to any UTF-8-encoded text file, including
CoNLL-U.…
