---
repo: "STARDUSTLC666/dsh-cite"
name: "dsh-cite"
description: "DSH literature workbench: DOI / BibTeX import preview, deduplication, Crossref completion, citation export, and source backups. Issues and PRs are welcome."
originalDescription: "DSH 文献工作台：DOI / BibTeX 导入预览、去重、Crossref 补全、引文导出与来源备份。欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-cite"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [59, 41]
topics: ["citation", "crossref", "deepseek-harness", "dsh-plugin", "bibtex", "doi"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T20:39:37Z"
lastCommitAt: "2026-11-13T18:32:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["STARDUSTLC666"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a5ab15d365f40acdae9a9a7666d14245935ead48fae4476833e67fd43c34715/STARDUSTLC666/dsh-cite"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/dsh-cite/blob/HEAD/README.en.md)

# Cite

**Turn scattered DOIs and BibTeX entries into a usable reference library.**

**[Installation](#安装) · [Usage workflow](#开始使用) · [Full documentation](https://github.com/STARDUSTLC666/dsh-cite/blob/master/docs/REFERENCE.zh.md)**

## Features

- Review duplicate entries and missing fields before importing.
- Actively complete records from Crossref, check the differences, then keep the result.
- Export citation text, BibTeX, or a full backup that includes sources.

## Installation

In the “Plugins” panel of the DSH desktop app, install `dsh-cite`. If the command line is already configured, you can also use:

```bash
dsh plugin --profile desktop add dsh-cite
```

For the web version, change `desktop` to `web`. After installation, restart the corresponding DSH. The host requirement follows the package declaration `>=0.2.2-rc.3`.

## Getting started

1. Open “Citation library” from the left sidebar, and prepare a DOI list or BibTeX file.
2. First run a local import preview to check entries, duplicates, and fields, then save the selected works.
3. When online completion is needed,…
