---
repo: "EVEDensity/AgentHub"
name: "AgentHub"
description: "Production-ready multi-agent platform delivering orchestration, session governance and audit capabilities. Stack: Go/Python/Rust microservices, multi-type data storage, Next.js admin UI, automated CI/CD pipelines, AI code review triggered via PR comment mentions."
readmeQualityOk: true
url: "https://github.com/EVEDensity/AgentHub"
language: "TypeScript"
languages: ["TypeScript", "Python", "JavaScript"]
languagePcts: [30, 27, 22]
topics: ["agent", "ai", "ai-agents", "claude-code", "codex", "docker", "fastapi", "go", "graphrag", "langgraph"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2026-05-19T10:18:40Z"
lastCommitAt: "2026-08-08T04:35:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 44
maintainers: ["Nat-xu", "EVEDensity"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb3a7b8b76b77d4d6184ade7c3478a2abf8648d6dc0e511f7eef060304898ad1/EVEDensity/AgentHub"
discussionCount: 4
---

</p>

<h3 align="center">AgentHub</h3>

  Build AI agent <b>teams</b>, not chatbots.<br>
  Self-hosted. Multi-agent. Observable.
</p>

</p>

</p>

---

## What is this?

AgentHub lets you spin up a team of AI agents that actually work together — Router figures out what needs doing, Executor does it, Critic checks the work, Summarizer ties it all up. Not a single-agent-with-tools trick. A real team.

Each agent runs through an 11-state ReAct loop that you can watch in real time. Everything streams. Everything logs. Everything's on your hardware.

## Why?

Most AI platforms wrap an LLM in a chat box and call it an agent. Then you spend weeks wiring together "multi-agent" flows that break the moment something unexpected happens.

AgentHub gives you the full loop out of the box — orchestration, IAM, sandbox execution, search, observability. You bring a model key. It brings the rest.

## Quick start

```bash
git clone https://github.com/EVEDensity/AgentHub.git
cd AgentHub
start.bat
```

That's it. PostgreSQL spins up via Docker, the backend starts, the frontend opens. No API key needed — the built-in mock provider lets you kick the tires offline.

Want your own model?

```bash
export…
