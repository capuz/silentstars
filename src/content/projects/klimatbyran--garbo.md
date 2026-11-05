---
repo: "Klimatbyran/garbo"
name: "garbo"
description: "Klimatkollen's data pipeline and API for processing company sustainability reports"
readmeQualityOk: true
url: "https://github.com/Klimatbyran/garbo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["climate", "climate-change", "climate-data", "ghg-emissions", "open-data", "sustainability-reporting"]
stars: 27
forks: 30
openIssues: 44
closedIssues: 464
watchers: 1
contributors: 25
recentReleases: 0
createdAt: "2024-01-11T21:47:08Z"
lastCommitAt: "2026-11-05T08:05:10Z"
lastReleaseAt: "2025-12-29T13:37:32Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 72
maintainers: ["fluxcdbot", "github-actions[bot]", "kaylawoodbury"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2992a2c85c91e47915175e28c2291a2696645045a64092053f73d475b0a771d/Klimatbyran/garbo"
---

# Klimatkollen Garbo AI

This is the main repository for the AI pipeline we call Garbo. Garbo runs via our [validation frontend](https://github.com/Klimatbyran/validate-frontend) and pipeline-api, and is powered by LLM:s to fetch and extract GHG self-reported data from companies. It automates the process of data extraction, evaluation, and formatting, providing a streamlined workflow for handling environmental data.

Garbo is invoked through the validation UI or pipeline-api, and has a pipeline of tasks and jobs that will be started in order to extract, evaluate and format the data autonomously.

Do you have an idea? Jump into the code or head to our [Discord server](https://discord.gg/N5P64QPQ6v) to discuss your thoughts.

We utilise an open source queue manager called BullMQ which relies on Redis. The data is then stored into DB and Wikidata.

## Current Status

Start the validation frontend and pipeline-api to run reports through the Garbo pipeline.

## Data Flow

Some of the following steps will be performed in parallel and most will be asynchronous. If a process is failed it's important to be able to restart it after a new code release so we can iterate on the prompts etc…
