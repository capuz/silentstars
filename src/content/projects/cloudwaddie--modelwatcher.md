---
repo: "CloudWaddie/ModelWatcher"
name: "ModelWatcher"
description: "Github actions based model watcher"
url: "https://github.com/CloudWaddie/ModelWatcher"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-19T03:15:30Z"
lastCommitAt: "2026-06-23T06:41:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/235d972ce00266a7f35c0465727b4f9e2bf6abb71209920dbad2169b3a5582b1/CloudWaddie/ModelWatcher"
fundingLinks: ["CUSTOM:https://nowpayments.io/donation/cloudwaddie"]
---

# Model Watcher

Hourly scanner for OpenAI-compatible API endpoints with Discord notifications.

## Features

- Scans multiple OpenAI-compatible APIs hourly
- Detects new, removed, and updated models
- Sends Discord notifications via webhook (with group support)
- JSON logging with full change diffs
- API key sanitization in all logs

## Supported Endpoints

| Provider | Env Variable | Base URL |
|----------|--------------|----------|
| OpenAI | `OPENAI_API_KEY` | `https://api.openai.com/v1` |
| Anthropic | `ANTHROPIC_API_KEY` | `https://api.anthropic.com/v1` |
| Google Gemini | `GEMINI_API_KEY` | `https://generativelanguage.googleapis.com/v1beta/openai` |
| GitHub Models | `GH_MODELS_API_KEY` | `https://models.github.ai` |
| Groq | `GROQ_API_KEY` | `https://api.groq.com/openai/v1` |
| Mistral | `MISTRAL_API_KEY` | `https://api.mistral.ai/v1` |
| Cohere | `COHERE_API_KEY` | `https://api.cohere.ai/v1` |
| Together AI | `TOGETHER_API_KEY` | `https://api.together.ai/v1` |
| DeepInfra | `DEEPINFRA_API_KEY` | `https://api.deepinfra.com/v1/openai` |
| Fireworks AI | `FIREWORKS_API_KEY` | `https://api.fireworks.ai/inference/v1` |
| OpenRouter | `OPENROUTER_API_KEY` |…
