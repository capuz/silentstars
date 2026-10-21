---
repo: "langchain-ai/langsmith-python"
name: "langsmith-python"
description: "Langsmith Python SDK"
readmeQualityOk: true
url: "https://github.com/langchain-ai/langsmith-python"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 15
forks: 13
openIssues: 16
closedIssues: 0
watchers: 0
contributors: 27
recentReleases: 4
createdAt: "2026-02-20T15:00:10Z"
lastCommitAt: "2026-10-21T23:35:47Z"
lastReleaseAt: "2026-10-21T20:14:58Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 68
undervaluedScore: 58
maintainers: ["thibautlehmann", "joaquin-borggio-lc", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d54666bbdf4764aca535bbb980e02e0ebe7c1966246edc2a8a8da3a21b94fd3/langchain-ai/langsmith-python"
---

# LangSmith Client SDK

This package contains the Python client for interacting with the [LangSmith platform](https://smith.langchain.com/).

To install:

```bash
pip install -U langsmith
export LANGSMITH_TRACING=true
export LANGSMITH_API_KEY=ls_...
```

Then trace:

```python
import openai
from langsmith.wrappers import wrap_openai
from langsmith import traceable

# Auto-trace LLM calls in-context
client = wrap_openai(openai.Client())

@traceable  # Auto-trace this function
def pipeline(user_input: str):
    result = client.chat.completions.create(messages=[{"role": "user", "content": user_input}], model="gpt-5.4")
    return result.choices[0].message.content

pipeline("Hello, world!")
```

Every LLM call inside `pipeline` is nested under a single trace in the LangSmith UI.

LangSmith helps you and your team develop and evaluate language models and intelligent agents. It is compatible with any LLM application.

> **Cookbook:** For tutorials on how to get more value out of LangSmith, check out the [Langsmith Cookbook](https://github.com/langchain-ai/langsmith-cookbook/tree/main) repo.

A typical workflow looks like:

1. Set up an account with LangSmith.
2. Log traces while…
