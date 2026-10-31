---
repo: "Prastavna/leetcode-interview-questions"
name: "leetcode-interview-questions"
description: "Near real-time LeetCode Interview Questions"
readmeQualityOk: true
url: "https://github.com/Prastavna/leetcode-interview-questions"
homepage: "https://leetcode-interview-questions.prastavna.com"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [56, 31]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-13T12:03:43Z"
lastCommitAt: "2026-10-31T07:45:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 58
maintainers: ["ssahillppatell"]
openGraphImageUrl: "https://opengraph.githubassets.com/73409c6debb8df0c08c9ef8d0250d2a47be0bbc9d1352c2b64b37d683ad0ab80/Prastavna/leetcode-interview-questions"
---

Automated pipeline for discovering, parsing, and visualising community-sourced interview experiences from LeetCode discussions.

---

## Overview

This project powers a full ingestion-to-visualisation flow for public LeetCode discussion posts tagged as `interview`. The Java collector walks the GraphQL API, calls OpenAI to structure the content into a canonical `Interview` schema, validates and deduplicates the payloads, then persists them into a sorted JSON dataset. A Vite + Vue dashboard renders aggregated insights, charts, and searchable tables from that dataset.

Key capabilities:

- Reliable incremental backfill that walks LeetCode discussions until a configurable start date.
- Post-level filtering (e.g. discard posts with positive `UPVOTE` reactions) and validation to keep the dataset clean.
- Automated ID enrichment and date normalisation to simplify downstream analytics.
- Front-end visualisations built with Nuxt UI components, ECharts, and typed table sorting.

## Project Structure

```
├── build.gradle.kts             # Gradle build for the Java ingestion pipeline
├── src/main/java                # Fetcher, models, storage, and OpenAI integration
├── src/main/web…
