---
repo: "CamiloMartinezM/site2md"
name: "site2md"
description: "A powerful CLI tool that mirrors entire websites or local directories and converts them into a single, clean Markdown file. Perfect for generating LLM context (RAG), offline documentation reading, and web archiving."
readmeQualityOk: true
url: "https://github.com/CamiloMartinezM/site2md"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "html-to-markdown", "llms", "markdown", "markdown-converter", "python", "web-scraping"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 40
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2025-12-11T00:46:52Z"
lastCommitAt: "2026-11-09T12:01:24Z"
lastReleaseAt: "2026-11-09T11:17:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 85
maintainers: ["CamiloMartinezM"]
openGraphImageUrl: "https://opengraph.githubassets.com/2eb9d71641c186b8b06381f4c4dc8f22e9ebe582b52c6cc5ff022db46e3744ae/CamiloMartinezM/site2md"
---

# 📄 site2md

**HTML to Markdown Converter** ✨

*Convert a local HTML tree or bounded remote web content into a Markdown document for LLM ingestion, offline reading, or archiving.*

*Disk space used by each tool's smallest install that can extract the countries from [Scrape This Site's countries page](https://www.scrapethissite.com/pages/simple/) without a browser. [Details](https://github.com/CamiloMartinezM/site2md/blob/HEAD/BENCHMARKS.md).*

[Installation](#-installation) • [Features](#-features) • [Usage](#-usage) • [Remote modes](#choose-a-remote-mode) • [Examples](#-examples) • [Benchmarks](#-benchmarks)

## 📦 Installation

### Quick Install (Linux/macOS) ⚡

```bash
chmod +x install.sh
./install.sh
```

### Manual Install from Source 📦

```bash
# Clone the repository
git clone https://github.com/CamiloMartinezM/site2md.git
cd site2md

# Install
pip install .
```

### Development Install 🏗 ️

```bash
# Install with editable mode
pip install -e .
```

---

## 🌐 Supported Inputs

- **Local Directories** - Convert and concatenate a folder of HTML files you already have.
- **Remote URLs** - Convert one server-rendered HTML page, explicitly follow selected same-origin links by…
