---
repo: "OpenAgentHQ/openagent-eval"
name: "openagent-eval"
description: "Local-first evaluation framework for RAG systems and AI Agents. 18+ metrics, CLI + SDK, framework-agnostic. The pytest of AI evaluation."
readmeQualityOk: true
url: "https://github.com/OpenAgentHQ/openagent-eval"
homepage: "https://openagenthq.github.io/openagent-eval/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["rag", "rag-evaluation", "cli", "llm", "metrics", "ai", "ai-agents", "ai-evaluation", "benchmark", "evaluation"]
stars: 11
forks: 15
openIssues: 63
closedIssues: 28
watchers: 0
contributors: 11
recentReleases: 10
createdAt: "2026-07-08T09:00:53Z"
lastCommitAt: "2026-07-17T06:00:05Z"
lastReleaseAt: "2026-07-14T18:47:26Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 85
undervaluedScore: 65
maintainers: ["himanshu231204", "hkJerryLeung", "Nitjsefnie"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c2f6dd44700570f8a87acda17bf0a3ca60f455d7fa3fa22e43965f90a792ec5/OpenAgentHQ/openagent-eval"
discussionCount: 1
---

# OpenAgent Eval

**The open-source evaluation framework for RAG systems and AI Agents.**

Local-first. Framework-agnostic. Developer-friendly.

[Getting Started](#installation) · [Documentation](https://openagenthq.github.io/openagent-eval/) · [Contributing](#contributing)

</div>

---

## Why OpenAgent Eval?

Evaluating RAG systems shouldn't require a PhD or a cloud account. OpenAgent Eval brings **pytest-level simplicity** to AI evaluation — run from your terminal, get actionable insights, and ship with confidence.

- **Local-first** — No cloud services, dashboards, or authentication required
- **Framework-agnostic** — Works with LangChain, LlamaIndex, or any custom RAG pipeline
- **18+ metrics** — Retrieval, generation, faithfulness, relevancy, performance, and cost
- **Plugin-based** — Extend with custom metrics, providers, and report generators
- **Production-ready** — Corpus auditing, failure diagnosis, and synthetic test data generation

---

## Installation

```bash
pip install openagent-eval
```

For development:

```bash
git clone https://github.com/OpenAgentHQ/openagent-eval.git
cd openagent-eval
uv sync
```

---

## Quick Start

### 1. Initialize Configuration…
