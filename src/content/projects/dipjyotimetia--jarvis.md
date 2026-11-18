---
repo: "dipjyotimetia/JARVIS"
name: "JARVIS"
description: "A CLI based testing assistant powered by GenAI"
readmeQualityOk: true
url: "https://github.com/dipjyotimetia/JARVIS"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["artifical-intelligense", "gemini", "gemini-pro", "generative-ai", "golang", "llm", "testautomation", "testing", "gemini-ai", "google"]
stars: 14
forks: 2
openIssues: 9
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-02-05T12:48:31Z"
lastCommitAt: "2026-11-18T12:07:01Z"
lastReleaseAt: "2024-04-13T16:58:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 58
undervaluedScore: 28
maintainers: ["dipjyotimetia", "dependabot[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/e10e6b575005694abed58fedb9d75b525bc300ab2d737fb9bc5832d2beef8f78/dipjyotimetia/JARVIS"
discussionCount: 0
---

# JARVIS

AI-powered CLI for API testing: generate test data and scenarios from OpenAPI, analyse failures, and inspect traffic.

## Installation

Download the binary for your platform from the [releases page](https://github.com/dipjyotimetia/JARVIS/releases).

```bash
chmod +x jarvis
sudo mv jarvis /usr/local/bin/
```

On Windows, put `jarvis.exe` on your `PATH`. To build from source, see the [setup guide](https://github.com/dipjyotimetia/JARVIS/blob/HEAD/docs/setup.md).

## Quick start

```bash
jarvis setup
jarvis gen generate-testdata --spec api.yaml --count 10
jarvis gen generate-scenarios --path specs/openapi/api.yaml
jarvis analyze analyze-failures --limit 5
jarvis proxy --record
jarvis certificate --cert-dir ./certs
```

## Supported providers

Generation and failure analysis call one LLM through `pkg/engine/llm`. Set `LLM_PROVIDER` to `openai`, `anthropic`, `google`, or `ollama`. If it is unset, Jarvis checks `OPENAI_API_KEY`, then `ANTHROPIC_API_KEY`, then `GOOGLE_API_KEY`, and otherwise uses Ollama.
