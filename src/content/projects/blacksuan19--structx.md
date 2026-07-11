---
repo: "Blacksuan19/structx"
name: "structx"
description: "Type-safe structured data extraction from text using LLMs."
readmeQualityOk: true
url: "https://github.com/Blacksuan19/structx"
homepage: "https://structx.aolabs.dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["instructor", "litellm", "llm", "rag"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-13T03:34:15Z"
lastCommitAt: "2026-07-11T05:57:26Z"
lastReleaseAt: "2025-03-10T02:01:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 62
maintainers: ["Blacksuan19", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d662dfb42ffbfab55af3526a25b4acbe8093e9c8e66ac3b65dd9565854b88bb/Blacksuan19/structx"
---

# structx

Advanced structured data extraction from any document using LLMs with multimodal
support.

`structx` is a powerful Python library for extracting structured data from text,
tables, and documents using Large Language Models (LLMs). It passes existing
PDFs directly to vision-capable models; the optional `docs` extra converts other
document formats to PDF first.

## 🔔 Package rename notice (PyPI)

The PyPI distribution has been renamed from `structx-llm` to `structx`
(September 2025).

- Imports are unchanged: continue using `import structx`
- Document processing now lives in the optional `docs` extra
- Please update your environments and requirement files to use the new name

Upgrade commands:

```bash
pip uninstall -y structx-llm
pip install -U structx
```

If you previously pinned `structx-llm` in requirements or lock files, replace it
with `structx`. Install `structx[docs]` for non-PDF document conversion.

## ✨ Key Features

### 🎯 **Advanced Document Processing**

- **� Multimodal PDF Pipeline**: Passes PDFs directly to vision-capable models
  and converts supported non-PDF documents to PDF
- **🖼️ Vision-Enabled Extraction**: Native instructor multimodal support for…
