---
repo: "apowerb/apowerb-ui"
name: "apowerb-ui"
description: "The official web interface for apowerb — build an agent, give it tools and knowledge, run it, and watch what it did."
readmeQualityOk: true
url: "https://github.com/apowerb/apowerb-ui"
homepage: "https://docs.apowerb.com/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["agentic-ai", "agentic-workflow", "agent-framework", "ai-agents", "nextjs", "react", "tailwindcss", "typescript"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-31T08:44:17Z"
lastCommitAt: "2026-11-17T12:20:05Z"
lastReleaseAt: "2026-08-17T13:00:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 43
maintainers: ["dgnaglo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb90a1b84e32d6617b4c3c8f3086e926380881a7a99bc2da59c0b6a59070c071/apowerb/apowerb-ui"
---

# apowerb-ui

**The official web interface for apowerb — build an agent, give it tools and knowledge, run it, and watch what it did.**

---

The web interface for [**apowerb**](https://github.com/apowerb/apowerb) — build an agent,
give it tools and knowledge, run it, and watch what it did.

apowerb is an agentic framework: a REST API that stores agents, builds them on Google ADK
and runs them. This repository is the front end that makes it usable by someone who is not
going to write `curl` calls — the Studio. It talks to an apowerb instance over HTTP and
holds no business logic of its own.

Built with Next.js 16 (App Router), React 19 and Tailwind. Documentation:
[docs.apowerb.com](https://docs.apowerb.com).

## How it fits together

```mermaid
flowchart LR
    U["Browser"] --> UI["apowerb-ui<br/>Next.js"]
    UI -->|"REST · NEXT_PUBLIC_API_URL"| API["apowerb<br/>FastAPI + Google ADK"]
    UI -->|"traces · PULSE_API_URL"| P["th2pulse<br/>observability"]
    API --> DB[("PostgreSQL")]
    API --> LLM["LLM providers<br/>via LiteLLM"]
    API --> RAG["th2rag<br/>retrieval"]
    API --> ORC["th2etl<br/>scheduled runs"]
```

The interface never reaches the database or an LLM directly.…
