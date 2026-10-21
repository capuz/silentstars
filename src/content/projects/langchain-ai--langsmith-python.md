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
forks: 12
openIssues: 16
closedIssues: 0
watchers: 0
contributors: 26
recentReleases: 3
createdAt: "2026-02-20T15:00:10Z"
lastCommitAt: "2026-10-21T08:49:36Z"
lastReleaseAt: "2026-10-16T07:15:57Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 67
undervaluedScore: 57
maintainers: ["thibautlehmann", "joaquin-borggio-lc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/558d0582dc3e401ed46e1ca4aa11dd48f4699e35586fd80ed991fa53c19c58f3/langchain-ai/langsmith-python"
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
