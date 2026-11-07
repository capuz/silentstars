---
repo: "jlcoto/the_honest_agent"
name: "the_honest_agent"
description: "Open-source evals for agentic analytics: test your AI analytics agent's accuracy and provenance over its own MCP server."
readmeQualityOk: true
url: "https://github.com/jlcoto/the_honest_agent"
homepage: "https://thehonestagent.dev"
language: "Python"
languages: ["Python"]
languagePcts: [56]
topics: ["agent-evaluation", "agentic-analytics", "ai-agents", "duckdb", "evals", "llm-evaluation", "mcp", "motherduck", "snowflake", "text-to-sql"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-09-18T14:46:31Z"
lastCommitAt: "2026-11-07T13:55:11Z"
lastReleaseAt: "2026-10-28T11:47:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["jlcoto", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/280af832cfa9d49809d245dd908e3cbbc3732e7777c3aadf0e7a35ed4b5177e7/jlcoto/the_honest_agent"
---

# The Honest Agent (`honest-agent`)

Your analytics agent can give a confident answer from the wrong table.
`honest-agent` asks it questions you know the answers to, through the agent's own MCP
server, and checks each answer for two things:

- **accuracy**: is the answer right?
- **provenance**: did the agent's SQL read the tables it should?

> **Alpha (v0.5.0): expect breaking changes between versions.** Each release's notes in
> [CHANGELOG.md](https://github.com/jlcoto/the_honest_agent/blob/HEAD/CHANGELOG.md) say what changed and what to do.

## What it does

- **Tests your real agent.** It runs Claude or GPT with the tools your agent's MCP server
  offers (Snowflake, MotherDuck or your own), not a copy of them.
  [Connect your agent](https://thehonestagent.dev/docs/connect/)
- **Grades every answer** against your thresholds, by matching text, extracting a number, or
  an LLM judge. [Writing evals](https://thehonestagent.dev/docs/writing-evals/)
- **Keeps every run** in a DuckDB file (local or in S3) or MotherDuck, with what each call sent and received.
  [Storing results](https://thehonestagent.dev/docs/storing-results/)
- **Builds a report** you can host for your team.
  [The…
