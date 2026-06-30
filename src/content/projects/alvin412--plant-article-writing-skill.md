---
repo: "alvin412/plant-article-writing-skill"
name: "plant-article-writing-skill"
description: "Skills for publication-ready plant-science manuscript and review writing."
url: "https://github.com/alvin412/plant-article-writing-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-17T01:21:01Z"
lastCommitAt: "2026-06-30T06:51:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 14
maintainers: ["alvin412"]
openGraphImageUrl: "https://opengraph.githubassets.com/4112167679daea9fc07afad995c31658d51423f4743baba18b106229f927ae8d/alvin412/plant-article-writing-skill"
---

# Plant Article Writing Skill Suite

Version: **v0.2**

This repository contains one lightweight router and four independently callable Codex skills for plant-science manuscripts.

## Skills

- `plant-article-writing`: routes broad requests.
- `reading-literature`: full-paper bilingual close reading, claim verification, and confirmed Zotero child notes.
- `plant-review-article`: plant reviews, perspectives, scoping reviews, systematic reviews, and meta-analyses.
- `plant-research-article`: original plant research manuscripts with fixed core sections.
- `article-finalize`: target-journal formatting, English-only final manuscript, and bilingual compliance audit.

## 中文说明

本仓库包含一个轻量路由 skill 和四个可独立调用的子 skill：文献全文精读与 Zotero 笔记、植物综述撰写、植物原创研究论文撰写，以及目标期刊格式终审。

新建完整综述或研究论文时，必须先生成详细提纲并等待作者明确批准。提纲批准后，写作 skill 自动继续完成正文、润色、关键论点引文核查、模拟同行评审、修改、逐点回复、复审和 Word 质检。

## Final Outputs

The two writing skills create exactly three final files under `deliverables/`:

1. `01_plant_article_bilingual.docx`
2. `02_claim_citation_audit_bilingual.docx`
3. `03_peer_review_and_response_bilingual.docx`

All search records, reading notes, outlines, drafts, evidence maps, JSON inputs, reviewer working files,…
