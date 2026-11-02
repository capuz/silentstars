---
repo: "polarsen-io/padwan-ai"
name: "padwan-ai"
description: "Minimal, provider-agnostic Python client for large language models, built on niquests."
readmeQualityOk: true
url: "https://github.com/polarsen-io/padwan-ai"
homepage: "https://polarsen-io.github.io/padwan-ai/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["gemini", "grok", "http2", "llm", "mistral", "niquests", "openai", "python3", "agent", "mcp"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-14T21:40:56Z"
lastCommitAt: "2026-11-02T17:58:21Z"
lastReleaseAt: "2026-05-15T09:01:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 67
maintainers: ["Andarius", "polarsen-renovate[bot]", "Polarsen-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1158144716/94b73580-5214-469e-8353-cb2332e2f1dd"
discussionCount: 0
---

Lightweight async client for OpenAI, Gemini, Mistral, Grok, Anthropic, ElevenLabs (experimental), Gradium (experimental), TypeSafe (JEV, experimental), and any OpenAI-compatible API.<br>
  One HTTP dependency (<a href="https://github.com/jawah/niquests">niquests</a>, plus its qh3/urllib3-future stack), TypedDict everywhere, HTTP/2 and HTTP/3 out of the box.

## Install

```bash
pip install padwan-ai
```

Extras: `[realtime]` for voice sessions, `[otel]` for OpenTelemetry, `[langfuse]` for the Langfuse adapter.

## Quickstart

```python
from padwan_ai import LLMClient

async with LLMClient(model="gpt-5.5") as client:
    response, usage = await client.complete_chat(
        [{"role": "user", "content": "Hello!"}]
    )
    print(response["content"])
```

The provider is picked from the model name; only the matching `*_API_KEY` env var is needed.

### Streaming

```python
from padwan_ai import ConversationState, LLMClient

state = ConversationState(system="You are a concise assistant.")
state.add_user_message("What's Python?")

async with LLMClient(model="gemini-3.5-flash") as client:
    chunks: list[str] = []
    async for text in client.stream_chat(state.messages):…
