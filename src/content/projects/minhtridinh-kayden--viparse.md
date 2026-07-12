---
repo: "minhtridinh-kayden/viparse"
name: "viparse"
description: "Vietnamese-first document loader for RAG (legacy TCVN3/VNI/VISCII aware, NFC output)"
readmeQualityOk: true
url: "https://github.com/minhtridinh-kayden/viparse"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-30T17:58:58Z"
lastCommitAt: "2026-07-12T06:18:48Z"
lastReleaseAt: "2026-07-12T06:10:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 50
maintainers: ["minhtridinh-kayden", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/531535c9ad6017ee0acef896f191ac5af9e2dc7eabefcc32fdd15fd87397930f/minhtridinh-kayden/viparse"
---

# viparse

> Vietnamese-first document loader for RAG.

One command turns any Vietnamese document — including legacy **TCVN3/VNI/VISCII** fonts, scanned
PDFs, and old `.doc`/`.xls` files — into clean Unicode **NFC** Markdown/JSON, ready to push into a
vector DB.

## Why

Generic loaders *parse the file* but often emit **garbled diacritics** (legacy fonts) or **wrong
Unicode normalization**. `viparse` handles exactly that Vietnamese layer: detect & convert legacy
encodings to Unicode, enforce NFC, and offer diacritic-aware OCR.

**Backbone principle:** never hand-write a parser. Wrap well-maintained engines behind thin
adapters; if an engine gets a CVE or is abandoned, swap the adapter without touching the rest.
Heavy dependencies are lazy-imported via extras (`viparse[ocr]`, `viparse[office]`).

## Status

Early design. See [`docs/specs/`](https://github.com/minhtridinh-kayden/viparse/blob/HEAD/docs/specs/README.md) for the full spec map (SPEC-0 … SPEC-8).

## Planned usage

```python
import viparse

docs = viparse.load("tai_lieu_cu.pdf")            # list[Document], already NFC
docs = viparse.load("bang_luong.xlsx", output="markdown", encoding="auto")
```

```bash
viparse…
