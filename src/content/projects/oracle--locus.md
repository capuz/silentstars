---
repo: "oracle/locus"
name: "locus"
description: "Oracle Generative AI Agentic Harness. Multi-agent reasoning orchestrator SDK with an admission gate in front of every consequential action, first-class on OCI Generative AI and Oracle Database 26ai."
readmeQualityOk: true
url: "https://github.com/oracle/locus"
homepage: "https://locusagents.ai/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-framework", "agentic-ai", "agents", "llm-orchestration", "multi-agent", "oci-genai", "oracle", "python-sdk", "agentic-harness", "oracle-database"]
stars: 5
forks: 2
openIssues: 7
closedIssues: 51
watchers: 1
contributors: 1475
recentReleases: 8
createdAt: "2026-04-27T13:06:19Z"
lastCommitAt: "2026-11-02T15:17:07Z"
lastReleaseAt: "2026-11-02T15:17:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 72
maintainers: ["fede-kamel"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1222531301/a64682bc-ebd5-479d-9abb-d5e9bd59ddc0"
---

around the code an agent writes, an OCI GenAI Sandbox in your tenancy.</strong><br>
  orchestrator, swarm, handoff, graphs, debate, A2A. OCI Generative AI on day 0, Dedicated AI Clusters, Oracle Database 26ai.</em>

---

## Your first agent

```bash
pip install "locus-sdk[oci,oracledb]"
export OCI_PROFILE=DEFAULT   # a profile in ~/.oci/config with Generative AI access
```

```python
from locus.agent import Agent

agent = Agent(model="oci:openai.gpt-5.5")
print(agent.run_sync("What is the capital of France?").text)
# → Paris
```

Locus runs on Python 3.11 to 3.14. Swap `oci:openai.gpt-5.5` for `openai:gpt-5.5`,
`anthropic:claude-sonnet-5-5` or `openrouter:x-ai/grok-4.7`, each reading its key from the
environment; the call stays the same. With an OCI profile in `~/.oci/config`, the notebooks in
`examples/` run against OCI Generative AI with no further setup.

→ [Quickstart](https://locusagents.ai/how-to/quickstart/) ·
[Notebook 02 — Basic agent](https://locusagents.ai/notebooks/notebook_02_basic_agent/) ·
[Notebook 03 — Agent with tools](https://locusagents.ai/notebooks/notebook_03_agent_with_tools/)

---

## One `Agent`, every shape

Every shape runs the same `Agent`, emits the…
