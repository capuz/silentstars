---
repo: "SponsioLabs/Sponsio"
name: "Sponsio"
description: "Deterministic safety solutions for probabilistic AI agents"
readmeQualityOk: true
url: "https://github.com/SponsioLabs/Sponsio"
homepage: "https://sponsio.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["agent-guardrails", "agent-harness", "agent-runtime", "agent-safety", "agent-security", "agent-skills", "agentic-ai", "ai-agents", "ai-security", "deterministic"]
stars: 445
forks: 28
openIssues: 0
closedIssues: 3
watchers: 19
contributors: 5
recentReleases: 7
createdAt: "2026-04-04T18:05:47Z"
lastCommitAt: "2026-08-13T05:17:08Z"
lastReleaseAt: "2026-08-13T03:13:59Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 30
maintainers: ["yfxiao16", "dependabot[bot]", "JohnnaJLiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d9cb4aaaff0181581bb9776b373abd8fc673fd110501cf397daa1955f71caa2/SponsioLabs/Sponsio"
---

<b>English</b> ·
</p>

</p>

</p>

# Sponsio

</p>
Sponsio provides deterministic contracts for agent procedures over time, enforced in under 0.01 ms with zero LLM cost at runtime. Works with LangChain, Claude Agent, OpenAI Agents, Google ADK, CrewAI, Vercel AI, MCP, or any custom tool-calling loop, in Python or TypeScript.

> An **agent contract** is a runtime rule that is checked at every agent action, [backed by formal methods](https://github.com/SponsioLabs/Sponsio/blob/HEAD/docs/concepts/formal-methods.md).

> **v0.2.0a3 alpha is out.** `pip install --pre sponsio==0.2.0a3`. Closes a `redirect_to_safe` fail-open bug in non-LangGraph adapters (the unsafe call was running anyway), brings TS `Eq` semantics to Python parity for composite values, and adds Cloudflare Workers compatibility. **Upgrade recommended if you are on 0.2.0a2.** See the [v0.2.0a3 release notes](https://github.com/SponsioLabs/Sponsio/blob/HEAD/docs/release-notes/v0.2.0a3.md).

---

## How Sponsio works

</p>

On [ODCV-Bench](https://github.com/McGill-DMaS/ODCV-Bench) (12 frontier LLMs × 80 trajectories), unguarded models cheat in 11.5%–66.7% of runs. **With Sponsio, 95.6% of misalignment is avoided on average;…
