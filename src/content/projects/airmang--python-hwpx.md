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
stars: 113
forks: 40
openIssues: 5
closedIssues: 75
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-09-17T03:29:26Z"
lastCommitAt: "2026-10-08T10:51:45Z"
lastReleaseAt: "2026-06-04T06:42:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 99
undervaluedScore: 50
maintainers: ["airmang"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b6e8d3029ea666f52be0ec467aaf3e5f4f20efe6f3c8c0f65947c68353f36fa/airmang/python-hwpx"
discussionCount: 0
---

You don't need Hancom Office. HWPX is a ZIP+XML (OWPML) format, so you can read, modify, and create files with pure Python alone — and it works on Windows, macOS, Linux, CI, and even **inside a ChatGPT chat with a Python environment**.
Hancom compatibility of newly generated documents is measured against a corpus whose dates and versions are stated below.

**Follow along in ChatGPT as-is** — Python environments in ChatGPT chats cannot access PyPI, so download the single `python_hwpx-*.whl` from the [latest Release](https://github.com/airmang/python-hwpx/releases/latest), **upload it together with your document**, and ask:

```text
Install the attached python_hwpx-*.whl with pip (pip install /mnt/data/python_hwpx-*.whl),
open this .hwpx file with the python-hwpx library and work on it.
Keep the forms and formatting as they are, change only ○○, and return the result as a new file.
```

Everything from installation to the resulting file is completed within the conversation — you don't need Python on your own computer. For detailed steps and instructions for agents, see [Using in AI chat environments](https://github.com/airmang/python-hwpx/blob/HEAD/docs/ai-assistants.md). A…
