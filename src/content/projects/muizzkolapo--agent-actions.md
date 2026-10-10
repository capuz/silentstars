---
repo: "Muizzkolapo/agent-actions"
name: "agent-actions"
description: "Declarative framework for orchestrating multi-model Agentic pipelines with context engineering and quality gates."
readmeQualityOk: true
url: "https://github.com/Muizzkolapo/agent-actions"
homepage: "http://docs.runagac.com/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ai-agents", "anthropic", "context-engineering-framework", "llm", "orchestration", "prompt-engineering", "prompt-engineering-tool", "yaml"]
stars: 8
forks: 1
openIssues: 54
closedIssues: 154
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-27T06:01:50Z"
lastCommitAt: "2026-10-10T10:03:51Z"
lastReleaseAt: "2026-04-08T19:34:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 56
maintainers: ["Muizzkolapo"]
openGraphImageUrl: "https://opengraph.githubassets.com/345f36d732f0268b9ea4af3326aea3ab575ac28c7d07dc9e031cb08ddb61193f/Muizzkolapo/agent-actions"
---

Declarative LLM orchestration. Define workflows in YAML — each action gets its own model, context window, schema, and pre-check gate. The framework handles DAG resolution, parallel execution, batch processing, and output validation.

> [!WARNING]
> **Experimental** — Under active development. Expect breaking changes. [Open an issue](https://github.com/Muizzkolapo/agent-actions/issues) with feedback.

```yaml
actions:
  - name: extract_features
    intent: "Extract key product features from listing"
    model_vendor: anthropic              # Each action picks its own model
    model_name: claude-sonnet-4-20250514

  - name: generate_description
    dependencies: [extract_features]
    model_vendor: openai                 # Mix vendors in one pipeline
    model_name: gpt-4o-mini
    context_scope:
      observe:
        - extract_features.features      # See only what it needs
      drop:
        - source.raw_html                # Don't waste tokens on noise
```

## Install

```bash
pip install agent-actions
```

## Quick start

```bash
agac init my_project && cd my_project                # scaffold a project
agac init example contract_reviewer my_project       # or start from an…
