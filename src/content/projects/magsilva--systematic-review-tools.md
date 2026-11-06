---
repo: "magsilva/systematic-review-tools"
name: "systematic-review-tools"
description: "Tools to ease running systematic reviews"
readmeQualityOk: true
url: "https://github.com/magsilva/systematic-review-tools"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-11-07T20:57:41Z"
lastCommitAt: "2026-11-06T02:42:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 49
maintainers: ["magsilva"]
openGraphImageUrl: "https://opengraph.githubassets.com/2206e38e4e0a1d2ab7c2bb25054d7741c0486f32b014ce80cdcbd482de1c1f60/magsilva/systematic-review-tools"
---

# Systematic review tools

## Download PDFs from a BibTeX file

```sh
.venv/bin/python -m pip install -r requirements-pdf-download.txt
.venv/bin/python src/download_pdfs.py neurodivergent-sw-eng.bib \
  --output neurodivergent-sw-eng-with-files.bib --pdf-dir ./pdfs
```

Restrict downloads by source with `--source`:

```sh
.venv/bin/python src/download_pdfs.py papers.bib --output papers-with-files.bib \
  --pdf-dir ./pdfs --source ACM
```

Use `--source ACM Scopus` or repeat `--source` to allow multiple sources.
Matching ignores case and surrounding whitespace and accepts any source in an
entry's semicolon-separated set. Inferred ACM sources based on publisher also
qualify. Entries with missing/unknown sources are skipped when a filter is
specified. Skipped entries remain in the output with their existing metadata
and file fields unchanged; they make no requests and do not count as failures.
The skipped count is logged. Without `--source`, all entries are considered.
The filter controls eligibility only: an entry with `ACM; Scopus` still uses
ACM browser download rules even when selected through `--source Scopus`.

Exclude sources with `--exclude-source`:

```sh
.venv/bin/python…
