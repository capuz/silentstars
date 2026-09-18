---
repo: "hcompai/hai-agents-python"
name: "hai-agents-python"
description: "Python SDK for H Company's Agents API"
readmeQualityOk: true
url: "https://github.com/hcompai/hai-agents-python"
homepage: "https://hub.hcompany.ai/agents-api/introduction"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 34
forks: 2
openIssues: 5
closedIssues: 2
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-05-28T13:54:41Z"
lastCommitAt: "2026-09-18T08:26:33Z"
lastReleaseAt: "2026-06-16T13:23:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["abonneth", "dependabot[bot]", "enguerran-leclerc"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b662123b91244da8d7f31108dab3703cf55fac498247bd3863f56567c3fc21a/hcompai/hai-agents-python"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/hcompai/hai-agents-python/blob/main/assets/banner-dark.gif?raw=true" />
  </picture>
</p>

</p>

  Python SDK for <a href="https://hcompany.ai">H Company</a>'s <a href="https://hub.hcompany.ai/agents-api/introduction">Agents API</a>.
</p>

  <b><a href="https://hub.hcompany.ai/agents-api/introduction">Documentation</a></b>
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
</p>

## Installation

```bash
pip install hai-agents
```

Add the optional command-line tools with the `cli` extra:

```bash
pip install "hai-agents[cli]"
```

Python 3.10 or newer is required. Get an API key at [platform.hcompany.ai/settings/api-keys](https://platform.hcompany.ai/settings/api-keys) and export it:

```bash
export HAI_API_KEY=hk-...
```

## Quickstart

Launch the built-in `h/web-surfer-pro` agent, which ships with its own browser, and describe the task in plain language. `run_session` polls until the agent finishes and returns the final answer.

```python
from hai_agents import Client

client = Client()

result = client.run_session(
    agent="h/web-surfer-pro",
    messages="What are the top 3…
