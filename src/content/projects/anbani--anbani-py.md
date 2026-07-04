---
repo: "Anbani/anbani.py"
name: "anbani.py"
description: "Georgian Python toolkit for NLP, Transliteration and more"
readmeQualityOk: true
url: "https://github.com/Anbani/anbani.py"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2022-06-29T14:10:24Z"
lastCommitAt: "2026-07-04T22:22:18Z"
lastReleaseAt: "2026-07-04T20:27:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 52
maintainers: ["georgegach", "tura89", "alexamirejibi"]
openGraphImageUrl: "https://opengraph.githubassets.com/6852fc6c519259fb106277750d0e3187d42c701a6efe75354c30ee355e23e353/Anbani/anbani.py"
---

# AnbaniPy

Georgian Python toolkit for NLP, Transliteration and more. Partially based on [anbani.js](https://github.com/anbani/anbani.js).  

## Install

```bash
pip install anbani
```

Transliteration and NLP utilities need only `hjson`. PDF / e-book extraction
(`anbani.nlp.utils.ebook2text`) additionally requires PyMuPDF:

```bash
pip install anbani[pdf]
```

## Quickstart

Transliteration example:

```python
from anbani.core.converter import convert, interpret

interpret("გამარჯობა", "asomtavruli")

# 'ႢႠႫႠႰႿႭႡႠ'
```

Georgianisation example:

```python
from anbani.nlp.georgianisation import georgianise

georgianise("gamarjoba - rogor xar - rasa iqm - kaia kata - kai erti")

# 'გამარჯობა - როგორ ხარ - რასა იქმ - კაია კატა - კაი ერთი'
```

Convert ebooks with qwerty encoding to unicode Mkhedruli:

```python
from anbani.nlp.utils import ebook2text
from anbani.core.converter import classify_text
from anbani.core.converter import convert

text = ebook2text("/home/george/Dev/georgian-text-corpus/sources/mylibrary/raw/files/ჩარლზ დიკენსი - დევიდ კოპერფილდი.pdf")
print(text[:300])

print(classify_text(text))

print(convert(text, "qwerty", "mkhedruli")[:300])

# Carlz dikensi daviT…
