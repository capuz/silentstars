---
repo: "AnthonySmith96/open-guardian"
name: "open-guardian"
description: "Stopping smart agents from doing stupid things."
readmeQualityOk: true
url: "https://github.com/AnthonySmith96/open-guardian"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 77
forks: 12
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 5
createdAt: "2026-02-12T22:07:31Z"
lastCommitAt: "2026-08-23T04:08:08Z"
lastReleaseAt: "2026-08-23T02:48:23Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 65
undervaluedScore: 31
maintainers: ["AnthonySmith96"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcbdb8931054db10befa57b13b8825ccd9ab99c00c601162f5288c0a7e333beb/AnthonySmith96/open-guardian"
---

# Open-Guardian

**Local data protection for AI agents.** Open-Guardian is a self-hosted guard
with three surfaces:

1. **Egress proxy** — sits between your agents (coding agents, chat clients,
   agent frameworks — anything that speaks the OpenAI HTTP API) and their
   model providers. Secrets and sensitive data never leave your machine in a
   request, and provider credentials are never seen by the model.
2. **Action Broker** (v0.5) — allowlisted privileged actions over MCP/CLI
   behind signed policies and human approval; the agent uses credentials
   without ever seeing them.
3. **Context DLP** (v0.6) — tool output sanitized before it enters the
   model's context.

Point any OpenAI-compatible client at the proxy:

```text
Agent / harness / chat client
        |  base_url = http://127.0.0.1:8080/v1
        v
Open-Guardian  ─── DLP: detect → redact → (restore locally)
        |  model alias routing + brokered credentials
        +--> local Ollama / vLLM (default)
        `--> explicit external route (Groq, OpenAI, ...)

  open-guardian broker start    privileged actions, human approval (v0.5)
  open-guardian mcp-gateway ... tool results sanitized in flight (v0.6)
```

## The…
