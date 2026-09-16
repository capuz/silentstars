---
repo: "martian56/redcell"
name: "redcell"
description: "AI red-team platform. Autonomous LLM agents run a penetration test end to end inside a Kali container and write the report. LangGraph plan/act engine, provider-agnostic models via LiteLLM, PDF/JSON/SARIF output. FastAPI + React."
readmeQualityOk: true
url: "https://github.com/martian56/redcell"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [53, 40]
topics: ["ai-agents", "autonomous-agents", "cybersecurity", "fastapi", "langgraph", "litellm", "llm", "offensive-security", "penetration-testing", "pentesting"]
stars: 377
forks: 61
openIssues: 4
closedIssues: 60
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-08-02T10:49:51Z"
lastCommitAt: "2026-09-16T08:49:13Z"
lastReleaseAt: "2026-09-04T22:25:04Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 30
maintainers: ["martian56"]
openGraphImageUrl: "https://opengraph.githubassets.com/05e7c15b4e4072611bf29cb1935273299ae0833e6a7c8afb074ec7c90e5befe5/martian56/redcell"
discussionCount: 2
---

</p>

  <b>AI agents that run a penetration test end to end and write the report.</b>
</p>

</p>

</p>

> [!WARNING]
> REDCELL is provided for education, research, and legal, authorized security testing only. Use it only to test systems you own or have explicit written permission to test, and only within an agreed scope. Unauthorized access to or interference with computer systems is a crime in Azerbaijan (Criminal Code articles 271 to 273) and under the laws of most other countries. How you use it, and staying within the law, is entirely your responsibility.

---

## What it is

REDCELL runs a team of LLM agents through a pentest. An orchestrator plans the engagement and hands objectives to executor agents, which run real tools inside a Kali container and report back. You watch and steer the run from an operator console: a chat that drives the orchestrator, a live agent graph and activity feed, a live view of the browser the agent drives, a terminal on any reverse shell the agent catches, and a report to hand over when the work is done.

Models are pluggable through LiteLLM, so you can point it at OpenAI, Anthropic, Google, GLM, DeepSeek, Kimi, a local Ollama, or anything else it…
