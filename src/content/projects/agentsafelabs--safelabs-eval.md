---
repo: "AgentSafeLabs/safelabs-eval"
name: "safelabs-eval"
description: "OWASP ASI-aligned red-teaming and evaluation framework for AI agents"
readmeQualityOk: true
url: "https://github.com/AgentSafeLabs/safelabs-eval"
homepage: "https://agentsafelabs.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent-security", "ai-safety", "crewai", "evaluation", "jailbreak", "langchain", "llm-security", "owasp", "prompt-injection", "red-teaming"]
stars: 171
forks: 20
openIssues: 0
closedIssues: 20
watchers: 6
contributors: 1
recentReleases: 4
createdAt: "2026-05-25T09:22:48Z"
lastCommitAt: "2026-09-19T01:16:16Z"
lastReleaseAt: "2026-09-18T07:47:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 35
maintainers: ["iamwaqarjaved"]
openGraphImageUrl: "https://opengraph.githubassets.com/1903251da40b7e02a7d4d7fb06d90b36e0f88d83e2575ef24b100672b2108a0d/AgentSafeLabs/safelabs-eval"
discussionCount: 3
---

# safelabs-eval

**Open-source red-teaming and evaluation framework for AI agents — aligned to the OWASP Agentic Security Initiative (ASI) Top 10.**

---

AI agents built on LangChain, CrewAI, AutoGen, LlamaIndex, the OpenAI Agents SDK, Google ADK, Semantic Kernel, and custom frameworks ship to production without systematic safety testing. `safelabs-eval` changes that.

Point it at any agent endpoint — or wrap any Python callable — and it fires **131 curated adversarial prompts** (13 per OWASP ASI category) across all 10 OWASP ASI categories, scores every response with pattern-based detectors, and prints a structured security report in seconds.

No LLM calls required for detection. No agent code modifications required. No infrastructure setup.

---

## Install

```bash
pip install safelabs-eval
```

**Requirements:** Python 3.11+

---

## Quick Start

### Option 1 — CLI: test any HTTP agent endpoint

```bash
# Red-team a local agent against ASI01 (Prompt Injection)
safelabs run --target http://localhost:8000/chat --category ASI01

# Run all 131 OWASP ASI prompts
safelabs run --target http://localhost:8000/chat --category all

# JSON output for CI pipelines
safelabs run --target…
