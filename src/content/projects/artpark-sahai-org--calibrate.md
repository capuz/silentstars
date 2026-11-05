---
repo: "ARTPARK-SAHAI-ORG/calibrate"
name: "calibrate"
description: "Core engine behind Calibrate, a framework for evaluating AI agents: speech-to-text, text-to-speech, LLM evaluation, end-to-end simulations"
readmeQualityOk: true
url: "https://github.com/ARTPARK-SAHAI-ORG/calibrate"
homepage: "https://calibrate.artpark.ai"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [49, 43]
topics: ["agent-evaluation", "agent-evaluation-tools", "ai-agents", "asr-evaluation", "llm-evaluation-toolkit", "tts-evaluation", "ai-agent-evaluation", "ai-evals", "ai-evaluation", "ai-evaluation-framework"]
stars: 24
forks: 8
openIssues: 20
closedIssues: 35
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-10-31T04:56:39Z"
lastCommitAt: "2026-11-05T08:05:10Z"
lastReleaseAt: "2026-02-11T04:39:18Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 62
maintainers: ["dalmia", "github-actions[bot]", "M-A-D-A-R-A"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2992a2c85c91e47915175e28c2291a2696645045a64092053f73d475b0a771d/ARTPARK-SAHAI-ORG/calibrate"
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
