---
repo: "zenml-io/kitaru"
name: "kitaru"
description: "Agent traces you can run, not just read."
readmeQualityOk: true
url: "https://github.com/zenml-io/kitaru"
homepage: "https://kitaru.ai"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["ai-agents", "checkpoints", "durable-execution", "llm", "mcp", "mlops", "observability", "pydantic", "pydantic-ai", "python"]
stars: 298
forks: 25
openIssues: 30
closedIssues: 248
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2026-03-05T14:04:26Z"
lastCommitAt: "2026-09-29T10:04:57Z"
lastReleaseAt: "2026-04-11T15:37:55Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 29
maintainers: ["strickvl", "dependabot[bot]", "znegrin"]
openGraphImageUrl: "https://opengraph.githubassets.com/40096859969eebc097f61a7ad8da00b10acfb9e1c6e2b1781608e81490f7dbf1/zenml-io/kitaru"
discussionCount: 2
---

</a>
</p>

<h3 align="center">Traces you can run, not just read.</h3>

  Kitaru (来る, "to arrive") gives you replay-based evals for AI agents. Record or import production runs as sessions, replay them against your next model, prompt, or code change, and see what improved and what broke before you ship. Open source, self-hosted, Python and TypeScript. From the team behind <a href="https://zenml.io">ZenML</a>.
</p>

</p>

</p>

  </a>
</p>

---

## 🎯 Why

Your agent has already been tested thousands of times in production. Most of that evidence is sitting in a trace store as something you can read but not run. Then you change a prompt, swap a model, or refactor a tool, and the first strong signal comes from a user who found the regression.

Kitaru turns that history into something you can test:

- **Every run becomes a session.** Wrap your agent once, or import the traces you already collect from Langfuse, LangSmith, Braintrust, Logfire, or Arize Phoenix. Your trace store stays your system of record.
- **Replay re-executes your code.** Your real agent runs again, with tool calls answered from the recording, so no card gets refunded twice. An unchanged replay gives you the faithful…
