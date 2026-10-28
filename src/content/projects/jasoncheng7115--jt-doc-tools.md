---
repo: "jasoncheng7115/jt-doc-tools"
name: "jt-doc-tools"
description: "An all-in-one PDF and Office document platform: self-hosted, open source, under your control. Integrated PDF / Office document processing platform, self-hosted, open source, and under your control."
originalDescription: "An all-in-one PDF and Office document platform: self-hosted, open source, under your control. 整合式 PDF / Office 文件處理平台，自架、開源、可控。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jasoncheng7115/jt-doc-tools"
homepage: "https://jasoncheng7115.github.io/jt-doc-tools/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [77, 20]
topics: ["ai", "document", "office", "pdf", "llm", "ocr"]
stars: 245
forks: 59
openIssues: 0
closedIssues: 33
watchers: 2
contributors: 2
recentReleases: 6
createdAt: "2026-04-26T13:59:51Z"
lastCommitAt: "2026-10-28T09:57:22Z"
lastReleaseAt: "2026-09-24T13:46:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 35
maintainers: ["jasoncheng7115"]
openGraphImageUrl: "https://opengraph.githubassets.com/5432c2c03a579d0ef7358e7f824352333153e353a01ccb171acfb32bb6d6f3db/jasoncheng7115/jt-doc-tools"
---

**Traditional Chinese** ｜ [English](https://github.com/jasoncheng7115/jt-doc-tools/blob/HEAD/README_en.md) ｜ [日本語](https://github.com/jasoncheng7115/jt-doc-tools/blob/HEAD/README_ja.md)

# Jason Tools Document Toolbox v1.17.20

> ### ⚠ If you installed via git before 2026-09-13, run one line before upgrading to this version
>
> This project rewrote its git history on 2026-09-13 (removing data that was accidentally committed), and all tags now point to new commits. **The old `jtdt update` fails at the `git fetch --tags` step with "`would clobber existing tag`"**, and the message only says `git fetch failed`, which doesn't reveal that tags are the cause. Run the line below once to fix this permanently:
>
> ```bash
> # Linux / macOS
> sudo git -C /opt/jt-doc-tools fetch --tags --force origin
> # Windows (run PowerShell as Administrator)
> git -C "C:\\Program Files\\jt-doc-tools" fetch --tags --force origin
> ```
>
> **`-C` must be uppercase.** Typing lowercase `git -c /opt/jt-doc-tools/ …` produces "`fatal: not a git repository (or any of the parent directories): .git`". Lowercase `-c` is a **config** option (`-c key=value`), so git does not change into that directory and instead…
