---
repo: "calf-ai/calfkit-sdk"
name: "calfkit-sdk"
description: "🐮 Build powerful AI agent teams with dynamic agent-to-agent discovery and collaboration"
url: "https://github.com/calf-ai/calfkit-sdk"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agents", "ai", "ai-agents", "ai-workflows", "asynchronous-communication", "distributed-systems", "event-driven", "kafka", "llm", "openai"]
stars: 123
forks: 7
openIssues: 17
closedIssues: 39
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-08T20:40:22Z"
lastCommitAt: "2026-06-28T01:35:47Z"
lastReleaseAt: "2026-02-24T10:43:49Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 93
undervaluedScore: 28
maintainers: ["ryan-yuuu", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1130664672/18b1d37e-e705-40c2-96e9-d3d3c1a74a21"
---

<h1 align="center">🐮 Calfkit</h1>

<h3 align="center">
  Build powerful teams of AI agents that automatically discover each other and collaborate.
</h3>

</p>

Calfkit agents dynamically find each other at runtime and choreograph work. No hard-coded orchestrator or extra wiring. The framework for building free-flowing and powerful multi-agent teams.

<br>

## Installation

```bash
pip install calfkit
```

## Quickstart

### An agent (that can discover other agents)

```python
from calfkit import Agent, Handoff, Messaging, Tools, OpenAIResponsesModelClient

general = Agent(
    name="general",
    description="Answers simple questions and routes requests to whoever can handle it.",
    system_prompt="You are a general assistant. Defer technical questions to other agents.",
    model_client=OpenAIResponsesModelClient(model_name="gpt-5.4-mini"),
    peers=[
        Messaging(discover=True),  # discover and delegate to any agent at runtime
        Handoff(discover=True),  # discover and hand off to any agent at runtime
    ],
)
```

### Runtime discoverability allows you to add new agents and tools to the team at any time

```python
from calfkit import Agent, agent_tool, Tools,…
