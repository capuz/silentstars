---
repo: "adysec/AVE"
name: "AVE"
description: "AVE is a multi-source vulnerability knowledge base aimed at security operations, unifying AVE numbers and outputting structured TOML, while organizing and verifying public PoC/EXP assets, supporting quick filtering of high-value vulnerabilities by severity. The code and logic for vulnerability crawling and organization have not yet been open-sourced."
originalDescription: "AVE 是面向安全运营的多源漏洞知识库，统一 AVE 编号并输出结构化 TOML，同时整理和校验公开 PoC/EXP 资产，支持按严重等级快速筛选高价值漏洞。漏洞爬取与梳理的代码和逻辑暂未开源。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/adysec/AVE"
homepage: "http://ave.adysec.com/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [49, 38]
topics: ["avd", "ave", "cnnvd", "cnvd", "cve", "nessus", "nuclei", "vulnerability"]
stars: 21
forks: 21
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-10T06:03:20Z"
lastCommitAt: "2026-07-13T06:42:30Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 54
maintainers: ["adysec"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1ac9d6066f7c2f494d85e10e51b89c071a9476c10613dfddbc4ba20312b025e/adysec/AVE"
---

# AVE Multi-source Vulnerability Aggregation Engine

> **AVE** has multiple meanings:

| Meaning | Chinese | Description |
|------|------|------|
| AdySec Vulnerability Exposures | AdySec Vulnerability Disclosure | Project Ownership |
| AI-powered Vulnerability Engine | AI Driven Vulnerability Engine | Core Method |
| Automated Vulnerability Extractor | Fully Automated Vulnerability Extraction | Unmanned |

This directory is for independently published GitHub repositories and is displayed through GitHub Pages.

## Public Content

- Vulnerability details (`vulns/{year}/*.toml`, stored in directories by year)
- PoC files (`pocs/{year}/*.toml`)
- EXP files (`exploits/{year}/*.toml`)
- Static site (`index.html`, `detail.html`, `assets/`)

## Non-public Content

- Core code and processing logic for vulnerability crawling and organization (not yet open-sourced)
- Internal infrastructure and private automation implementations

## Site Features

### Vulnerability List (`index.html`)

- **Paginated Browsing**: Displays 15 vulnerability records per page, supports pagination.
- **Search Filtering**: Supports searching by keywords (AVE/CVE/title/description) and filtering by severity…
