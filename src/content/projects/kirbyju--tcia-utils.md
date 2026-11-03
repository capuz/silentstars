---
repo: "kirbyju/tcia_utils"
name: "tcia_utils"
description: "A package to simplify common tasks one might perform when interacting with The Cancer Imaging Archive (TCIA) via Python."
readmeQualityOk: true
url: "https://github.com/kirbyju/tcia_utils"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 30
forks: 5
openIssues: 1
closedIssues: 11
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2023-01-13T13:40:58Z"
lastCommitAt: "2026-11-03T19:05:37Z"
lastReleaseAt: "2026-11-03T13:32:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 60
maintainers: ["kirbyju", "google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7274e2968010a60c026b677d2000a1176d9dcba344018c60c1893942ce9f7947/kirbyju/tcia_utils"
---

# TCIA Utils 4.0

TCIA Utils is a Python client for discovering TCIA datasets, participants, clinical evidence, available data, citations, and verified analytical publications. It uses the shared TCIA V2 REST service. A researcher can start with a question about a dataset without choosing the underlying catalog or storage system.

Version **4.0.0a14** is an opt-in preview for testing the redesigned interface.
Ordinary pip installations continue selecting stable 3.x. Install this version
explicitly in a fresh Python 3.11+ environment:

```sh
python -m pip install "tcia_utils[tables,downloads]==4.0.0a14"
```

The [guided workshop](https://github.com/kirbyju/TCIA_Notebooks/blob/main/tcia_utils_v4/TCIA_Dataset_and_Participant_Queries.ipynb) pins its own tested preview version and queries real public metadata. Public samples use `max_items=1`; controlled transfers remain opt-in. Report feedback through [GitHub issues](https://github.com/kirbyju/tcia_utils/issues), including the failing operation, package/Python versions, and error message. Do not include credentials. Existing 3.x scripts should stay in a separate environment; see [migration…
