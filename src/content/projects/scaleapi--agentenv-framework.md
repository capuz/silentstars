---
repo: "scaleapi/agentenv-framework"
name: "agentenv-framework"
description: "Creating realistic RL environments requires collaboration between researchers, engineers, and domain experts across many dimensions: artifacts, environments tools, dynamism of the environment, reproducibility, and more. There is no open source framework for building these environments effectively. Until now."
readmeQualityOk: true
url: "https://github.com/scaleapi/agentenv-framework"
homepage: "https://www.agentenvframework.com"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["a2a", "agent-evaluation", "agentic-ai", "ai-agents", "llm-agents", "llm-evaluation", "mcp", "model-context-protocol", "python", "reinforcement-learning"]
stars: 353
forks: 33
openIssues: 8
closedIssues: 9
watchers: 1
contributors: 78
recentReleases: 10
createdAt: "2026-09-24T18:52:20Z"
lastCommitAt: "2026-10-21T23:36:29Z"
lastReleaseAt: "2026-10-06T17:07:42Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 88
undervaluedScore: 28
maintainers: ["earakely-scale", "AlexS-scale", "psinghal20"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1386191888/4e2525ca-0fe7-4e77-b011-862771de7763"
discussionCount: 1
---

AgentEnv Framework is a Python SDK and CLI for building, deploying and running agentic environments and the tasks that grade agents inside them. Environments are containerized servers that speak the open `agentenv-framework-protocol`; AgentEnv Framework builds them into versioned images, deploys them behind a gateway, points an agent at them, and scores what the agent did.

**Documentation: [www.agentenvframework.com/docs](https://www.agentenvframework.com/docs)** covers environments, artifacts, agents, tasks, the registry and plugins.

## Install

Both packages are on PyPI. You need Python 3.11.4 or newer and, to run environments locally, a running Docker daemon. With [uv](https://docs.astral.sh/uv/), install the `agent-env` command as a tool:

```bash
uv tool install agentenv-framework
agent-env run hello
```

`agent-env run hello` runs the built-in hello task, which needs no Docker, model or configuration. To try it without installing anything, run it with uvx:

```bash
uvx --from agentenv-framework agent-env run hello
```

Or install it with pip, into a virtualenv:

```bash
pip install agentenv-framework
```

To use the SDK in your own project, add it as a dependency with `uv…
