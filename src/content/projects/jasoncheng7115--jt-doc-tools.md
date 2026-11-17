---
repo: "jasoncheng7115/jt-doc-tools"
name: "jt-doc-tools"
description: "An all-in-one PDF and Office document platform: self-hosted, open source, under your control. Integrated PDF / Office document processing platform: self-hosted, open source, controllable."
originalDescription: "An all-in-one PDF and Office document platform: self-hosted, open source, under your control. 整合式 PDF / Office 文件處理平台，自架、開源、可控。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jasoncheng7115/jt-doc-tools"
homepage: "https://jasoncheng7115.github.io/jt-doc-tools/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [57, 41]
topics: ["ai", "document", "office", "pdf", "llm", "ocr"]
stars: 251
forks: 60
openIssues: 1
closedIssues: 33
watchers: 2
contributors: 2
recentReleases: 6
createdAt: "2026-04-26T13:59:51Z"
lastCommitAt: "2026-11-17T12:18:23Z"
lastReleaseAt: "2026-09-24T13:46:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 36
maintainers: ["jasoncheng7115"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6e61a2d8a63a5abc7b00112ceac5ac6e33de74497304dd3b1b3b60035ca945e/jasoncheng7115/jt-doc-tools"
---

**Traditional Chinese** ｜ [English](https://github.com/jasoncheng7115/jt-doc-tools/blob/HEAD/README_en.md) ｜ [日本語](https://github.com/jasoncheng7115/jt-doc-tools/blob/HEAD/README_ja.md)

# Jason Tools Document Toolbox v1.17.47

> ### ⚠ If you installed via git before 2026-09-13, run one line before upgrading to this version
>
> This project rewrote its git history on 2026-09-13 (removing a piece of data that had been mistakenly committed), and all tags now point to new commits. **The old `jtdt update` fails at the `git fetch --tags` step with "`would clobber existing tag`"**, and the message only says `git fetch failed`, without showing that tags are the cause. Run the line below once to fix this permanently:
>
> ```bash
> # Linux / macOS
> sudo git -C /opt/jt-doc-tools fetch --tags --force origin
> # Windows (run PowerShell as administrator)
> git -C "C:\Program Files\jt-doc-tools" fetch --tags --force origin
> ```
>
> **`-C` is uppercase.** Writing lowercase `git -c /opt/jt-doc-tools/ …` produces "`fatal: not a git repository (or any of the parent directories): .git`". Lowercase `-c` is the **config** option (`-c key=value`), so git does not change into that directory and…
