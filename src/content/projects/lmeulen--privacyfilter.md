---
repo: "lmeulen/PrivacyFilter"
name: "PrivacyFilter"
description: "Privacy Filter for free text"
readmeQualityOk: true
url: "https://github.com/lmeulen/PrivacyFilter"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 50
forks: 11
openIssues: 13
closedIssues: 17
watchers: 4
contributors: 2
recentReleases: 1
createdAt: "2021-06-21T19:11:28Z"
lastCommitAt: "2026-11-21T11:38:38Z"
lastReleaseAt: "2026-11-21T10:48:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 91
undervaluedScore: 32
maintainers: ["lmeulen"]
openGraphImageUrl: "https://opengraph.githubassets.com/68fe96f0a06df61780039800bcf783f4c83fcc23397f311212998f92424b89a5/lmeulen/PrivacyFilter"
discussionCount: 2
---

# PrivacyFilter 2.0.0

Dutch free-text privacy filter. It replaces URLs, emails, dates, times, Dutch postal codes, numbers, and configured names, places, streets, medicines, diseases, nationalities, and countries. Optional spaCy NER improves detection.

See related articles:

- [Remove personal information from text with Python](https://towardsdatascience.com/remove-personal-information-from-text-with-python-232cb69cf074)
- [Part II: NER](https://leo-vander-meulen.medium.com/remove-personal-information-from-a-text-with-python-part-ii-ner-2e6529d409a6)

## Privacy warning

This tool reduces PII-like content; it does **not** guarantee anonymization, legal compliance, or safe publication. False negatives and false positives occur. Validate results for your data, language, risk model, and applicable law before disclosure. See [SECURITY.md](https://github.com/lmeulen/PrivacyFilter/blob/HEAD/SECURITY.md).

## Requirements and installation

Python 3.12+ required.

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install .
```

Editable development install:

```bash
python -m pip install -e '.[dev]'
```

Optional dataset-updater dependencies:
