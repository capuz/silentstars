---
repo: "lightspeed-core/lightspeed-stack"
name: "lightspeed-stack"
description: "LLM tooling stack"
readmeQualityOk: true
url: "https://github.com/lightspeed-core/lightspeed-stack"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 40
forks: 99
openIssues: 36
closedIssues: 29
watchers: 5
contributors: 72
recentReleases: 0
createdAt: "2025-05-01T08:23:01Z"
lastCommitAt: "2026-08-30T09:25:15Z"
lastReleaseAt: "2026-03-09T17:02:27Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 60
maintainers: ["tisnik", "max-svistunov", "JslYoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/fecff523c73f7f408112632f4d4b6d905b8d17f59add8a2e2d4f5414d14edfd6/lightspeed-core/lightspeed-stack"
---

# Lightspeed Core Stack (LCS)

## About The Project

Lightspeed Core Stack (LCS) is an AI-powered assistant that provides answers to product questions using backend LLM services, agents, and RAG databases.

The service includes comprehensive user data collection capabilities for various types of user interaction data, which can be exported to Red Hat's Dataverse for analysis using the companion [lightspeed-to-dataverse-exporter](https://github.com/lightspeed-core/lightspeed-to-dataverse-exporter) service.

* [Architecture](#architecture)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
    * [Clone the Repository](#clone-the-repository)
    * [System-Specific Installation](#system-specific-installation)
* [Run LCS locally](#run-lcs-locally)
    * [Container Runtime Requirements](#container-runtime-requirements)
* [Configuration](#configuration)
    * [Agentic Capabilities](#agentic-capabilities)
    * [LLM Compatibility](#llm-compatibility)
    * [Set LLM provider and model](#set-llm-provider-and-model)
    * [Selecting provider and model](#selecting-provider-and-model)
        * [Provider and model selection in REST API…
