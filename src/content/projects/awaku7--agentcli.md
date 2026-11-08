---
repo: "awaku7/agentcli"
name: "agentcli"
description: "LLM agent running on your local PC, Compatible with various LLM models. Can do anything."
readmeQualityOk: true
url: "https://github.com/awaku7/agentcli"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["agentic-ai", "chatcompletion-api", "claude", "gemini", "openai", "openrouter", "responses-api", "xai", "azure", "gemini-api"]
stars: 12
forks: 2
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-11T04:21:24Z"
lastCommitAt: "2026-11-08T10:42:16Z"
lastReleaseAt: "2026-03-05T12:54:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 57
maintainers: ["awaku7"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d91972b90d61b685b76328f458978e27e19e70126c79ced087bdb2020f53366/awaku7/agentcli"
discussionCount: 1
---

Your AI models. Your tools. Your environment.

---

**UAG is an open-source, local-first AI agent runtime** that connects the language model
you choose to the tools and systems you use. Work with code, files, browsers,
services, and devices from a consistent interface—without tying your workflows
to a single model provider.

| **Bring your model** | **Connect real tools** | **Stay in control** |
| :--- | :--- | :--- |
| Hosted and local models, including OpenAI, Claude, Gemini, Grok, Bedrock, and Ollama. | Files, code, web, MCP, Agent Skills, plugins, cloud services, and IoT. | Local execution, human confirmation, credential storage, and configurable policies. |

> UAG is the agent execution layer, **not** a model provider. External model
> requests and connected-service calls depend on your configuration; local-first
> does not mean entirely offline or isolated by default.

## Quick start

Requires **Python 3.11+**. Install from [PyPI](https://pypi.org/project/uag/)
and launch the interactive CLI:

~~~bash
python -m pip install --upgrade uag
uag
~~~

On first launch, the setup wizard helps you choose a provider and configure its
credentials. You can also configure providers…
