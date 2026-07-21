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
languagePcts: [98]
topics: ["hancom", "hwp", "hwpx", "python", "document-automation", "office-documents", "opc", "owpml", "template", "text-extraction"]
stars: 97
forks: 34
openIssues: 4
closedIssues: 7
watchers: 0
contributors: 7
recentReleases: 3
createdAt: "2025-09-17T03:29:26Z"
lastCommitAt: "2026-07-21T06:16:01Z"
lastReleaseAt: "2026-06-04T06:42:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 93
undervaluedScore: 48
maintainers: ["airmang", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe0bcbcde3b6aded3a69678921eef0617b79235ac0d01b4ca3abd3b94b25e8ab/airmang/python-hwpx"
discussionCount: 0
---

<h1 align="center">python-hwpx</h1>
    <strong>Read, edit, and create HWPX with pure Python without Hancom</strong>
  </p>
  </p>
</p>

Existing documents only modify the touched areas (untouched areas remain byte-for-byte), while new documents are created in a format that Hancom Office accepts. HWPX has a ZIP+XML (OWPML/OPC) structure and works with pure Python on Windows, macOS, Linux, and CI.

| | Repo | Role |
|---|---|---|
| 📦 | **`python-hwpx`** | Pure Python HWPX core (this repo) |
| 🔌 | [`hwpx-mcp-server`](https://github.com/airmang/hwpx-mcp-server) | HWPX manipulation from MCP clients (e.g., Claude Desktop) |
| 🎯 | [`hwpx-plugin`](https://github.com/airmang/hwpx-plugins) | Plugin and skill bundle for agents |

## Getting Started

```bash
pip install python-hwpx      # Python 3.10+
```

```python
from hwpx import HwpxDocument

doc = HwpxDocument.open("report.hwpx")
doc.add_paragraph("This paragraph was added through automation.")
doc.save_to_path("report-modified.hwpx")
```

## What it does

- **Read/Extract** — Export text/HTML/rich Markdown (preserving formatting, nested tables, footnotes), XPath object exploration
- **Edit** — Formatting for paragraphs, tables,…
