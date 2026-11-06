---
repo: "rhnfzl/SqueakyCleanText"
name: "SqueakyCleanText"
description: "Text preprocessing and PII anonymisation for NLP/ML. ONNX NER ensemble, language detection, stopword removal. Built for statistical ML and language models."
readmeQualityOk: true
url: "https://github.com/rhnfzl/SqueakyCleanText"
homepage: "https://rhnfzl.github.io/SqueakyCleanText/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["named-entity-recognition", "text-cleaning", "text-anonymization", "gliner", "multilingual", "ner", "nlp", "onnx", "text-preprocessing", "text-preprocessing-with-nlp-techniques"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2024-06-15T15:59:39Z"
lastCommitAt: "2026-11-06T11:24:24Z"
lastReleaseAt: "2026-11-03T13:50:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 78
maintainers: ["rhnfzl"]
openGraphImageUrl: "https://opengraph.githubassets.com/571f7adff12c9e4a158c480898681ab4d8cddcbe690a642ea82b1434388e5cb1/rhnfzl/SqueakyCleanText"
---

# SqueakyCleanText

**Clean, privacy-safe text datasets for LLM training, fine-tuning and RAG, in 75 languages.**

SqueakyCleanText (SCT) is a text processing pipeline for datasets. A JSONL file, a Hugging Face dataset or a DataTrove job goes in. Cleaned text comes out, plus `sct_*` columns and a data card that describe each record without storing personal data. It runs on CPU or GPU.

```text
in:   Iâ€™m Anna Berg &amp; my mail is anna@example.se. Order 4711 ships on 2024-05-01.
out:  I'm <PERSON> & my mail is <EMAIL>. Order 4711 ships on 2024-05-01.
      sct_language=ENGLISH  sct_pii_count=2  sct_pii_types=['EMAIL', 'PERSON']

in:   Bel +31 20 123 4567 voor Jan de Vries.
out:  Bel <PHONE> voor <PERSON>.
      sct_language=DUTCH  sct_pii_count=2  sct_pii_types=['PERSON', 'PHONE']
```

Documentation: <https://rhnfzl.github.io/SqueakyCleanText/>

## What it does

One call runs these stages. Each one is a config field with a safe default, so you can switch it off.

1. **Detect the language.** One of 75 languages, with a confidence score. Pin it or limit it when you know.
2. **Repair the text.** Fixes mojibake and HTML entities (ftfy), folds styled characters, tidies whitespace, and…
