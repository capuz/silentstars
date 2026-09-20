---
repo: "komputer-ai/komputer-ai"
name: "komputer-ai"
description: "Distributed Claude AI agents on Kubernetes - scalable, stateless, fully open source"
readmeQualityOk: true
url: "https://github.com/komputer-ai/komputer-ai"
language: "TypeScript"
languages: ["TypeScript", "Python", "Go"]
languagePcts: [36, 35, 28]
stars: 16
forks: 0
openIssues: 42
closedIssues: 52
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-26T11:55:16Z"
lastCommitAt: "2026-09-20T08:45:54Z"
lastReleaseAt: "2026-03-31T22:08:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 16
maintainers: ["amitde69", "sdk-bot-komputer-ai[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1192620653/c0767bcd-e9c1-4401-8af7-c5b58847eaa4"
---

</p>

<h1 align="center">Komputer.AI</h1>

  <strong>Distributed Claude AI agents on Kubernetes</strong>
</p>

</p>

</p>

  A stateless, Kubernetes-native platform for running persistent Claude AI agents.<br/>
  Built on CRDs, operators, and the Kubernetes API — agents are first-class cluster resources.<br/>
  Designed to be driven by external systems. Create agents, send tasks, and stream real-time results via REST + WebSocket.
</p>

</p>

</p>

</p>

## Python SDK

```bash
pip install komputer-ai-sdk
```

```python
from komputer_ai.client import KomputerClient

client = KomputerClient("http://localhost:8080")

# Create an agent and give it a task
client.create_agent(
    name="my-agent",
    instructions="Analyze our Kubernetes cluster and suggest cost optimizations",
    model="claude-sonnet-4-6",
)

# Stream events as the agent works
for event in client.watch_agent("my-agent"):
    if event.type == "text":
        print(event.payload.content)
    elif event.type == "tool_use":
        print(f"  -> using {event.payload.name}")
    elif event.type == "task_completed":
        print(f"\nDone — cost: ${event.payload.cost_usd}")
        break
```

Full SDK reference in…
