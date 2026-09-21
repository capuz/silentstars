---
repo: "PxA-Labs/AgentsScope"
name: "AgentsScope"
description: "Lightweight observability for multi-agent AI pipelines. Self-hosted, no cloud dependency — add two lines of Python and see real-time agent events, DAG graphs, token usage, and session history on a local dashboard."
readmeQualityOk: true
url: "https://github.com/PxA-Labs/AgentsScope"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [68, 29]
topics: ["agents", "ai", "fastapi", "langchain", "llm", "machine-learning", "multi-agent", "nextjs", "observability", "python"]
stars: 20
forks: 10
openIssues: 0
closedIssues: 50
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-07-21T09:49:25Z"
lastCommitAt: "2026-09-21T09:13:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 51
maintainers: ["purvanshjoshi", "SriRamkunamsetty", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cf8990520100213a485fcaa7e9dbcf1ee916cc883225a8670a6490501632565/PxA-Labs/AgentsScope"
---

<h1>AgentScope</h1>
  <p><em>Lightweight observability for multi-agent AI pipelines</em></p>

  
  </a>
  </a>
  </a>
  </a>
  </a>
  </a>
  </a>

  <p>Add two lines of Python and see everything your AI agents are doing.</p>
</div>

<br />

## The Core Value Prop

**AgentScope** is a lightweight, open-source, self-hosted observability dashboard designed specifically for multi-agent AI pipelines. 

Running complex agent setups often feels like running completely blind—you add `verbose=True`, comb through endless walls of text in the console, and guess where an error occurred. With AgentScope, you **add 2 lines of Python, and instantly see everything your agents do** on a clean, local dashboard.

Keep track of real-time events, visualize your agent DAG, monitor token usage, and browse past session history—all without relying on an external cloud provider.

**Self-hosted. No accounts. No cloud dependency.**

## Quick Demo

**BEFORE**: Running agents blindly, adding `verbose=True`, reading walls of text.

**AFTER**: Two lines of code, a beautiful dashboard showing exactly what happened.

```python
from agentscope import AgentScopeCallback

cb =…
