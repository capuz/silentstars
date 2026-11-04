---
repo: "WilliamSmithEdward/pyOpenVBA"
name: "pyOpenVBA"
description: "Pure-Python reader/writer for VBA macros embedded in Excel / PowerPoint / Word / Access files. Zero dependencies, deterministic round-trip, safe on protected and signed projects."
readmeQualityOk: true
url: "https://github.com/WilliamSmithEdward/pyOpenVBA"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["compound-file", "deterministic", "excel", "file-format", "office-automation", "openxml", "pure-python", "python", "roundtrip", "vba"]
stars: 54
forks: 5
openIssues: 0
closedIssues: 44
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-05-22T05:32:58Z"
lastCommitAt: "2026-11-04T02:57:27Z"
lastReleaseAt: "2026-08-02T05:37:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 37
maintainers: ["WilliamSmithEdward", "dependabot[bot]", "williamsmithedward-repo-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f81084b4d8641cd302ce91d733a98ed9011c89c5700c3a28fd3be8b74c3e453c/WilliamSmithEdward/pyOpenVBA"
---

# pyOpenVBA

**Read and write the code inside Office files, in pure Python: VBA macros
in four hosts, and Power Query in Excel.**

No dependencies beyond the standard library. No Office install needed.
Works on Windows, macOS and Linux. Python 3.10 or newer.

VBA, four hosts and one API:

* Excel (`.xlsm`, `.xlsb`, `.xlam`, `.xls`; `.xltm`, `.xlt`, `.xla` read only)
* Word (`.docm`, `.dotm`, `.doc`; `.dot` read only)
* PowerPoint (`.pptm`, `.potm`, `.ppt`; `.ppsm`, `.ppam` read only)
* Access (`.accdb`, `.mdb`)

Power Query, in any Excel package:

```python
from pyopenvba import PowerQueryWorkbook

with PowerQueryWorkbook("orders.xlsx") as book:
    print(book.query_names())
    book.query("Orders").formula = "let Source = Excel.CurrentWorkbook() in Source"
    book.save()
```

---

## Why use this?

Good Python tools exist for reading VBA out of Office files (oletools,
olefile and friends), and they remain the right choice for forensics,
malware analysis and audits. pyOpenVBA covers the next step: writing
changes back so the file still opens cleanly in the host application.

The write path is the point of the library:

- **Modify** a module's source in place.
- **Add** a standard…
