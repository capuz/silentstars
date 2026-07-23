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
languagePcts: [37, 25]
topics: ["avd", "ave", "cnnvd", "cnvd", "cve", "nessus", "nuclei", "vulnerability"]
stars: 26
forks: 22
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-10T06:03:20Z"
lastCommitAt: "2026-07-23T06:16:04Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 49
maintainers: ["adysec"]
openGraphImageUrl: "https://opengraph.githubassets.com/5af2f4e50c78bbaefa8048c3d71ef7ae6bf97faa6bdba5370299ce775b3e09d6/adysec/AVE"
---

# AVE Multi-source Vulnerability Aggregation Engine

> **AVE** has multiple meanings:

| Meaning | Chinese | Description |
|------|------|------|
| AdySec Vulnerability Exposures | AdySec Vulnerability Disclosure | Project Attribution |
| AI-powered Vulnerability Engine | AI Driven Vulnerability Engine | Core Method |
| Automated Vulnerability Extractor | Fully Automated Vulnerability Extraction | Unmanned |

This directory is for independently published GitHub repositories and is displayed via GitHub Pages.

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
- **Search Filtering**: Supports searching by keywords (AVE/CVE/title/description) and filtering by severity (CRITICAL…
