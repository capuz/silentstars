---
repo: "hipster-philology/nlp-pie-taggers"
name: "nlp-pie-taggers"
description: "Extension for pie to include taggers with their models and pre/postprocessors"
readmeQualityOk: true
url: "https://github.com/hipster-philology/nlp-pie-taggers"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 3
openIssues: 4
closedIssues: 19
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2019-12-18T07:17:27Z"
lastCommitAt: "2026-11-27T12:59:36Z"
lastReleaseAt: "2022-05-10T08:32:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 63
maintainers: ["PonteIneptique", "Lucaterre"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd312b2f2f03a4a6c65fe80d1110ac07bcd62ec734b57fcec9c84564958cc1fb/hipster-philology/nlp-pie-taggers"
---

# Pie Extended

Extension for [Pie](https://github.com/emanjavacas/pie) (through [PaPie](https://github.com/lascivaroma/PaPie)) to
include taggers with their models and pre/postprocessors: normalization, tokenization, disambiguation, output
formatting. The person who gets a model tags a text in one command and gets the output its authors intended.

**Documentation: <https://hipster-philology.github.io/nlp-pie-taggers/>**

## Quick start

Python 3.12 or later is needed.

```bash
pip install pie-extended --extra-index-url https://download.pytorch.org/whl/cpu   # the extra index: no GPU needed
pie-extended list                                  # the available models
pie-extended download lasla                        # the files of a model
pie-extended install-addons lasla                  # what it needs besides, if anything
pie-extended tag lasla your_file.txt --tasks lemma,pos
```

The output is written next to the file (`your_file-pie.txt`): a TSV with one line per token.

```text
token       lemma  pos     SpaceAfter
Arma        arma   NOMcom  _
uirumque    uir    NOMcom  No
{uirumque}  que    CON     _
cano        cano   ADJqua  No
```

From Python:
