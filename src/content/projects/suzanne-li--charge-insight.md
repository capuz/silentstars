---
repo: "Suzanne-Li/charge-insight"
name: "charge-insight"
description: "An intelligent data query and anomaly analysis Agent for charging and battery-swap operations, built on Spring Boot and Spring AI"
originalDescription: "基于 Spring Boot 和 Spring AI 的充换电运营智能问数与异常分析 Agent"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Suzanne-Li/charge-insight"
language: "Java"
languages: ["Java"]
languagePcts: [93]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-09-03T13:12:31Z"
lastCommitAt: "2026-10-09T10:51:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 11
maintainers: ["Suzanne-Li"]
openGraphImageUrl: "https://opengraph.githubassets.com/81c17feea5511f1fea4d5736ff49797c1a998df93a22ae1189dc62f1627df59f/Suzanne-Li/charge-insight"
---

# ChargeInsight

ChargeInsight is a natural-language data analysis system built for charging operations scenarios. Users can run metric queries, trend analysis, ranking comparisons, and anomaly attribution by region, city, charger cluster, and time range. The system orchestrates data tools through a controlled Agent Runtime, and improves analysis accuracy, safety, and traceability through hybrid retrieval, controlled Text-to-SQL, layered memory, and observability.

**Tech stack:** Spring Boot, MySQL, Redis, Embedding, BM25, RRF, JSqlParser, MCP, Docker

## Project Highlights

- **Controlled Agent Runtime:** For operational metrics, trends, rankings, and anomaly attribution, a finite state machine fixes the chain "next-step decision → tool execution → observation feedback → result validation → conclusion generation". Anomaly attribution makes at most one additional call based on observation results, avoiding blind batch calls and keeping a full-chain audit.
- **Hybrid retrieval enhancement:** For colloquial operational questions with ambiguous semantics, uses Embedding vector retrieval plus BM25 recall, fused and ranked with RRF. Retrieval Hit@3 reaches 95.83%, improving the…
