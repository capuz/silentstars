---
repo: "masondelan/selvedge"
name: "selvedge"
description: "Persistent decision memory for AI agents: rationale, rejected approaches, and entity history. Connect any compatible agent through local MCP or the CLI."
readmeQualityOk: true
url: "https://github.com/masondelan/selvedge"
homepage: "https://selvedge.sh"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-memory", "agent-trace", "ai-agent-reasoning", "ai-agents", "ai-code-provenance", "ai-codebase-memory", "ai-coding", "codebase-change-tracking", "decision-memory", "developer-tools"]
stars: 26
forks: 1
openIssues: 3
closedIssues: 10
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-22T03:34:11Z"
lastCommitAt: "2026-11-01T05:13:11Z"
lastReleaseAt: "2026-06-17T03:54:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 45
maintainers: ["masondelan", "dependabot[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7bd21f6b8ac9fa1ba2a1d0d736102f818b4936ff9c509195550cc8092dd1b27/masondelan/selvedge"
discussionCount: 4
promoted: true
---

&nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

**Persistent decision memory for AI agents.**

Save why you chose an approach, what you rejected, and what would change your
mind. Retrieve that context in the next coding session, using a function,
database column, API route or dependency as the lookup key.

Selvedge is for anyone using a compatible agent. Connect through local MCP
over stdio, or use the CLI from an agent with shell access. Decisions stay in
the same SQLite store in `.selvedge/` when you switch tools.
No hosted account is required; core storage and retrieval make no LLM calls.

[**Get started**](#quickstart) · [Documentation](https://selvedge.sh/start/what-is-selvedge/) · [Agent compatibility](https://selvedge.sh/reference/compatibility/)

```bash
uv tool install --upgrade selvedge
selvedge demo
```

Requires [uv](https://docs.astral.sh/uv/getting-started/installation/) and Python.
Python 3.11–3.14 is recommended; Python 3.10 remains compatible but is end of life.
The demo uses a temporary database. Follow the [quickstart](#quickstart)
to connect your agent to a real project.

Use `selvedge demo --mcp` to save through a local stdio MCP server, restart it
and retrieve…
