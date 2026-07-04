---
repo: "aucontraire/cognivault"
name: "cognivault"
description: "CogniVault is a modular, CLI-based multi-agent assistant designed to help you reflect, refine, and organize your thoughts"
url: "https://github.com/aucontraire/cognivault"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-framework", "ai-agents", "cli-tool", "knowledge-management", "langchain", "llm", "markdown-export", "python", "rag"]
stars: 8
forks: 2
openIssues: 1
closedIssues: 36
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-06-24T12:55:31Z"
lastCommitAt: "2026-07-04T19:20:43Z"
lastReleaseAt: "2025-07-03T16:44:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 40
maintainers: ["aucontraire"]
openGraphImageUrl: "https://opengraph.githubassets.com/f444b3f351de1745203d72da29a6ce30a77f2d168debb96ec80b1ba713fee9a0/aucontraire/cognivault"
---

# CogniVault

**Multi-agent workflow orchestration for LLMs.** CogniVault runs your question through a four-agent analysis pipeline — refine, critique, contextualize, synthesize — on a LangGraph DAG with parallel execution, structured Pydantic outputs, full event observability, and an optional FastAPI/WebSocket service layer.

📖 **[Documentation →](https://aucontraire.github.io/cognivault/)** (Material for MkDocs, organized by [Diátaxis](https://diataxis.fr))

## How it works

```mermaid
graph LR
    Q([Query]) --> R[Refiner]
    R --> C[Critic]
    R --> H[Historian]
    C --> S[Synthesis]
    H --> S
    S --> A([Analysis])
```

- **Refiner** sharpens the raw query into an answerable question.
- **Critic** stress-tests it: assumptions, logical gaps, biases (in parallel).
- **Historian** retrieves relevant context via hybrid search — local markdown notes plus PostgreSQL full-text (in parallel).
- **Synthesis** integrates all perspectives into a final structured analysis.

Each agent returns a typed Pydantic model (validated against OpenAI structured-output strict mode), and every step emits correlated events for tracing and diagnostics.

## Features

- **LangGraph DAG…
