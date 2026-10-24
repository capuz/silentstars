---
repo: "fmadore/iwac-ai-pipelines"
name: "iwac-ai-pipelines"
description: "LLM pipelines for the Islam West Africa Collection: OCR, HTR, transcription, NER, summarization and sentiment analysis, written back to Omeka S"
readmeQualityOk: true
url: "https://github.com/fmadore/iwac-ai-pipelines"
homepage: "https://islam.zmo.de/s/westafrica/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["african-studies", "ai-pipelines", "digital-humanities", "gemini-ai", "llm", "named-entity-recognition", "nlp", "ocr", "omeka-s", "text-processing"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2025-07-03T07:02:54Z"
lastCommitAt: "2026-10-24T08:07:47Z"
lastReleaseAt: "2026-10-06T10:03:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 86
maintainers: ["fmadore", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1012972324/20c702fa-d5a5-48b7-b707-6cbf1c01e289"
---

# IWAC AI Pipelines

Python workflows for processing the [Islam West Africa Collection](https://islam.zmo.de/s/westafrica/) (IWAC) using Large Language Models.

## Context

The [Islam West Africa Collection](https://islam.zmo.de/s/westafrica/) is an open-access digital database documenting Islam and Muslim communities in Benin, Burkina Faso, Côte d'Ivoire, Niger, Nigeria, and Togo since the 1960s. It was created by [Frédérick Madore](https://www.frederickmadore.com/) and is hosted at the Leibniz-Zentrum Moderner Orient (ZMO) in Berlin. The collection grows continuously; research reports should state a dated source snapshot and distinguish documents from authority records when reporting counts.

At this scale, traditional manual processing—metadata tagging, OCR correction, entity identification—is no longer viable. These pipelines use LLMs from Google Gemini, OpenAI, and Mistral, plus open-weights models (Qwen, DeepSeek) reached through OpenRouter, to automate labor-intensive tasks that would otherwise leave much of the corpus inaccessible.

## What These Tools Do

| Pipeline | Purpose |
|----------|---------|
| **OCR Extraction** | Extract text from PDF scans using Gemini vision…
