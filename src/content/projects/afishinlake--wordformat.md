---
repo: "AfishInLake/WordFormat"
name: "WordFormat"
description: "No more manually adjusting fonts, line spacing, or unifying heading styles! WordFormat batch-formats Word documents, supporting: automatic distinction between Chinese and English fonts (e.g., Chinese SimSun + English Arial); intelligent repair of messy heading, body text, and list formatting; batch processing of multiple documents, compatible with common templates such as thesis templates. Save time and focus on content."
originalDescription: "不用再手动调字体、改行距、统一标题样式了！ WordFormat 批量规范 Word 文档排版，支持： 中英文字体自动区分（如中文宋体 + 英文 Arial） 智能修复标题、正文、列表格式混乱 批量处理多文档，适配论文等常用模板 省下时间，专注内容。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/AfishInLake/WordFormat"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["docx", "python-docx", "skill"]
stars: 112
forks: 9
openIssues: 4
closedIssues: 16
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-14T02:49:44Z"
lastCommitAt: "2026-10-25T08:39:55Z"
lastReleaseAt: "2026-05-30T03:24:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 86
undervaluedScore: 23
maintainers: ["AfishInLake"]
openGraphImageUrl: "https://opengraph.githubassets.com/e194267c29c7403d73e451ec8556c54e8d92e020a9b7fbe3fe44f8bf921e0a78/AfishInLake/WordFormat"
---

# WordFormat

> Automated paper formatting tool

## Project Introduction

**WordFormat** is an automated Word document format checking and correction tool developed in Python, designed specifically for format compliance review of academic papers (undergraduate, master's, and doctoral theses, journal papers, etc.). The tool can intelligently parse Word document structure, identify paragraph types such as headings, abstracts, body text, and references, automatically validate document formatting against custom formatting rules, and add comments at non-compliant locations or directly fix formatting issues, greatly improving the efficiency of paper format review.

## Features

### Core Capabilities
- **Intelligent document structure parsing**: Based on an ONNX model, automatically identifies paragraph types such as headings, abstracts, body text, keywords, and references, generating structured JSON configuration files
- **Structural short-circuit recognition**: Image paragraphs, formula paragraphs (OMML, including standalone formula numbers such as （2-1）), and tables are determined directly from the XML structure without relying on model confidence; formula paragraphs can also be…
