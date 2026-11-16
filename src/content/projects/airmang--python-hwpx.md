---
repo: "airmang/python-hwpx"
name: "python-hwpx"
description: "Pure Python HWPX automation: read, edit, generate, and validate documents without Hancom Office."
originalDescription: "Pure Python HWPX automation: read, edit, generate, and validate documents without Hancom Office."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/airmang/python-hwpx"
homepage: "https://airmang.github.io/python-hwpx/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hancom", "hwp", "hwpx", "python", "document-automation", "office-documents", "opc", "owpml", "template", "text-extraction"]
stars: 123
forks: 42
openIssues: 13
closedIssues: 96
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-09-17T03:29:26Z"
lastCommitAt: "2026-11-16T04:27:31Z"
lastReleaseAt: "2026-06-04T06:42:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 49
maintainers: ["airmang", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d7ceaa5c50cb346fa1e15147bc9a54d93002a17b8ecd30926e1b3cee6fe0f45/airmang/python-hwpx"
discussionCount: 0
---

HWPX is a format that stores XML (OWPML) inside a ZIP, so you can work with it using only Python, without Hancom Office.
python-hwpx runs on Windows, macOS, Linux, and CI alike, and its only dependency is `lxml`. HWP 5.0 (`.hwp`) files open with the same API and can be converted to HWPX.

The documents it creates have been opened directly in Hancom Office 2024, and the results are recorded with dates [below](#한글과-얼마나-같은가).

## Getting Started

```bash
pip install python-hwpx      # Python 3.10+
```

```python
from hwpx import HwpxDocument

doc = HwpxDocument.new()
doc.add_heading("2026 운영계획", level=1)
doc.add_paragraph("추진 배경", style="개요 2")  # 한/글이 "가." 번호를 붙인다
doc.save_to_path("계획.hwpx")
```

Styles are selected by name. Using a name that does not exist raises an error on that line immediately.
To edit an existing document, start with `HwpxDocument.open("보고서.hwpx")`. `.hwp` files are opened the same way, and the edited result is saved as HWPX with `save_to_path("보고서.hwpx")`.

Font size, alignment, and table cells can be read and changed in place. You can traverse every paragraph in the document, including table cells, headers, and footnotes, along with its position.

```python…
