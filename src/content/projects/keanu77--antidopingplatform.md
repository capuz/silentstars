---
repo: "keanu77/antidopingplatform"
name: "antidopingplatform"
description: "Sports doping case database: search and compare international doping sanction cases, visualize annual trends and sport distribution, with anti-doping knowledge education quizzes"
originalDescription: "運動禁藥案例資料庫：國際禁藥處分案例搜尋與比較、年度趨勢與運動項目分布視覺化，附禁藥知識教育測驗"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/keanu77/antidopingplatform"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
topics: ["anti-doping", "athlete-education", "case-database", "data-visualization", "express", "mongodb", "react", "sports-medicine"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-22T12:11:04Z"
lastCommitAt: "2026-10-23T09:32:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 56
maintainers: ["keanu77", "ethanai2596"]
openGraphImageUrl: "https://opengraph.githubassets.com/95ffa71fc39170264302a0a78b2b9a751e494906ad37227767228ddea53d51f2/keanu77/antidopingplatform"
---

# Sports Anti-Doping Teaching Platform

Provides international case search, database analysis, prohibited lists, a TUE decision tool, quizzes, and doping control procedures.
Official site: https://antidopingplatform.sportsmedicine.tw/

## Prescription Drug, Chinese Medicine, and Supplement Lookup

Three new lookup types are added: `/drug-search` covers 66,522 TFDA prescription drug licenses; `/herbal-search` covers 10,046 NHI Administration Chinese medicine entries (single herb 3,507 / compound 6,539); `/supplement-search` covers 7,972 TFDA food registrations. All support search, pagination, detail views, and SQLite/JSON portability, and none depend on supply data from the original TADA site. Prescription drugs include component-by-component comparison for some listed substances. Chinese medicine data lacks complete formulas, and food data lacks batch-level doping test certificates, so none of these are presumed to be usable by athletes. This is not a one-to-one replica of TADA's full data or full interpretation.

For usage, sources, licensing, actual coverage, and portability instructions, see [Lookup System Implementation…
