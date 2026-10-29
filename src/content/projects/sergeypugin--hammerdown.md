---
repo: "sergeypugin/hammerdown"
name: "hammerdown"
description: "fast cross-platform document-to-markdown CLI converter with image extraction. Called hammer for a reason: it works with almost every type of files"
readmeQualityOk: true
url: "https://github.com/sergeypugin/hammerdown"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["convert", "converter", "markdown", "markitdown", "pypi", "python3", "to-markdown", "converttomarkdown", "tomarkdown", "hammer"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-05T15:56:20Z"
lastCommitAt: "2026-10-29T12:25:17Z"
lastReleaseAt: "2026-10-10T10:44:05Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["sergeypugin"]
openGraphImageUrl: "https://opengraph.githubassets.com/b798c6131847d06e0459e9bafd49c6f10335de4fb4799bcaf431626d8a0fa1cc/sergeypugin/hammerdown"
---

# hammerdown

`hammerdown` is a cross-platform tool and Python library for converting PDF, Word, Excel, PowerPoint, OpenDocument, CSV, and plain-text documents into clean Markdown. Word charts are rendered as SVG, OpenDocument and Markdown images are extracted, and mathematical formulas are converted to LaTeX.

The PDF pipeline is built on [PyMuPDF](https://pymupdf.readthedocs.io/) and [PyMuPDF4LLM](https://github.com/pymupdf/PyMuPDF4LLM), which do the actual page-layout reconstruction and Markdown generation. This is the central feature the project was built around. Everything else -- routing, batch handling, merging, and file-manager integration -- is built around that core.

## Supported Formats

- **PDF and E-books**: `.pdf`, `.epub`, `.mobi`, `.fb2`, `.xps`
- **Word and OpenDocument**: `.docx`, `.doc`, `.odt`
- **Spreadsheets**: `.xlsx`, `.xls`, `.csv`
- **Presentations**: `.pptx`, `.ppt`
- **Text and Markdown**: `.txt`, `.md`, `.log`
- **Web pages**: `.html`, `.htm`
- **Google Drive exports**: `.zip` (Google Docs "Web page" export, containing an `.html` file and an optional `images/` folder)
- **Google Docs/Drive links**: public `docs.google.com` (document, spreadsheets,…
