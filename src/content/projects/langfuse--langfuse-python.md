---
repo: "langfuse/langfuse-python"
name: "langfuse-python"
description: "🪢 Langfuse Python SDK - Instrument your LLM app with decorators or low-level SDK and get detailed tracing/observability. Works with any LLM or framework"
readmeQualityOk: true
url: "https://github.com/langfuse/langfuse-python"
homepage: "https://langfuse.com/docs/sdk/python"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["decorators", "langfuse", "pydantic", "pydantic-v2", "python"]
stars: 459
forks: 339
openIssues: 6
closedIssues: 32
watchers: 6
contributors: 116
recentReleases: 0
createdAt: "2023-07-17T10:56:29Z"
lastCommitAt: "2026-08-27T12:55:08Z"
lastReleaseAt: "2023-11-22T11:34:54Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 42
maintainers: ["dependabot[bot]", "hassiebp", "langfuse-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/db5a988b4fa844a1bf983b26f40476dd820450926d3b5f169add2d6cb34a1271/langfuse/langfuse-python"
---

# Langfuse Python SDK

The [Langfuse](https://langfuse.com) Python SDK covers the full platform: **observability/tracing** (OpenTelemetry-based, with OpenAI and LangChain integrations), **datasets & experiments** (offline evaluation and regression testing of prompt/model changes, including [CI via GitHub Actions](https://github.com/langfuse/experiment-action)), **LLM-as-a-judge and custom evaluations/scores**, **prompt management**, and a **full REST API client**.

## Installation

> [!IMPORTANT]
> The SDK was rewritten in v4 and released in March 2026. Refer to the [v4 migration guide](https://langfuse.com/docs/observability/sdk/upgrade-path/python-v3-to-v4) for instructions on updating your code.

```
pip install langfuse
```

## Quickstart

```python
# env: LANGFUSE_PUBLIC_KEY, LANGFUSE_SECRET_KEY, LANGFUSE_BASE_URL

from langfuse import get_client

langfuse = get_client()

# Create a span using a context manager
with langfuse.start_as_current_observation(as_type="span", name="process-request") as span:
    # Your processing logic here
    span.update(output="Processing complete")

    # Create a nested generation for an LLM call
    with…
