---
repo: "AmritaBot/AmritaCore"
name: "AmritaCore"
description: "Next Generation Agent Runtime / 次世代Agent运行时"
url: "https://github.com/AmritaBot/AmritaCore"
homepage: "https://core.amritabot.com/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "framework", "llm", "agent-framework", "high-performance", "python3", "liteweight"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-31T01:03:56Z"
lastCommitAt: "2026-06-27T06:22:36Z"
lastReleaseAt: "2026-02-18T06:56:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["JohnRichard4096", "dependabot[bot]", "wling-art"]
openGraphImageUrl: "https://opengraph.githubassets.com/20dff8c8619653ea50c6d10915acbdbd8322ad48b4641d82cd365ee8e568199c/AmritaBot/AmritaCore"
---

# AmritaCore

<center><img src="./docs/docs/public/Amrita.png" alt="Logo" width="200" height="200">
<p>
    </a>
    </a>
    </a>
    </a>
    </a>
  </p>

</center>

AmritaCore is a **lightweight Agent runtime** built on top of **AmritaSense**. It delivers native async streaming, tool integration, event hooks, and memory management — everything you need to build interactive, production‑ready Agent applications without the overhead of heavyweight frameworks.

## 🚀 Fast Lookup

```python
import asyncio
from amrita_core import create_agent

async def main():
    agent = create_agent(
        base_url="https://api.openai.com/v1",
        api_key="your-api-key",
        model="gpt-4o-mini",
    )
    chat = agent.get_chatobject("Hello, how are you?")
    print(await chat.full_response())

asyncio.run(main())
```

## 🔑 Key Features

- **Interactive‑first design** — native async streaming with suspend/resume
- **Vendor‑agnostic adapter system** — OpenAI, Anthropic, and extensible
- **Declarative dependency injection** — type‑safe, based on function signatures
- **Event‑driven hooks** — intercept and modify the processing pipeline
- **Tool system** — `@simple_tool`, `@on_tools`, and…
