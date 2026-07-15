---
repo: "ARTPARK-SAHAI-ORG/calibrate"
name: "calibrate"
description: "Core engine behind Calibrate, a framework for evaluating AI agents: speech-to-text, text-to-speech, LLM evaluation, end-to-end simulations"
readmeQualityOk: true
url: "https://github.com/ARTPARK-SAHAI-ORG/calibrate"
homepage: "https://calibrate.artpark.ai"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [52, 40]
topics: ["agent-evaluation", "agent-evaluation-tools", "ai-agents", "asr-evaluation", "llm-evaluation-toolkit", "tts-evaluation", "ai-agent-evaluation", "ai-evals", "ai-evaluation", "ai-evaluation-framework"]
stars: 14
forks: 4
openIssues: 24
closedIssues: 29
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-10-31T04:56:39Z"
lastCommitAt: "2026-07-15T05:54:21Z"
lastReleaseAt: "2026-02-11T04:39:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 55
maintainers: ["dalmia", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/040c8db0814d5e7591d97fa3ddeddf9268b22df3e0471839338b97fd5347e00d/ARTPARK-SAHAI-ORG/calibrate"
discussionCount: 0
---

# Calibrate

Core engine powering [Calibrate](https://calibrate.artpark.ai), a framework for evaluating AI agents which let you move from slow, manual testing to a fast, automated, and repeatable testing process for your entire agent stack:

- `Text to Text (LLMs)`: Evaluate the response quality and tool calling of your LLMs for multi-turn conversations and find the find LLM for your agent
- `Human alignment`: Create LLM judges to make your evaluations scalable and reliable with human in the loop.
- `Speech to Text (STT)`: Benchmark multiple providers (Google, Sarvam, ElevenLabs and more) on your dataset across 10+ indic languages using metrics optimised for agentic use cases
- `Text to Speech (TTS)`: Benchmark generated speech by multiple providers automatically using an Audio LLM Judge across 10+ indic languages
- `Simulations`: Simulate realistic conversations using realistic user personas and scenarios to test failure modes for your agent (including interruptions for voice agents)

## Installation

```bash
pip install calibrate-agent
```

## Usage

```bash
calibrate-agent              # Interactive main menu
calibrate-agent stt          # Benchmark STT providers…
