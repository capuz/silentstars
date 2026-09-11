---
repo: "Zizka-ai/ZizkaDB"
name: "ZizkaDB"
description: "Self-hosted DB for AI agents. Prove why an agent did something ,  causal lineage (why()), time-travel state (at()), drift baselines. AGPL. LangChain/CrewAI/MCP."
readmeQualityOk: true
url: "https://github.com/Zizka-ai/ZizkaDB"
homepage: "https://db.zizka.ai"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [48, 48]
topics: ["ai-agents", "agent-observability", "audit-log", "causal-discovery", "crewai-tools", "euaiactcompliance", "gdpr", "langchian", "lineage", "llm"]
stars: 49
forks: 20
openIssues: 13
closedIssues: 22
watchers: 2
contributors: 14
recentReleases: 4
createdAt: "2026-05-10T01:21:37Z"
lastCommitAt: "2026-09-11T08:14:19Z"
lastReleaseAt: "2026-09-02T16:33:57Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 45
maintainers: ["saadamjad", "Zizka-ai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1234280457/e968b764-3afe-42f3-9a86-4816a3aaf79b"
discussionCount: 1
---

# ZizkaDB

**When your agent misbehaves, see why.**

Self-hosted audit trail for AI agents — one command or one dashboard click from any step back to root cause.

**[Try it ↓](#try-it-60-seconds)** · **[DEVELOPMENT.md](https://github.com/Zizka-ai/ZizkaDB/blob/HEAD/DEVELOPMENT.md)** · **[CONNECT.md](https://github.com/Zizka-ai/ZizkaDB/blob/HEAD/CONNECT.md)** · **[Contributing](https://github.com/Zizka-ai/ZizkaDB/blob/HEAD/CONTRIBUTING.md)**

</div>

</p>

## Try it (60 seconds)

Requires [Docker](https://docs.docker.com/get-docker/). First image pull may take 5–10 minutes.

```bash
curl -fsSL https://raw.githubusercontent.com/Zizka-ai/ZizkaDB/main/scripts/quickstart-remote.sh | bash
```

You should see:

```text
tool_call · lookup_order · ORD-8842
  └── llm_response · gpt-4o
        └── user_message · Why was my order delayed?
```

Run again anytime: `pip install zizkadb-sdk && zizkadb demo`

### Self-host from a clone

```bash
git clone https://github.com/Zizka-ai/ZizkaDB.git && cd ZizkaDB
bash scripts/setup-local.sh
```

| Service | URL |
|---------|-----|
| API | http://localhost:8000 |
| Dashboard | http://localhost:3001/login |
| Swagger | http://localhost:8000/swagger |

Full…
